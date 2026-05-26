<script setup lang="ts">
/**
 * Category.vue — Redesigned
 *
 * Stage 1: Pick a keyword  → drag or click into center SandCircle
 * Stage 2: Pick an opinion → drag or click into center SandCircle → navigate
 *
 * Items orbit the circle at an adaptive radius.
 * The SandCircle builds up the sentence as selections are made.
 */

import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { engineOpinions } from '../data/engineOpinions'
import type { EngineOpinionType } from '../data/engineOpinions'
import { saveSelectionArchive } from '../utils/selectionArchives'
import SandCircle from '../components/Sandcircle.vue'

const route = useRoute()
const router = useRouter()
const category = computed(() => String(route.params.category ?? ''))

const categoryKeywords = computed<EngineOpinionType[]>(() =>
  engineOpinions.filter(
    (o) => o.category.toLowerCase() === category.value.toLowerCase(),
  ),
)

// ── Stage ─────────────────────────────────────────────────────────────────────
type Stage = 'keyword' | 'opinion'
const stage = ref<Stage>('keyword')
const selectedKeyword = ref<EngineOpinionType | null>(null)

// Lines shown inside SandCircle — builds up across stages
const sentenceLines = computed<string[]>(() => {
  if (stage.value === 'keyword') return ['I believe that...']
  if (selectedKeyword.value) {
    return [
      'I believe that',
      selectedKeyword.value.keyword.toLowerCase(),
      '...',
    ]
  }
  return []
})

// ── Items ─────────────────────────────────────────────────────────────────────
interface DisplayItem {
  id: string
  label: string
  angle: number // radians, for ring placement
  radius: number // px from center
}

const CIRCLE_SIZE = 240
const SCENE_SIZE = 680

// Radius adapts to count — more items need a wider orbit
function orbitRadius(count: number): number {
  const base = CIRCLE_SIZE / 2 + 80
  const perItemPush = Math.max(0, (count - 6) * 5)
  return Math.min(base + perItemPush, SCENE_SIZE / 2 - 70)
}

const displayItems = computed<DisplayItem[]>(() => {
  let raw: string[]
  if (stage.value === 'keyword') {
    raw = categoryKeywords.value.map((e) => e.keyword)
  } else {
    raw = (selectedKeyword.value?.data ?? []).map((op) => op.opinion)
  }

  const count = raw.length
  const r = orbitRadius(count)

  // Spread evenly, offset by -π/2 so first item is at top
  return raw.map((label, i) => ({
    id: stage.value === 'keyword' ? `kw-${i}` : `op-${i}`,
    label,
    angle: -Math.PI / 2 + (i / count) * Math.PI * 2,
    radius: r,
  }))
})

function itemStyle(item: DisplayItem) {
  const x = Math.cos(item.angle) * item.radius
  const y = Math.sin(item.angle) * item.radius
  return {
    left: '50%',
    top: '50%',
    transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
  }
}

// ── Drag ──────────────────────────────────────────────────────────────────────
const wrapperEl = ref<HTMLElement | null>(null)
const draggingId = ref<string | null>(null)
const dragPos = ref({ x: 0, y: 0 })
const dragStartPos = ref({ x: 0, y: 0 })
const dragOver = ref(false)

function getCircleCenter() {
  if (!wrapperEl.value) return { x: 0, y: 0 }
  const rect = wrapperEl.value.getBoundingClientRect()
  return { x: rect.left + rect.width / 2, y: rect.top + rect.height / 2 }
}

function isInsideCircle(cx: number, cy: number): boolean {
  const c = getCircleCenter()
  const dx = cx - c.x
  const dy = cy - c.y
  return Math.sqrt(dx * dx + dy * dy) < CIRCLE_SIZE / 2 - 8
}

function onItemPointerDown(e: PointerEvent, id: string) {
  if (e.button !== 0 && e.pointerType === 'mouse') return
  e.preventDefault()
  draggingId.value = id
  dragPos.value = { x: e.clientX, y: e.clientY }
  dragStartPos.value = { x: e.clientX, y: e.clientY }
  dragOver.value = false
  ;(e.currentTarget as HTMLElement).setPointerCapture(e.pointerId)
}

function onGlobalPointerMove(e: PointerEvent) {
  if (!draggingId.value) return
  dragPos.value = { x: e.clientX, y: e.clientY }
  dragOver.value = isInsideCircle(e.clientX, e.clientY)
}

function onGlobalPointerUp(e: PointerEvent) {
  if (!draggingId.value) return
  const id = draggingId.value
  const dist = Math.hypot(
    e.clientX - dragStartPos.value.x,
    e.clientY - dragStartPos.value.y,
  )
  const inside = isInsideCircle(e.clientX, e.clientY)

  draggingId.value = null
  dragOver.value = false

  // Accept as drop if dragged inside OR was a simple tap/click
  if (inside || dist < 10) {
    selectItem(id)
  }
}

// ── Selection ─────────────────────────────────────────────────────────────────
const navigating = ref(false)
const transitioningToResult = ref(false)
const explosionParticles = ref<
  Array<{ id: number; dx: number; dy: number; size: number; delay: number }>
