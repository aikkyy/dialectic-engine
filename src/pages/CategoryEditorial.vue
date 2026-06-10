<script setup lang="ts">
/**
 * CategoryEditorial.vue — editorial-list variant of the form.
 *
 * Design beats:
 *   1. Build (keyword + opinion) — numbered list on the left, calm. Centre
 *      text small. Chladni drifts in its initial mode.
 *   2. Hold (thesis) — list fades out, centre expands the full thesis. Pattern
 *      is intentionally still.
 *   3. Reveal (antithesis) — pattern morphs (the only big motion event in the
 *      entire experience), text crossfades to the antithesis. The quiet of
 *      Build is what gives this moment its weight.
 *
 * Drag mechanics: the row label itself moves via `transform: translate3d`
 * while the row slot stays anchored. Drop in the centre = select. Drop
 * outside = elastic snap back.
 *
 * The original floating-words variant lives at Category.vue (untouched).
 */

import { computed, onMounted, onUnmounted, ref } from 'vue'
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
const selectedOpinion = ref<{ opinion: string; antithesis: string } | null>(
  null,
)

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

const categoryKeywords = computed<EngineOpinionType[]>(() =>
  engineOpinions.filter(
    (o) => o.category.toLowerCase() === category.value.toLowerCase(),
  ),
)

// ─── Editorial list source ───────────────────────────────────────────────────
interface ListItem {
  id: string
  label: string
}

const listItems = computed<ListItem[]>(() => {
  if (stage.value === 'keyword') {
    return categoryKeywords.value.map((e, i) => ({
      id: `kw-${i}`,
      label: e.keyword,
    }))
  }
  if (stage.value === 'opinion' && selectedKeyword.value) {
    return selectedKeyword.value.data.map((op, i) => ({
      id: `op-${i}`,
      label: op.opinion,
    }))
  }
  return []
})

const showList = computed(
  () => stage.value === 'keyword' || stage.value === 'opinion',
)

// ─── Centre text ─────────────────────────────────────────────────────────────
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
// The row stays put. The `.row-label` inside translates to follow the pointer
// and either selects (centre drop) or elastically snaps back.
const stageEl = ref<HTMLElement | null>(null)
const draggingId = ref<string | null>(null)
const itemRefs = new Map<string, HTMLElement>()
let labelInitialX = 0
let labelInitialY = 0
let dragGrabOffsetX = 0
let dragGrabOffsetY = 0
const CENTER_RADIUS = 220

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
  // Cancel any pending snap-back transition so the new drag starts crisply.
  el.style.transition = 'none'
  el.style.transform = ''
  const rect = el.getBoundingClientRect()
  labelInitialX = rect.x
  labelInitialY = rect.y
  dragGrabOffsetX = e.clientX - rect.x
  dragGrabOffsetY = e.clientY - rect.y
  draggingId.value = id
  ;(e.currentTarget as HTMLElement).setPointerCapture(e.pointerId)
}

function onGlobalPointerMove(e: PointerEvent) {
  const id = draggingId.value
  if (!id) return
  const el = itemRefs.get(id)
  if (!el) return
  const dx = e.clientX - dragGrabOffsetX - labelInitialX
  const dy = e.clientY - dragGrabOffsetY - labelInitialY
  el.style.transform = `translate3d(${dx}px, ${dy}px, 0)`
}

function onGlobalPointerUp(e: PointerEvent) {
  if (!draggingId.value) return
  const id = draggingId.value
  const el = itemRefs.get(id)
  draggingId.value = null
  if (isInsideCenter(e.clientX, e.clientY)) {
    selectItem(id)
    return
  }
  // Elastic snap-back. Spring-like cubic-bezier.
  if (el) {
    el.style.transition = 'transform 0.45s cubic-bezier(0.22, 1, 0.36, 1)'
    el.style.transform = 'translate3d(0, 0, 0)'
    window.setTimeout(() => {
      if (el) {
        el.style.transition = ''
        el.style.transform = ''
      }
    }, 460)
  }
}

// ─── Stage progression ───────────────────────────────────────────────────────
function setStage(s: Stage) {
  stage.value = s
}

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
    // No delay — morph + flip. This is the Reveal beat.
    const next = pickRandomMode(currentModeIdx)
    morphToMode(next.mode, next.idx)
    setStage('antithesis')
  }
}

