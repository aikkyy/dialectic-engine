<template>
  <div ref="root" class="dialectic-engine" @mousemove="onMove">
    <canvas ref="canvas"></canvas>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const root = ref(null)
const canvas = ref(null)

const N_PARTICLES = 110000
const GRID = 512
const MODE_MIN = 1
const MODE_MAX = 10
const VIS_THRESHOLD = 0.40
const STEP_SCALE = 8
const STEP_MIN = 0.18
const EASE = 0.09
const ADDITIVE_GAIN = 180
// Formula crossfade speed — applied when parity flip switches cos ↔ sin.
// Uniform temporal blend (not spatial), matches real Chladni global field change.
const FORMULA_CROSSFADE_SPEED = 0.04

let tileSize = 720         // one Chladni tile (square) — sized to fit fully in the viewport
let canvasWidth = 720      // visible canvas width; extra width gets mirrored copies of the tile
let particles = null
let n = 2
let m = 3
let targetN = 2
let targetM = 3
let useSin = false
let prevUseSin = false
let crossfadeT = 1   // 1 = fully on current formula; < 1 = blending in from prev
let raf = 0
let ctx = null             // main visible canvas context
let offCtx = null          // offscreen tile context — simulation actually renders here
let offscreenCanvas = null
let imageData = null
let data = null
let bgBuf = null

const cosN = new Float32Array(GRID)
const cosM = new Float32Array(GRID)
const sinN = new Float32Array(GRID)
const sinM = new Float32Array(GRID)

function buildTables() {
  for (let i = 0; i < GRID; i++) {
    const t = i / GRID
    const tn = n * Math.PI * t
    const tm = m * Math.PI * t
    cosN[i] = Math.cos(tn)
    cosM[i] = Math.cos(tm)
    sinN[i] = Math.sin(tn)
    sinM[i] = Math.sin(tm)
  }
}

function tick() {
  n += (targetN - n) * EASE
  m += (targetM - m) * EASE
  if (crossfadeT < 1) crossfadeT = Math.min(1, crossfadeT + FORMULA_CROSSFADE_SPEED)
  buildTables()

  data.set(bgBuf)
  const gridR = GRID / tileSize
  const invThresh = 1 / VIS_THRESHOLD
  const isSin = useSin
  const wasSin = prevUseSin
  const inCrossfade = crossfadeT < 1 && wasSin !== isSin

  // Simulate exactly one Chladni tile — original physics, no tiling tricks in the math.
  for (let i = 0; i < N_PARTICLES; i++) {
    const base = i * 3
    let px = particles[base]
    let py = particles[base + 1]
    const grain = particles[base + 2]

    const ix = (px * gridR) | 0
    const iy = (py * gridR) | 0
    // Smooth crossfade between cos and sin formulas when mouse flips (n,m) parity.
    let z
    if (inCrossfade) {
      const t = crossfadeT * crossfadeT * (3 - 2 * crossfadeT)
      const zNew = isSin
        ? sinN[ix] * sinM[iy] + sinM[ix] * sinN[iy]
        : cosN[ix] * cosM[iy] + cosM[ix] * cosN[iy]
      const zOld = wasSin
        ? sinN[ix] * sinM[iy] + sinM[ix] * sinN[iy]
        : cosN[ix] * cosM[iy] + cosM[ix] * cosN[iy]
      z = t * zNew + (1 - t) * zOld
    } else {
      z = isSin
        ? sinN[ix] * sinM[iy] + sinM[ix] * sinN[iy]
        : cosN[ix] * cosM[iy] + cosM[ix] * cosN[iy]
    }
    const az = z < 0 ? -z : z

    const step = az * az * STEP_SCALE + STEP_MIN
    px += (Math.random() - 0.5) * step
    py += (Math.random() - 0.5) * step

    if (px < 0) px += tileSize
    else if (px >= tileSize) px -= tileSize
    if (py < 0) py += tileSize
    else if (py >= tileSize) py -= tileSize

    particles[base] = px
    particles[base + 1] = py

    if (az < VIS_THRESHOLD) {
      // Cubic (1-u)^3 falloff — sharp line peaks, still smooth derivative at the
      // boundary so particles fade in/out instead of popping when crossing.
      const u = az * invThresh
      const omU = 1 - u
      const contrib = (omU * omU * omU * grain * ADDITIVE_GAIN) | 0
      if (contrib > 0) {
        const xi = px | 0
        const yi = py | 0
        if (xi >= 0 && xi < tileSize && yi >= 0 && yi < tileSize) {
          const idx = (yi * tileSize + xi) * 4
          let v = data[idx] + contrib
          if (v > 255) v = 255
          data[idx] = v
          data[idx + 1] = v
          data[idx + 2] = v > 6 ? v - 4 : v
          data[idx + 3] = 255
        }
      }
    }
  }

  // Composite stage — publish the simulated tile to offscreen, then draw mirrored
  // copies across the wide main canvas. Neighbours alternate horizontal flip so seams
  // always meet on identical source pixels (no visible joins).
  offCtx.putImageData(imageData, 0, 0)

  ctx.fillStyle = '#181618'
  ctx.fillRect(0, 0, canvasWidth, tileSize)

  const shiftX = (canvasWidth - tileSize) * 0.5
  ctx.drawImage(offscreenCanvas, shiftX, 0)

  let xR = shiftX + tileSize
  let mirrorR = true
  while (xR < canvasWidth) {
    if (mirrorR) {
      ctx.save()
      ctx.translate(xR + tileSize, 0)
      ctx.scale(-1, 1)
      ctx.drawImage(offscreenCanvas, 0, 0)
      ctx.restore()
    } else {
      ctx.drawImage(offscreenCanvas, xR, 0)
    }
    xR += tileSize
    mirrorR = !mirrorR
  }

  let xL = shiftX - tileSize
  let mirrorL = true
  while (xL + tileSize > 0) {
    if (mirrorL) {
      ctx.save()
      ctx.translate(xL + tileSize, 0)
      ctx.scale(-1, 1)
      ctx.drawImage(offscreenCanvas, 0, 0)
      ctx.restore()
    } else {
      ctx.drawImage(offscreenCanvas, xL, 0)
    }
    xL -= tileSize
    mirrorL = !mirrorL
  }

  raf = requestAnimationFrame(tick)
}

