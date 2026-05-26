<script setup lang="ts">
/**
 * SandCircle.vue
 * A reusable canvas component that renders a circular Chladni sand animation.
 * The sand particles are confined to a circle and form animated nodal patterns.
 */

import { ref, onMounted, onUnmounted, watch } from 'vue'

interface Props {
  size?: number
  color?: string
  bgColor?: string
  particleCount?: number
  /** Lines of text to render inside the circle */
  lines?: string[]
  /** Highlight color for selected text */
  accentColor?: string
}

const props = withDefaults(defineProps<Props>(), {
  size: 260,
  color: '#ffffff',
  bgColor: 'transparent',
  particleCount: 55000,
  lines: () => [],
  accentColor: '#a0c4ff',
})

const canvasEl = ref<HTMLCanvasElement | null>(null)
let rafId = 0
let t0 = 0

// Particle state
let px: Float32Array
let py: Float32Array
let pvx: Float32Array
let pvy: Float32Array

// Canvas internals
let csize = 0
let buf: Uint32Array | null = null
let imgData: ImageData | null = null
let lineRGB: [number, number, number] = [255, 255, 255]

// Animation state — slowly drifts between modes for organic feel
let modeN = 2.5
let modeM = 3.5
let targetN = 2.5
let targetM = 3.5
let nextModeChange = 3000

// Inline xorshift PRNG
let _rng = 0xdeadbeef
const rand = () => {
  _rng ^= _rng << 13
  _rng ^= _rng >> 17
  _rng ^= _rng << 5
  return (_rng >>> 0) / 4294967296
}

function parseColor(css: string): [number, number, number] {
  const c = document.createElement('canvas')
  c.width = c.height = 1
  const cx = c.getContext('2d')!
  cx.fillStyle = css
  cx.fillRect(0, 0, 1, 1)
  const d = cx.getImageData(0, 0, 1, 1).data
  return [d[0], d[1], d[2]]
}

// Single border - only outer boundary at radius 0.47
const CIRCLE_RADIUS = 0.47

function initParticles() {
  const N = props.particleCount
  px = new Float32Array(N)
  py = new Float32Array(N)
  pvx = new Float32Array(N)
  pvy = new Float32Array(N)
  for (let i = 0; i < N; i++) {
    // Spawn uniformly inside the circle
    const angle = rand() * Math.PI * 2
    const r = rand() * CIRCLE_RADIUS
    px[i] = 0.5 + Math.cos(angle) * r
    py[i] = 0.5 + Math.sin(angle) * r
    pvx[i] = 0
    pvy[i] = 0
  }
}

const PI = Math.PI

function chladniField(x: number, y: number, n: number, m: number): number {
  const dx = x - 0.5
  const dy = y - 0.5
  const r = Math.sqrt(dx * dx + dy * dy)
  const theta = Math.atan2(dy, dx)
  // Remap r so 0 = center, 1 = outer edge
  const t = r / CIRCLE_RADIUS
  return Math.abs(Math.cos(n * PI * t) * Math.cos(m * theta))
}

function fieldAt(x: number, y: number, n: number, m: number): number {
  return chladniField(x, y, n, m)
}

function stepParticles(n: number, m: number) {
  const PULL = 0.0007
  const DAMPING = 0.8
  const JITTER = 0.00055
  const EPS = 0.004
  const N = props.particleCount

  for (let i = 0; i < N; i++) {
    let x = px[i]
    let y = py[i]

    const fc = fieldAt(x, y, n, m)
    const gx = (fieldAt(x + EPS, y, n, m) - fc) / EPS
    const gy = (fieldAt(x, y + EPS, n, m) - fc) / EPS

    pvx[i] += -gx * PULL + (rand() - 0.5) * JITTER
    pvy[i] += -gy * PULL + (rand() - 0.5) * JITTER
    pvx[i] *= DAMPING
    pvy[i] *= DAMPING

    x += pvx[i]
    y += pvy[i]

    // Reflect off outer wall only
    const dx = x - 0.5
    const dy = y - 0.5
    const dist = Math.sqrt(dx * dx + dy * dy)
    const nx = dx / (dist + 1e-9)
    const ny = dy / (dist + 1e-9)

    if (dist > CIRCLE_RADIUS) {
      // Hit outer wall — reflect inward
      const dot = pvx[i] * nx + pvy[i] * ny
      pvx[i] -= 2 * dot * nx
      pvy[i] -= 2 * dot * ny
      x = 0.5 + nx * (CIRCLE_RADIUS - 0.001)
      y = 0.5 + ny * (CIRCLE_RADIUS - 0.001)
    }

    px[i] = x
    py[i] = y
  }
}

