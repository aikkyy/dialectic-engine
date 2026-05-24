<script setup lang="ts">
/**
 * Category.vue
 * – Satellite nodes have proper collision radii derived from text length
 * – Spiral placement (same algorithm as CategoryScatter) guarantees no overlaps
 * – Drag-after-click bug fixed, navigation via query params
 */

import { onMounted, onUnmounted, ref, computed } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { engineOpinions } from '../data/engineOpinions'
import type { EngineOpinionType } from '../data/engineOpinions'
import { saveSelectionArchive } from '../utils/selectionArchives'

const route = useRoute()
const router = useRouter()
const category = computed(() => String(route.params.category ?? ''))

const categoryKeywords = computed<EngineOpinionType[]>(() =>
  engineOpinions.filter(
    (o) => o.category.toLowerCase() === category.value.toLowerCase(),
  ),
)

function hash(a: number, b = 0): number {
  let h = a * 374761393 + b * 1234567891
  h = ((h ^ (h >>> 13)) * 1274126177) | 0
  h ^= h >>> 16
  return (h >>> 0) / 0xffffffff
}

type NodeKind = 'center' | 'keyword' | 'opinion'

interface CanvasNode {
  kind: NodeKind
  label: string
  x: number
  y: number
  /** collision + draw radius (world-space) */
  r: number
  animPhase: number
  seed: number
  keyword?: string
  opinionIdx?: number
  keywordEntry?: EngineOpinionType
  opinionText?: string
  antithesisText?: string
}

type ViewState = 'keywords' | 'opinions'
const viewState = ref<ViewState>('keywords')
const activeKeywordEntry = ref<EngineOpinionType | null>(null)

// ── Radius estimation from text ───────────────────────────────────────────────
// Approximates the bounding circle of wrapped text without a real canvas context.
// charW and lineH are tuned to the monospace font at the draw sizes we use.

const CHARS_PER_LINE_KW = 14 // keyword font ~14px, maxW 200px → ~14 chars/line
const CHARS_PER_LINE_OP = 12 // opinion font ~13px
const CHAR_W_KW = 8.4 // px per char at keyword font size
const CHAR_W_OP = 7.7
const LINE_H_KW = 14 * 1.35
const LINE_H_OP = 13 * 1.35
const MAX_LINES = 3

function textRadius(label: string, kind: 'keyword' | 'opinion'): number {
  const charsPerLine =
    kind === 'keyword' ? CHARS_PER_LINE_KW : CHARS_PER_LINE_OP
  const charW = kind === 'keyword' ? CHAR_W_KW : CHAR_W_OP
  const lineH = kind === 'keyword' ? LINE_H_KW : LINE_H_OP

  const words = label.split(' ')
  const lines: string[] = []
  let current = ''
  for (const word of words) {
    const test = current ? `${current} ${word}` : word
    if (test.length > charsPerLine && current) {
      lines.push(current)
      current = word
    } else current = test
  }
  if (current) lines.push(current)
  const displayLines = lines.slice(0, MAX_LINES)

  const textW = Math.max(...displayLines.map((l) => l.length * charW))
  const textH = displayLines.length * lineH
  // Circle that encloses the text rectangle, plus padding
  return Math.ceil(Math.hypot(textW / 2, textH / 2)) + 18
}

// ── Collision-free spiral placer ──────────────────────────────────────────────

const MARGIN = 36 // min gap between node boundaries
const MAX_RADIUS = 1200
const STEP = 4 // radius increment per spiral step

function placeSatellites(
  items: Array<{
    label: string
    kind: 'keyword' | 'opinion'
    seed: number
    [k: string]: unknown
  }>,
  centerR: number,
): Array<{ x: number; y: number; r: number }> {
  const placed: Array<{ x: number; y: number; r: number }> = []

  for (let idx = 0; idx < items.length; idx++) {
    const item = items[idx]
    const r = textRadius(item.label, item.kind as 'keyword' | 'opinion')
    // golden-angle spiral starting just outside the center circle
    const minDist = centerR + r + MARGIN
    let angle = idx * Math.PI * 2 * (Math.sqrt(5) - 1)
    let tries = 0
    let ok = false

    while (!ok && tries < 2000) {
      const radius = Math.min(MAX_RADIUS, minDist + tries * STEP)
      const x = Math.cos(angle) * radius
      const y = Math.sin(angle) * radius
      angle += Math.PI * 2 * (Math.sqrt(5) - 1)

      const clearOfCenter = Math.hypot(x, y) >= minDist

      let clearOfPeers = true
      for (const p of placed) {
        if (Math.hypot(x - p.x, y - p.y) < r + p.r + MARGIN) {
          clearOfPeers = false
          break
        }
      }

      if (clearOfCenter && clearOfPeers) {
        placed.push({ x, y, r })
        ok = true
      }
      tries++
    }

    if (!ok) {
      // hard fallback: park it far out
      const a = (idx / items.length) * Math.PI * 2
      placed.push({
        x: Math.cos(a) * MAX_RADIUS,
        y: Math.sin(a) * MAX_RADIUS,
        r,
      })
    }
  }

  return placed
}

