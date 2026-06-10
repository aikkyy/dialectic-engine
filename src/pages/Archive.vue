<script setup lang="ts">
import { computed, nextTick, onBeforeUnmount, onMounted, ref } from 'vue'
import LZString from 'lz-string'
import QRCode from 'qrcode'
import {
  loadSelectionArchives,
  type SelectionArchiveRecord,
} from '../utils/selectionArchives'
import { usePageLayout } from '../composables/usePageLayout'

usePageLayout({ instructions: '*review* your saved thesis and antithesis' })

const archives = ref<SelectionArchiveRecord[]>([])

const orderedArchives = computed(() =>
  [...archives.value].sort((a, b) => {
    const aTime = new Date(a.lastSelectedAt).getTime()
    const bTime = new Date(b.lastSelectedAt).getTime()
    return bTime - aTime
  }),
)

// Match the gap between instructions and the archive grid to the gap between
// title and instructions. Both chrome elements (intro block, instructions text)
// can re-wrap when the viewport changes, so we measure live with a
// ResizeObserver and write the result onto the page's inline `top`.
const archivePageEl = ref<HTMLElement | null>(null)
let resizeObserver: ResizeObserver | null = null

function syncTopGap() {
  const page = archivePageEl.value
  if (!page) return
  const h1 = document.querySelector('.home-intro h1') as HTMLElement | null
  const intro = document.querySelector('.home-intro') as HTMLElement | null
  const instructions = document.querySelector(
    '.home-instructions',
  ) as HTMLElement | null
  if (!h1 || !intro || !instructions) return
  const titleBottom = h1.getBoundingClientRect().bottom
  const instructionsTop = instructions.getBoundingClientRect().top
  const chromeBottom = intro.getBoundingClientRect().bottom
  const blockGap = instructionsTop - titleBottom
  page.style.top = `${chromeBottom + blockGap}px`
}

onMounted(async () => {
  archives.value = loadSelectionArchives()
  await nextTick()
  syncTopGap()
  const intro = document.querySelector('.home-intro')
  if (intro && 'ResizeObserver' in window) {
    resizeObserver = new ResizeObserver(syncTopGap)
    resizeObserver.observe(intro as Element)
  }
  window.addEventListener('resize', syncTopGap)
  window.addEventListener('keydown', onSaveKey)
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', syncTopGap)
  if (resizeObserver) {
    resizeObserver.disconnect()
    resizeObserver = null
  }
  window.removeEventListener('keydown', onSaveKey)
})

// ─── Save / share modal ─────────────────────────────────────────────────────
// Compresses the archive records into the URL hash with LZ-string, generates
// a QR code for the resulting URL, and shows it in a modal. The QR points to
// /archive/print which decodes the data and renders the grid as a JPG.
const saveOpen = ref(false)
const qrSvg = ref<string>('')
const qrError = ref<string | null>(null)

// Where the QR sends the visitor's phone. It MUST be a URL the phone can open
// (a phone reads a non-URL QR as a search query — that's the "it just Googles
// the text" bug), and it must be PUBLIC — the exhibition iMac runs on localhost,
// which a phone can't reach. So it points at the deployed copy of the print
// page; the archive itself rides in the URL hash, so that page is static (no
// backend) and the data never leaves the phone. Default = the exhibition's
// public site; override with VITE_PUBLIC_URL to host it elsewhere.
const PRINT_BASE = (
  (import.meta.env.VITE_PUBLIC_URL as string | undefined) ||
  'https://dialectic-engine.online'
).replace(/\/+$/, '')

/**
 * Build the save QR's URL: the styled /archive/print page with the whole
 * archive LZ-compressed into the hash. Compression keeps it small enough that a
 * normal session's worth of entries fits in one QR without ever asking the user
 * to delete anything.
 */
function buildSavePayload(): string {
  const payload = orderedArchives.value.map((r) => ({
    c: r.category,
    k: r.keyword,
    o: r.opinion,
    a: r.antithesis,
  }))
  const compressed = LZString.compressToEncodedURIComponent(
    JSON.stringify(payload),
  )
  return `${PRINT_BASE}/archive/print#${compressed}`
}

