<script setup lang="ts">
/**
 * PixelCircle.vue – Fully animated per-pixel
 * ─────────────────────────────────────────────────────────────────────────────
 * Every pixel has its own animation behaviour:
 * • Intensity (0 = static, 1 = full sparkle)
 * • Waveform (sine / triangle / pulse)
 * • Period (1.2s – 7.2s)
 * • Phase offset
 *
 * Props.animationDensity globally scales all animations (0 = off, 1 = max).
 * All pixels animate, but low‑intensity pixels change very subtly.
 */

import { computed, onMounted, onUnmounted, ref, shallowRef, watch } from 'vue'
import { useTicker } from '../useTicker'

export type PixelCircleProps = {
  text?: string
  size?: number
  pixelSize?: number
  gap?: number
  density?: number
  color?: string
  textColor?: string
  fontSize?: number
  fadeStrength?: number
  randomness?: number
  clickable?: boolean
  zIndex?: number
  className?: string
  /** Controls what percentage of pixels will animate (0–1). Default 0.55 (55%) */
  animationDensity?: number
  /** Disable all animation */
  static?: boolean
}

const props = withDefaults(defineProps<PixelCircleProps>(), {
  text: '',
  size: 240,
  pixelSize: 3,
  gap: 3,
  density: 0.58,
  color: '#ffffff',
  textColor: '#ffffff',
  fontSize: 12,
  fadeStrength: 2.2,
  randomness: 0.72,
  clickable: false,
  zIndex: 0,
  className: '',
  animationDensity: 0.55,
  static: false,
})

const emit = defineEmits<{ click: [e: MouseEvent] }>()

// ─── Deterministic hash ───────────────────────────────────────────────────────
function hash(a: number, b = 0): number {
  let h = a * 374761393 + b * 1234567891
  h = ((h ^ (h >>> 13)) * 1274126177) | 0
  h = h ^ (h >>> 16)
  return (h >>> 0) / 0xffffffff
}

// ─── Pixel data (now with per‑pixel animation parameters) ────────────────────
type Pixel = {
  left: number
  top: number
  width: number
  height: number
  baseOpacity: number
  // Animation properties (always present, intensity may be zero)
  animIntensity: number // 0 … 1 (scaled by props.animationDensity)
  animPeriod: number // milliseconds
  animPhase: number // 0 … 1
  animWave: 0 | 1 | 2 // 0=sine, 1=triangle, 2=pulse (sin²)
}

// Pre‑compute pixels once when props change
const pixels = computed<Pixel[]>(() => {
  const step = props.pixelSize + props.gap
  const cells = Math.floor(props.size / step)
  const half = cells / 2
  const outerR = half - 0.5
  const innerR = outerR * props.density
  const result: Pixel[] = []
  let pixelId = 0

  for (let row = 0; row < cells; row++) {
    for (let col = 0; col < cells; col++) {
      const dx = col - half + 0.5
      const dy = row - half + 0.5
      const dist = Math.sqrt(dx * dx + dy * dy)
      if (dist > outerR) continue

      const h0 = hash(col, row)
      const h1 = hash(col + 500, row + 500)
      const h2 = hash(col + 1000, row + 1000)

      // ---------- Determine if pixel exists (same logic as before) ----------
      let baseOpacity = 0
      let width = props.pixelSize
      let height = props.pixelSize
      let left = col * step
      let top = row * step

      // Inner scatter zone (low density fill)
      if (dist < innerR) {
        const innerFrac = dist / innerR
        const scatterP = 0.04 * innerFrac * innerFrac
        if (h0 > scatterP) continue
        baseOpacity = scatterP * (1 - h0) * 0.4
        const dim = props.pixelSize * (0.6 + h0 * 0.4)
        left += (props.pixelSize - dim) / 2
        top += (props.pixelSize - dim) / 2
        width = dim
        height = dim
      } else {
        // Ring zone
        const t = Math.max(0, Math.min(1, (dist - innerR) / (outerR - innerR)))
        const baseDensity = Math.pow(t, props.fadeStrength)
        const noiseGate = 1 - props.randomness * h0
        if (baseDensity * noiseGate < 0.08) continue

        const angle = Math.atan2(dy, dx)
        const angularWobble =
          1 - 0.15 * Math.abs(Math.sin(angle * 3.7 + h0 * 2))
        baseOpacity =
          Math.min(1, baseDensity * noiseGate * angularWobble) *
          (0.55 + h0 * 0.45)
        const dim = props.pixelSize * (0.7 + t * 0.3)
        left += (props.pixelSize - dim) / 2
        top += (props.pixelSize - dim) / 2
        width = dim
        height = dim
      }

      // ---------- Per‑pixel animation parameters (always computed) ----------
      let animIntensity = 0
      let animPeriod = 2000
      let animPhase = 0
      let animWave: 0 | 1 | 2 = 0

      if (!props.static) {
        // Use a threshold to decide IF this pixel animates at all
        const isAnimatedPixel = hash(pixelId, 88) < props.animationDensity

        if (isAnimatedPixel) {
          // Raw random intensity for the ones that do animate
          const rawIntensity = hash(pixelId, 17)
          animIntensity = 0.4 + rawIntensity * 0.6 // Stronger blink/fade for active pixels

          // Period: 1.2s … 7.2s (shorter = more energetic)
          animPeriod = 1200 + rawIntensity * 6000

          // Phase: 0 … 1, completely random
          animPhase = hash(pixelId, 42)

          // Waveform type based on another hash
          const w = Math.floor(hash(pixelId, 99) * 3)
          animWave = w === 0 ? 0 : w === 1 ? 1 : 2
        }
      }

      result.push({
        left,
        top,
        width,
        height,
        baseOpacity,
        animIntensity,
        animPeriod,
        animPhase,
        animWave,
      })
      pixelId++
    }
  }
  return result
})

