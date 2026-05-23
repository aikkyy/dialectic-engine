<script setup lang="ts">
/**
 * ChladniBackground.vue
 * ─────────────────────────────────────────────────────────────────────────────
 * Drop-in full-screen Chladni figure background for Vue 3 + TypeScript.
 *
 * Files needed (copy both into the same folder):
 *   • ChladniBackground.vue   ← this file
 *   • useChladni.ts           ← the composable
 *
 * Usage in App.vue:
 *   <ChladniBackground audioSrc="/base.mp3" color="#7c6ff7" bgColor="#0f0f14" />
 *
 * Props:
 *   audioSrc   — path to an MP3 (optional). Starts on first user click.
 *   color      — nodal-line color.  Default: '#ffffff'
 *   bgColor    — background color. Default: '#000000'
 *   resolution — internal render size in px. Lower = faster. Default: 600
 *   step       — pixel block size (1 = full quality, 2 = 2×2 blocks). Default: 2
 *
 * No external dependencies beyond Vue 3.
 */

import { ref } from 'vue'
import { useChladni } from './useChladni'

// ── Props ─────────────────────────────────────────────────────────────────────

const props = withDefaults(
  defineProps<{
    audioSrc?: string
    color?: string
    bgColor?: string
    resolution?: number
    step?: number
  }>(),
  {
    audioSrc: '',
    color: '#ffffff',
    bgColor: '#000000',
    resolution: 600,
    step: 1,
  },
)

// ── Canvas ref ────────────────────────────────────────────────────────────────

const canvasRef = ref<HTMLCanvasElement | null>(null)

// ── Logic (all in the composable) ────────────────────────────────────────────

const { modeN, modeM, threshold, audioActive } = useChladni(canvasRef, {
  audioSrc: props.audioSrc || undefined,
  color: props.color,
  bgColor: props.bgColor,
  resolution: props.resolution,
})
</script>

<template>
  <!--
    The canvas is fixed behind all content.
    Its internal pixel grid is resolution×resolution;
    CSS stretches it to 100vw × 100vh.
    object-fit: fill ensures it covers the full viewport.
  -->
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
      imageRendering: 'auto',
      pointerEvents: 'none',
    }"
  />

  <!--
    Debug HUD — shows live mode numbers top-right.
    Delete this <aside> if you don't want it; the canvas still works.
  -->
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