function onMove(e) {
  const rect = root.value.getBoundingClientRect()
  const u = Math.min(1, Math.max(0, (e.clientX - rect.left) / rect.width))
  const v = Math.min(1, Math.max(0, (e.clientY - rect.top) / rect.height))
  const tn = MODE_MIN + Math.round(u * (MODE_MAX - MODE_MIN))
  const tm = MODE_MIN + Math.round(v * (MODE_MAX - MODE_MIN))
  targetN = tn
  targetM = tm
  const newUseSin = (tn & 1) === 1 && (tm & 1) === 1
  if (newUseSin !== useSin) {
    prevUseSin = useSin
    useSin = newUseSin
    crossfadeT = 0   // launch crossfade
  }
}

let resizeTimer = 0

function initBuffers() {
  const c = canvas.value
  const r = root.value
  // tileSize: one Chladni tile, fits fully in the viewport (no zoom). Simulation runs here.
  // canvasWidth: visible width — mirrored copies of the tile fill the extra space at composite time.
  tileSize = Math.min(r.clientWidth, r.clientHeight) || 720
  canvasWidth = r.clientWidth || tileSize

  c.width = canvasWidth
  c.height = tileSize
  c.style.width = canvasWidth + 'px'
  c.style.height = tileSize + 'px'

  if (!offscreenCanvas) offscreenCanvas = document.createElement('canvas')
  offscreenCanvas.width = tileSize
  offscreenCanvas.height = tileSize
  offCtx = offscreenCanvas.getContext('2d')

  imageData = offCtx.createImageData(tileSize, tileSize)
  data = imageData.data

  bgBuf = new Uint8ClampedArray(data.length)
  for (let i = 0; i < bgBuf.length; i += 4) {
    bgBuf[i] = 24      // #181618 R
    bgBuf[i + 1] = 22  // #181618 G
    bgBuf[i + 2] = 24  // #181618 B
    bgBuf[i + 3] = 255
  }

  particles = new Float32Array(N_PARTICLES * 3)
  for (let i = 0; i < N_PARTICLES; i++) {
    particles[i * 3] = Math.random() * tileSize
    particles[i * 3 + 1] = Math.random() * tileSize
    particles[i * 3 + 2] = 0.45 + Math.random() * 0.55
  }
}

function onResize() {
  if (resizeTimer) clearTimeout(resizeTimer)
  resizeTimer = window.setTimeout(initBuffers, 150)
}

onMounted(() => {
  ctx = canvas.value.getContext('2d')
  initBuffers()
  buildTables()
  window.addEventListener('resize', onResize)
  raf = requestAnimationFrame(tick)
})

onBeforeUnmount(() => {
  cancelAnimationFrame(raf)
  window.removeEventListener('resize', onResize)
  if (resizeTimer) clearTimeout(resizeTimer)
})
</script>

<style scoped>
.dialectic-engine {
  width: 100%;
  height: 100%;
  background: #181618;
  cursor: crosshair;
  overflow: hidden;
}
canvas {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: block;
  image-rendering: pixelated;
}
</style>