// ─── Animation state ──────────────────────────────────────────────────────────
// Current opacity for each pixel (updated every frame by ticker)
const animOpacities = shallowRef<Float32Array>(new Float32Array(0))
let opArray = new Float32Array(0)

// Helper: compute blink factor (0 … 1) based on waveform, time, period and phase
function getBlinkFactor(
  now: number,
  period: number,
  phase: number,
  wave: number,
): number {
  const t = (now / period + phase) % 1
  switch (wave) {
    case 0: // sine
      return 0.5 + 0.5 * Math.sin(t * Math.PI * 2)
    case 1: // triangle
      return t < 0.5 ? t * 2 : 2 - t * 2
    case 2: // pulse (sin², sharp rise / soft fall)
      const sinVal = Math.sin(t * Math.PI)
      return sinVal * sinVal
    default:
      return t
  }
}

// Shared ticker callback – updates every pixel that has animIntensity > 0
function onTick(now: number) {
  let dirty = false
  const px = pixels.value
  for (let i = 0; i < px.length; i++) {
    const p = px[i]
    if (p.animIntensity <= 0.001) continue

    const blink = getBlinkFactor(now, p.animPeriod, p.animPhase, p.animWave)
    // intensity controls how far opacity moves away from base:
    //   intensity = 0 → always baseOpacity
    //   intensity = 1 → ranges between baseOpacity * 0.5 and baseOpacity * 1.5
    const range = 0.5 + p.animIntensity * 1.0
    const next = p.baseOpacity * (0.5 + blink * range)

    if (Math.abs(opArray[i] - next) > 0.003) {
      opArray[i] = next
      dirty = true
    }
  }
  if (dirty) {
    animOpacities.value = opArray
  }
}

const { register, unregister } = useTicker()

// Watch pixels to reallocate opacity array and reseed static values
function rebuildOpacityArray() {
  const px = pixels.value
  const newArr = new Float32Array(px.length)
  for (let i = 0; i < px.length; i++) {
    // Start with base opacity (non‑animated state)
    newArr[i] = px[i].baseOpacity
  }
  opArray = newArr
  animOpacities.value = opArray
}

// Rebuild when pixels change (props change)
watch(
  pixels,
  () => {
    rebuildOpacityArray()
  },
  { immediate: false },
)

onMounted(() => {
  rebuildOpacityArray()
  if (!props.static) register(onTick)
})

onUnmounted(() => {
  unregister(onTick)
})

// ─── Styles ───────────────────────────────────────────────────────────────────
const wrapperStyle = computed(() => ({
  width: `${props.size}px`,
  height: `${props.size}px`,
  position: 'relative' as const,
  zIndex: props.zIndex,
  cursor: props.clickable ? 'pointer' : 'default',
  flexShrink: 0,
}))

const textMaxWidth = computed(() => `${props.size * props.density * 0.75}px`)

function pixelStyle(p: Pixel, i: number) {
  // We remove the CSS transition here so that JS requestAnimationFrame ticks
  // can control exact blinks/fades without CSS creating a mushy delay.
  return {
    position: 'absolute' as const,
    left: `${p.left}px`,
    top: `${p.top}px`,
    width: `${p.width}px`,
    height: `${p.height}px`,
    background: props.color,
    opacity: animOpacities.value[i],
    borderRadius: '0.5px',
    willChange: p.animIntensity > 0.01 ? 'opacity' : 'auto',
  }
}
</script>

<template>
  <div
    :style="wrapperStyle"
    :class="[
      'pixel-circle-root select-none',
      props.clickable && 'pixel-circle-clickable',
      props.className,
    ]"
    @click="(e) => emit('click', e)"
  >
    <div class="absolute inset-0" aria-hidden="true">
      <div
        v-for="(p, i) in pixels"
        :key="i"
        v-memo="[animOpacities[i], props.color]"
        :style="pixelStyle(p, i)"
      />
    </div>

    <div
      class="absolute pointer-events-none flex flex-col items-center justify-center"
      :style="{
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        color: props.textColor,
        fontSize: `${props.fontSize}px`,
        maxWidth: textMaxWidth,
        width: '100%',
      }"
    >
      <span
        class="text-center leading-tight tracking-widest uppercase font-mono"
      >
        {{ props.text }}
      </span>
    </div>
  </div>
</template>

<style scoped>
.pixel-circle-root {
  isolation: isolate;
}
.pixel-circle-clickable {
  transition: transform 0.22s ease;
}
.pixel-circle-clickable:hover {
  transform: scale(1.06);
}
.pixel-circle-clickable:active {
  transform: scale(0.96);
}
</style>
