<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref } from 'vue'
import ChladniBackground from '../components/ChladniBackground.vue'
import PixelCircle from '../components/PixelCircle.vue'
import {
  loadSelectionArchives,
  type SelectionArchiveRecord,
} from '../utils/selectionArchives'

type PlacedArchive = SelectionArchiveRecord & {
  x: number
  y: number
  size: number
}

const archives = ref<SelectionArchiveRecord[]>([])
const hoveredKey = ref('')
const selectedKey = ref('')
const viewportWidth = ref(0)
const viewportHeight = ref(0)
const zoom = ref(1)
const panX = ref(0)
const panY = ref(0)

type PointerPoint = { x: number; y: number }

const activePointers = new Map<number, PointerPoint>()
let interactionMode: 'drag' | 'pinch' | null = null
let dragPointerId = -1
let dragLastX = 0
let dragLastY = 0
let pinchStartDistance = 0
let pinchStartZoom = 1
let pinchStartPanX = 0
let pinchStartPanY = 0
let pinchWorldX = 0
let pinchWorldY = 0

const ROOT_MARGIN = 120

function hash(a: number, b = 0): number {
  let h = a * 374761393 + b * 1234567891
  h = ((h ^ (h >>> 13)) * 1274126177) | 0
  h ^= h >>> 16
  return (h >>> 0) / 0xffffffff
}

const orderedArchives = computed(() =>
  [...archives.value].sort((a, b) => {
    if (b.count !== a.count) return b.count - a.count
    return b.lastSelectedAt.localeCompare(a.lastSelectedAt)
  }),
)

const placedArchives = computed<PlacedArchive[]>(() => {
  const items = orderedArchives.value
  const angleStep = Math.PI * 2 * (Math.sqrt(5) - 1)
  const baseRadius = 150
  const radiusStep = 72

  return items.map((record, index) => {
    const angle = index * angleStep + hash(index, record.count) * 0.75
    const radius = baseRadius + Math.sqrt(index + 1) * radiusStep
    const size = Math.max(120, Math.min(220, 112 + record.count * 10))

    return {
      ...record,
      x: Math.cos(angle) * radius,
      y: Math.sin(angle) * radius,
      size,
    }
  })
})

const hoveredArchive = computed(
  () =>
    placedArchives.value.find((record) => record.key === hoveredKey.value) ??
    placedArchives.value.find((record) => record.key === selectedKey.value) ??
    placedArchives.value[0] ??
    null,
)

const contentStyle = computed(() => ({
  left: '50%',
  top: '50%',
  transform: `translate(-50%, -50%) translate(${panX.value}px, ${panY.value}px) scale(${zoom.value})`,
}))

function clamp(value: number, min: number, max: number): number {
  return Math.max(min, Math.min(max, value))
}

function getViewportCenter(): [number, number] {
  return [viewportWidth.value / 2, viewportHeight.value / 2]
}

function getFitZoom(): number {
  const items = placedArchives.value
  if (!items.length || viewportWidth.value <= 0 || viewportHeight.value <= 0)
    return 1

  const centerRadius = 240 / 2
  let maxExtent = centerRadius
  for (const item of items) {
    const extent = Math.hypot(item.x, item.y) + item.size / 2
    if (extent > maxExtent) maxExtent = extent
  }

  const availableWidth = Math.max(240, viewportWidth.value - ROOT_MARGIN * 2)
  const availableHeight = Math.max(240, viewportHeight.value - ROOT_MARGIN * 2)
  return clamp(
    Math.min(
      1,
      availableWidth / (maxExtent * 2),
      availableHeight / (maxExtent * 2),
    ) * 1.1,
    0.4,
    1,
  )
}

function resetView() {
  zoom.value = getFitZoom()
  panX.value = 0
  panY.value = 0
}

function zoomAround(clientX: number, clientY: number, factor: number) {
  const [centerX, centerY] = getViewportCenter()
  const worldX = (clientX - centerX - panX.value) / zoom.value
  const worldY = (clientY - centerY - panY.value) / zoom.value
  zoom.value = clamp(zoom.value * factor, 0.32, 2.8)
  panX.value = clientX - centerX - worldX * zoom.value
  panY.value = clientY - centerY - worldY * zoom.value
}

