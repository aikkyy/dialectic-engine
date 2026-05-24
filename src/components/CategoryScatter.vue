<script setup lang="ts">
/**
 * CategoryScatter.vue
 * ─────────────────────────────────────────────────────────────────────────────
 * Renders engineOpinions as a flex-wrap grid of PixelCircles.
 * No absolute positioning — uses CSS translate offsets for organic scatter.
 *
 * Layout approach (no collision detection needed):
 * • Flex-wrap with fixed-size cells (size + padding)
 * • Each cell gets a deterministic translateX/Y offset so the grid
 * structure disappears but circles never actually overlap
 * • Offset is clamped so no circle leaves its cell boundary
 * • Margins vary per-row to break up horizontal alignment
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
  /* no router */
}

function navigateTo(keyword: string) {
  const base = route?.path ?? window.location.pathname
  const path = `${base.replace(/\/$/, '')}/${keyword}`
  if (router) router.push(path)
  else window.location.href = path
}

// ── Deterministic hash ────────────────────────────────────────────────────────

function hash(a: number, b = 0): number {
  let h = a * 374761393 + b * 1234567891
  h = ((h ^ (h >>> 13)) * 1274126177) | 0
  h = h ^ (h >>> 16)
  return (h >>> 0) / 0xffffffff
}

// ── Node configs ──────────────────────────────────────────────────────────────

const MIN_BASE_SIZE = 100
const MAX_BASE_SIZE = 270

type NodeData = {
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
  // Layout offsets (in px, relative to cell center)
  tx: number
  ty: number
  // Wrapper opacity for depth
  opacity: number
}

const PALETTE = ['#FFFFFF']

const nodes = computed<NodeData[]>(() => {
  // Deduplicate by category — keep first occurrence only
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
    const h3 = hash(idx, 8)
    const h4 = hash(idx, 5)
    const h5 = hash(idx, 6)

    // Determine scale dynamically based on text length (~9.5px extra per character)
    const textLen = op.category.length
    let baseSize = 80 + textLen * 9.5

    // Clamp to prevent unreadably tiny dots or massive screen-hogging blobs
    baseSize = Math.max(MIN_BASE_SIZE, Math.min(MAX_BASE_SIZE, baseSize))

    // Add noise for organic feel (-15 to +15 px)
    const size = Math.round(baseSize + (h0 - 0.5) * 30)

    // Translate offset: max ±(cellSize - size)/2 so circles can't leave cell
    // Max offset capped here directly
    const maxOffset = 26
    const tx = Math.round((h1 - 0.5) * 2 * maxOffset)
    const ty = Math.round((h2 - 0.5) * 2 * maxOffset)

    return {
      keyword: op.keyword,
      category: op.category,
      size,
      pixelSize: 4 + Math.round(h3 * 2), // 2–4
      gap: 2 + Math.round(h4 * 2), // 2–4
      density: 0.3 + h0 * 0.18, // 0.30–0.48
      fadeStrength: 1.5 + h1 * 1.0, // 1.5–2.5
      randomness: 0.6 + h2 * 0.28, // 0.60–0.88
      fontSize: size < 130 ? 10 : size < 180 ? 12 : 13,
      color: PALETTE[idx % PALETTE.length],
      textColor: PALETTE[idx % PALETTE.length],
      animDensity: 0.18 + h5 * 0.1, // 8–18% pixels animate
      tx,
      ty,
      opacity: 0.65 + h3 * 0.35, // 0.65–1.0
    }
  })
})

// Cell size = largest rendered circle size + padding
// Calculates dynamically based on nodes so the grid doesn't space out excessively if max string is short.
const CELL_PAD = 60 // px of breathing room each cell gets beyond its circle
const cellSize = computed(() => {
  if (nodes.value.length === 0) return 200 // safe fallback
  const maxRenderedSize = Math.max(...nodes.value.map((n) => n.size))
  return maxRenderedSize + CELL_PAD
})
</script>

<template>
  <div
    class="w-full min-h-screen flex flex-wrap items-center justify-evenly mt-22 space-evenly bg-[#0a0a0f]"
  >
    <div
      v-for="node in nodes"
      :key="node.keyword"
      class="flex items-center justify-center flex-shrink-0"
      :style="{
        width: `${cellSize}px`,
        height: `${cellSize}px`,
      }"
    >
      <div
        :style="{
          transform: `translate(${node.tx}px, ${node.ty}px)`,
          opacity: node.opacity,
          transition: 'transform 0.4s ease',
        }"
      >
        <PixelCircle
          :text="node.category"
          :size="node.size"
          :pixelSize="node.pixelSize"
          :gap="node.gap"
          :density="node.density"
          :fadeStrength="node.fadeStrength"
          :randomness="node.randomness"
          :fontSize="node.fontSize"
          :color="node.color"
          :textColor="node.textColor"
          :animationDensity="node.animDensity"
          :clickable="true"
          @click="navigateTo(node.keyword)"
        />
      </div>
    </div>
  </div>
</template>
