<script setup lang="ts">
/**
 * SandCircle.vue
 * Elegant circular waveform with floating sand particles around the border.
 */

import { ref, onMounted, onUnmounted, watch } from 'vue'

interface Props {
  /** Controls circle size - set to 'full' for parent fit, or specific pixel value */
  size?: number | 'full'
  color?: string
  bgColor?: string
  lines?: string[]
}

const props = withDefaults(defineProps<Props>(), {
  size: 'full',
  color: '#ffffff',
  bgColor: 'transparent',
  lines: () => [],
})

const canvasEl = ref<HTMLCanvasElement | null>(null)
let rafId = 0
let time = 0

// Canvas internals
let canvasWidth = 0
let canvasHeight = 0
let csize = 0 // Min dimension for circle
let ctx: CanvasRenderingContext2D | null = null

// Particle system for floating sand
interface SandParticle {
  angle: number
  radius: number
  velocity: number
  offset: number
}

let sandParticles: SandParticle[] = []

// Simple PRNG
let _rng = 0xdeadbeef
const rand = () => {
  _rng ^= _rng << 13
  _rng ^= _rng >> 17
  _rng ^= _rng << 5
  return (_rng >>> 0) / 4294967296
}

// Waveform parameters - INCREASED for bigger circle
const WAVE_BASE_RADIUS = 0.48 // Increased from 0.42 (base circle radius)
const WAVE_AMPLITUDE = 0.08 // Increased from 0.06 (how far spikes extend)
const SPIKE_COUNT = 140 // Increased from 120 for smoother circle

function initSandParticles() {
  const particleCount = 1000 // Increased from 800 for better coverage
  sandParticles = []

  for (let i = 0; i < particleCount; i++) {
    sandParticles.push({
      angle: rand() * Math.PI * 2,
      radius: WAVE_BASE_RADIUS + (rand() - 0.5) * 0.15, // Increased spread
      velocity: (rand() - 0.5) * 0.003,
      offset: rand() * Math.PI * 2,
    })
  }
}

function updateSandParticles() {
  for (let p of sandParticles) {
    // Gentle wandering
    p.velocity += (rand() - 0.5) * 0.0003
    p.velocity = Math.max(-0.008, Math.min(0.008, p.velocity))
    p.radius += p.velocity

    // Soft boundary - pull back toward base radius
    const targetRadius = WAVE_BASE_RADIUS
    const pullStrength = 0.02
    p.radius += (targetRadius - p.radius) * pullStrength

    // Add subtle angle drift
    p.angle += (rand() - 0.5) * 0.01
  }
}

function getWaveformRadius(angle: number, timeMs: number): number {
  // Multiple frequencies for organic spikes
  const waveSpeed = timeMs * 0.002
  const waveSpeed2 = timeMs * 0.0035
  const waveSpeed3 = timeMs * 0.0012

  // Spike patterns - amplified for bigger circle
  const spike1 = Math.sin(angle * 8 + waveSpeed) * 0.03 // Increased from 0.025
  const spike2 = Math.sin(angle * 16 - waveSpeed2) * 0.02 // Increased from 0.015
  const spike3 = Math.sin(angle * 32 + waveSpeed3) * 0.01 // Increased from 0.008

  // Subtle overall pulse
  const pulse = Math.sin(timeMs * 0.001) * 0.008 // Increased from 0.005

  // Random noise per frame for sand-like texture
  const noise = (rand() - 0.5) * 0.01 // Increased from 0.008

  let radius =
    WAVE_BASE_RADIUS + WAVE_AMPLITUDE + spike1 + spike2 + spike3 + pulse + noise

  // Clamp to keep within bounds - adjusted for larger circle
  return Math.max(
    WAVE_BASE_RADIUS - 0.06,
    Math.min(WAVE_BASE_RADIUS + 0.15, radius),
  )
}

