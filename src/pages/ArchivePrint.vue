<script setup lang="ts">
/**
 * ArchivePrint.vue — phone-side landing for the /archive save QR.
 *
 * Flow:
 *   1. Desktop /archive embeds a QR code pointing here, with the archive data
 *      LZ-string-compressed into the URL hash.
 *   2. The phone scans → opens this route → we decode the hash → render the
 *      grid → html2canvas turns it into a JPG.
 *   3. The page swaps the rendered grid for the JPG <img>, so the user can
 *      long-press / right-click to "Save Image". A "Download" button is also
 *      provided as a fallback.
 */

import { onMounted, ref } from 'vue'
import LZString from 'lz-string'
import html2canvas from 'html2canvas'
import { usePageLayout } from '../composables/usePageLayout'

// No chrome instruction on the print page — just the title + download icon.
usePageLayout({ instructions: '' })

interface Record {
  category: string
  keyword: string
  opinion: string
  antithesis: string
}

const records = ref<Record[]>([])
const error = ref<string | null>(null)
const generating = ref(true)
const jpgUrl = ref<string | null>(null)
const gridEl = ref<HTMLElement | null>(null)

function readPayload(): Record[] | null {
  const hash = window.location.hash.replace(/^#/, '')
  if (!hash) return null
  try {
    const json = LZString.decompressFromEncodedURIComponent(hash)
    if (!json) return null
    const parsed = JSON.parse(json) as Array<{
      c: string
      k: string
      o: string
      a: string
    }>
    return parsed.map((r) => ({
      category: r.c,
      keyword: r.k,
      opinion: r.o,
      antithesis: r.a,
    }))
  } catch {
    return null
  }
}

async function renderToJpg() {
  await new Promise((r) => setTimeout(r, 60)) // let fonts + layout settle
  const el = gridEl.value
  if (!el) return
  try {
    const canvas = await html2canvas(el, {
      backgroundColor: '#181618',
      scale: Math.max(2, window.devicePixelRatio || 1),
      useCORS: true,
      logging: false,
    })
    jpgUrl.value = canvas.toDataURL('image/jpeg', 0.92)
  } catch (e) {
    error.value = (e as Error).message
  } finally {
    generating.value = false
  }
}

function download() {
  if (!jpgUrl.value) return
  const a = document.createElement('a')
  a.href = jpgUrl.value
  a.download = 'dialectic-engine-archive.jpg'
  document.body.appendChild(a)
  a.click()
  a.remove()
}

onMounted(async () => {
  const data = readPayload()
  if (!data || data.length === 0) {
    error.value = 'no archive data available yet'
    generating.value = false
    return
  }
  records.value = data
  await new Promise((r) => requestAnimationFrame(() => r(null)))
  await renderToJpg()
})
</script>

<template>
  <div class="print-page">
    <p v-if="error" class="print-error">{{ error }}</p>

    <!-- The hidden source for html2canvas. Rendered off-screen until image is
         ready so the user sees the JPG, not the HTML version. -->
    <div
      v-if="!error"
      ref="gridEl"
      class="print-grid"
      :class="{ 'is-offscreen': !!jpgUrl }"
    >
      <article
        v-for="(record, i) in records"
        :key="i"
        class="print-card"
      >
        <h3 class="print-topic">{{ record.category }}</h3>
        <div class="print-block">
          <p class="print-label">thesis</p>
          <p class="print-text">
            I believe that
            {{ [record.keyword, record.opinion].filter(Boolean).join(' ') }}
          </p>
        </div>
        <div class="print-block">
          <p class="print-label">antithesis</p>
          <p class="print-text">{{ record.antithesis }}</p>
        </div>
      </article>
    </div>

    <div v-if="jpgUrl" class="print-result">
      <img :src="jpgUrl" alt="Your archive" class="print-img" />
      <button
        class="print-download-btn"
        type="button"
        aria-label="Download your thesis and antithesis"
        @click="download"
      >
        <!-- Family download icon (square tray + chevron). stroke-width 0.7 at
             36px renders ~1px, matching the plus glyph on this page. -->
        <svg
          viewBox="0 0 24 24"
          width="36"
          height="36"
          fill="none"
          stroke="currentColor"
          stroke-width="0.7"
          aria-hidden="true"
        >
          <path d="M21 15v6H3v-6" />
          <polyline points="7 10 12 15 17 10" />
          <line x1="12" y1="15" x2="12" y2="3" />
        </svg>
      </button>
    </div>
  </div>
</template>

<style scoped>
.print-page {
  position: fixed;
  top: clamp(8rem, 18vw, 11rem);
  left: 0;
  right: 0;
  bottom: calc(var(--edge-y) + 3rem);
  z-index: 1;
  overflow-y: auto;
  padding: 0 var(--edge-x);
}

.print-error {
  text-align: center;
  font-family: 'Reddit Mono', monospace;
  font-size: var(--fs-small);
  color: var(--text);
  opacity: 0.7;
  padding: 2rem 0;
}

.print-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1rem;
}
.print-grid.is-offscreen {
  /* Keep the source DOM alive but off-screen — html2canvas needs the live
     element to measure. Hidden via visibility so it still takes layout. */
  position: absolute;
  left: -99999px;
  top: 0;
  visibility: hidden;
}

.print-card {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1.25rem;
  background: var(--text);
  color: var(--bg);
  border: 1px solid var(--bg);
}

.print-topic {
  font-family: 'Gap Sans', sans-serif;
  font-size: clamp(1.125rem, 1.6vw, 1.375rem);
  font-weight: 400;
  letter-spacing: -0.005em;
  line-height: 1;
  text-transform: lowercase;
  color: var(--bg);
  margin: 0;
}

.print-block {
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
}
.print-label {
  font-family: 'Reddit Mono', monospace;
  font-size: var(--fs-xs);
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: var(--bg);
  opacity: 0.55;
}
.print-text {
  font-family: 'Reddit Mono', monospace;
  font-size: var(--fs-small);
  line-height: 1.5;
  color: var(--bg);
}

.print-result {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding: 1rem 0 2rem;
}
.print-img {
  width: 100%;
  max-width: 720px;
  height: auto;
  border: 1px solid var(--border);
  display: block;
}
.print-download-btn {
  /* Icon-only download button. Generous padding gives a comfortable tap target
     on a phone around the 36px icon. */
  background: none;
  border: 0;
  padding: 0.5rem;
  color: var(--text);
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  filter: var(--icon-halo);
  transition: color 0.18s ease;
}
.print-download-btn:hover {
  color: var(--accent);
}
</style>
