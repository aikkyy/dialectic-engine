<script setup lang="ts">
/**
 * CategoryScatter.vue
 * ─────────────────────────────────────────────────────────────────────────────
 * Renders engineOpinions as a flex-wrap grid of PixelCircles.
 * No absolute positioning — uses CSS translate offsets for organic scatter.
 *
 * Layout approach (no collision detection needed):
 *   • Flex-wrap with fixed-size cells (size + padding)
 *   • Each cell gets a deterministic translateX/Y offset so the grid
 *     structure disappears but circles never actually overlap
 *   • Offset is clamped so no circle leaves its cell boundary
 *   • Margins vary per-row to break up horizontal alignment
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

const SIZES = [120, 160, 200] // three tiers — small / medium / large

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

    const tier = idx % 3
    const size = SIZES[tier] + Math.round((h0 - 0.5) * 20)

    // Translate offset: max ±(cellSize - size)/2 so circles can't leave cell
    // Cell is size + 60px padding each side; max offset = 30px
    const maxOffset = 28
    const tx = Math.round((h1 - 0.5) * 2 * maxOffset)
    const ty = Math.round((h2 - 0.5) * 2 * maxOffset)

    return {
      keyword: op.keyword,
      category: op.category,
      size,
      pixelSize: 4 + Math.round(h3 * 2), // 2–4
      gap: 2 + Math.round(h4 * 2), // 2–4
      density: 0.5 + h0 * 0.18, // 0.50–0.68
      fadeStrength: 1.8 + h1 * 1.0, // 1.8–2.8
      randomness: 0.6 + h2 * 0.28, // 0.60–0.88
      fontSize: tier === 0 ? 9 : tier === 1 ? 11 : 13,
      color: PALETTE[idx % PALETTE.length],
      textColor: PALETTE[idx % PALETTE.length],
      animDensity: 0.08 + h5 * 0.1, // 8–18% pixels animate
      tx,
      ty,
      opacity: 0.65 + h3 * 0.35, // 0.65–1.0
    }
  })
})

// Cell size = largest possible size + padding
// All cells are uniform so flex-wrap stays aligned
const CELL_PAD = 60 // px of breathing room each cell gets beyond its circle
const cellSize = computed(() => Math.max(...SIZES) + CELL_PAD)
</script>

<template>
  <!--
    Flex-wrap container.
    justify-content: space-evenly distributes cells evenly on each row.
    No absolute positioning — everything is in normal flow.
    The `transform` on each cell shifts it off-grid organically.
  -->
  <div
    class="w-full min-h-screen flex flex-wrap items-center justify-evenly"
    style="align-content: space-evenly"
  >
    <!--
      Each "cell" is a fixed-size flex item that centers the PixelCircle inside.
      The cell itself is invisible — just a layout anchor.
      The transform nudges the circle off-center without affecting layout flow,
      so no circles overlap (the cell boundaries still separate them).
    -->
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
