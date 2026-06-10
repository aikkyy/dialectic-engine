<script setup lang="ts">
/**
 * Category.vue — freeform thesis form (current active form)
 *
 * The user writes their own thesis after "I believe that <topic>" using
 * a minimal inline input. Below the centre block, a cycling italic line
 * suggests example theses from the data so the user has inspiration
 * without being forced into a fixed answer.
 *
 * Stages:
 *   1. 'input'      — input visible, suggestions cycle below
 *   2. 'antithesis' — pattern morphs, user's thesis stays in centre, a
 *                     counterpoint (from the data) appears below
 *
 * The previous drag-and-drop version is preserved at
 * `pages/CategoryDragAndDrop.vue` in case we want to revert / A-B.
 */

import {
  computed,
  nextTick,
  onMounted,
  onUnmounted,
  ref,
  watch,
} from 'vue'
import { useRoute } from 'vue-router'
import { engineOpinions } from '../data/engineOpinions'
import { saveSelectionArchive } from '../utils/selectionArchives'
import { usePageLayout } from '../composables/usePageLayout'

const route = useRoute()
const category = computed(() => String(route.params.category ?? ''))

type Stage = 'input' | 'thinking' | 'antithesis' | 'warning'
const stage = ref<Stage>('input')

/** What the user typed after "I believe that <topic>". */
const userThesis = ref('')
/** The antithesis returned for the user's thesis (the full, final text). */
const antithesis = ref('')
/** The progressively-revealed slice of `antithesis` — the engine "types" its
 *  counter-argument out a character at a time, like it's thinking aloud. */
const typedAntithesis = ref('')
/** A warning shown when the input couldn't be understood. */
const warningMsg = ref('')

usePageLayout({
  instructions: () => {
    switch (stage.value) {
      case 'input':
        return '*write* your thesis to see its antithesis'
      case 'thinking':
        return 'generating the antithesis…'
      case 'antithesis':
        return 'this is the antithesis'
      case 'warning':
        return 'we could not read that as a thesis'
    }
  },
  topic: () => category.value,
})

// ─── Data for this topic ────────────────────────────────────────────────────
const categoryEntries = computed(() =>
  engineOpinions.filter(
    (o) => o.category.toLowerCase() === category.value.toLowerCase(),
  ),
)

/** Flat list of every (subtopic, opinion, antithesis) for this topic.
 *  Used both for the cycling suggestions below the centre and for picking
 *  a counter-point when the user submits. */
interface FlatOpinion {
  keyword: string
  opinion: string
  antithesis: string
}
const flatOpinions = computed<FlatOpinion[]>(() => {
  const out: FlatOpinion[] = []
  for (const entry of categoryEntries.value) {
    for (const op of entry.data) {
      const a = (op as any).antiThesis ?? (op as any).antithesis ?? ''
      out.push({ keyword: entry.keyword, opinion: op.opinion, antithesis: a })
    }
  }
  return out
})

// ─── Cycling thesis suggestions (italic, subtle, below centre) ──────────────
// On mount, shuffle the suggestion list once so each session feels fresh.
// A periodic timer advances the index — the displayed line is a `:key`'d
// element so a CSS keyframe handles the crossfade. The interval is paused
// while the user is typing so the motion doesn't distract.
/** How long each suggestion stays on screen. Slow enough that the user
 *  can actually read a full thesis sentence, consider it, and decide
 *  whether to copy it into their own input — not a ticker. */
const SUGGESTION_INTERVAL_MS = 9000
const suggestionOrder = ref<number[]>([])
const suggestionIdx = ref(0)
let suggestionTimer: number | null = null

function shuffleSuggestions() {
  const n = flatOpinions.value.length
  const arr = Array.from({ length: n }, (_, i) => i)
  // Fisher-Yates
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[arr[i], arr[j]] = [arr[j], arr[i]]
  }
  suggestionOrder.value = arr
  suggestionIdx.value = 0
}

function advanceSuggestion() {
  if (!suggestionOrder.value.length) return
  suggestionIdx.value =
    (suggestionIdx.value + 1) % suggestionOrder.value.length
}