>([])

function createExplosionParticles(count = 28) {
  return Array.from({ length: count }, (_, index) => {
    const angle = Math.random() * Math.PI * 2
    const distance = 140 + Math.random() * 100
    return {
      id: index,
      dx: Math.cos(angle) * distance,
      dy: Math.sin(angle) * distance,
      size: 2 + Math.random() * 5,
      delay: Math.random() * 120,
    }
  })
}

function startResultsTransition(op: { opinion: string; antiThesis?: string }) {
  if (transitioningToResult.value) return

  explosionParticles.value = createExplosionParticles(32)
  transitioningToResult.value = true

  saveSelectionArchive({
    category: category.value,
    keyword: selectedKeyword.value!.keyword,
    opinion: op.opinion,
    antithesis: op.antiThesis || '',
  })

  navigating.value = true
  setTimeout(() => {
    router
      .push({
        name: 'Result',
        query: {
          opinion: op.opinion,
          antithesis: op.antiThesis || '',
          category: category.value,
          keyword: selectedKeyword.value!.keyword,
        },
      })
      .finally(() => {
        navigating.value = false
      })
  }, 520)
}

function selectItem(id: string) {
  if (navigating.value) return

  if (stage.value === 'keyword') {
    const idx = parseInt(id.replace('kw-', ''))
    const entry = categoryKeywords.value[idx]
    if (!entry) return
    selectedKeyword.value = entry
    stage.value = 'opinion'
    return
  }

  if (stage.value === 'opinion' && selectedKeyword.value) {
    const idx = parseInt(id.replace('op-', ''))
    const op = selectedKeyword.value.data[idx]
    if (!op) return

    startResultsTransition(op)
  }
}

function goBack() {
  if (stage.value === 'opinion') {
    stage.value = 'keyword'
    selectedKeyword.value = null
  }
}

// ── Ghost label ───────────────────────────────────────────────────────────────
const ghostLabel = computed(() => {
  if (!draggingId.value) return ''
  return displayItems.value.find((i) => i.id === draggingId.value)?.label ?? ''
})

const ghostStyle = computed(() => ({
  left: `${dragPos.value.x}px`,
  top: `${dragPos.value.y}px`,
}))

onMounted(() => {
  window.addEventListener('pointermove', onGlobalPointerMove)
  window.addEventListener('pointerup', onGlobalPointerUp)
})
onUnmounted(() => {
  window.removeEventListener('pointermove', onGlobalPointerMove)
  window.removeEventListener('pointerup', onGlobalPointerUp)
})
</script>

<template>
  <div class="page-root">
    <!-- Breadcrumb -->
    <p class="breadcrumb">
      /{{
        stage === 'opinion' && selectedKeyword
          ? `${category}/${selectedKeyword.keyword}`
          : category
      }}
    </p>

    <!-- Back -->
    <button v-if="stage === 'opinion'" class="back-btn" @click="goBack">
      ← back
    </button>

    <!-- Scene -->
    <div
      class="scene"
      ref="wrapperEl"
      :class="{ 'is-transitioning': transitioningToResult }"
    >
      <!-- Sand circle center -->
      <div class="circle-wrap" :class="{ 'drop-active': dragOver }">
        <SandCircle
          :size="CIRCLE_SIZE"
          :lines="sentenceLines"
          color="#ffffff"
          :particleCount="50000"
        />
        <div class="circle-ring" :class="{ 'ring-active': dragOver }" />
      </div>

      <div
        v-if="transitioningToResult"
        class="explode-overlay"
        aria-hidden="true"
      >
        <span
          v-for="particle in explosionParticles"
          :key="particle.id"
          class="explode-particle"
          :style="{
            '--dx': `${particle.dx}px`,
            '--dy': `${particle.dy}px`,
            '--size': `${particle.size}px`,
            '--delay': `${particle.delay}ms`,
          }"
        />
      </div>

      <!-- Text items orbiting the circle -->
      <TransitionGroup name="orbit" tag="div" class="orbit-layer">
        <div
          v-for="item in displayItems"
          :key="item.id"
          class="orbit-item"
          :class="{ 'is-dragging': draggingId === item.id }"
          :style="itemStyle(item)"
          @pointerdown="onItemPointerDown($event, item.id)"
        >
          {{ item.label }}
        </div>
      </TransitionGroup>
    </div>

    <!-- Hint -->
    <p class="hint">
      {{
        stage === 'keyword'
          ? 'drag or click a topic into the circle'
          : 'drag or click an opinion into the circle'
      }}
    </p>

    <!-- Drag ghost -->
    <Teleport to="body">
      <div v-if="draggingId" class="drag-ghost" :style="ghostStyle">
        {{ ghostLabel }}
      </div>
    </Teleport>
  </div>
</template>

