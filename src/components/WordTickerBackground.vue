<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  words: string[]
  rows?: number
  speed?: number
  gap?: number
  wordSize?: number
  wordOpacity?: number
  backgroundClass?: string
}

const props = withDefaults(defineProps<Props>(), {
  rows: 5,
  speed: 30,
  gap: 32,
  wordSize: 15,
  wordOpacity: 0.45,
  backgroundClass: '',
})

const emit = defineEmits<{
  select: [word: string]
}>()

/**
 * Distribute words round-robin across rows.
 * Each row gets its own slice so rows show different words.
 */
const rowWords = computed<string[][]>(() => {
  if (!props.words.length) return Array.from({ length: props.rows }, () => [])

  return Array.from({ length: props.rows }, (_, rowIndex) => {
    // offset starting word per row so rows differ visually
    const offset = Math.floor((rowIndex * props.words.length) / props.rows)
    const rotated = [
      ...props.words.slice(offset),
      ...props.words.slice(0, offset),
    ]
    // repeat words until row has enough to visually overflow at any container width
    const minRepeat = Math.max(3, Math.ceil(80 / rotated.length))
    const repeated: string[] = []
    for (let i = 0; i < minRepeat; i++) repeated.push(...rotated)
    return repeated
  })
})

/** Alternating direction per row: even rows → left, odd → right */
const rowDirection = (index: number): 'left' | 'right' =>
  index % 2 === 0 ? 'left' : 'right'

/** Duration in seconds — lower speed value = faster */
const rowDuration = (index: number): number => {
  // slightly vary per row so they feel independent
  const variation = 1 + (index % 3) * 0.18
  return props.speed * variation
}

const handleClick = (word: string) => emit('select', word)
</script>

<template>
  <div
    class="word-ticker-root relative w-full h-full overflow-hidden select-none"
    :class="backgroundClass"
  >
    <!-- Fade-out edges -->
    <div
      class="pointer-events-none absolute inset-y-0 left-0 w-16 z-10 edge-fade-left"
    />
    <div
      class="pointer-events-none absolute inset-y-0 right-0 w-16 z-10 edge-fade-right"
    />

    <!-- Rows -->
    <div class="flex flex-col justify-around w-full h-full py-2">
      <div
        v-for="(wordsInRow, rowIndex) in rowWords"
        :key="rowIndex"
        class="ticker-row relative flex overflow-hidden"
        :class="{ 'flex-row-reverse': rowDirection(rowIndex) === 'right' }"
      >
        <!--
          Two identical strips side by side.
          One animates off-screen while the other slides in,
          creating a seamless loop with no JS.
        -->
        <div
          v-for="strip in 2"
          :key="strip"
          class="ticker-strip flex items-center flex-shrink-0"
          :style="{
            animationDuration: `${rowDuration(rowIndex)}s`,
            animationDirection:
              rowDirection(rowIndex) === 'right' ? 'reverse' : 'normal',
          }"
        >
          <span
            v-for="(word, wordIndex) in wordsInRow"
            :key="`${word}-${wordIndex}`"
            class="ticker-word cursor-pointer whitespace-nowrap transition-all duration-200"
            :style="{
              fontSize: `${wordSize}px`,
              opacity: wordOpacity,
              marginRight: `${gap}px`,
            }"
            @click="handleClick(word)"
            >{{ word }}</span
          >
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.word-ticker-root {
  font-family: 'Georgia', 'Times New Roman', serif;
  letter-spacing: 0.04em;
  background: transparent;
}

/* ─── Marquee animation ────────────────────────────────────── */
@keyframes ticker-scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}

.ticker-strip {
  animation-name: ticker-scroll;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
  will-change: transform;
}

/* ─── Word hover ───────────────────────────────────────────── */
.ticker-word {
  color: #1a1a1a;
  font-weight: 400;
  font-size: 13px;
  text-transform: lowercase;
  border-bottom: 1px solid transparent;
}

.ticker-word:hover {
  opacity: 1 !important;
  color: #111;
  border-bottom-color: currentColor;
}

.ticker-word:active {
  opacity: 0.7 !important;
}

/* ─── Edge gradients ───────────────────────────────────────── */
.edge-fade-left {
  background: linear-gradient(
    to right,
    var(--ticker-bg, #fff) 0%,
    transparent 100%
  );
}
.edge-fade-right {
  background: linear-gradient(
    to left,
    var(--ticker-bg, #fff) 0%,
    transparent 100%
  );
}
</style>