const currentSuggestion = computed<string>(() => {
  const order = suggestionOrder.value
  if (!order.length || !flatOpinions.value.length) return ''
  const flat = flatOpinions.value[order[suggestionIdx.value]]
  if (!flat) return ''
  // Drop the "I believe that" prefix from the suggestion line — that
  // phrase already lives in the centre prompt above the input, so the
  // suggestion reads as a continuation of it. The leading "... " makes
  // the relationship obvious typographically.
  return `... ${flat.keyword} ${flat.opinion}`
})

/** True while a suggestion has been picked but the antithesis flow
 *  hasn't started yet — drives the brief "you chose this" pause where
 *  the input shows the populated text, the cycling suggestions are
 *  hidden, and nothing else can change. */
const isSelecting = ref(false)

/** User clicked the currently-shown suggestion. Drop its text into the input
 *  (just the "<subtopic> <opinion>" portion that follows "I believe that" in
 *  the prompt) and submit immediately, so the "thinking…" state appears right
 *  away with no delay. `isSelecting` stays true through the submit — the stage
 *  flips to 'thinking' inside submitThesis(), which hides the suggestion area
 *  via the v-if on stage. restartOpinion() resets it if the user starts over. */
function selectSuggestion() {
  if (isSelecting.value || stage.value !== 'input') return
  const order = suggestionOrder.value
  if (!order.length) return
  const flat = flatOpinions.value[order[suggestionIdx.value]]
  if (!flat) return
  userThesis.value = `${flat.keyword} ${flat.opinion}`
  isSelecting.value = true
  stopSuggestionLoop()
  void submitThesis()
}

function startSuggestionLoop() {
  stopSuggestionLoop()
  suggestionTimer = window.setInterval(
    advanceSuggestion,
    SUGGESTION_INTERVAL_MS,
  )
}

function stopSuggestionLoop() {
  if (suggestionTimer !== null) {
    clearInterval(suggestionTimer)
    suggestionTimer = null
  }
}

// ─── Submission ─────────────────────────────────────────────────────────────
const thesisInputEl = ref<HTMLInputElement | null>(null)

/** Response shape from POST /api/antithesis — mirror of
 *  src/server/antithesisHandler.ts → AntithesisResult. */
interface AntithesisResponse {
  kind: 'antithesis' | 'warning' | 'error'
  text: string
  source?: 'db' | 'ai'
}

// ─── Typewriter reveal ───────────────────────────────────────────────────────
// The antithesis is revealed progressively so it reads as the engine "thinking
// aloud" rather than snapping in. Driven by requestAnimationFrame + elapsed
// time (not a fixed-interval timer): the Chladni canvas saturates the main
// thread, which would starve a setTimeout and make typing crawl. Computing the
// revealed length from real elapsed time keeps the total duration constant —
// frames may drop (chunkier reveal) but the pace never drifts. Reduced-motion
// users get the full text instantly.
const TYPE_MS_PER_CHAR = 24 // base cadence for short answers
const TYPE_MAX_MS = 3500 // cap total reveal so long 2-3 sentence answers don't drag
const TYPE_MIN_MS_PER_CHAR = 8 // never type faster than this
let typeRaf = 0
function clearTyping() {
  if (typeRaf) {
    cancelAnimationFrame(typeRaf)
    typeRaf = 0
  }
}
function typeOut(full: string) {
  clearTyping()
  const prefersReduced =
    typeof window !== 'undefined'
    && window.matchMedia?.('(prefers-reduced-motion: reduce)').matches
  if (prefersReduced || !full) {
    typedAntithesis.value = full
    return
  }
  // Short answers reveal at the base cadence; longer ones speed up so the whole
  // reveal stays within TYPE_MAX_MS (a 90-char line ≈ 2.2s, a 300-char one ≈ 3.5s).
  const msPerChar = Math.min(
    TYPE_MS_PER_CHAR,
    Math.max(TYPE_MIN_MS_PER_CHAR, Math.floor(TYPE_MAX_MS / full.length)),
  )
  typedAntithesis.value = ''
  let start = 0
  const frame = (ts: number) => {
    if (!start) start = ts
    const n = Math.min(full.length, Math.floor((ts - start) / msPerChar))
    typedAntithesis.value = full.slice(0, n)
    if (n < full.length) {
      typeRaf = requestAnimationFrame(frame)
    } else {
      typeRaf = 0
    }
  }
  typeRaf = requestAnimationFrame(frame)
}

