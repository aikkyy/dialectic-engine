<script setup lang="ts">
/**
 * ChladniBackground.vue
 * ─────────────────────────────────────────────────────────────────────────────
 * Drop-in full-screen Chladni figure background for Vue 3 + TypeScript.
 */

import { ref } from 'vue'
import { useChladni } from './useChladni'

// ── Props ─────────────────────────────────────────────────────────────────────
// The internal resolution prop is removed; it perfectly mimics your window DPI now.

const props = withDefaults(
  defineProps<{
    audioSrc?: string
    color?: string
    bgColor?: string
  }>(),
  {
    audioSrc: '',
    color: '#ffffff',
    bgColor: '#000000',
  },
)

const canvasRef = ref<HTMLCanvasElement | null>(null)

const { modeN, modeM, threshold, audioActive } = useChladni(canvasRef, {
  audioSrc: props.audioSrc || undefined,
  color: props.color,
  bgColor: props.bgColor,
})
</script>

<template>
  <canvas
    ref="canvasRef"
    aria-hidden="true"
    :style="{
      position: 'fixed',
      inset: 0,
      width: '100%',
      height: '100%',
      zIndex: 0,
      display: 'block',
      pointerEvents: 'none',
    }"
  />

  <aside
    :style="{
      position: 'fixed',
      top: '12px',
      right: '16px',
      zIndex: 10,
      fontFamily: 'monospace',
      fontSize: '11px',
      color: props.color,
      opacity: 0.45,
      pointerEvents: 'none',
      lineHeight: '1.8',
      userSelect: 'none',
    }"
  >
    <div>n={{ modeN }} · m={{ modeM }}</div>
    <div>thr={{ threshold }}</div>
    <div v-if="props.audioSrc">audio={{ audioActive ? '▶ on' : '○ off' }}</div>
  </aside>
</template>