async function openSaveModal() {
  qrError.value = null
  qrSvg.value = ''
  saveOpen.value = true
  try {
    const payload = buildSavePayload()
    qrSvg.value = await QRCode.toString(payload, {
      type: 'svg',
      errorCorrectionLevel: 'L',
      margin: 1,
      color: { dark: '#181618', light: '#faf9f6' },
    })
  } catch (e) {
    qrError.value =
      'Your archive is too long to fit in a single QR. Clear a few entries and try again.'
  }
}

function onSaveKey(e: KeyboardEvent) {
  if (e.key === 'Escape' && saveOpen.value) saveOpen.value = false
}
</script>

<template>
  <div ref="archivePageEl" class="archive-page">
    <!-- Sub-instruction teleported under the main "review your saved thesis…"
         instruction, into the same layout-chrome slot the Form/Category pages
         use. Plain informational text: ending the experience clears the saved
         archive. -->
    <Teleport to="#layout-extra-slot">
      <p class="home-subinstructions">
        <span class="text-backing">and end the experience to clear your personal archive</span>
      </p>
    </Teleport>

    <!-- Save icon at bottom centre (only useful with data). Same `corner-bc`
         position + icon-button look as Category's "New Opinion" restart. -->
    <button
      v-if="orderedArchives.length"
      class="corner-bc save-archive-btn"
      type="button"
      aria-label="Save archive"
      title="Save archive"
      @click="openSaveModal"
    >
      <svg
        viewBox="0 0 24 24"
        width="24"
        height="24"
        fill="none"
        stroke="currentColor"
        stroke-width="1"
        aria-hidden="true"
      >
        <!-- Tray (static) — square corners to match the geometric plus glyph. -->
        <path d="M21 15v6H3v-6" />
        <!-- Arrow (chevron + stem) — bobs up and down to read as "save here". -->
        <g class="save-icon-arrow">
          <polyline points="7 10 12 15 17 10" />
          <line x1="12" y1="15" x2="12" y2="3" />
        </g>
      </svg>
    </button>

    <!-- Save modal — teleported to <body> so its overlay escapes .archive-page
         (z-6, which sits BELOW the z-10 chrome) and instead covers everything,
         blurring the title/instructions/buttons behind it via the overlay's
         existing backdrop-filter. -->
    <Teleport to="body">
      <Transition name="modal">
        <div
          v-if="saveOpen"
          class="topic-modal-overlay"
          role="dialog"
          aria-modal="true"
          aria-labelledby="save-modal-title"
          @click.self="saveOpen = false"
        >
          <div class="topic-modal save-modal">
            <header class="topic-modal-header">
              <h2 id="save-modal-title" class="topic-modal-title">
                save your archive
              </h2>
              <button
                type="button"
                class="topic-modal-close"
                aria-label="Close"
                @click="saveOpen = false"
              >
                <svg
                  viewBox="0 0 24 24"
                  width="20"
                  height="20"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.2"
                >
                  <path d="M6 6 L18 18 M18 6 L6 18" />
                </svg>
              </button>
            </header>
            <div class="topic-modal-body save-modal-body">
              <p v-if="qrError" class="save-modal-error">{{ qrError }}</p>
              <template v-else>
                <p class="save-modal-instr">
                  scan the QR code<br />
                  save your thesis and antithesis
                </p>
                <div class="save-modal-qr" v-html="qrSvg"></div>
              </template>
            </div>
          </div>
        </div>
      </Transition>
    </Teleport>

    <div v-if="!orderedArchives.length" class="archive-empty">
      archive is empty<br />
      saved combinations will appear here
    </div>
    <div v-else class="archive-grid">
      <article
        v-for="record in orderedArchives"
        :key="record.key"
        class="archive-card"
      >
        <h3 class="archive-topic">{{ record.category }}</h3>
        <div class="archive-block">
          <p class="archive-label">thesis</p>
          <p class="archive-text">
            <!-- Legacy drag-drop entries carry a subtopic in `keyword`; the
                 new freeform entries leave it empty (the user already wrote
                 the topic themselves inside `opinion`). Conditionally
                 inserting it keeps both shapes rendering as a clean
                 "I believe that …" sentence with no double spacing. -->
            I believe that<template v-if="record.keyword">
              {{ record.keyword }}</template>
            {{ record.opinion }}
          </p>
        </div>
        <div class="archive-block">
          <p class="archive-label">antithesis</p>
          <p class="archive-text">{{ record.antithesis }}</p>
        </div>
      </article>
    </div>
  </div>
</template>