async function submitThesis() {
  const text = userThesis.value.trim()
  if (!text || stage.value === 'thinking') return

  // Switch to the loading state so the user sees we are working. The
  // suggestion loop stops via the `stage` watcher.
  stage.value = 'thinking'

  let result: AntithesisResponse
  try {
    const response = await fetch('/api/antithesis', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ topic: category.value, thesis: text }),
    })
    if (!response.ok) throw new Error(`HTTP ${response.status}`)
    result = (await response.json()) as AntithesisResponse
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error('[antithesis fetch]', err)
    warningMsg.value =
      'Could not reach the antithesis service. Check your connection and try again.'
    stage.value = 'warning'
    return
  }

  if (result.kind === 'antithesis') {
    antithesis.value = result.text
    // The user wrote the whole thesis after "I believe that" — save the
    // full text as the opinion and leave `keyword` empty. Archive.vue
    // handles both empty (new freeform) and populated (legacy drag-drop)
    // keyword shapes so both render cleanly side by side.
    saveSelectionArchive({
      category: category.value,
      keyword: '',
      opinion: text,
      antithesis: result.text,
    })
    // Morph the canvas to a different mode so the visual signals a shift.
    const next = pickRandomMode(currentModeIdx)
    morphToMode(next.mode, next.idx)
    stage.value = 'antithesis'
    // Reveal the counter-argument one character at a time.
    typeOut(result.text)
    return
  }

  // Both 'warning' (gibberish, off-topic, blank) and 'error' (service
  // down or misconfigured) surface in the same warning slot — the
  // server-supplied copy already differs between the two.
  warningMsg.value =
    result.text || 'That does not read as a thesis. Try writing a clearer claim.'
  stage.value = 'warning'
}

/** "New Opinion" — wipe the user input, return to the input stage, and
 *  morph the canvas to a fresh mode. */
function restartOpinion() {
  clearTyping()
  userThesis.value = ''
  antithesis.value = ''
  typedAntithesis.value = ''
  warningMsg.value = ''
  isSelecting.value = false
  stage.value = 'input'
  shuffleSuggestions()
  const next = pickRandomMode(currentModeIdx)
  morphToMode(next.mode, next.idx)
  // Re-focus the input on next tick.
  nextTick(() => thesisInputEl.value?.focus())
}

// Auto-focus the input every time we (re-)enter the input stage. Also (re-)
// start the suggestion loop only while typing.
watch(
  stage,
  (s) => {
    if (s === 'input') {
      nextTick(() => thesisInputEl.value?.focus())
      startSuggestionLoop()
    } else {
      stopSuggestionLoop()
    }
  },
  { immediate: false },
)

// ─── Centre text helpers ────────────────────────────────────────────────────
const centerTextKey = computed(
  () => `${stage.value}-${userThesis.value}-${antithesis.value}`,
)

// ─── Chladni canvas (adapted from DialecticDialogue.vue) ────────────────────
// Identical to the previous Category implementation — the canvas is the
// visual signature of the experience and doesn't change between form
// variations.
type Kind = 'cos' | 'sin' | 'mixed' | 'radial'
interface Mode {
  n: number
  m: number
  kind: Kind
}

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
// Brighten particles on large displays — see DialecticEngine.vue. Scales only
// each particle's contribution, never the composited background.
const ADDITIVE_GAIN =
  180 *
  (typeof window !== 'undefined' &&
  window.matchMedia('(min-width: 1800px)').matches
    ? 1.3
    : 1)
const MAX_RENDER_AREA = 3_000_000
const TRANSITION_SPEED = 0.035

const canvasEl = ref<HTMLCanvasElement | null>(null)

let canvasWidth = 1920
let canvasHeight = 1080
let N_PARTICLES = 100000
let particles: Float32Array | null = null
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
  // Re-schedule the next frame FIRST so a transient throw can't kill the
  // loop and freeze the whole experience.
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
    bgBuf[i] = 24
    bgBuf[i + 1] = 22
    bgBuf[i + 2] = 24
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
  }, 200)
}

onMounted(async () => {
  initCanvas()
  window.addEventListener('resize', onResize)
  raf = requestAnimationFrame(tick)
  shuffleSuggestions()
  startSuggestionLoop()
  await nextTick()
  thesisInputEl.value?.focus()
})