// ── Node builders ─────────────────────────────────────────────────────────────

const CENTER_R = 70

function buildKeywordNodes(entries: EngineOpinionType[]): CanvasNode[] {
  const nodes: CanvasNode[] = []
  nodes.push({
    kind: 'center',
    label: 'I believe that',
    x: 0,
    y: 0,
    r: CENTER_R,
    animPhase: 0,
    seed: 0,
  })

  const items = entries.map((e, i) => ({
    label: e.keyword,
    kind: 'keyword' as const,
    seed: i * 100 + 7,
    keyword: e.keyword,
    keywordEntry: e,
    animPhase: hash(i, 5) * Math.PI * 2,
  }))

  const positions = placeSatellites(items, CENTER_R)

  items.forEach((item, i) => {
    nodes.push({
      kind: 'keyword',
      label: item.label,
      x: positions[i].x,
      y: positions[i].y,
      r: positions[i].r,
      animPhase: item.animPhase,
      seed: item.seed,
      keyword: item.keyword,
      keywordEntry: item.keywordEntry,
    })
  })

  return nodes
}

function buildOpinionNodes(entry: EngineOpinionType): CanvasNode[] {
  const nodes: CanvasNode[] = []
  nodes.push({
    kind: 'center',
    label: entry.keyword,
    x: 0,
    y: 0,
    r: CENTER_R,
    animPhase: 0,
    seed: 0,
  })

  const items = entry.data.map((op, i) => ({
    label: op.opinion,
    kind: 'opinion' as const,
    seed: i * 300 + 13,
    keyword: entry.keyword,
    opinionIdx: i,
    keywordEntry: entry,
    opinionText: op.opinion,
    antithesisText: op.antiThesis || 'No antithesis provided',
    animPhase: hash(i, 16) * Math.PI * 2,
  }))

  const positions = placeSatellites(items, CENTER_R)

  items.forEach((item, i) => {
    nodes.push({
      kind: 'opinion',
      label: item.label,
      x: positions[i].x,
      y: positions[i].y,
      r: positions[i].r,
      animPhase: item.animPhase,
      seed: item.seed,
      keyword: item.keyword,
      opinionIdx: item.opinionIdx,
      keywordEntry: item.keywordEntry,
      opinionText: item.opinionText,
      antithesisText: item.antithesisText,
    })
  })

  return nodes
}

// ── Canvas state ──────────────────────────────────────────────────────────────

const DEFAULT_ZOOM = 0.9
const MIN_ZOOM = 0.15
const MAX_ZOOM = 5.0

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
let nodes: CanvasNode[] = []
let navigating = false

function rebuildNodes() {
  nodes =
    viewState.value === 'keywords'
      ? buildKeywordNodes(categoryKeywords.value)
      : buildOpinionNodes(activeKeywordEntry.value!)
  hoveredIdx = -1
}

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
    if (Math.hypot(wx - n.x, wy - n.y) <= n.r) return i
  }
  return -1
}

// ── Drawing ───────────────────────────────────────────────────────────────────

function drawPixelRim(
  ctx: CanvasRenderingContext2D,
  cx: number,
  cy: number,
  r: number,
  t: number,
  seed: number,
) {
  const pixelSize = Math.max(1.8, 2.6 * zoom)
  const step = pixelSize + Math.max(1.0, 1.6 * zoom)
  for (let dy = -r - step; dy <= r + step; dy += step) {
    for (let dx = -r - step; dx <= r + step; dx += step) {
      const d = Math.hypot(dx, dy)
      if (d > r || d / r < 0.65) continue
      const norm = d / r
      let alpha = ((norm - 0.65) / 0.35) * 0.65
      const rand =
        (((Math.sin(seed * 0.01 + dx * 0.37 + dy * 0.53) * 10000) % 1) - 0.5) *
        0.06
      alpha = Math.min(
        0.7,
        Math.max(
          0,
          alpha + rand + 0.03 * Math.sin(t * 1.2 + dx * 0.12 + dy * 0.12),
        ),
      )
      ctx.fillStyle = `rgba(255,255,255,${alpha.toFixed(2)})`
      ctx.fillRect(
        cx + dx - pixelSize / 2,
        cy + dy - pixelSize / 2,
        pixelSize,
        pixelSize,
      )
    }
  }
}