function restartOpinion() {
  selectedKeyword.value = null
  selectedOpinion.value = null
  setStage('keyword')
  const { mode, idx } = pickRandomMode(currentModeIdx)
  morphToMode(mode, idx)
}

// ─── Chladni canvas (adapted from DialecticDialogue.vue asset) ───────────────
type Kind = 'cos' | 'sin' | 'mixed' | 'radial'
interface Mode {
  n: number
  m: number
  kind: Kind
}

/** Full mode catalogue — every entry keeps centre as antinode so the thesis
 *  text reads cleanly over the pattern. */
const MODES: Mode[] = [
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
  { n: 1, m: 2, kind: 'mixed' },
  { n: 1, m: 4, kind: 'mixed' },
  { n: 2, m: 3, kind: 'mixed' },
  { n: 2, m: 5, kind: 'mixed' },
  { n: 3, m: 4, kind: 'mixed' },
  { n: 3, m: 6, kind: 'mixed' },
  { n: 4, m: 5, kind: 'mixed' },
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
let nVal = MODES[0].n
let mVal = MODES[0].m
let currentKind: Kind = MODES[0].kind
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
  if (!ctx || !dataBuf || !bgBuf || !particles || !imageData) {
    raf = requestAnimationFrame(tick)
    return
  }

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
  raf = requestAnimationFrame(tick)
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

  // Seed with a random initial mode — this is the pattern that stays through
  // keyword, opinion, and thesis stages. It's the "calm before the morph".
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
  resizeTimer = window.setTimeout(initCanvas, 200)
}

onMounted(() => {
  initCanvas()
  window.addEventListener('pointermove', onGlobalPointerMove)
  window.addEventListener('pointerup', onGlobalPointerUp)
  window.addEventListener('resize', onResize)
  raf = requestAnimationFrame(tick)
})

onUnmounted(() => {
  cancelAnimationFrame(raf)
  window.removeEventListener('pointermove', onGlobalPointerMove)
  window.removeEventListener('pointerup', onGlobalPointerUp)
  window.removeEventListener('resize', onResize)
  if (resizeTimer) clearTimeout(resizeTimer)
  itemRefs.clear()
})
</script>

<template>
  <div ref="stageEl" class="dialectic-form">
    <canvas ref="canvasEl" class="form-canvas" aria-hidden="true"></canvas>

    <!-- Centre thesis text. `:key` re-mounts on stage/selection change so the
         CSS keyframe runs each beat. The `.has-list` class shifts the centred
         block into the right column on wide viewports so it doesn't sit on top
         of the editorial list on the left. -->
    <div class="form-center" :class="{ 'has-list': showList }">
      <p
        :key="centerTextKey"
        class="form-thesis"
        :class="{ 'is-antithesis': stage === 'antithesis' }"
      >
        {{ centerText }}
      </p>
    </div>

    <!-- Editorial list — only on Build stages. -->
    <ol
      v-if="showList"
      :key="stage + '-list'"
      class="editorial-list"
      :class="{ 'stage-opinion': stage === 'opinion' }"
    >
      <li
        v-for="(item, i) in listItems"
        :key="item.id"
        class="editorial-row"
        :class="{ 'is-dragging': draggingId === item.id }"
        :style="{ '--idx': i }"
      >
        <span class="row-number">{{ String(i + 1).padStart(2, '0') }}</span>
        <span class="row-dash"></span>
        <span
          class="row-label"
          :ref="
            (el) => {
              if (el) itemRefs.set(item.id, el as HTMLElement)
              else itemRefs.delete(item.id)
            }
          "
          @pointerdown="onItemPointerDown($event, item.id)"
        >
          {{ item.label.toLowerCase() }}
        </span>
      </li>
    </ol>

    <button
      class="btn corner-bc form-restart-btn"
      type="button"
      @click="restartOpinion"
    >
      New Opinion
    </button>
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

/* ── Centre thesis text ────────────────────────────────────────────────── */
.form-center {
  position: absolute;
  inset: 0;
  display: grid;
  place-items: center;
  pointer-events: none;
  z-index: 10;
  padding: 4vmin;
}