<style scoped>
/* The page is a fixed scrollable box that's intentionally bounded by the
   global chrome rather than the viewport — so when the grid scrolls the
   cards cannot pass under the title block (top) or the corner buttons
   (bottom). Using `top` / `bottom` positions instead of padding clips
   scrolled content at those edges. */
.archive-page {
  position: fixed;
  top: clamp(12rem, 20vw, 17rem);
  left: 0;
  right: 0;
  bottom: calc(var(--edge-y) + 3rem);
  /* Above the readability overlay (z-5). The Archive has no Chladni canvas,
     so the overlay serves no purpose here — but at the old z-index:1 this
     fixed element formed a stacking context BELOW the overlay, which dimmed
     the white save icon (a `corner-bc` child) to grey. z-index:6 lifts the
     whole archive layer above the overlay; the App.vue chrome (z-10) and
     the End-Experience curtain (z-9999) still sit above it. */
  z-index: 6;
  overflow-y: auto;
  padding: 0 var(--edge-x);
}

.archive-empty {
  /* Align with the y-position the first card row would occupy when the
     grid is populated (the grid has no top padding, so the copy sits at
     the same top edge as the cards). */
  text-align: center;
  font-family: 'Reddit Mono', monospace;
  font-size: var(--fs-small);
  color: var(--text);
  opacity: 0.55;
}

.archive-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1rem;
}

.archive-card {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1.25rem;
  /* Inverted palette: white card (--text) with dark ink (--bg). Matches the modal. */
  background: var(--text);
  color: var(--bg);
  border: 1px solid var(--bg);
  transition:
    transform 0.22s cubic-bezier(0.22, 1, 0.36, 1),
    border-color 0.22s ease;
}
.archive-card:hover {
  /* Border colour change only — no asymmetric drop-shadow, so the 1 px
     stroke reads the same on every edge before and during hover. */
  border-color: var(--accent);
  transform: translateY(-3px);
}

.archive-topic {
  font-family: 'Gap Sans', sans-serif;
  font-size: clamp(1.125rem, 1.6vw, 1.375rem);
  font-weight: 400;
  letter-spacing: -0.005em;
  line-height: 1;
  text-transform: lowercase;
  color: var(--bg);
  margin: 0;
}

.archive-block {
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
}

.archive-label {
  font-family: 'Reddit Mono', monospace;
  font-size: var(--fs-xs);
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: var(--bg);
  opacity: 0.55;
}

.archive-text {
  font-family: 'Reddit Mono', monospace;
  font-size: var(--fs-small);
  line-height: 1.5;
  color: var(--bg);
}

/* ── Save icon button + modal ──────────────────────────────────────────── */
.save-archive-btn {
  background: none;
  border: 0;
  padding: 0.25rem;
  color: var(--text);
  cursor: pointer;
  /* Full opacity so the icon reads as crisp white like the other buttons
     (END EXPERIENCE / ARCHIVE / restart). */
  opacity: 1;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: color 0.18s ease;
}
.save-archive-btn:hover {
  color: var(--accent);
}

/* Subtle vertical bob on the arrow, only while the button is hovered. The
   tray stays anchored. */
.save-archive-btn .save-icon-arrow {
  transform-origin: 50% 50%;
  transform-box: fill-box;
}
.save-archive-btn:hover .save-icon-arrow {
  /* One downward nudge per hover — toward the tray, like the save gesture —
     then it settles back at rest. No `infinite`, so it moves exactly once. */
  animation: save-arrow-bob 0.55s ease-in-out;
}
@keyframes save-arrow-bob {
  0%, 100% { transform: translateY(0); }
  50%      { transform: translateY(3px); }
}

.save-modal-body {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}
.save-modal-instr {
  font-family: 'Reddit Mono', monospace;
  font-size: var(--fs-small);
  color: var(--bg);
  text-align: center;
  margin: 0;
}
.save-modal-qr {
  /* Tighten the QR to a square, give it breathing room. */
  width: clamp(220px, 50vw, 320px);
  aspect-ratio: 1 / 1;
  display: flex;
}
.save-modal-qr :deep(svg) {
  width: 100%;
  height: 100%;
  display: block;
}
.save-modal-error {
  font-family: 'Reddit Mono', monospace;
  font-size: var(--fs-small);
  color: var(--bg);
  text-align: center;
  margin: 0;
}
</style>
