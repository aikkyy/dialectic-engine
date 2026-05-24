<script setup lang="ts">
/**
 * CategoryScatter.vue – No collisions, robust placement
 */

import { onMounted, onUnmounted, ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { engineOpinions } from '../data/engineOpinions'

let router: ReturnType<typeof useRouter> | null = null
let route: ReturnType<typeof useRoute> | null = null
try {
  router = useRouter()
  route = useRoute()
} catch {
  /* no router */
}

function navigateTo(keyword: string) {
  const base =
    route?.path ??
    (typeof window !== 'undefined' ? window.location.pathname : '')
  const path = `${base.replace(/\/$/, '')}/${keyword}`
  if (router) router.push(path)
  else if (typeof window !== 'undefined') window.location.href = path
}

function hash(a: number, b = 0): number {
  let h = a * 374761393 + b * 1234567891
  h = ((h ^ (h >>> 13)) * 1274126177) | 0
  h ^= h >>> 16
  return (h >>> 0) / 0xffffffff
}

interface ScatterNode {
  label: string
  keyword: string | null
  x: number
  y: number
  r: number
  animPhase: number
  isSpecial: boolean
  seed: number
}

// ---- Build nodes with smaller sizes ----
const seen = new Set<string>()
const uniqueOps = engineOpinions.filter((op) => {
  if (seen.has(op.category)) return false
  seen.add(op.category)
  return true
})

const normalNodes: Omit<ScatterNode, 'x' | 'y'>[] = uniqueOps.map((op, i) => {
  const textLen = op.category.length
  let diameter = Math.max(110, Math.min(270, 80 + textLen * 9.5))
  diameter += (hash(i, 0) - 0.5) * 20
  const r = Math.round(diameter / 2)
  return {
    label: op.category,
    keyword: op.keyword,
    r,
    animPhase: hash(i, 11) * Math.PI * 2,
    isSpecial: false,
    seed: i * 1000,
  }
})

// Special node – radius HALF of previous size
const specialLabel = 'select a topic'
let specialDiameter = Math.max(110, Math.min(260, 80 + specialLabel.length * 9))
specialDiameter = Math.round(specialDiameter / 2) // half size
const specialR = Math.max(28, Math.min(130, specialDiameter))
const specialNode: ScatterNode = {
  label: specialLabel,
  keyword: null,
  r: specialR,
  animPhase: 0,
  isSpecial: true,
  seed: 999999,
  x: 0,
  y: 0,
}

// ---- Collision‑free placement with larger margins and search area ----
const MARGIN = 32 // increased from 22 to prevent overlaps
const MAX_RADIUS = 1000 // increased from 800 to give more space
const STEP = 5 // radius increment per try (was 3.5)

const sortedNormal = [...normalNodes].sort((a, b) => b.r - a.r)
const placedNormal: ScatterNode[] = []

function isCollidingWithSpecial(x: number, y: number, r: number): boolean {
  const dx = specialNode.x - x
  const dy = specialNode.y - y
  const minDist = specialNode.r + r + MARGIN
  return Math.hypot(dx, dy) < minDist
}

function isCollidingWithPlaced(x: number, y: number, r: number): boolean {
  for (const p of placedNormal) {
    const dx = p.x - x
    const dy = p.y - y
    const minDist = p.r + r + MARGIN
    if (Math.hypot(dx, dy) < minDist) return true
  }
  return false
}

// Place each normal node using an outward spiral
for (let idx = 0; idx < sortedNormal.length; idx++) {
  const node = sortedNormal[idx]
  let angle = 0
  let tries = 0
  let placed = false
  const maxTries = 1500

  while (!placed && tries < maxTries) {
    // Golden angle for even distribution
    angle += Math.PI * 2 * (Math.sqrt(5) - 1)
    // Start radius at the minimum needed to avoid the special circle
    let radius = specialNode.r + node.r + MARGIN + tries * STEP
    if (radius > MAX_RADIUS) radius = MAX_RADIUS
    const x = Math.cos(angle) * radius
    const y = Math.sin(angle) * radius

    if (
      !isCollidingWithSpecial(x, y, node.r) &&
      !isCollidingWithPlaced(x, y, node.r)
    ) {
      placedNormal.push({ ...node, x, y })
      placed = true
      break
    }
    tries++
  }

  // Fallback: place at the outer boundary, far from others
  if (!placed) {
    const angleFinal = (idx * 137.5 * Math.PI) / 180
    placedNormal.push({
      ...node,
      x: Math.cos(angleFinal) * MAX_RADIUS,
      y: Math.sin(angleFinal) * MAX_RADIUS,
    })
  }
}

// Combine: special at index 3
const specialIndex = 3
const allNodes: ScatterNode[] = []
for (let i = 0; i <= placedNormal.length; i++) {
  if (i === specialIndex) allNodes.push(specialNode)
  if (i < placedNormal.length) allNodes.push(placedNormal[i])
}
const nodes = allNodes

// ---- Canvas state ----
const DEFAULT_ZOOM = 1.0
const MIN_ZOOM = 0.18
const MAX_ZOOM = 4.8

const canvasEl = ref<HTMLCanvasElement | null>(null)
let W = 0,
  H = 0
let zoom = DEFAULT_ZOOM
let panX = 0,
  panY = 0
let dragging = false
let lastMx = 0,
  lastMy = 0
let didDrag = false
let hoveredIdx = -1
let rafId = 0

function worldToScreen(wx: number, wy: number): [number, number] {
  return [panX + wx * zoom, panY + wy * zoom]
}
function screenToWorld(sx: number, sy: number): [number, number] {
  return [(sx - panX) / zoom, (sy - panY) / zoom]
}

function hitTest(mx: number, my: number): number {
  const [wx, wy] = screenToWorld(mx, my)
  for (let i = nodes.length - 1; i >= 0; i--) {
    const n = nodes[i]
    const d = Math.hypot(wx - n.x, wy - n.y)
    if (d <= n.r * 1.1) return i
  }
  return -1
}

// ---- Drawing – pixel text NOT bold, short fade ----
function drawPixelCircle(
  ctx: CanvasRenderingContext2D,
  cx: number,
  cy: number,
  r: number,
  label: string,
  isHovered: boolean,
  t: number,
  isSpecial: boolean,
  seed: number,
) {
  if (isSpecial) {
    ctx.save()
    ctx.beginPath()
    ctx.arc(cx, cy, r, 0, Math.PI * 2)
    ctx.fillStyle = isHovered ? '#f5f5f5' : '#ffffff'
    ctx.fill()
    ctx.restore()
    ctx.save()
    const fs = Math.max(10, Math.round(14 * zoom))
    ctx.font = `500 ${fs}px "Gap Sans", monospace`
    ctx.textAlign = 'center'
    ctx.textBaseline = 'middle'
    ctx.fillStyle = '#000000'
    ctx.fillText(label.toUpperCase(), cx, cy)
    ctx.restore()
    return
  }

  const hoverScale = isHovered ? 1.05 : 1.0
  const drawR = r * hoverScale

  const pixelSize = Math.max(1.8, 2.8 * zoom)
  const step = pixelSize + Math.max(1.0, 1.8 * zoom)

  function pixelRandom(col: number, row: number, offset: number): number {
    const val = Math.sin(seed * 0.01 + col * 0.37 + row * 0.53 + offset) * 10000
    return val - Math.floor(val)
  }

  for (let dy = -drawR - step; dy <= drawR + step; dy += step) {
    for (let dx = -drawR - step; dx <= drawR + step; dx += step) {
      const d = Math.hypot(dx, dy)
      if (d > drawR) continue

      const norm = d / drawR
      let alpha = 0
      if (norm > 0.7) {
        alpha = ((norm - 0.7) / 0.3) * 0.55
      }
      const rand = (pixelRandom(dx, dy, 0) - 0.5) * 0.06
      alpha = Math.min(0.6, Math.max(0, alpha + rand))
      const flicker = 0.03 * Math.sin(t * 1.2 + dx * 0.12 + dy * 0.12)
      alpha = Math.min(0.6, Math.max(0, alpha + flicker))

      ctx.fillStyle = `rgba(255, 255, 255, ${alpha.toFixed(2)})`
      ctx.fillRect(
        cx + dx - pixelSize / 2,
        cy + dy - pixelSize / 2,
        pixelSize,
        pixelSize,
      )
    }
  }

  ctx.save()
  const fontSizeBase = r < 70 ? 11 : r < 100 ? 13 : 15
  const fs = Math.max(10, Math.round(fontSizeBase * zoom))
  ctx.font = `400 ${fs}px "Gap Sans", monospace`
  ctx.textAlign = 'center'
  ctx.textBaseline = 'middle'
  ctx.shadowColor = 'rgba(0,0,0,0.98)'
  ctx.shadowBlur = 10
  ctx.fillStyle = isHovered ? '#ffffff' : '#fafafa'
  ctx.fillText(label.toUpperCase(), cx, cy)
  ctx.restore()
}

function draw(ts: number) {
  const canvas = canvasEl.value
  if (!canvas) return
  const ctx = canvas.getContext('2d')!
  const t = ts / 1000

  ctx.clearRect(0, 0, W, H)
  ctx.fillStyle = '#0a0a0f'
  ctx.fillRect(0, 0, W, H)

  for (let i = 0; i < nodes.length; i++) {
    const n = nodes[i]
    const [sx, sy] = worldToScreen(n.x, n.y)
    const sr = n.r * zoom
    if (sx + sr < -30 || sx - sr > W + 30 || sy + sr < -30 || sy - sr > H + 30)
      continue
    drawPixelCircle(
      ctx,
      sx,
      sy,
      sr,
      n.label,
      i === hoveredIdx,
      t + n.animPhase,
      n.isSpecial,
      n.seed,
    )
  }
  rafId = requestAnimationFrame(draw)
}

function zoomAround(cx: number, cy: number, factor: number) {
  const wx = (cx - panX) / zoom
  const wy = (cy - panY) / zoom
  zoom = Math.max(MIN_ZOOM, Math.min(MAX_ZOOM, zoom * factor))
  panX = cx - wx * zoom
  panY = cy - wy * zoom
}

function resetView() {
  zoom = DEFAULT_ZOOM
  panX = W / 2
  panY = H / 2
}

function onMouseMove(e: MouseEvent) {
  if (dragging) {
    panX += e.clientX - lastMx
    panY += e.clientY - lastMy
    if (Math.abs(e.clientX - lastMx) > 2 || Math.abs(e.clientY - lastMy) > 2)
      didDrag = true
    lastMx = e.clientX
    lastMy = e.clientY
    hoveredIdx = -1
    if (canvasEl.value) canvasEl.value.style.cursor = 'grabbing'
    return
  }
  hoveredIdx = hitTest(e.clientX, e.clientY)
  const n = nodes[hoveredIdx]
  if (canvasEl.value) {
    canvasEl.value.style.cursor =
      hoveredIdx >= 0 && n?.keyword ? 'pointer' : 'grab'
  }
}

function onMouseDown(e: MouseEvent) {
  dragging = true
  didDrag = false
  lastMx = e.clientX
  lastMy = e.clientY
}

function onMouseUp(e: MouseEvent) {
  if (!didDrag) {
    const idx = hitTest(e.clientX, e.clientY)
    if (idx >= 0 && nodes[idx].keyword) navigateTo(nodes[idx].keyword!)
  }
  dragging = false
  if (canvasEl.value) canvasEl.value.style.cursor = 'grab'
}

function onWheel(e: WheelEvent) {
  e.preventDefault()
  const factor = e.deltaY < 0 ? 1.07 : 0.93
  zoomAround(e.clientX, e.clientY, factor)
}

function onResize() {
  const canvas = canvasEl.value
  if (!canvas) return
  W = canvas.width = window.innerWidth
  H = canvas.height = window.innerHeight
  if (Math.abs(panX - W / 2) > 15) resetView()
}

onMounted(() => {
  const canvas = canvasEl.value!
  W = canvas.width = window.innerWidth
  H = canvas.height = window.innerHeight
  resetView()

  canvas.addEventListener('mousemove', onMouseMove)
  canvas.addEventListener('mousedown', onMouseDown)
  canvas.addEventListener('wheel', onWheel, { passive: false })
  window.addEventListener('mouseup', onMouseUp)
  window.addEventListener('resize', onResize)

  rafId = requestAnimationFrame(draw)
})

onUnmounted(() => {
  cancelAnimationFrame(rafId)
  const canvas = canvasEl.value
  if (canvas) {
    canvas.removeEventListener('mousemove', onMouseMove)
    canvas.removeEventListener('mousedown', onMouseDown)
    canvas.removeEventListener('wheel', onWheel)
  }
  window.removeEventListener('mouseup', onMouseUp)
  window.removeEventListener('resize', onResize)
})
</script>

<template>
  <div class="scatter-root">
    <canvas ref="canvasEl" class="scatter-canvas" />
    <div class="zoom-hud">
      <button @click="zoomAround(W / 2, H / 2, 0.85)">−</button>
      <button @click="resetView()">⊙</button>
      <button @click="zoomAround(W / 2, H / 2, 1.18)">+</button>
    </div>
  </div>
</template>

<style scoped>
.scatter-root {
  position: fixed;
  inset: 0;
  overflow: hidden;
  background: #0a0a0f;
}
.scatter-canvas {
  display: block;
  cursor: grab;
  user-select: none;
}
.scatter-canvas:active {
  cursor: grabbing;
}
.zoom-hud {
  position: absolute;
  bottom: 28px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 14px;
  z-index: 10;
}
.zoom-hud button {
  width: 46px;
  height: 46px;
  background: rgba(20, 20, 30, 0.7);
  backdrop-filter: blur(4px);
  border: 1px solid rgba(255, 255, 255, 0.25);
  color: white;
  border-radius: 50%;
  font-size: 22px;
  font-weight: bold;
  cursor: pointer;
  transition: 0.2s;
}
.zoom-hud button:hover {
  background: rgba(255, 255, 255, 0.2);
}
</style>
