<script setup lang="ts">
import { computed, nextTick, onMounted, onUnmounted, ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { engineOpinions } from '../data/engineOpinions'

let router: ReturnType<typeof useRouter> | null = null
let route: ReturnType<typeof useRoute> | null = null
try {
  router = useRouter()
  route = useRoute()
} catch {
  /* no router */
}

function navigateTo(category: string) {
  const base =
    route?.path ??
    (typeof window !== 'undefined' ? window.location.pathname : '')
  // Navigate by the category slug (lowercased + encoded) — identical to the
  // topic-index modal. This MUST be the category name, not the entry's
  // `keyword`: a topic's first keyword can differ from its name (e.g.
  // "Punishment" → "death penalty"), which would open a different/broken URL
  // that /form/<topic> can't resolve back to the topic.
  const slug = encodeURIComponent(category.toLowerCase())
  const path = `${base.replace(/\/$/, '')}/${slug}`
  if (router) router.push(path)
  else if (typeof window !== 'undefined') window.location.href = path
}

const seen = new Set<string>()
const categories = engineOpinions.filter((op) => {
  if (seen.has(op.category)) return false
  seen.add(op.category)
  return true
})

// ─── CONFIGURATION ─────────────────────────────────────────
const DISTANCE_FROM_CENTER = 50
const ITEM_SPACING = 70
// ─────────────────────────────────────────────────────────

const getCircularPosition = (index: number, _total: number) => {
  const goldenAngle = Math.PI * (3 - Math.sqrt(5))
  const angle = index * goldenAngle * 2
  const spacing = ITEM_SPACING / 100
  const maxRadius = Math.min(window.innerWidth, window.innerHeight) * 0.5
  const radius =
    ((maxRadius * DISTANCE_FROM_CENTER) / 100) *
    (1 + (index % 3) * spacing * 0.3)

  return {
    x: Math.cos(angle) * radius,
    y: Math.sin(angle) * radius,
    angle,
    radius,
  }
}

const windowSize = ref({ width: 0, height: 0 })
const scrollStageEl = ref<HTMLElement | null>(null)

const updateWindowSize = () => {
  windowSize.value = {
    width: window.innerWidth,
    height: window.innerHeight,
  }
}

const items = computed(() => {
  const count = categories.length
  const WINDOW = 14
  const totalSpread = 100

  return categories.map((op, i) => {
    const pos = getCircularPosition(i, count)

    // mid starts at 0 (instead of 5) so the very first item is at peak visibility
    // at scroll 0% — gives the page a populated first layer instead of an empty screen.
    // Items spread to mid = totalSpread by the last item, so the orbit fades in/out
    // smoothly across the full scroll.
    const mid = (i / Math.max(count - 1, 1)) * totalSpread
    const start = mid - WINDOW / 2
    const end = mid + WINDOW / 2
    const range = `${start.toFixed(1)}% ${end.toFixed(1)}%`

    return {
      label: op.category,
      keyword: op.keyword,
      range,
      posX: pos.x,
      posY: pos.y,
      angle: pos.angle,
      radius: pos.radius,
    }
  })
})

onMounted(async () => {
  updateWindowSize()
  window.addEventListener('resize', updateWindowSize)

  // Wake the CSS scroll-driven timeline. When this component is freshly
  // mounted after a route change (e.g. archive → form via the back arrow),
  // Chromium occasionally fails to wire up the named `--stage` timeline
  // until the scroll position actually moves. That leaves every
  // `.category-item` parked at the start of `zoom-in-3d` (opacity 0), so
  // the page looks empty even though the items are in the DOM. A tiny
  // no-op nudge on the scroll container forces the timeline to bind.
  await nextTick()
  const stage = scrollStageEl.value
  if (stage) {
    const original = stage.scrollTop
    stage.scrollTop = original + 1
    stage.scrollTop = original
  }
})

onUnmounted(() => {
  window.removeEventListener('resize', updateWindowSize)
})
</script>

<template>
  <div ref="scrollStageEl" class="scroll-stage" id="scroll-stage">
    <div class="stuck-grid">
      <div
        v-for="item in items"
        :key="item.label"
        class="category-item display-text"
        :style="{
          '--range': item.range,
          '--x': item.posX + 'px',
          '--y': item.posY + 'px',
        }"
        @click="navigateTo(item.label)"
      >
        {{ item.label }}
      </div>
    </div>
  </div>
</template>

<style scoped>
.scroll-stage {
  position: relative;
  width: 100%;
  height: 100vh; /* Force viewport height instead of relying on parent */
  overflow-y: scroll;
  overflow-x: hidden;
  scroll-timeline: --stage block;

  /* Hide scrollbar for IE, Edge and Firefox */
  -ms-overflow-style: none;
  scrollbar-width: none;
}

/* Hide scrollbar for Chrome, Safari and Opera */
.scroll-stage::-webkit-scrollbar {
  display: none;
}

.scroll-stage::after {
  content: '';
  display: block;
  height: 500%;
}

.stuck-grid {
  position: sticky;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: clip;
  background: transparent;
  perspective: 1200px;
  transform-style: preserve-3d;
  display: flex;
  align-items: center;
  justify-content: center;
}

.category-item {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(calc(-50% + var(--x)), calc(-50% + var(--y)))
    translateZ(0px);

  /* font-family / font-size / letter-spacing come from the .display-text class
     applied alongside this one (see src/style.css). */
  text-wrap: nowrap;
  text-transform: lowercase;
  color: var(--text);
  cursor: pointer;
  transition: all 0.2s ease;
  transform-style: preserve-3d;
  will-change: transform, opacity, filter;

  @supports (animation-timeline: scroll()) {
    @media (prefers-reduced-motion: no-preference) {
      animation: zoom-in-3d linear both;
      animation-timeline: --stage;
      animation-range: var(--range);
    }
  }

  &:hover {
    color: var(--accent);
    transform: translate(calc(-50% + var(--x)), calc(-50% + var(--y)))
      translateZ(20px) scale(1.12);
    z-index: 20;
  }
}

@keyframes zoom-in-3d {
  0% {
    opacity: 0;
    filter: blur(8px);
    /* Out-of-focus (and out-of-range, via `both` fill) items must NOT capture
       clicks — otherwise the ~40 invisible topics stacked at the centre steal
       the click from the visible one, opening the wrong topic. */
    pointer-events: none;
    z-index: 0;
    transform: translate(calc(-50% + var(--x)), calc(-50% + var(--y)))
      translateZ(-400px) scale(0.8);
  }
  40% {
    opacity: 1;
    filter: blur(0px);
    /* Clickable only while in the visible window. z-index rises with the
       item's forward travel so, when two visible topics overlap, the one
       nearer the viewer is both painted on top and is the click target. */
    pointer-events: auto;
    z-index: 10;
  }
  60% {
    opacity: 1;
    filter: blur(0px);
    pointer-events: auto;
    z-index: 20;
  }
  100% {
    opacity: 0;
    filter: blur(8px);
    pointer-events: none;
    z-index: 30;
    transform: translate(calc(-50% + var(--x)), calc(-50% + var(--y)))
      translateZ(400px) scale(1.2);
  }
}
</style>
