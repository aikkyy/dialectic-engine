<script setup lang="ts">
/**
 * CategoryScatter.vue
 * ─────────────────────────────────────────────────────────────────────────────
 * Fixed issues:
 * - Type-safe mixed items list
 * - Proper centering/alignment
 * - Fixed invalid Tailwind classes
 * - Fixed spacing/layout instability
 * - Fixed special item typing
 * - Fixed hover jitter
 * - Fixed route fallback safety
 * - Fixed duplicate key risks
 * - Fixed sizing consistency
 */

import { computed } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import PixelCircle from './PixelCircle.vue'
import { engineOpinions } from '../data/engineOpinions'

// ── Router ────────────────────────────────────────────────────────────────────

let router: ReturnType<typeof useRouter> | null = null
let route: ReturnType<typeof useRoute> | null = null

try {
  router = useRouter()
  route = useRoute()
} catch {
  // no router available
}

function navigateTo(keyword: string) {
  const base =
    route?.path ??
    (typeof window !== 'undefined' ? window.location.pathname : '')

  const path = `${base.replace(/\/$/, '')}/${keyword}`

  if (router) {
    router.push(path)
  } else if (typeof window !== 'undefined') {
    window.location.href = path
  }
}

// ── Deterministic hash ────────────────────────────────────────────────────────

function hash(a: number, b = 0): number {
  let h = a * 374761393 + b * 1234567891
  h = ((h ^ (h >>> 13)) * 1274126177) | 0
  h ^= h >>> 16
  return (h >>> 0) / 0xffffffff
}

// ── Types ─────────────────────────────────────────────────────────────────────

const MIN_BASE_SIZE = 100
const MAX_BASE_SIZE = 270

type NodeData = {
  type: 'node'
  keyword: string
  category: string
  size: number
  pixelSize: number
  gap: number
  density: number
  fadeStrength: number
  randomness: number
  fontSize: number
  color: string
  textColor: string
  animDensity: number
  tx: number
  ty: number
  opacity: number
}

type SpecialItem = {
  type: 'special'
  text: string
  size: number
  tx: number
  ty: number
  opacity: number
}

type ScatterItem = NodeData | SpecialItem

// ── Config ────────────────────────────────────────────────────────────────────

const PALETTE = ['#FFFFFF']

// ── Category Nodes ────────────────────────────────────────────────────────────

const nodes = computed<NodeData[]>(() => {
  const seen = new Set<string>()

  const unique = engineOpinions.filter((op) => {
    if (seen.has(op.category)) return false
    seen.add(op.category)
    return true
  })

  return unique.map((op, idx) => {
    const h0 = hash(idx, 1)
    const h1 = hash(idx, 2)
    const h2 = hash(idx, 3)
    const h3 = hash(idx, 4)
    const h4 = hash(idx, 5)
    const h5 = hash(idx, 6)

    const textLen = op.category.length

    let baseSize = 80 + textLen * 9.5

    baseSize = Math.max(MIN_BASE_SIZE, Math.min(MAX_BASE_SIZE, baseSize))

    const size = Math.round(baseSize + (h0 - 0.5) * 30)

    const maxOffset = 26

    const tx = Math.round((h1 - 0.5) * 2 * maxOffset)
    const ty = Math.round((h2 - 0.5) * 2 * maxOffset)

    return {
      type: 'node',
      keyword: op.keyword,
      category: op.category,
      size,
      pixelSize: 4 + Math.round(h3 * 2),
      gap: 2 + Math.round(h4 * 2),
      density: 0.3 + h0 * 0.18,
      fadeStrength: 1.5 + h1 * 1.0,
      randomness: 0.6 + h2 * 0.28,
      fontSize: size < 130 ? 10 : size < 180 ? 12 : 13,
      color: PALETTE[idx % PALETTE.length],
      textColor: PALETTE[idx % PALETTE.length],
      animDensity: 0.18 + h5 * 0.1,
      tx,
      ty,
      opacity: 0.65 + h3 * 0.35,
    }
  })
})