<style scoped>
/* ── Root ── */
.page-root {
  position: fixed;
  inset: 0;
  overflow: hidden;
  background: #0a0a0f;
  color: #ffffff;
  font-family: 'Gap Sans', monospace;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

/* ── Breadcrumb ── */
.breadcrumb {
  position: absolute;
  top: 110px;
  left: 24px;
  font-size: 13px;
  letter-spacing: 0.06em;
  opacity: 0.35;
  pointer-events: none;
}
@media (max-width: 500px) {
  .breadcrumb {
    top: 64px;
  }
}

/* ── Back ── */
.back-btn {
  position: absolute;
  top: 110px;
  right: 24px;
  background: none;
  border: none;
  color: rgba(255, 255, 255, 0.35);
  font-size: 12px;
  font-family: inherit;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  cursor: pointer;
  padding: 4px 8px;
  transition: color 0.2s;
}
.back-btn:hover {
  color: rgba(255, 255, 255, 0.85);
}
@media (max-width: 500px) {
  .back-btn {
    top: 64px;
  }
}

/* ── Hint ── */
.hint {
  position: absolute;
  bottom: 36px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 11px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.18);
  white-space: nowrap;
  pointer-events: none;
}

/* ── Scene container — fixed square, centered ── */
.scene {
  position: relative;
  width: min(90vw, 680px);
  height: min(90vw, 680px);
  max-height: 80vh;
}

.scene.is-transitioning .circle-wrap {
  transform: translate(-50%, -50%) scale(0.94);
  opacity: 0.65;
}

.scene.is-transitioning .orbit-item {
  opacity: 0.2;
}

.scene.is-transitioning .circle-ring {
  opacity: 0.1;
}

.explode-overlay {
  position: absolute;
  inset: 0;
  pointer-events: none;
  overflow: hidden;
}

.explode-particle {
  position: absolute;
  left: 50%;
  top: 50%;
  width: var(--size);
  height: var(--size);
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.92);
  opacity: 0;
  transform: translate(-50%, -50%) scale(0.2);
  animation: explode 0.62s ease-out forwards;
  animation-delay: var(--delay);
}

@keyframes explode {
  0% {
    opacity: 1;
    transform: translate(-50%, -50%) scale(0.25);
  }
  50% {
    opacity: 1;
    transform: translate(calc(-50% + var(--dx)), calc(-50% + var(--dy)))
      scale(1.05);
  }
  100% {
    opacity: 0;
    transform: translate(calc(-50% + var(--dx)), calc(-50% + var(--dy)))
      scale(0.8);
  }
}

/* ── Circle ── */
.circle-wrap {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 10;
  border-radius: 50%;
  transition: filter 0.3s;
}
.circle-wrap.drop-active {
  filter: brightness(1.2);
}

.circle-ring {
  position: absolute;
  inset: -8px;
  border-radius: 50%;
  /* border: 1px solid rgba(255, 255, 255, 0.07); */
  pointer-events: none;
  transition:
    border-color 0.25s,
    box-shadow 0.25s;
}
.circle-ring.ring-active {
  border-color: rgba(255, 255, 255, 0.4);
  box-shadow: 0 0 40px rgba(255, 255, 255, 0.07);
}

/* ── Orbit layer ── */
.orbit-layer {
  position: absolute;
  inset: 0;
  pointer-events: none;
}

/* ── Individual orbit item ── */
.orbit-item {
  position: absolute;
  pointer-events: all;
  cursor: grab;

  font-size: clamp(10px, 1.4vmin, 13px);
  font-weight: 300;
  letter-spacing: 0.07em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.5);
  line-height: 1.45;
  text-align: center;

  /* constrain width so long opinions wrap to 3–4 lines */
  width: 120px;

  user-select: none;
  -webkit-user-select: none;
  touch-action: none;

  transition:
    color 0.2s,
    opacity 0.2s,
    transform 0.18s;
}

.orbit-item:hover {
  color: rgba(255, 255, 255, 0.92);
}

.orbit-item.is-dragging {
  opacity: 0.15;
  cursor: grabbing;
}

/* ── Orbit transition ── */
.orbit-enter-active,
.orbit-leave-active {
  transition:
    opacity 0.3s,
    transform 0.3s;
}
.orbit-enter-from {
  opacity: 0;
  transform: translate(calc(-50% + var(--ox, 0px)), calc(-50% + var(--oy, 0px)))
    scale(0.8) !important;
}
.orbit-leave-to {
  opacity: 0;
  transform: translate(calc(-50% + var(--ox, 0px)), calc(-50% + var(--oy, 0px)))
    scale(0.8) !important;
}

/* ── Drag ghost ── */
:global(.drag-ghost) {
  position: fixed;
  z-index: 9999;
  transform: translate(-50%, -50%);
  pointer-events: none;

  font-family: 'Gap Sans', monospace;
  font-size: 12px;
  font-weight: 300;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.9);
  background: rgba(10, 10, 15, 0.8);
  border: 1px solid rgba(255, 255, 255, 0.18);
  border-radius: 3px;
  padding: 6px 12px;
  max-width: 160px;
  text-align: center;
  line-height: 1.4;
  backdrop-filter: blur(6px);
}
</style>