function updatePointer(e: PointerEvent) {
  activePointers.set(e.pointerId, { x: e.clientX, y: e.clientY })
}

function beginPinch() {
  const points = [...activePointers.values()]
  if (points.length < 2) return
  const [centerX, centerY] = getViewportCenter()
  const first = points[0]
  const second = points[1]
  pinchStartDistance = Math.hypot(second.x - first.x, second.y - first.y)
  pinchStartZoom = zoom.value
  pinchStartPanX = panX.value
  pinchStartPanY = panY.value
  const midpointX = (first.x + second.x) / 2
  const midpointY = (first.y + second.y) / 2
  pinchWorldX = (midpointX - centerX - pinchStartPanX) / pinchStartZoom
  pinchWorldY = (midpointY - centerY - pinchStartPanY) / pinchStartZoom
  interactionMode = 'pinch'
}

function onPointerDown(e: PointerEvent) {
  if (e.pointerType === 'mouse' && e.button !== 0) return
  updatePointer(e)
  ;(e.currentTarget as HTMLElement | null)?.setPointerCapture(e.pointerId)

  if (activePointers.size === 1) {
    interactionMode = 'drag'
    dragPointerId = e.pointerId
    dragLastX = e.clientX
    dragLastY = e.clientY
    return
  }

  if (activePointers.size >= 2) beginPinch()
}

function onPointerMove(e: PointerEvent) {
  if (!activePointers.has(e.pointerId)) return
  updatePointer(e)

  if (interactionMode === 'pinch' && activePointers.size >= 2) {
    const points = [...activePointers.values()]
    const first = points[0]
    const second = points[1]
    const [centerX, centerY] = getViewportCenter()
    const midpointX = (first.x + second.x) / 2
    const midpointY = (first.y + second.y) / 2
    const currentDistance = Math.hypot(second.x - first.x, second.y - first.y)
    const nextZoom = clamp(
      pinchStartZoom * (currentDistance / Math.max(1, pinchStartDistance)),
      0.32,
      2.8,
    )

    zoom.value = nextZoom
    panX.value = midpointX - centerX - pinchWorldX * nextZoom
    panY.value = midpointY - centerY - pinchWorldY * nextZoom
    return
  }

  if (interactionMode === 'drag' && e.pointerId === dragPointerId) {
    panX.value += e.clientX - dragLastX
    panY.value += e.clientY - dragLastY
    dragLastX = e.clientX
    dragLastY = e.clientY
  }
}

function onPointerUp(e: PointerEvent) {
  activePointers.delete(e.pointerId)
  if (activePointers.size === 0) {
    interactionMode = null
    dragPointerId = -1
    return
  }

  if (activePointers.size === 1) {
    const remaining = activePointers.entries().next().value as
      | [number, PointerPoint]
      | undefined
    if (remaining) {
      interactionMode = 'drag'
      dragPointerId = remaining[0]
      dragLastX = remaining[1].x
      dragLastY = remaining[1].y
    }
  } else {
    beginPinch()
  }
}

function onPointerCancel(e: PointerEvent) {
  activePointers.delete(e.pointerId)
  if (activePointers.size === 0) {
    interactionMode = null
    dragPointerId = -1
  }
}

function onWheel(e: WheelEvent) {
  e.preventDefault()
  zoomAround(e.clientX, e.clientY, e.deltaY < 0 ? 1.07 : 0.93)
}

function selectArchive(key: string) {
  selectedKey.value = key
  hoveredKey.value = key
}

function onResize() {
  viewportWidth.value = window.innerWidth
  viewportHeight.value = window.innerHeight
}

onMounted(() => {
  viewportWidth.value = window.innerWidth
  viewportHeight.value = window.innerHeight
  archives.value = loadSelectionArchives()
  resetView()

  window.addEventListener('resize', onResize)
})

onUnmounted(() => {
  window.removeEventListener('resize', onResize)
})
</script>