// ── Special Circle ────────────────────────────────────────────────────────────

const specialItem = computed<SpecialItem>(() => {
  const text = 'select a topic'

  const textLen = text.length

  let baseSize = 80 + textLen * 9.5

  baseSize = Math.max(MIN_BASE_SIZE, Math.min(MAX_BASE_SIZE, baseSize))

  const size = Math.round(baseSize + (hash(999, 1) - 0.5) * 30)

  const maxOffset = 26

  const tx = Math.round((hash(999, 2) - 0.5) * 2 * maxOffset)
  const ty = Math.round((hash(999, 3) - 0.5) * 2 * maxOffset)

  return {
    type: 'special',
    text,
    size,
    tx,
    ty,
    opacity: 0.92,
  }
})

// ── Combined List ─────────────────────────────────────────────────────────────

const allItems = computed<ScatterItem[]>(() => {
  const items: ScatterItem[] = [...nodes.value]

  if (items.length >= 3) {
    items.splice(3, 0, specialItem.value)
  } else {
    items.push(specialItem.value)
  }

  return items
})

// ── Layout ────────────────────────────────────────────────────────────────────

const CELL_PAD = 80

const cellSize = computed(() => {
  if (!allItems.value.length) return 220

  const maxSize = Math.max(...allItems.value.map((item) => item.size))

  return maxSize + CELL_PAD
})
</script>

<template>
  <div
    class="w-full min-h-screen flex flex-wrap items-center justify-center gap-6 px-6 py-20 bg-[#0a0a0f]"
  >
    <div
      v-for="(item, index) in allItems"
      :key="item.type === 'special' ? `special-${index}` : item.keyword"
      class="relative flex items-center justify-center flex-shrink-0"
      :style="{
        width: `${cellSize}px`,
        height: `${cellSize}px`,
      }"
    >
      <div
        class="relative flex items-center justify-center"
        :style="{
          transform: `translate(${item.tx}px, ${item.ty}px)`,
          opacity: item.opacity,
          transition: 'transform 0.35s ease, opacity 0.35s ease',
          willChange: 'transform',
        }"
      >
        <!-- Special Circle -->
        <div
          v-if="item.type === 'special'"
          class="smooth-circle"
          :style="{
            width: `120px`,
            height: `120px`,
            fontSize: `${Math.min(
              18,
              Math.max(12, Math.floor(item.size / 12)),
            )}px`,
          }"
        >
          {{ item.text }}
        </div>

        <!-- Pixel Circle -->
        <PixelCircle
          v-else
          :text="item.category"
          :size="item.size"
          :pixelSize="item.pixelSize"
          :gap="item.gap"
          :density="item.density"
          :fadeStrength="item.fadeStrength"
          :randomness="item.randomness"
          :fontSize="item.fontSize"
          :color="item.color"
          :textColor="item.textColor"
          :animationDensity="item.animDensity"
          :clickable="true"
          @click="navigateTo(item.keyword)"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
.smooth-circle {
  display: flex;
  align-items: center;
  justify-content: center;

  position: relative;

  border-radius: 9999px;

  background: white;
  color: black;

  text-align: center;

  font-family: monospace;
  font-weight: 700;

  text-transform: uppercase;
  letter-spacing: 0.08em;

  padding: 1rem;

  cursor: default;

  user-select: none;

  box-shadow:
    0 8px 24px rgba(0, 0, 0, 0.28),
    0 0 40px rgba(255, 255, 255, 0.06);

  transition:
    transform 0.22s ease,
    box-shadow 0.22s ease;
}

.smooth-circle:hover {
  transform: scale(1.04);

  box-shadow:
    0 12px 36px rgba(0, 0, 0, 0.38),
    0 0 48px rgba(255, 255, 255, 0.08);
}
</style>
