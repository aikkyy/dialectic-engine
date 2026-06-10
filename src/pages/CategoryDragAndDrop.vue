<script setup lang="ts">
/**
 * Category.vue — DialecticDialogue-driven form
 *
 * Visual core: full-viewport Chladni particle pattern (adapted from
 * DialecticDialogue.vue asset). One random pattern is picked on mount and
 * HELD through stages 1–3 (the thesis-building stages). When the user picks
 * an opinion and the thesis is complete, a short delay passes, then the
 * pattern morphs to a different random mode and the text flips from thesis
 * to antithesis. The user then stays on this page — there is no Result page.
 *
 * Stage 1 — keyword:    Center: "I believe that..."
 *                       Around it: keyword words (Gap Sans, lowercase).
 * Stage 2 — opinion:    Center: "I believe that <keyword>..."
 *                       Around: opinion phrases.
 * Stage 3 — thesis:     Center: complete thesis.
 * Stage 4 — antithesis: Pattern morphs. Center: antithesis text (italic).
 */

import { computed, nextTick, onMounted, onUnmounted, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { engineOpinions } from '../data/engineOpinions'
import type { EngineOpinionType } from '../data/engineOpinions'
import { saveSelectionArchive } from '../utils/selectionArchives'
import { usePageLayout } from '../composables/usePageLayout'

const route = useRoute()
const category = computed(() => String(route.params.category ?? ''))

type Stage = 'keyword' | 'opinion' | 'thesis' | 'antithesis'
const stage = ref<Stage>('keyword')
const selectedKeyword = ref<EngineOpinionType | null>(null)
const selectedOpinion = ref<{ opinion: string; antithesis: string } | null>(null)

usePageLayout({
  instructions: () => {
    if (stage.value === 'keyword')
      return 'drag a word to the centre to start your thesis'
    if (stage.value === 'opinion')
      return 'drag a phrase to the centre to complete your thesis'
    if (stage.value === 'thesis') return 'this is your thesis'
    return 'this is the antithesis'
  },
  topic: () => category.value,
})

// ─── Data ────────────────────────────────────────────────────────────────────
const categoryKeywords = computed<EngineOpinionType[]>(() =>
  engineOpinions.filter(
    (o) => o.category.toLowerCase() === category.value.toLowerCase(),
  ),
)

// ─── Floating items (orbital) ────────────────────────────────────────────────
// The items (keywords on stage 1, opinion phrases on stage 2) circulate on a
// big shared circle around the centre. Each item carries only a `baseAngle`;
// its position each frame is centre + (cos, sin)(baseAngle + globalAngle) * R.
// During drag the orbit is overridden — the item follows the pointer, and
// resumes its orbit the next tick after release.

interface FloatingItem {
  id: string
  label: string
}

interface OrbitState {
  baseAngle: number // radians, initial position on the circle
  w: number
  h: number
}

const floatingItems = ref<FloatingItem[]>([])
const itemRefs = new Map<string, HTMLElement>()
const physics = new Map<string, OrbitState>()

let viewportW = 0
let viewportH = 0
let globalAngle = 0
/** Radians per frame. 0.0015 ≈ 5°/s at 60 fps — slow and meditative. */
const ROTATION_SPEED = 0.0015
/** Orbit radius as a fraction of the smaller viewport dimension. */
const ORBIT_RADIUS_FRACTION = 0.4

function updateViewport() {
  viewportW = window.innerWidth
  viewportH = window.innerHeight
}

function getOrbitRadius() {
  return Math.min(viewportW, viewportH) * ORBIT_RADIUS_FRACTION
}

async function rebuildFloatingItems() {
  let raw: FloatingItem[] = []
  if (stage.value === 'keyword') {
    raw = categoryKeywords.value.map((e, i) => ({
      id: `kw-${i}`,
      label: e.keyword,
    }))
  } else if (stage.value === 'opinion' && selectedKeyword.value) {
    raw = selectedKeyword.value.data.map((op, i) => ({
      id: `op-${i}`,
      label: op.opinion,
    }))
  }

  physics.clear()
  floatingItems.value = raw

  // Wait for Vue to mount the new DOM nodes (so `:ref` callbacks have filled
  // `itemRefs`), then measure each one and lay them out evenly around the
  // circle. Applying the transform here means first paint is already correct
  // — no spawn flash.
  await nextTick()

  const cx = viewportW / 2
  const cy = viewportH / 2
  const radius = getOrbitRadius()
  const count = raw.length

  for (let i = 0; i < raw.length; i++) {
    const item = raw[i]
    const el = itemRefs.get(item.id)
    if (!el) continue
    const rect = el.getBoundingClientRect()
    const w = rect.width
    const h = rect.height
    // Distribute evenly; offset by -π/2 so item 0 sits at the top.
    const baseAngle = (i / Math.max(1, count)) * Math.PI * 2 - Math.PI / 2
    physics.set(item.id, { baseAngle, w, h })
    const angle = baseAngle + globalAngle
    const x = cx + Math.cos(angle) * radius - w / 2
    const y = cy + Math.sin(angle) * radius - h / 2
    el.style.transform = `translate3d(${x}px, ${y}px, 0)`
  }
}

function tickFloating() {
  if (!physics.size) return
  globalAngle += ROTATION_SPEED
  // Keep globalAngle bounded so it doesn't lose precision after long idles.
  // cos/sin are 2π-periodic, so the result is identical, just numerically clean.
  if (globalAngle > Math.PI * 2) globalAngle -= Math.PI * 2
  const cx = viewportW / 2
  const cy = viewportH / 2
  const radius = getOrbitRadius()
  // Skip orbiting the actively-dragged item ONLY if a real drag is in
  // progress. We re-validate the live pointer-button state via a separate
  // bookkeeping flag (`isPointerDown`) so that a stuck `draggingId` left
  // behind by a missed pointerup / pointercancel doesn't permanently
  // freeze an item at the user's last drag position.
  const draggedId = isPointerDown ? draggingId.value : null
  for (const [id, p] of physics) {
    if (id === draggedId) continue
    const el = itemRefs.get(id)
    if (!el) continue
    const angle = p.baseAngle + globalAngle
    const x = cx + Math.cos(angle) * radius - p.w / 2
    const y = cy + Math.sin(angle) * radius - p.h / 2
    el.style.transform = `translate3d(${x}px, ${y}px, 0)`
  }
}

// ─── Center text ─────────────────────────────────────────────────────────────
const centerText = computed(() => {
  if (stage.value === 'keyword') return 'I believe that...'
  if (stage.value === 'opinion' && selectedKeyword.value) {
    return `I believe that ${selectedKeyword.value.keyword}...`
  }
  if (
    stage.value === 'thesis' &&
    selectedKeyword.value &&
    selectedOpinion.value
  ) {
    return `I believe that ${selectedKeyword.value.keyword} ${selectedOpinion.value.opinion}`
  }
  if (stage.value === 'antithesis' && selectedOpinion.value) {
    return selectedOpinion.value.antithesis
  }
  return ''
})

const centerTextKey = computed(
  () =>
    `${stage.value}-${selectedKeyword.value?.keyword ?? ''}-${selectedOpinion.value?.opinion ?? ''}`,
)

// ─── Drag logic ──────────────────────────────────────────────────────────────
// Dragging moves the actual item element (no ghost overlay). On release, the
// item is "selected" only if dropped inside the centre circle — no tap-to-
// select shortcut, because clicking should be inert per design.
const stageEl = ref<HTMLElement | null>(null)
const draggingId = ref<string | null>(null)
/** True while a drag is in progress AND the pointer is inside CENTER_RADIUS
 *  — drives the drop-zone accent on the central text. */
const draggingOverCenter = ref(false)
/** Tracks whether a physical pointer button is currently held. Distinct from
 *  `draggingId` because we want a single source of truth for "is the user
 *  actually still dragging?" — pointercancel / blur / visibility hide can all
 *  end a drag without us ever seeing a pointerup. */
let isPointerDown = false
let dragOffsetX = 0
let dragOffsetY = 0
const CENTER_RADIUS = 220

/** Drop the drag state back to idle. Called from pointerup, pointercancel,
 *  window blur, and visibility-hidden so a stuck drag can't freeze an item. */
function cancelActiveDrag() {
  if (!draggingId.value && !isPointerDown) return
  draggingId.value = null
  draggingOverCenter.value = false
  isPointerDown = false
}

function getCenter() {
  if (!stageEl.value) return { x: 0, y: 0 }
  const r = stageEl.value.getBoundingClientRect()
  return { x: r.left + r.width / 2, y: r.top + r.height / 2 }
}

function isInsideCenter(x: number, y: number): boolean {
  const c = getCenter()
  return Math.hypot(x - c.x, y - c.y) < CENTER_RADIUS
}

function onItemPointerDown(e: PointerEvent, id: string) {
  if (e.button !== 0 && e.pointerType === 'mouse') return
  e.preventDefault()
  const el = itemRefs.get(id)
  if (!el) return
  // Use the element's current rect — items move every tick, so we can't trust
  // a stored x/y; we measure the live position at grab time.
  const rect = el.getBoundingClientRect()
  draggingId.value = id
  isPointerDown = true
  dragOffsetX = e.clientX - rect.x
  dragOffsetY = e.clientY - rect.y
  ;(e.currentTarget as HTMLElement).setPointerCapture(e.pointerId)
}

function onGlobalPointerMove(e: PointerEvent) {
  const id = draggingId.value
  if (!id) return
  const p = physics.get(id)
  const el = itemRefs.get(id)
  if (!p || !el) return
  let x = e.clientX - dragOffsetX
  let y = e.clientY - dragOffsetY
  // Clamp inside viewport so the item never disappears mid-drag.
  if (x < 0) x = 0
  else if (x + p.w > viewportW) x = viewportW - p.w
  if (y < 0) y = 0
  else if (y + p.h > viewportH) y = viewportH - p.h
  el.style.transform = `translate3d(${x}px, ${y}px, 0)`
  draggingOverCenter.value = isInsideCenter(e.clientX, e.clientY)
}

function onGlobalPointerUp(e: PointerEvent) {
  if (!draggingId.value) return
  const id = draggingId.value
  draggingId.value = null
  draggingOverCenter.value = false
  isPointerDown = false
  // Only selection path is "dragged into the centre". Clicks don't select.
  if (isInsideCenter(e.clientX, e.clientY)) selectItem(id)
}

/** pointercancel fires when the OS / browser steals the pointer mid-drag —
 *  context menu, browser gesture, touch lost, screensaver wake. Without this
 *  handler the dragged item would stay frozen at its last position because
 *  `draggingId` would never clear and `tickFloating` would keep skipping it. */
function onGlobalPointerCancel() {
  cancelActiveDrag()
}

/** Window-level recovery: if focus leaves the window (alt-tab, Cmd-Tab) or
 *  the tab is hidden (display sleep, iMac screensaver), there's no guarantee
 *  pointerup will ever fire. Force the drag back to idle so the item rejoins
 *  its orbit immediately when the user comes back. */
function onWindowBlur() {
  cancelActiveDrag()
}

function onVisibilityChange() {
  if (document.visibilityState === 'hidden') cancelActiveDrag()
}

// ─── Stage progression ───────────────────────────────────────────────────────
function selectItem(id: string) {
  if (stage.value === 'keyword') {
    const idx = parseInt(id.replace('kw-', ''), 10)
    const entry = categoryKeywords.value[idx]
    if (!entry) return
    selectedKeyword.value = entry
    setStage('opinion')
    return
  }

  if (stage.value === 'opinion' && selectedKeyword.value) {
    const idx = parseInt(id.replace('op-', ''), 10)
    const op = selectedKeyword.value.data[idx]
    if (!op) return

    const antithesis = (op as any).antiThesis ?? (op as any).antithesis ?? ''
    selectedOpinion.value = { opinion: op.opinion, antithesis }

    saveSelectionArchive({
      category: category.value,
      keyword: selectedKeyword.value.keyword,
      opinion: op.opinion,
      antithesis,
    })

    // No delay — morph to a different random pattern and flip straight to
    // the antithesis. The user stays on this page (no Result route).
    const next = pickRandomMode(currentModeIdx)
    morphToMode(next.mode, next.idx)
    setStage('antithesis')
  }
}

/** "New Opinion" — wipe the user's selections, return to the keyword stage,
 *  and morph the pattern to a fresh random mode (different from the one
 *  currently on screen, so it feels like a clean start). */
function restartOpinion() {
  selectedKeyword.value = null
  selectedOpinion.value = null
  setStage('keyword')
  const { mode, idx } = pickRandomMode(currentModeIdx)
  morphToMode(mode, idx)
}

// ─── Opinion / subtopic index modal ──────────────────────────────────────────
// Same UX as /form's topic index. The modal lists every option for the current
// stage. Click selects it (advances the stage as if it had been dragged into
// the centre). Hidden once the user has moved past the input stages.
const indexOpen = ref(false)

const indexLabel = computed(() =>
  stage.value === 'keyword' ? 'subtopic index' : 'opinion index',
)

const indexItems = computed<{ id: string; label: string }[]>(() => {
  if (stage.value === 'keyword') {
    return categoryKeywords.value.map((e, i) => ({
      id: `kw-${i}`,
      label: e.keyword,
    }))
  }
  if (stage.value === 'opinion' && selectedKeyword.value) {
    const kw = selectedKeyword.value.keyword
    // Each entry reads as the complete thesis the user would form by picking
    // that opinion: "I believe that <subtopic> <opinion>".
    return selectedKeyword.value.data.map((op, i) => ({
      id: `op-${i}`,
      label: `I believe that ${kw} ${op.opinion}`,
    }))
  }
  return []
})

const showIndexLink = computed(
  () =>
    (stage.value === 'keyword' || stage.value === 'opinion') &&
    indexItems.value.length > 0,
)

function selectFromIndex(id: string) {
  indexOpen.value = false
  selectItem(id)
}

function onIndexKey(e: KeyboardEvent) {
  if (e.key === 'Escape' && indexOpen.value) indexOpen.value = false
}

// ─── Chladni canvas (adapted from DialecticDialogue.vue) ─────────────────────
type Kind = 'cos' | 'sin' | 'mixed' | 'radial'
interface Mode {
  n: number
  m: number
  kind: Kind
}

/**
 * The full mode catalogue from DialecticDialogue.vue — every entry preserves
 * the centre as an antinode so the thesis text always reads cleanly. One
 * random mode is picked on mount and held through keyword → opinion → thesis;
 * a second (different) random mode is picked when morphing to antithesis.
 */
const MODES: Mode[] = [
  // cos-symmetric (even/even)
  { n: 2, m: 2, kind: 'cos' },
  { n: 2, m: 4, kind: 'cos' },
  { n: 2, m: 6, kind: 'cos' },
  { n: 2, m: 8, kind: 'cos' },
  { n: 2, m: 10, kind: 'cos' },
  { n: 4, m: 4, kind: 'cos' },
  { n: 4, m: 6, kind: 'cos' },
  { n: 4, m: 8, kind: 'cos' },
  { n: 4, m: 10, kind: 'cos' },
  { n: 6, m: 6, kind: 'cos' },
  { n: 6, m: 8, kind: 'cos' },
  { n: 8, m: 8, kind: 'cos' },
  // sin-symmetric (odd/odd)
  { n: 1, m: 3, kind: 'sin' },
  { n: 1, m: 5, kind: 'sin' },
  { n: 1, m: 7, kind: 'sin' },
  { n: 1, m: 9, kind: 'sin' },
  { n: 3, m: 3, kind: 'sin' },
  { n: 3, m: 5, kind: 'sin' },
  { n: 3, m: 7, kind: 'sin' },
  { n: 3, m: 9, kind: 'sin' },
  { n: 5, m: 5, kind: 'sin' },
  { n: 5, m: 7, kind: 'sin' },
  // mixed (one even, one odd)
  { n: 1, m: 2, kind: 'mixed' },
  { n: 1, m: 4, kind: 'mixed' },
  { n: 2, m: 3, kind: 'mixed' },
  { n: 2, m: 5, kind: 'mixed' },
  { n: 3, m: 4, kind: 'mixed' },
  { n: 3, m: 6, kind: 'mixed' },
  { n: 4, m: 5, kind: 'mixed' },
  // radial (concentric rings)
  { n: 2, m: 0, kind: 'radial' },
  { n: 3, m: 0, kind: 'radial' },
  { n: 4, m: 0, kind: 'radial' },
]

let currentModeIdx = 0

function pickRandomMode(excludeIdx = -1): { mode: Mode; idx: number } {
  for (let tries = 0; tries < 16; tries++) {
    const idx = Math.floor(Math.random() * MODES.length)
    if (idx !== excludeIdx) return { mode: MODES[idx], idx }
  }
  return { mode: MODES[0], idx: 0 }
}

const GRID = 512
const RADIAL_TABLE_SIZE = 512
const RADIAL_R_MAX = 1.6
const VIS_THRESHOLD = 0.4
const STEP_SCALE = 8
const STEP_MIN = 0.18
const ADDITIVE_GAIN = 180
const MAX_RENDER_AREA = 3_000_000
const TRANSITION_SPEED = 0.035

const canvasEl = ref<HTMLCanvasElement | null>(null)

let canvasWidth = 1920
let canvasHeight = 1080
let N_PARTICLES = 100000
let particles: Float32Array | null = null
// Initial values are placeholders; the real initial mode is picked randomly
// in initCanvas() so each /form/:category visit gets a fresh pattern.
let nVal = 2
let mVal = 4
let currentKind: Kind = 'cos'
let oldKind: Kind | null = null
let transitionT = 1
let raf = 0
let ctx: CanvasRenderingContext2D | null = null
let imageData: ImageData | null = null
let dataBuf: Uint8ClampedArray | null = null
let bgBuf: Uint8ClampedArray | null = null

const cosN = new Float32Array(GRID)
const cosM = new Float32Array(GRID)
const sinN = new Float32Array(GRID)
const sinM = new Float32Array(GRID)
const cosRadial = new Float32Array(RADIAL_TABLE_SIZE)
const oldCosN = new Float32Array(GRID)
const oldCosM = new Float32Array(GRID)
const oldSinN = new Float32Array(GRID)
const oldSinM = new Float32Array(GRID)
const oldCosRadial = new Float32Array(RADIAL_TABLE_SIZE)

function buildCartTables() {
  for (let i = 0; i < GRID; i++) {
    const t = i / GRID
    const tn = nVal * Math.PI * t
    const tm = mVal * Math.PI * t
    cosN[i] = Math.cos(tn)
    cosM[i] = Math.cos(tm)
    sinN[i] = Math.sin(tn)
    sinM[i] = Math.sin(tm)
  }
}

function buildRadialTable() {
  for (let i = 0; i < RADIAL_TABLE_SIZE; i++) {
    const r = (i / RADIAL_TABLE_SIZE) * RADIAL_R_MAX
    cosRadial[i] = Math.cos(nVal * Math.PI * r)
  }
}

function snapshotCurrentToOld() {
  oldCosN.set(cosN)
  oldCosM.set(cosM)
  oldSinN.set(sinN)
  oldSinM.set(sinM)
  oldCosRadial.set(cosRadial)
}

/** Just sets `stage.value`. The pattern is intentionally NOT changed for
 *  keyword/opinion/thesis stages — they share the random initial pattern. */
function setStage(s: Stage) {
  stage.value = s
}

/** Morph the canvas to a new mode with a cross-fade transition. Pass the
 *  mode's idx so subsequent random picks can exclude it. */
function morphToMode(mode: Mode, idx?: number) {
  snapshotCurrentToOld()
  oldKind = currentKind
  nVal = mode.n
  mVal = mode.m
  currentKind = mode.kind
  if (idx !== undefined) currentModeIdx = idx
  buildCartTables()
  if (currentKind === 'radial') buildRadialTable()
  transitionT = 0
}

function tick() {
  // Always re-schedule the next frame FIRST. If anything inside this tick
  // throws (a detached canvas during HMR, a transient null buffer during
  // resize, etc.), we still want the loop to recover next frame instead of
  // dying silently and freezing the whole experience.
  raf = requestAnimationFrame(tick)
  try {
    tickBody()
  } catch (err) {
    if (import.meta.env.DEV) console.warn('[Category tick] recovered from', err)
  }
}

function tickBody() {
  if (!ctx || !dataBuf || !bgBuf || !particles || !imageData) return

  if (transitionT < 1) {
    transitionT += TRANSITION_SPEED
    if (transitionT >= 1) {
      transitionT = 1
      oldKind = null
    }
  }

  dataBuf.set(bgBuf)
  const invThresh = 1 / VIS_THRESHOLD
  const gridRX = GRID / canvasWidth
  const gridRY = GRID / canvasHeight
  const halfW = canvasWidth * 0.5
  const halfH = canvasHeight * 0.5
  const halfMin = halfW < halfH ? halfW : halfH
  const invHalfMin = 1 / halfMin
  const rIdxScale = RADIAL_TABLE_SIZE / RADIAL_R_MAX
  const kind = currentKind
  const oldK = oldKind
  const inTransition = oldK !== null
  const tw = inTransition
    ? transitionT * transitionT * (3 - 2 * transitionT)
    : 1
  const tw1 = 1 - tw

  for (let i = 0; i < N_PARTICLES; i++) {
    const base = i * 3
    let px = particles[base]
    let py = particles[base + 1]
    const grain = particles[base + 2]

    let zNew: number
    const ix = (px * gridRX) | 0
    const iy = (py * gridRY) | 0
    if (kind === 'radial') {
      const dx = px - halfW
      const dy = py - halfH
      const r = Math.sqrt(dx * dx + dy * dy) * invHalfMin
      let rIdx = (r * rIdxScale) | 0
      if (rIdx >= RADIAL_TABLE_SIZE) rIdx = RADIAL_TABLE_SIZE - 1
      zNew = cosRadial[rIdx]
    } else if (kind === 'sin') {
      zNew = sinN[ix] * sinM[iy] + sinM[ix] * sinN[iy]
    } else if (kind === 'mixed') {
      zNew = cosN[ix] * sinM[iy] + cosM[ix] * sinN[iy]
    } else {
      zNew = cosN[ix] * cosM[iy] + cosM[ix] * cosN[iy]
    }

    let z: number
    if (inTransition) {
      let zOld: number
      if (oldK === 'radial') {
        const dx = px - halfW
        const dy = py - halfH
        const r = Math.sqrt(dx * dx + dy * dy) * invHalfMin
        let rIdx = (r * rIdxScale) | 0
        if (rIdx >= RADIAL_TABLE_SIZE) rIdx = RADIAL_TABLE_SIZE - 1
        zOld = oldCosRadial[rIdx]
      } else if (oldK === 'sin') {
        zOld = oldSinN[ix] * oldSinM[iy] + oldSinM[ix] * oldSinN[iy]
      } else if (oldK === 'mixed') {
        zOld = oldCosN[ix] * oldSinM[iy] + oldCosM[ix] * oldSinN[iy]
      } else {
        zOld = oldCosN[ix] * oldCosM[iy] + oldCosM[ix] * oldCosN[iy]
      }
      z = tw * zNew + tw1 * zOld
    } else {
      z = zNew
    }
    const az = z < 0 ? -z : z

    const step = az * az * STEP_SCALE + STEP_MIN
    px += (Math.random() - 0.5) * step
    py += (Math.random() - 0.5) * step

    if (px < 0) px += canvasWidth
    else if (px >= canvasWidth) px -= canvasWidth
    if (py < 0) py += canvasHeight
    else if (py >= canvasHeight) py -= canvasHeight

    particles[base] = px
    particles[base + 1] = py

    if (az < VIS_THRESHOLD) {
      const u = az * invThresh
      const omU = 1 - u
      const intensity = omU * omU * omU * grain
      const contrib = (intensity * ADDITIVE_GAIN) | 0
      if (contrib > 0) {
        const xi = px | 0
        const yi = py | 0
        if (xi >= 0 && xi < canvasWidth && yi >= 0 && yi < canvasHeight) {
          const idx = (yi * canvasWidth + xi) * 4
          let v = dataBuf[idx] + contrib
          if (v > 255) v = 255
          dataBuf[idx] = v
          dataBuf[idx + 1] = v
          dataBuf[idx + 2] = v > 24 ? v - 4 : v
          dataBuf[idx + 3] = 255
        }
      }
    }
  }

  ctx.putImageData(imageData, 0, 0)

  // Float the items in the same rAF tick. Cheap (a few DOM writes per frame)
  // and avoids fighting the canvas for the frame budget.
  tickFloating()
}

function initCanvas() {
  const c = canvasEl.value
  if (!c) return
  const cssW = window.innerWidth
  const cssH = window.innerHeight
  const area = cssW * cssH
  const scaleFactor =
    area > MAX_RENDER_AREA ? Math.sqrt(MAX_RENDER_AREA / area) : 1
  canvasWidth = Math.max(1, Math.floor(cssW * scaleFactor))
  canvasHeight = Math.max(1, Math.floor(cssH * scaleFactor))
  c.width = canvasWidth
  c.height = canvasHeight
  c.style.width = '100%'
  c.style.height = '100%'

  ctx = c.getContext('2d')
  if (!ctx) return
  imageData = ctx.createImageData(canvasWidth, canvasHeight)
  dataBuf = imageData.data

  bgBuf = new Uint8ClampedArray(dataBuf.length)
  for (let i = 0; i < bgBuf.length; i += 4) {
    bgBuf[i] = 24 // #181618 R
    bgBuf[i + 1] = 22 // #181618 G
    bgBuf[i + 2] = 24 // #181618 B
    bgBuf[i + 3] = 255
  }

  N_PARTICLES = Math.min(
    180000,
    Math.max(60000, Math.floor(Math.sqrt(canvasWidth * canvasHeight) * 110)),
  )
  particles = new Float32Array(N_PARTICLES * 3)
  for (let i = 0; i < N_PARTICLES; i++) {
    particles[i * 3] = Math.random() * canvasWidth
    particles[i * 3 + 1] = Math.random() * canvasHeight
    particles[i * 3 + 2] = 0.45 + Math.random() * 0.55
  }

  // Pick the random initial mode (held for keyword/opinion/thesis stages).
  const initial = pickRandomMode()
  currentModeIdx = initial.idx
  nVal = initial.mode.n
  mVal = initial.mode.m
  currentKind = initial.mode.kind

  buildCartTables()
  buildRadialTable()
}

let resizeTimer = 0
function onResize() {
  if (resizeTimer) clearTimeout(resizeTimer)
  resizeTimer = window.setTimeout(() => {
    initCanvas()
    updateViewport()
    // Orbit positions are recomputed every tick from baseAngle + globalAngle
    // and the live viewport dims — nothing else to do here.
  }, 200)
}

// Rebuild the floating items whenever the stage (or active keyword / category)
// changes. The watcher fires after onMounted so the initial seeding is handled
// here, not in setup.
watch(
  [stage, selectedKeyword, categoryKeywords],
  () => {
    void rebuildFloatingItems()
  },
  { flush: 'post' },
)

onMounted(async () => {
  updateViewport()
  initCanvas()
  window.addEventListener('pointermove', onGlobalPointerMove)
  window.addEventListener('pointerup', onGlobalPointerUp)
  window.addEventListener('pointercancel', onGlobalPointerCancel)
  window.addEventListener('blur', onWindowBlur)
  document.addEventListener('visibilitychange', onVisibilityChange)
  window.addEventListener('resize', onResize)
  window.addEventListener('keydown', onIndexKey)
  raf = requestAnimationFrame(tick)
  await rebuildFloatingItems()
})

onUnmounted(() => {
  cancelAnimationFrame(raf)
  window.removeEventListener('pointermove', onGlobalPointerMove)
  window.removeEventListener('pointerup', onGlobalPointerUp)
  window.removeEventListener('pointercancel', onGlobalPointerCancel)
  window.removeEventListener('blur', onWindowBlur)
  document.removeEventListener('visibilitychange', onVisibilityChange)
  window.removeEventListener('resize', onResize)
  window.removeEventListener('keydown', onIndexKey)
  if (resizeTimer) clearTimeout(resizeTimer)
  physics.clear()
  itemRefs.clear()
})
</script>

<template>
  <div ref="stageEl" class="dialectic-form">
    <canvas ref="canvasEl" class="form-canvas" aria-hidden="true"></canvas>

    <!-- Center thesis text — sits in the central antinode of every chosen mode.
         `:key` re-mounts on stage/selection change; CSS keyframe runs on each
         new element. (Vue's <Transition> is unreliable here for the same rAF
         reason that breaks <TransitionGroup>.) -->
    <div class="form-center" :class="{ 'is-active-drop': draggingOverCenter }">
      <p
        :key="centerTextKey"
        class="form-thesis"
        :class="{ 'is-antithesis': stage === 'antithesis' }"
      >
        {{ centerText }}
      </p>
    </div>

    <!-- Floating items: keywords on stage 1, opinion phrases on stage 2.
         Each item is positioned via a JS-controlled `transform` written every
         rAF tick (see `tickFloating`). The element itself moves when dragged
         — there is no separate ghost layer. -->
    <div class="float-layer" :class="`stage-${stage}`">
      <div
        v-for="item in floatingItems"
        :key="item.id"
        :ref="
          (el) => {
            if (el) itemRefs.set(item.id, el as HTMLElement)
            else itemRefs.delete(item.id)
          }
        "
        class="float-item"
        :class="{ 'is-dragging': draggingId === item.id }"
        @pointerdown="onItemPointerDown($event, item.id)"
      >
        {{ item.label.toLowerCase() }}
      </div>
    </div>

    <!-- Restart icon — restarts the form on the same topic. Visible at every
         stage (keyword, opinion, thesis, antithesis). -->
    <button
      class="corner-bc form-restart-btn"
      type="button"
      aria-label="New opinion"
      title="New opinion"
      @click="restartOpinion"
    >
      <svg
        viewBox="0 0 24 24"
        width="24"
        height="24"
        fill="none"
        stroke="currentColor"
        stroke-width="1"
        aria-hidden="true"
      >
        <path d="M21 12a9 9 0 1 1-3-6.7L21 8" />
        <polyline points="21 3 21 8 16 8" />
      </svg>
    </button>

    <!-- Sub-instruction teleported into the layout chrome. Same pattern as
         the topic index on /form. -->
    <Teleport to="#layout-extra-slot">
      <p v-if="showIndexLink" class="home-subinstructions">
        or check the
        <button
          type="button"
          class="topic-index-link"
          @click="indexOpen = true"
        >{{ indexLabel }}</button>
      </p>
    </Teleport>

    <!-- Index modal — lists every option for the current stage. Same chrome
         + transition as the topic index. -->
    <Transition name="modal">
      <div
        v-if="indexOpen"
        class="topic-modal-overlay"
        role="dialog"
        aria-modal="true"
        aria-labelledby="opinion-index-title"
        @click.self="indexOpen = false"
      >
        <div class="topic-modal">
          <header class="topic-modal-header">
            <h2 id="opinion-index-title" class="topic-modal-title">
              {{ indexLabel }}
            </h2>
            <button
              type="button"
              class="topic-modal-close"
              aria-label="Close"
              @click="indexOpen = false"
            >
              <svg
                viewBox="0 0 24 24"
                width="20"
                height="20"
                fill="none"
                stroke="currentColor"
                stroke-width="1.2"
              >
                <path d="M6 6 L18 18 M18 6 L6 18" />
              </svg>
            </button>
          </header>
          <div class="topic-modal-body">
            <ul
              class="topic-list"
              :class="{ 'topic-list-prose': stage === 'opinion' }"
            >
              <li v-for="item in indexItems" :key="item.id">
                <a class="topic-link" @click="selectFromIndex(item.id)">
                  {{ item.label }}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Transition>
  </div>
</template>

<style scoped>
.dialectic-form {
  position: fixed;
  inset: 0;
  background: var(--bg);
  overflow: hidden;
}

.form-canvas {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  display: block;
  image-rendering: pixelated;
  z-index: 0;
}

/* ── Center thesis text ── */
.form-center {
  position: absolute;
  inset: 0;
  display: grid;
  place-items: center;
  pointer-events: none;
  z-index: 10;
  padding: 4vmin;
}

.form-thesis {
  max-width: clamp(220px, 32vmin, 380px);
  text-align: center;
  font-family: 'Reddit Mono', monospace;
  /* Intentionally smaller than the floating items so the hierarchy reads as
     "items orbit a quiet centre" rather than "central text dominates". */
  font-size: var(--fs-body);
  line-height: 1.5;
  color: var(--text);
  margin: 0;
  text-shadow:
    0 0 6px rgba(24, 22, 24, 0.95),
    0 0 14px rgba(24, 22, 24, 0.9);
  /* Fade-in on every centerTextKey change. Vue <Transition> hangs under the
     canvas's rAF load — keyframe + :key remount runs natively. */
  animation: form-thesis-in 0.5s cubic-bezier(0.22, 1, 0.36, 1) both;
}
.form-thesis.is-antithesis {
  font-style: italic;
}

/* Drop-zone indicator — set on .form-center while a drag is inside
   CENTER_RADIUS. Pure feedback, no layout change. */
.form-center.is-active-drop .form-thesis {
  color: var(--accent);
  transition: color 0.2s ease;
}

@keyframes form-thesis-in {
  from { opacity: 0; transform: translateY(10px); }
  to   { opacity: 1; transform: translateY(0); }
}

/* ── Floating items ────────────────────────────────────────────────────── */
.float-layer {
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 5;
}

.float-item {
  /* `transform` is rewritten every rAF tick by JS — no CSS transition on it,
     no `top/left` positioning, no centre-translate. The element starts at
     (0, 0) and is moved entirely via translate3d. */
  position: absolute;
  top: 0;
  left: 0;
  pointer-events: all;
  cursor: grab;

  font-family: 'Gap Sans', sans-serif;
  /* Per-stage font sizes set below — keywords (subtopics) read larger so
     they're easy to grab; opinion phrases stay compact so the long sentences
     don't dominate the orbit. */
  letter-spacing: -0.005em;
  color: var(--text);
  text-transform: lowercase;
  line-height: 1.2;
  text-align: center;

  /* Constrain long opinion phrases to a readable column. */
  max-width: clamp(160px, 18vw, 240px);

  user-select: none;
  -webkit-user-select: none;
  touch-action: none;

  text-shadow:
    0 0 6px rgba(24, 22, 24, 0.95),
    0 0 12px rgba(24, 22, 24, 0.85);
  /* Hint to the compositor — translate3d is updated per frame. */
  will-change: transform;
  animation: float-fade-in 0.4s ease both;

  /* Smooth hover colour transition. Transform stays driven by JS. */
  transition: color 0.18s ease;
}
.float-item:hover {
  color: var(--accent);
}
.float-item.is-dragging {
  /* Raised so the dragged item paints above any items it crosses, and above
     the centre text (z-index 10) so the user sees it enter the drop zone. */
  z-index: 50;
  cursor: grabbing;
  color: var(--accent);
}
@keyframes float-fade-in {
  from { opacity: 0; }
  to   { opacity: 1; }
}

/* Per-stage size hierarchy. Subtopics (keyword stage) are bold and large;
   completing phrases (opinion stage) stay readable but compact. */
.float-layer.stage-keyword .float-item {
  font-size: clamp(1.125rem, 1.65vw, 1.5rem);
}
.float-layer.stage-opinion .float-item {
  font-size: clamp(0.875rem, 1.15vw, 1.125rem);
}

/* ── Restart icon button (bottom centre) ─────────────────────────────────── */
.form-restart-btn {
  background: none;
  border: 0;
  padding: 0.25rem;
  color: var(--text);
  cursor: pointer;
  /* Full opacity at rest — parent opacity would also dim the SVG halo. */
  opacity: 1;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition:
    color 0.18s ease,
    transform 0.4s cubic-bezier(0.22, 1, 0.36, 1);
}
.form-restart-btn svg {
  /* Same dark backdrop the chrome text gets — the icon's thin strokes
     would otherwise wash out against the bright Chladni nodal lines. */
  filter: var(--icon-halo);
}
.form-restart-btn:hover {
  /* Matches the active form: green + clockwise spin in place (direction of the
     arrow's tip). The translateX(-50%) from .corner-bc is repeated so the
     button doesn't jump sideways when the hover transform replaces it. */
  color: var(--accent);
  transform: translateX(-50%) rotate(180deg);
}
</style>