<template>
  <div class="archives-root">
    <ChladniBackground color="#ffffff" bgColor="#0f0f14" />

    <p class="breadcrumb">/archives</p>

    <div
      class="stage"
      @pointerdown="onPointerDown"
      @pointermove="onPointerMove"
      @pointerup="onPointerUp"
      @pointercancel="onPointerCancel"
      @wheel="onWheel"
    >
      <div class="stage-content" :style="contentStyle">
        <div class="center-card">
        <PixelCircle
          class="center-circle"
          text="ARCHIVES"
          :size="240"
          :pixelSize="4"
          :gap="3"
          :density="0.58"
          :fadeStrength="2.2"
          :randomness="0.72"
          :fontSize="16"
          :animationDensity="0.35"
          :clickable="false"
        />
        </div>

        <template v-if="placedArchives.length">
          <div
            v-for="record in placedArchives"
            :key="record.key"
            class="archive-orb"
            :class="{ active: hoveredKey === record.key }"
            :style="{
              left: `calc(50% + ${record.x}px)`,
              top: `calc(50% + ${record.y}px)`,
              width: `${record.size}px`,
              height: `${record.size}px`,
            }"
            @pointerdown.stop
            @pointerup.stop
            @click.stop="selectArchive(record.key)"
            @mouseenter="hoveredKey = record.key"
            @mouseleave="hoveredKey = ''"
          >
            <PixelCircle
              :text="String(record.count)"
              :size="record.size"
              :pixelSize="4"
              :gap="3"
              :density="0.56"
              :fadeStrength="2.1"
              :randomness="0.7"
              :fontSize="Math.max(14, Math.min(20, Math.round(record.size / 14)))"
              :animationDensity="0.28"
              :clickable="false"
            />
          </div>
        </template>

        <div v-else class="empty-state">
          No archives yet. Selected combinations will appear here.
        </div>
      </div>
    </div>

    <aside v-if="hoveredArchive" class="detail-panel">
      <div class="detail-title">{{ hoveredArchive.keyword }}</div>
      <div class="detail-count">{{ hoveredArchive.count }} selections</div>
      <div class="detail-text">
        {{ hoveredArchive.opinion }}
      </div>
      <div class="detail-antithesis">
        {{ hoveredArchive.antithesis }}
      </div>
    </aside>
  </div>
</template>

<style scoped>
.archives-root {
  position: fixed;
  inset: 0;
  overflow: hidden;
  background: #0f0f14;
}
.breadcrumb {
  position: absolute;
  top: 26px;
  left: 24px;
  z-index: 2;
  color: rgba(255, 255, 255, 0.56);
  font-family: monospace;
  font-size: 14px;
}
.stage {
  position: absolute;
  inset: 0;
  touch-action: none;
  cursor: grab;
}
.stage:active {
  cursor: grabbing;
}
.stage-content {
  position: absolute;
  width: 100vw;
  height: 100vh;
  transform-origin: center center;
}
.center-card {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
}
.center-circle {
  filter: drop-shadow(0 0 24px rgba(255, 255, 255, 0.08));
}
.archive-orb {
  position: absolute;
  transform: translate(-50%, -50%);
  z-index: 2;
  cursor: pointer;
  transition:
    transform 0.2s ease,
    filter 0.2s ease;
}
.archive-orb.active {
  transform: translate(-50%, -50%) scale(1.04);
  filter: drop-shadow(0 0 26px rgba(255, 255, 255, 0.18));
}
.empty-state {
  position: absolute;
  left: 50%;
  top: 68%;
  transform: translateX(-50%);
  z-index: 2;
  color: rgba(255, 255, 255, 0.62);
  font-family: monospace;
  font-size: 13px;
}
.detail-panel {
  position: absolute;
  left: 24px;
  bottom: 24px;
  z-index: 3;
  width: min(360px, calc(100vw - 48px));
  padding: 16px 18px;
  border: 1px solid rgba(255, 255, 255, 0.16);
  background: rgba(10, 10, 15, 0.7);
  backdrop-filter: blur(10px);
  color: white;
}
.detail-title {
  font-size: 14px;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  margin-bottom: 6px;
}
.detail-count {
  font-family: monospace;
  font-size: 12px;
  color: rgba(255, 255, 255, 0.6);
  margin-bottom: 10px;
}
.detail-text,
.detail-antithesis {
  font-size: 13px;
  line-height: 1.5;
}
.detail-text {
  margin-bottom: 10px;
  color: rgba(255, 255, 255, 0.92);
}
.detail-antithesis {
  color: rgba(255, 255, 255, 0.68);
}
</style>