@media (min-width: 768px) {
  .form-center.has-list {
    /* Reserve the left column for the editorial list. */
    left: clamp(320px, 40vw, 560px);
  }
}

.form-thesis {
  max-width: clamp(220px, 32vmin, 380px);
  text-align: center;
  font-family: 'Reddit Mono', monospace;
  font-size: var(--fs-body);
  line-height: 1.5;
  color: var(--text);
  margin: 0;
  text-shadow:
    0 0 6px rgba(24, 22, 24, 0.95),
    0 0 14px rgba(24, 22, 24, 0.9);
  animation: form-thesis-in 0.5s cubic-bezier(0.22, 1, 0.36, 1) both;
}
.form-thesis.is-antithesis {
  font-style: italic;
}
@keyframes form-thesis-in {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* ── Editorial list ────────────────────────────────────────────────────── */
.editorial-list {
  position: absolute;
  top: clamp(8rem, 18vh, 12rem);
  left: var(--edge-x);
  z-index: 5;
  width: clamp(280px, 36vw, 520px);
  /* Leave room above the corner buttons. */
  max-height: calc(100vh - clamp(8rem, 18vh, 12rem) - 6rem);
  list-style: none;
  margin: 0;
  padding: 0 0.5rem 0 0;
  display: flex;
  flex-direction: column;
  gap: clamp(1.75rem, 3vh, 3rem);
  overflow-y: auto;
  /* Hide scrollbar — content still scrolls via wheel/trackpad. */
  scrollbar-width: none;
}
.editorial-list::-webkit-scrollbar {
  display: none;
}

.editorial-row {
  display: flex;
  align-items: baseline;
  gap: 1rem;
  color: var(--text);
  font-family: 'Gap Sans', sans-serif;
  /* Big editorial type for keyword stage. */
  font-size: clamp(1.5rem, 2.4vw, 2.25rem);
  letter-spacing: -0.005em;
  text-transform: lowercase;
  line-height: 1.15;
  /* Staggered entrance. */
  animation: row-in 0.55s cubic-bezier(0.22, 1, 0.36, 1) both;
  animation-delay: calc(var(--idx, 0) * 55ms);
}

/* Opinion stage: phrases are long. Tighter type + tighter gaps so more fit. */
.editorial-list.stage-opinion {
  gap: clamp(1.25rem, 2.5vh, 2.25rem);
}
.editorial-list.stage-opinion .editorial-row {
  font-size: clamp(1.125rem, 1.6vw, 1.5rem);
  gap: 0.75rem;
  align-items: flex-start;
}

.row-number {
  font-family: 'Reddit Mono', monospace;
  font-size: var(--fs-small);
  opacity: 0.5;
  letter-spacing: 0.08em;
  font-variant-numeric: tabular-nums;
  flex-shrink: 0;
  padding-top: 0.5em;
}

.row-dash {
  display: inline-block;
  height: 1px;
  width: 1.75rem;
  background: currentColor;
  opacity: 0.4;
  margin-top: 0.7em;
  flex-shrink: 0;
  transition:
    width 0.25s cubic-bezier(0.22, 1, 0.36, 1),
    opacity 0.25s ease;
}

.row-label {
  cursor: grab;
  display: inline-block;
  padding: 0.05em 0;
  user-select: none;
  -webkit-user-select: none;
  touch-action: none;
  text-shadow: 0 0 6px rgba(24, 22, 24, 0.95);
  will-change: transform;
  position: relative;
  z-index: 1;
}

.editorial-row:hover .row-dash {
  width: 2.5rem;
  opacity: 0.75;
}
.editorial-row:hover .row-label {
  text-shadow:
    0 0 10px rgba(250, 249, 246, 0.45),
    0 0 22px rgba(250, 249, 246, 0.18);
}

.editorial-row.is-dragging .row-label {
  cursor: grabbing;
  /* Above central text (z 10) so the user sees the drop happen on top. */
  z-index: 100;
  text-shadow:
    0 0 14px rgba(250, 249, 246, 0.6),
    0 6px 20px rgba(0, 0, 0, 0.6);
}

@keyframes row-in {
  from {
    opacity: 0;
    transform: translateX(-14px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}
</style>
