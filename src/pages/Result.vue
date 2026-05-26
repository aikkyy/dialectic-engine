<script setup lang="ts">
/**
 * Result.vue – Two touching pixel circles
 * Left: keyword + opinion (combined)
 * Right: antithesis
 */

import { computed, onMounted, onUnmounted, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import SandCircle from '../components/Sandcircle.vue'

const route = useRoute()
const router = useRouter()

const keyword = computed(() => String(route.query.keyword || ''))
const opinion = computed(() =>
  String(route.query.opinion || 'No opinion provided'),
)
const antithesis = computed(() =>
  String(route.query.antithesis || 'No antithesis provided'),
)

// Combine keyword + opinion for the left circle
const leftText = computed(() => {
  if (keyword.value) {
    return `${keyword.value} ${opinion.value}`
  }
  return opinion.value
})

const isMobile = ref(false)

function updateIsMobile() {
  if (typeof window === 'undefined') return
  isMobile.value = window.innerWidth <= 700
}

onMounted(() => {
  updateIsMobile()
  window.addEventListener('resize', updateIsMobile)
})

onUnmounted(() => {
  window.removeEventListener('resize', updateIsMobile)
})

const mobileScale = computed(() => (isMobile.value ? 0.86 : 1))

function getCircleSize(text: string): number {
  // Slightly larger to accommodate combined text
  return Math.max(200, Math.min(360, 140 + text.length * 5))
}
const leftSize = computed(() =>
  Math.round(getCircleSize(leftText.value) * mobileScale.value),
)
const rightSize = computed(() =>
  Math.round(getCircleSize(antithesis.value) * mobileScale.value),
)

function wrapLines(text: string, maxChars = 20): string[] {
  const words = text.split(' ').filter(Boolean)
  const lines: string[] = []
  let current = ''

  for (const word of words) {
    if (current && current.length + 1 + word.length > maxChars) {
      lines.push(current)
      current = word
    } else {
      current = current ? `${current} ${word}` : word
    }
  }

  if (current) {
    lines.push(current)
  }

  return lines
}

const leftLines = computed(() =>
  wrapLines(leftText.value, isMobile.value ? 18 : 22),
)
const rightLines = computed(() =>
  wrapLines(antithesis.value, isMobile.value ? 18 : 22),
)

function reset() {
  router.push({ name: 'Form' })
}
</script>

<template>
  <div class="result-root">
    <!-- Breadcrumb -->
    <p class="breadcrumb" v-if="keyword">/result/{{ keyword }}</p>

    <!-- Back button -->
    <!-- <button class="back-btn" @click="goBack" title="Go back">←</button> -->

    <!-- Two touching circles -->
    <div class="circles-container">
      <div class="circle-wrapper">
        <SandCircle
          :size="leftSize"
          :lines="leftLines"
          color="#ffffff"
          bgColor="transparent"
        />
      </div>
      <div class="circle-wrapper">
        <SandCircle
          :size="rightSize"
          :lines="rightLines"
          color="#ffffff"
          bgColor="transparent"
        />
      </div>
    </div>

    <!-- Refresh / reload button (optional, keeps your circular arrow) -->
    <button class="reload-btn" @click="reset" title="Restart">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="w-6 h-6"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="1.8"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path d="M21 12a9 9 0 1 1-3.2-6.9" />
        <polyline points="21 3 21 9 15 9" />
      </svg>
    </button>
  </div>
</template>

<style scoped>
.result-root {
  position: fixed;
  inset: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #0a0a0f;
  overflow: hidden;
}
.back-btn {
  position: absolute;
  top: 24px;
  left: 24px;
  z-index: 10;
  width: 42px;
  height: 42px;
  background: rgba(255, 255, 255, 0.07);
  border: 1px solid rgba(255, 255, 255, 0.22);
  color: white;
  border-radius: 50%;
  font-size: 20px;
  cursor: pointer;
  transition: 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;
}
.back-btn:hover {
  background: rgba(255, 255, 255, 0.18);
}
.breadcrumb {
  position: absolute;
  top: 110px;
  left: 24px;
  color: rgba(255, 255, 255, 0.5);
  font-family: monospace;
  font-size: 14px;
  pointer-events: none;
}

@media (max-width: 500px) {
  .breadcrumb {
    top: 64px;
  }
}

.circles-container {
  display: flex;
  flex-direction: row;
  gap: 0;
  align-items: center;
  justify-content: center;
  flex-wrap: nowrap;
  max-width: 100vw;
  padding: 20px;
}
.circle-wrapper {
  flex-shrink: 0;
}
/* On very narrow screens, wrap with a small gap */
@media (max-width: 700px) {
  .circles-container {
    gap: 0px;
    flex-wrap: wrap;

    /* first div child should have -5rem margin bottom */
    :first-child {
      margin-bottom: -1rem;
    }
  }
}
.reload-btn {
  position: absolute;
  bottom: 32px;
  left: 50%;
  transform: translateX(-50%);
  width: 46px;
  height: 46px;
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: white;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s;
}
.reload-btn:hover {
  background: rgba(255, 255, 255, 0.2);
  transform: translateX(-50%) scale(1.05);
}
</style>
