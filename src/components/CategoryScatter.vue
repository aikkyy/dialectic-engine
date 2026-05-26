<script setup lang="ts">
import { computed, ref, onMounted, onUnmounted } from 'vue'
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

function navigateTo(keyword: string) {
  const base =
    route?.path ??
    (typeof window !== 'undefined' ? window.location.pathname : '')
  const path = `${base.replace(/\/$/, '')}/${keyword}`
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

const getCircularPosition = (index: number, total: number) => {
  const goldenAngle = Math.PI * (3 - Math.sqrt(5))
  const angle = index * goldenAngle * 2
  const spacing = ITEM_SPACING / 100
  const maxRadius = Math.min(window.innerWidth, window.innerHeight) * 0.35
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

const updateWindowSize = () => {
  windowSize.value = {
    width: window.innerWidth,
    height: window.innerHeight,
  }
}

const items = computed(() => {
  const count = categories.length
  const WINDOW = 14
  const totalSpread = 90

  return categories.map((op, i) => {
    const pos = getCircularPosition(i, count)

    const mid = 5 + (i / Math.max(count - 1, 1)) * totalSpread
    const start = Math.max(0, mid - WINDOW / 2)
    const end = Math.min(100, mid + WINDOW / 2)
    const range = `${start.toFixed(0)}% ${end.toFixed(0)}%`

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

onMounted(() => {
  updateWindowSize()
  window.addEventListener('resize', updateWindowSize)
})

onUnmounted(() => {
  window.removeEventListener('resize', updateWindowSize)
})
</script>

<template>
  <div class="scroll-stage" id="scroll-stage">
    <div class="stuck-grid">
      <div class="special">
        <span class="special-label">select a<br /><b>topic</b></span>
      </div>

      <div
        v-for="(item, i) in items"
        :key="item.label"
        class="category-item"
        :style="{
          '--range': item.range,
          '--x': item.posX + 'px',
          '--y': item.posY + 'px',
        }"
        @click="item.keyword && navigateTo(item.keyword)"
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
  background: #0a0a0f;
  perspective: 1200px;
  transform-style: preserve-3d;
  display: flex;
  align-items: center;
  justify-content: center;
}

.special {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-style: preserve-3d;
  text-align: center;
  pointer-events: none;
  z-index: 10;
}

.special-label {
  font-size: clamp(0.8rem, 2.5vmin, 1.3rem);
  font-weight: 300;
  line-height: 1.3;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.35);
  white-space: nowrap;
}

.special-label b {
  display: block;
  font-size: clamp(2rem, 8vmin, 5rem);
  font-weight: 700;
  letter-spacing: -0.02em;
  color: rgba(255, 255, 255, 0.9);
  line-height: 1;
}

.category-item {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(calc(-50% + var(--x)), calc(-50% + var(--y)))
    translateZ(0px);

  font-size: clamp(0.7rem, 2vmin, 1rem);
  font-weight: 300;
  text-wrap: nowrap;
  color: #ffffff;
  letter-spacing: 0.08em;
  text-transform: uppercase;
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
    color: #a0c4ff;
    transform: translate(calc(-50% + var(--x)), calc(-50% + var(--y)))
      translateZ(20px) scale(1.1);
    z-index: 20;
  }
}

@keyframes zoom-in-3d {
  0% {
    opacity: 0;
    filter: blur(8px);
    transform: translate(calc(-50% + var(--x)), calc(-50% + var(--y)))
      translateZ(-400px) scale(0.8);
  }
  40% {
    opacity: 1;
    filter: blur(0px);
  }
  60% {
    opacity: 1;
    filter: blur(0px);
  }
  100% {
    opacity: 0;
    filter: blur(8px);
    transform: translate(calc(-50% + var(--x)), calc(-50% + var(--y)))
      translateZ(400px) scale(1.2);
  }
}
</style>