function draw() {
  if (!ctx || !canvasEl.value) return

  const centerX = canvasWidth / 2
  const centerY = canvasHeight / 2
  const maxRadius = Math.min(canvasWidth, canvasHeight) - 50

  // Clear canvas (make background transparent)
  ctx.clearRect(0, 0, canvasWidth, canvasHeight)

  // Draw the circular waveform (outer ring of sand)
  const angleStep = (Math.PI * 2) / SPIKE_COUNT

  // First pass: draw sand particles on the waveform
  for (let i = 0; i < SPIKE_COUNT; i++) {
    const angle = i * angleStep
    const radius = getWaveformRadius(angle, time)

    const x = centerX + Math.cos(angle) * radius * maxRadius
    const y = centerY + Math.sin(angle) * radius * maxRadius

    // Variable grain size for texture - slightly larger for bigger circle
    const grainSize = Math.max(2, Math.floor(maxRadius / 100) + rand() * 0.8)
    ctx.fillStyle = props.color

    // Add slight opacity variation
    ctx.globalAlpha = 0.7 + rand() * 0.3
    ctx.fillRect(x - grainSize / 2, y - grainSize / 2, grainSize, grainSize)
  }

  // Draw floating sand particles between waveform and outer edge
  for (let p of sandParticles) {
    // Only draw particles that are outside the waveform but inside the outer boundary
    const waveformRadius = getWaveformRadius(p.angle, time)

    // Draw particle if it's near the waveform or outside it
    if (p.radius >= waveformRadius - 0.04) {
      const x = centerX + Math.cos(p.angle) * p.radius * maxRadius
      const y = centerY + Math.sin(p.angle) * p.radius * maxRadius

      const grainSize = Math.max(1.5, Math.floor(maxRadius / 130))
      ctx.fillStyle = props.color
      ctx.globalAlpha = 0.5 + (p.radius - waveformRadius) * 1.5
      ctx.fillRect(x - grainSize / 2, y - grainSize / 2, grainSize, grainSize)
    }
  }

  // Draw some scattered sand dust just outside the waveform
  const dustCount = 600 // Increased from 400
  for (let i = 0; i < dustCount; i++) {
    const angle = rand() * Math.PI * 2
    const waveformRadius = getWaveformRadius(angle, time)
    const dustOffset = rand() * 0.05 // Increased spread
    const dustRadius = waveformRadius + dustOffset

    if (dustOffset < 0.04) {
      const x = centerX + Math.cos(angle) * dustRadius * maxRadius
      const y = centerY + Math.sin(angle) * dustRadius * maxRadius

      const grainSize = Math.max(1, Math.floor(maxRadius / 180))
      ctx.fillStyle = props.color
      ctx.globalAlpha = 0.3 + rand() * 0.4
      ctx.fillRect(x - grainSize / 2, y - grainSize / 2, grainSize, grainSize)
    }
  }

  // Reset alpha
  ctx.globalAlpha = 1

  // Draw text in the empty center if provided
  if (props.lines.length) {
    ctx.font = `${Math.max(14, Math.min(28, csize / 14))}px monospace` // Larger text
    ctx.fillStyle = props.color
    ctx.textAlign = 'center'
    ctx.textBaseline = 'middle'
    ctx.shadowBlur = 10
    ctx.shadowColor = 'rgba(0,0,0,0.3)'

    const lineHeight = csize / 12
    const startY = centerY - ((props.lines.length - 1) * lineHeight) / 2

    props.lines.forEach((line, i) => {
      ctx?.fillText(line, centerX, startY + i * lineHeight)
    })

    ctx.shadowBlur = 0
  }
}

function animate() {
  time += 16 // ~60fps
  updateSandParticles()
  draw()
  rafId = requestAnimationFrame(animate)
}

function resizeCanvas() {
  const canvas = canvasEl.value
  if (!canvas) return

  const parent = canvas.parentElement
  if (!parent) return

  if (props.size === 'full') {
    // Fit parent exactly
    canvasWidth = parent.clientWidth
    canvasHeight = parent.clientHeight
  } else if (typeof props.size === 'number') {
    canvasWidth = props.size
    canvasHeight = props.size
  }

  csize = Math.min(canvasWidth, canvasHeight)

  // Set canvas resolution with DPR for sharpness
  const dpr = Math.min(window.devicePixelRatio || 1, 2)
  canvas.width = canvasWidth * dpr
  canvas.height = canvasHeight * dpr
  canvas.style.width = `${canvasWidth}px`
  canvas.style.height = `${canvasHeight}px`

  // Scale context
  ctx = canvas.getContext('2d')!
  ctx.scale(dpr, dpr)
}

function setup() {
  resizeCanvas()
  initSandParticles()
}

// Watch for size changes
watch(
  () => props.size,
  () => {
    setup()
  },
)

// Handle window resize when using 'full' mode
if (typeof window !== 'undefined') {
  window.addEventListener('resize', () => {
    if (props.size === 'full') {
      resizeCanvas()
    }
  })
}

onMounted(() => {
  setup()
  animate()
})

onUnmounted(() => {
  cancelAnimationFrame(rafId)
  if (typeof window !== 'undefined') {
    window.removeEventListener('resize', resizeCanvas)
  }
})
</script>

<template>
  <canvas ref="canvasEl" class="sand-circle" :style="{ background: bgColor }" />
</template>

<style scoped>
.sand-circle {
  display: block;
  width: 100%;
  height: 100%;
  border-radius: 50%;
}
</style>