function drawParticles(n: number, m: number) {
  if (!buf || !imgData) return

  const lr = lineRGB[0]
  const lg = lineRGB[1]
  const lb = lineRGB[2]
  const thr = 0.05
  const band = thr * 6
  const N = props.particleCount

  for (let i = 0; i < N; i++) {
    const x = px[i]
    const y = py[i]

    // Only draw inside the circle
    const dx = x - 0.5
    const dy = y - 0.5
    const r = Math.sqrt(dx * dx + dy * dy)
    if (r > CIRCLE_RADIUS) continue

    const fc = fieldAt(x, y, n, m)
    const proximity = Math.max(0, 1 - fc / band)
    if (proximity <= 0) continue

    const a = Math.min(1, proximity * 0.95)
    if (a < 0.02) continue

    const bx = Math.round(x * csize)
    const by = Math.round(y * csize)
    if (bx < 0 || bx >= csize || by < 0 || by >= csize) continue

    const idx = by * csize + bx
    const existing = buf[idx]
    const er = existing & 0xff
    const eg = (existing >> 8) & 0xff
    const eb = (existing >> 16) & 0xff

    const jitter = (rand() - 0.5) * 20
    const gr = Math.max(0, Math.min(255, lr + jitter))
    const gg = Math.max(0, Math.min(255, lg + jitter))
    const gb = Math.max(0, Math.min(255, lb + jitter))

    const nr = Math.round(er + (gr - er) * a)
    const ng = Math.round(eg + (gg - eg) * a)
    const nb = Math.round(eb + (gb - eb) * a)

    buf[idx] = (255 << 24) | (nb << 16) | (ng << 8) | nr
  }
}

function drawCircleMask() {
  if (!buf) return
  const cx = csize / 2
  const cy = csize / 2
  const outerR2 = csize * CIRCLE_RADIUS * (csize * CIRCLE_RADIUS)

  for (let y = 0; y < csize; y++) {
    for (let x = 0; x < csize; x++) {
      const dx = x - cx
      const dy = y - cy
      const d2 = dx * dx + dy * dy
      // Clear anything outside the circle edge
      if (d2 > outerR2) {
        buf[y * csize + x] = 0
      }
    }
  }
}

function drawTextOverlay() {
  const canvas = canvasEl.value
  if (!canvas || !props.lines.length) return
  const ctx = canvas.getContext('2d')!

  const dpr = window.devicePixelRatio || 1
  const r = (csize / 2) * 0.75 // text area radius in canvas pixels
  const cx = csize / 2
  const cy = csize / 2

  ctx.save()
  ctx.textAlign = 'center'
  ctx.textBaseline = 'middle'

  const lineCount = props.lines.length
  const fontSize = Math.max(
    11,
    Math.min(18, ((r * 1.1) / (lineCount + 1) / dpr) * 1.6),
  )
  const lineH = fontSize * 1.55
  const totalH = (lineCount - 1) * lineH
  const startY = cy - totalH / 2

  props.lines.forEach((line, i) => {
    const isLast = i === lineCount - 1
    ctx.font = `${isLast ? '500' : '300'} ${Math.round(fontSize * dpr)}px "Gap Sans", monospace`
    ctx.shadowColor = 'rgba(0,0,0,0.95)'
    ctx.shadowBlur = 10 * dpr

    // Dim earlier lines, brighten current
    if (isLast) {
      ctx.fillStyle = '#ffffff'
    } else {
      ctx.fillStyle = 'rgba(255,255,255,0.45)'
    }

    ctx.fillText(line, cx, startY + i * lineH)
  })

  ctx.shadowBlur = 0
  ctx.restore()
}

function render(n: number, m: number) {
  if (!buf || !imgData || !canvasEl.value) return

  // Clear to transparent
  buf.fill(0)
  drawParticles(n, m)
  drawCircleMask()

  const ctx = canvasEl.value.getContext('2d')!
  ctx.clearRect(0, 0, csize, csize)
  ctx.putImageData(imgData, 0, 0)
  drawTextOverlay()
}

function loop(now: number) {
  rafId = requestAnimationFrame(loop)
  if (!t0) t0 = now
  const elapsed = now - t0

  // Slowly drift to new modes
  if (elapsed > nextModeChange) {
    targetN = 1.5 + Math.floor(rand() * 5)
    targetM = 1 + Math.floor(rand() * 4)
    nextModeChange = elapsed + 4000 + rand() * 4000
  }

  modeN += (targetN - modeN) * 0.003
  modeM += (targetM - modeM) * 0.003

  stepParticles(modeN, modeM)
  render(modeN, modeM)
}

function setup() {
  const canvas = canvasEl.value
  if (!canvas) return

  const dpr = Math.min(window.devicePixelRatio || 1, 2)
  csize = Math.round(props.size * dpr)
  canvas.width = csize
  canvas.height = csize
  canvas.style.width = `${props.size}px`
  canvas.style.height = `${props.size}px`

  lineRGB = parseColor(props.color)
  imgData = new ImageData(csize, csize)
  buf = new Uint32Array(imgData.data.buffer)

  initParticles()
}

onMounted(() => {
  setup()
  rafId = requestAnimationFrame(loop)
})

onUnmounted(() => {
  cancelAnimationFrame(rafId)
})

watch(
  () => props.size,
  () => {
    cancelAnimationFrame(rafId)
    setup()
    rafId = requestAnimationFrame(loop)
  },
)
</script>

<template>
  <canvas ref="canvasEl" class="sand-circle" :style="{ background: bgColor }" />
</template>

<style scoped>
.sand-circle {
  display: block;
  border-radius: 50%;
  /* Single border around the circle */
  box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.15);
}
</style>