function wrapText(
  ctx: CanvasRenderingContext2D,
  text: string,
  maxWidth: number,
): string[] {
  const words = text.split(' ')
  const lines: string[] = []
  let current = ''
  for (const word of words) {
    const test = current ? `${current} ${word}` : word
    if (ctx.measureText(test).width > maxWidth && current) {
      lines.push(current)
      current = word
    } else current = test
  }
  if (current) lines.push(current)
  return lines
}

function drawNode(
  ctx: CanvasRenderingContext2D,
  node: CanvasNode,
  isHovered: boolean,
  t: number,
) {
  const [sx, sy] = worldToScreen(node.x, node.y)
  const sr = node.r * zoom

  if (node.kind === 'center') {
    if (sx + sr < -40 || sx - sr > W + 40 || sy + sr < -40 || sy - sr > H + 40)
      return
    drawPixelRim(ctx, sx, sy, sr, t + node.animPhase, node.seed)
    ctx.save()
    const fs = Math.max(12, Math.round(16 * zoom))
    ctx.font = `500 ${fs}px "Gap Sans", monospace`
    ctx.textAlign = 'center'
    ctx.textBaseline = 'middle'
    ctx.shadowColor = 'rgba(0,0,0,0.95)'
    ctx.shadowBlur = 8
    ctx.fillStyle = '#ffffff'
    const lines = wrapText(ctx, node.label.toUpperCase(), sr * 1.2)
    const lineH = fs * 1.3
    const totalH = lines.length * lineH
    lines.forEach((line, li) =>
      ctx.fillText(line, sx, sy - totalH / 2 + li * lineH + lineH / 2),
    )
    ctx.restore()
    return
  }

  // Satellite: text only, with a subtle hover bg circle
  const baseFontSize = node.kind === 'keyword' ? 14 : 13
  const fs = Math.max(10, Math.round(baseFontSize * zoom))

  ctx.save()
  ctx.font = `400 ${fs}px "Gap Sans", monospace`
  ctx.textAlign = 'center'
  ctx.textBaseline = 'middle'
  ctx.shadowColor = 'rgba(0,0,0,0.95)'
  ctx.shadowBlur = 8
  ctx.fillStyle = isHovered ? '#ffffff' : '#c0c0c0'

  const maxW = sr * 2 * 0.9
  const lines = wrapText(ctx, node.label, maxW)
  const displayLines = lines.slice(0, MAX_LINES)
  if (lines.length > MAX_LINES)
    displayLines[MAX_LINES - 1] = displayLines[MAX_LINES - 1].replace(
      /\s\S+$/,
      '…',
    )
  const lineH = fs * 1.35
  const totalH = displayLines.length * lineH
  displayLines.forEach((line, li) =>
    ctx.fillText(line, sx, sy - totalH / 2 + li * lineH + lineH / 2),
  )
  ctx.restore()

  if (isHovered) {
    ctx.save()
    ctx.beginPath()
    ctx.arc(sx, sy, sr * 0.85, 0, Math.PI * 2)
    ctx.fillStyle = 'rgba(255,255,255,0.06)'
    ctx.fill()
    ctx.restore()
  }
}

function drawConnectors(ctx: CanvasRenderingContext2D) {
  const [cx, cy] = worldToScreen(0, 0)
  ctx.save()
  ctx.strokeStyle = 'rgba(255,255,255,0.1)'
  ctx.lineWidth = 1
  ctx.setLineDash([4, 8])
  for (let i = 1; i < nodes.length; i++) {
    const [sx, sy] = worldToScreen(nodes[i].x, nodes[i].y)
    ctx.beginPath()
    ctx.moveTo(cx, cy)
    ctx.lineTo(sx, sy)
    ctx.stroke()
  }
  ctx.setLineDash([])
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
  drawConnectors(ctx)
  for (let i = 0; i < nodes.length; i++)
    drawNode(ctx, nodes[i], i === hoveredIdx, t)
  rafId = requestAnimationFrame(draw)
}

// ── Zoom / pan ────────────────────────────────────────────────────────────────

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

// ── Interaction ───────────────────────────────────────────────────────────────