onUnmounted(() => {
  cancelAnimationFrame(raf)
  window.removeEventListener('resize', onResize)
  if (resizeTimer) clearTimeout(resizeTimer)
  stopSuggestionLoop()
  clearTyping()
})
</script>

<template>
  <!-- Single root element (display:contents → generates no box, so it
       neither affects layout nor forms a stacking context). A single root
       avoids the Vue fragment-root + <Teleport> unmount bug that left the
       teleported sub-instruction stranded in the DOM after leaving the
       page. The text content (.form-center, .form-suggestions) and the
       restart button all sit as siblings of .dialectic-form (not children),
       so they escape that fixed element's stacking context and render ABOVE
       the canvas-overlay — otherwise the overlay greys them out (worst at the
       bottom, where it's darkest). -->

  <div class="category-root">
    <div class="dialectic-form">
      <canvas ref="canvasEl" class="form-canvas" aria-hidden="true"></canvas>
    </div>

    <!-- Centre block: "I believe that <topic> <input>" while typing, or
         the antithesis once submitted. The :key on the inner element
         forces a CSS keyframe re-run on stage change for a clean fade. -->
    <div class="form-center">
      <p
        v-if="stage === 'input'"
        :key="`input-${category}`"
        class="form-thesis form-thesis-input"
      >
        <span class="text-backing">I believe that</span>
        <input
          ref="thesisInputEl"
          v-model="userThesis"
          class="thesis-input"
          type="text"
          autocomplete="off"
          spellcheck="false"
          :readonly="isSelecting"
          @keydown.enter="submitThesis"
        />
      </p>
      <p
        v-else-if="stage === 'thinking'"
        :key="`thinking-${category}`"
        class="form-thesis form-thinking"
        aria-live="polite"
      >
        thinking<span class="thinking-dot">.</span><span class="thinking-dot">.</span><span class="thinking-dot">.</span>
      </p>
      <p
        v-else-if="stage === 'antithesis'"
        :key="centerTextKey"
        class="form-thesis is-antithesis"
      >
        <span class="text-backing">{{ typedAntithesis }}</span>
      </p>
      <p
        v-else-if="stage === 'warning'"
        :key="`warning-${warningMsg}`"
        class="form-thesis is-warning"
        role="alert"
      >
        <span class="text-backing">{{ warningMsg }}</span>
      </p>
    </div>

    <!-- Cycling thesis suggestions, only while writing. Italic so it reads
         as "inspiration". Clicking one drops its text into the input and
         submits immediately, exactly as if the user typed it verbatim.
         The :key on the inner button drives the crossfade via CSS keyframe
         — Vue's <Transition> is unreliable under the canvas's rAF load. -->
    <div v-if="stage === 'input' && !isSelecting" class="form-suggestions">
      <button
        type="button"
        :key="suggestionIdx"
        class="form-suggestion"
        :aria-label="`Use this thesis: ${currentSuggestion}`"
        @click="selectSuggestion"
      >
        <span class="text-backing">{{ currentSuggestion }}</span>
      </button>
    </div>

  <!-- Restart icon — wipe input and morph the pattern. Visible at every
       stage so the user can always start over.
       Kept OUTSIDE `.dialectic-form` (a fixed element, hence its own
       stacking context that sits below the canvas-overlay): as a sibling
       it escapes to the root context, so its z-index:10 renders ABOVE the
       overlay like the other corner buttons — no more grey-out at the
       bottom where the overlay is darkest. -->
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

  <!-- Sub-instruction under the main instruction, teleported into the
       layout chrome. Plain informational text (not a link) — it just
       points the user at the cycling suggestions below. -->
  <Teleport v-if="stage === 'input'" to="#layout-extra-slot">
    <p class="home-subinstructions">
      <span class="text-backing">or select one of the suggested thesis</span>
    </p>
  </Teleport>
  </div>
</template>

<style scoped>
/* Layout-transparent single root (see template comment). */
.category-root {
  display: contents;
}

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

/* ── Centre thesis block ────────────────────────────────────────────────── */
.form-center {
  position: absolute;
  inset: 0;
  display: grid;
  place-items: center;
  z-index: 10;
  padding: 4vmin;
  pointer-events: none;
}

.form-thesis {
  max-width: clamp(280px, 42vmin, 560px);
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
  pointer-events: auto;
}

.form-thesis.is-antithesis {
  /* Flush-left text inside the centred block — the paragraph box is still
     placed in the middle of the page by `.form-center` (grid + place-items
     centred), but each line starts at the same x so the antithesis reads
     like a paragraph of prose rather than a ragged-edged poem. */
  text-align: left;
}

/* The input stage matches the `/topic` chrome label (--fs-tagline) so the
   prompt and the topic indicator read as members of the same typographic
   family — same scale, same monospace voice. The antithesis and warning
   stages keep the smaller body size because their text is denser. */
.form-thesis.form-thesis-input {
  font-size: var(--fs-tagline);
  /* Snug line-height so the prompt "I believe that" occupies just its own
     glyph height — the gap to the input underneath is then controlled by
     the input's margin-top alone, matching the title → /topic gap exactly. */
  line-height: 1;
  /* The prompt block itself is the page-centred element that sets the writing
     line's width. It's sized to sit inside the pattern's central clearing
     (the dark "eye" of the Chladni figure) rather than spilling into the
     bright nodal ring, and the vw cap keeps it contained on wide screens.
     Because the block is centred (grid place-items:center) and the input
     fills it exactly (width:100%), "I believe that" and the underline share
     one centre instead of the input overflowing and pulling right. */
  width: min(32ch, 56vw);
  max-width: 32ch;
}

/* Warning state — non-italic so it visually differs from a genuine
   antithesis, slightly de-saturated so the page reads as "neutral",
   not "alarmed". Flush-left like the antithesis so both read as prose
   paragraphs rather than centred poems. Same layout slot, same fade-in. */
.form-thesis.is-warning {
  font-style: normal;
  opacity: 0.9;
  text-align: left;
}

/* "thinking…" indicator. The three dots pulse in sequence so the user can
   tell the page is alive while the LLM call is in flight. */
.form-thesis.form-thinking {
  font-style: italic;
  opacity: 0.7;
}
.form-thesis.form-thinking .thinking-dot {
  display: inline-block;
  opacity: 0.2;
  animation: thinking-dot 1.2s ease-in-out infinite;
}
.form-thesis.form-thinking .thinking-dot:nth-child(2) {
  animation-delay: 0.15s;
}
.form-thesis.form-thinking .thinking-dot:nth-child(3) {
  animation-delay: 0.3s;
}
@keyframes thinking-dot {
  0%, 100% { opacity: 0.2; }
  40%      { opacity: 1; }
}

@keyframes form-thesis-in {
  from { opacity: 0; transform: translateY(10px); }
  to   { opacity: 1; transform: translateY(0); }
}

/* The input is the only interactive surface in the centre block — it
   inherits the surrounding text styling so "I believe that <typed text>"
   reads as one continuous sentence. Underline + a soft dark backing so
   the typed text stays readable over the bright centre pattern (the
   centre sits in the vignette's transparent zone). */
.thesis-input {
  /* Block-level + auto horizontal margin sits the input on its own line,
     centred under "I believe that". The 8px top margin matches the gap
     between the title and the /topic chrome label exactly — the prompt
     and the input read as one paired block, same rhythm as the title +
     topic above. */
  display: block;
  /* Generous gap above the input so the prompt and the writing line read
     as two distinct steps, not one cramped block. */
  margin: 1.5rem auto 0;
  /* Fill the centred prompt block exactly so the underline shares its centre
     with "I believe that" above. The block (.form-thesis-input) sets the
     width; box-sizing keeps the padding inside it so the line never overflows
     and pulls off-centre. */
  width: 100%;
  box-sizing: border-box;
  /* Soft dark backing (matches the .text-backing scrim used on the prompt
     and antithesis) so what the user types is legible over a bright nodal
     cross. Kept gentle so an empty field doesn't read as a heavy box. */
  background: rgba(24, 22, 24, 0.7);
  box-shadow: 0 0 7px 4px rgba(24, 22, 24, 0.7);
  border: 0;
  border-bottom: 1px solid var(--text);
  border-radius: 4px 4px 0 0;
  padding: 0.1em 0.3em 0.05em;
  color: var(--text);
  font: inherit;
  /* Smaller than the "I believe that" prompt above — the typed thesis is
     a secondary, quieter line. */
  font-size: var(--fs-body);
  text-align: center;
  outline: none;
  /* Caret and underline stay the same colour as the surrounding text in
     every state — the input is just a minimal line, no accent highlight. */
  caret-color: var(--text);
}

/* ── Cycling suggestions (below the centre block) ───────────────────────── */
/* Pinned beneath the centre and constrained to a readable column. The
   single visible line is :key-driven so each new value runs a fresh
   crossfade keyframe — independent of the centre block's animation. */
.form-suggestions {
  position: absolute;
  left: 50%;
  bottom: clamp(6rem, 16vh, 11rem);
  transform: translateX(-50%);
  /* Width mirrors the writing line above EXACTLY. The font-family + font-size
     here are NOT for the visible text (that's --fs-body on .form-suggestion
     below) — they only set the `ch` basis so it resolves identically to
     .form-thesis-input (Reddit Mono at --fs-tagline). KEEP THESE TWO VALUES IN
     SYNC with .form-thesis-input's width/max-width so the suggestion never
     extends past the input underline. */
  font-family: 'Reddit Mono', monospace;
  font-size: var(--fs-tagline);
  width: min(32ch, 56vw);
  max-width: 32ch;
  z-index: 9;
  text-align: center;
  /* The fade direction is upward, so reserve a bit of vertical space so
     the rising line doesn't get clipped against the centre block. */
  min-height: 3em;
}

.form-suggestion {
  /* Button reset — render as plain text but stay interactive. */
  background: none;
  border: 0;
  padding: 0;
  display: inline-block;
  cursor: pointer;

  font-family: 'Reddit Mono', monospace;
  /* Same size as the sub-instruction ("or select one of the suggested
     thesis") so the two secondary lines read as one typographic family. */
  font-size: var(--fs-body);
  font-style: italic;
  line-height: 1.5;
  color: var(--text);
  opacity: 0;
  margin: 0;
  /* Shared chrome halo — keeps the suggestion legible against the
     bright Chladni nodal lines in the middle of the viewport (where the
     overlay's gradient is already past its dark band). */
  text-shadow: var(--text-halo);
  transition: color 0.18s ease;
  /* Duration MUST match SUGGESTION_INTERVAL_MS so each new line slides in
     right as the previous one slides out. */
  animation: suggestion-cycle 9s ease-in-out both;
}
.form-suggestion:hover,
.form-suggestion:focus-visible {
  /* Pause the cycle while the user is reading / hovering, and surface
     the accent so the suggestion clearly reads as clickable without
     competing with the central prompt at rest. */
  animation-play-state: paused;
  color: var(--accent);
  outline: none;
}

/* Generous hold so a full thesis sentence is on screen long enough for
   the user to read, consider, and possibly copy. Fades are brief at the
   edges (~700 ms each) so most of the cycle is the readable steady state.
   Peak opacity 1 — full white (paired with the --text-halo backdrop above). */
@keyframes suggestion-cycle {
  0%   { opacity: 0; transform: translateY(8px); }
  8%   { opacity: 1; transform: translateY(0); }
  92%  { opacity: 1; transform: translateY(0); }
  100% { opacity: 0; transform: translateY(-8px); }
}

/* ── Restart icon button (bottom centre) ────────────────────────────────── */
.form-restart-btn {
  background: none;
  border: 0;
  padding: 0.25rem;
  color: var(--text);
  cursor: pointer;
  /* Full opacity at rest — parent opacity would also dim the SVG's
     drop-shadow halo, washing the icon back into the canvas. */
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
     would otherwise wash out against the bright Chladni nodal lines that
     sit at the same vertical band. */
  filter: var(--icon-halo);
}
.form-restart-btn:hover {
  /* Gets green and spins in place, clockwise — i.e. in the direction the
     arrow's tip points (left-to-right across the top). Positive rotation is
     clockwise in CSS. The `translateX(-50%)` from .corner-bc must be repeated
     here — otherwise the hover transform replaces it and the button jumps half
     its width to the right (the "move" we don't want). */
  color: var(--accent);
  transform: translateX(-50%) rotate(180deg);
}
</style>
