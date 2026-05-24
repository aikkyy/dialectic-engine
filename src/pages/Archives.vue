<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
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
    placedArchives.value[0] ??
    null,
)

onMounted(() => {
  archives.value = loadSelectionArchives()
})
</script>

<template>
  <div class="archives-root">
    <ChladniBackground color="#ffffff" bgColor="#0f0f14" />

    <p class="breadcrumb">/archives</p>

    <div class="stage">
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