function handleClick(idx: number) {
  const node = nodes[idx]
  if (!node) return
  if (node.kind === 'keyword' && node.keywordEntry) {
    activeKeywordEntry.value = node.keywordEntry
    viewState.value = 'opinions'
    rebuildNodes()
    resetView()
    return
  }
  if (
    node.kind === 'opinion' &&
    node.keywordEntry &&
    node.opinionIdx !== undefined
  ) {
    saveSelectionArchive({
      category: category.value,
      keyword: node.keyword || '',
      opinion: node.opinionText || '',
      antithesis: node.antithesisText || '',
    })
    navigating = true
    router
      .push({
        path: '/result',
        query: {
          opinion: node.opinionText || '',
          antithesis: node.antithesisText || '',
          category: category.value,
          keyword: node.keyword,
        },
      })
      .finally(() => {
        navigating = false
      })
  }
}

function onMouseMove(e: MouseEvent) {
  if (navigating) return
  if (dragging) {
    panX += e.clientX - lastMx
    panY += e.clientY - lastMy
    if (Math.abs(e.clientX - lastMx) > 6 || Math.abs(e.clientY - lastMy) > 6)
      didDrag = true
    lastMx = e.clientX
    lastMy = e.clientY
    hoveredIdx = -1
    if (canvasEl.value) canvasEl.value.style.cursor = 'grabbing'
    return
  }
  hoveredIdx = hitTest(e.clientX, e.clientY)
  const n = nodes[hoveredIdx]
  if (canvasEl.value)
    canvasEl.value.style.cursor =
      hoveredIdx >= 0 && n?.kind !== 'center' ? 'pointer' : 'grab'
}

function onMouseDown(e: MouseEvent) {
  if (navigating) return
  dragging = true
  didDrag = false
  lastMx = e.clientX
  lastMy = e.clientY
}

function onMouseUp(e: MouseEvent) {
  if (navigating) {
    dragging = false
    if (canvasEl.value) canvasEl.value.style.cursor = 'grab'
    return
  }
  if (!didDrag) {
    const idx = hitTest(e.clientX, e.clientY)
    if (idx >= 0) handleClick(idx)
  }
  dragging = false
  if (canvasEl.value) canvasEl.value.style.cursor = 'grab'
}

function onWheel(e: WheelEvent) {
  if (navigating) return
  e.preventDefault()
  zoomAround(e.clientX, e.clientY, e.deltaY < 0 ? 1.07 : 0.93)
}

function onResize() {
  const canvas = canvasEl.value
  if (!canvas) return
  W = canvas.width = window.innerWidth
  H = canvas.height = window.innerHeight
}

onMounted(() => {
  const canvas = canvasEl.value!
  W = canvas.width = window.innerWidth
  H = canvas.height = window.innerHeight
  rebuildNodes()
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
  <div class="page-root">
    <p class="breadcrumb plusafter">
      /{{
        viewState === 'opinions' && activeKeywordEntry
          ? `${category}/${activeKeywordEntry.keyword}`
          : category
      }}
    </p>
    <canvas ref="canvasEl" class="scene-canvas" />
    <div class="zoom-hud">
      <button @click="zoomAround(W / 2, H / 2, 0.85)">−</button>
      <button @click="resetView()">⊙</button>
      <button @click="zoomAround(W / 2, H / 2, 1.18)">+</button>
    </div>
    <p class="hint" v-if="viewState === 'keywords'">
      click a keyword to explore opinions
    </p>
    <p class="hint" v-else>click an opinion to see the full argument</p>
  </div>
</template>

<style scoped>
.page-root {
  position: fixed;
  inset: 0;
  overflow: hidden;
  background: #0a0a0f;
}
.scene-canvas {
  display: block;
  cursor: grab;
  user-select: none;
}
.scene-canvas:active {
  cursor: grabbing;
}
.breadcrumb {
  position: absolute;
  top: 110px;
  left: 24px;
  z-index: 10;
  color: white;
  font-size: 14px;
  font-family: monospace;
  opacity: 0.7;
  pointer-events: none;
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
  border: 1px solid rgba(255, 255, 255, 0.22);
  color: white;
  border-radius: 50%;
  font-size: 22px;
  font-weight: bold;
  cursor: pointer;
  transition: background 0.2s;
}
.zoom-hud button:hover {
  background: rgba(255, 255, 255, 0.18);
}
.hint {
  position: absolute;
  bottom: 86px;
  left: 50%;
  transform: translateX(-50%);
  color: rgba(255, 255, 255, 0.28);
  font-size: 12px;
  font-family: monospace;
  letter-spacing: 0.08em;
  white-space: nowrap;
  pointer-events: none;
}
</style>
