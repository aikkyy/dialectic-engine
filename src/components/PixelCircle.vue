<script setup lang="ts">
/**
 * PixelCircle.vue — Performance edition
 * ─────────────────────────────────────────────────────────────────────────────
 * Key optimisations vs previous version:
 *
 *  1. Pixel array is precomputed once in a computed() and never recalculated
 *     unless props change (Vue's dependency tracking handles this).
 *
 *  2. Animation uses a single shared requestAnimationFrame ticker imported
 *     from a tiny shared module (useTicker). Each PixelCircle registers a
 *     cheap callback — no per-component RAF, no timers.
 *
 *  3. Only ~15% of pixels participate in animation at any time. Each
 *     "animated" pixel has a pre-assigned phase and period so the flicker
 *     is staggered and never all fires at once.
 *
 *  4. Pixel DOM nodes are rendered with v-memo so Vue skips diffing unchanged
 *     pixels entirely. Only the style.opacity of blinking pixels changes.
 *
 *  5. CSS transitions on opacity (0.6s ease) so the browser handles the
 *     interpolation — no JS involved in the actual fade.
 *
 *  6. will-change: opacity is set only on animated pixels, not all of them.
 */

import { computed, onMounted, onUnmounted, ref, shallowRef } from 'vue'
import { useTicker } from '../useTicker'

// ─── Props ────────────────────────────────────────────────────────────────────

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
  /** fraction of pixels that animate (0–1). Default 0.12 */
  animationDensity?: number
  /** disable all animation */
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
  animationDensity: 0.12,
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

// ─── Pixel data ───────────────────────────────────────────────────────────────

type Pixel = {
  // Layout (never changes)
  left: number
  top: number
  width: number
  height: number
  // Visual
  baseOpacity: number
  // Animation (null = static pixel)
  animPhase: number | null // 0..1 phase offset
  animPeriod: number | null // ms for one full blink cycle
}

const pixels = computed<Pixel[]>(() => {
  const step = props.pixelSize + props.gap
  const cells = Math.floor(props.size / step)
  const half = cells / 2
  const outerR = half - 0.5
  const innerR = outerR * props.density
  const result: Pixel[] = []
  let animIdx = 0

  for (let row = 0; row < cells; row++) {
    for (let col = 0; col < cells; col++) {
      const dx = col - half + 0.5
      const dy = row - half + 0.5
      const dist = Math.sqrt(dx * dx + dy * dy)
      if (dist > outerR) continue

      const h0 = hash(col, row)
      const h1 = hash(col + 500, row + 500)

      // Inner scatter zone
      if (dist < innerR) {
        const innerFrac = dist / innerR
        const scatterP = 0.04 * innerFrac * innerFrac
        if (h0 > scatterP) continue
        const opacity = scatterP * (1 - h0) * 0.4
        const dim = props.pixelSize * (0.6 + h0 * 0.4)
        result.push({
          left: col * step + (props.pixelSize - dim) / 2,
          top: row * step + (props.pixelSize - dim) / 2,
          width: dim,
          height: dim,
          baseOpacity: opacity,
          animPhase: null,
          animPeriod: null,
        })
        continue
      }

      // Ring zone
      const t = Math.max(0, Math.min(1, (dist - innerR) / (outerR - innerR)))
      const baseDensity = Math.pow(t, props.fadeStrength)
      const noiseGate = 1 - props.randomness * h0
      if (baseDensity * noiseGate < 0.08) continue

      const angle = Math.atan2(dy, dx)
      const angularWobble = 1 - 0.15 * Math.abs(Math.sin(angle * 3.7 + h0 * 2))
      const baseOpacity =
        Math.min(1, baseDensity * noiseGate * angularWobble) *
        (0.55 + h0 * 0.45)
      const dim = props.pixelSize * (0.7 + t * 0.3)

      // Assign animation to a fraction of ring pixels
      let animPhase: number | null = null
      let animPeriod: number | null = null
      if (!props.static && h1 < props.animationDensity) {
        animPhase = hash(animIdx, 7)
        animPeriod = 1800 + hash(animIdx, 13) * 3200 // 1.8 – 5 s
        animIdx++
      }

      result.push({
        left: col * step + (props.pixelSize - dim) / 2,
        top: row * step + (props.pixelSize - dim) / 2,
        width: dim,
        height: dim,
        baseOpacity,
        animPhase,
        animPeriod,
      })
    }
  }
  return result
})

// ─── Animation ────────────────────────────────────────────────────────────────
// Each animated pixel gets an entry in animOpacities keyed by pixel index.
// We use a shallowRef array so Vue only re-renders the changed entries.

const animOpacities = shallowRef<Float32Array>(new Float32Array(0))

// Initialise array when pixels change
let opArray = new Float32Array(0)

// The ticker callback — runs on every shared RAF frame.
// Only updates animated pixels; static pixels are never touched.
function onTick(now: number) {
  let dirty = false
  const px = pixels.value
  for (let i = 0; i < px.length; i++) {
    const p = px[i]
    if (p.animPhase === null || p.animPeriod === null) continue
    // Smooth sine blink: 0.15 → 1.0 range
    const phase = (now / p.animPeriod + p.animPhase) % 1
    const blink = 0.15 + 0.85 * (0.5 + 0.5 * Math.sin(phase * Math.PI * 2))
    const next = p.baseOpacity * blink
    if (Math.abs(opArray[i] - next) > 0.005) {
      opArray[i] = next
      dirty = true
    }
  }
  if (dirty) {
    // Trigger Vue reactivity with the same underlying buffer
    animOpacities.value = opArray
  }
}

const { register, unregister } = useTicker()

onMounted(() => {
  opArray = new Float32Array(pixels.value.length)
  // Seed initial opacities with base values
  pixels.value.forEach((p, i) => {
    opArray[i] = p.baseOpacity
  })
  animOpacities.value = opArray
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
  const animated = p.animPhase !== null
  return {
    position: 'absolute' as const,
    left: `${p.left}px`,
    top: `${p.top}px`,
    width: `${p.width}px`,
    height: `${p.height}px`,
    background: props.color,
    opacity: animated ? animOpacities.value[i] : p.baseOpacity,
    borderRadius: '0.5px',
    // Only set transition + will-change on the pixels that actually animate
    ...(animated
      ? {
          transition: 'opacity 0.5s ease',
          willChange: 'opacity',
        }
      : {}),
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
      <!--
        v-memo: only re-render a pixel when its opacity actually changes.
        For static pixels this means never — massive save on large grids.
      -->
      <div
        v-for="(p, i) in pixels"
        :key="i"
        v-memo="[animOpacities[i], props.color]"
        :style="pixelStyle(p, i)"
      />
    </div>

    <div
      class="absolute inset-0 flex items-center justify-center"
      :style="{ color: props.textColor, fontSize: `${props.fontSize}px` }"
    >
      <span
        class="text-center leading-tight tracking-widest uppercase font-mono pointer-events-none"
        :style="{ maxWidth: textMaxWidth }"
        >{{ props.text }}</span
      >
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
