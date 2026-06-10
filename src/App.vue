<script setup lang="ts">
import { computed, provide, ref, type Ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import Button from './components/Button.vue'
import { clearSelectionArchives } from './utils/selectionArchives'

export interface PageLayoutContext {
  pageInstructions: Ref<string>
  pageTopic: Ref<string>
}

const route = useRoute()
const router = useRouter()
const isHome = computed(() => {
  if (route.matched.some((record) => record.name === 'Home')) return true
  const normalizedPath = route.path.replace(/\/+$/, '')
  return normalizedPath === '' || normalizedPath === '/'
})

const isArchive = computed(() =>
  route.matched.some((record) => record.name === 'Archive'),
)

// The phone-side print page (opened from the save QR). Its chrome is stripped
// to just the (unlinked) title + the page's own download button — no nav.
const isPrint = computed(() =>
  route.matched.some((record) => record.name === 'ArchivePrint'),
)

// The experience is an in-person, desktop installation. Mobile devices are
// blocked from every page EXCEPT the print page (which phones open from the
// save QR). Detection is user-agent based — covers phones and iPads (incl.
// iPadOS, which masquerades as "MacIntel" but reports touch points), while a
// real iMac/desktop (no touch) is never blocked.
const isMobileDevice =
  /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile/i.test(
    navigator.userAgent,
  ) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1)
const isBlocked = computed(() => isMobileDevice && !isPrint.value)

const pageInstructions = ref('')
const pageTopic = ref('')

provide<PageLayoutContext>('pageLayout', { pageInstructions, pageTopic })

/** Split the instruction into plain + glowing segments. A page marks the word
 *  it wants to highlight by wrapping it in asterisks — e.g.
 *  '*scroll* to select a topic' — and that word gets the same soft white glow
 *  as the Start CTA. With no markers the whole string is one plain segment, so
 *  every other instruction renders exactly as before. */
const instructionParts = computed(() => {
  const text = pageInstructions.value
  const parts: { text: string; glow: boolean }[] = []
  const re = /\*([^*]+)\*/g
  let last = 0
  let m: RegExpExecArray | null
  while ((m = re.exec(text)) !== null) {
    if (m.index > last) parts.push({ text: text.slice(last, m.index), glow: false })
    parts.push({ text: m[1], glow: true })
    last = m.index + m[0].length
  }
  if (last < text.length) parts.push({ text: text.slice(last), glow: false })
  return parts
})

/** Remember where the user was when they navigated INTO Archive, so the
 *  back arrow returns them to the same step of the experience instead of a
 *  one-size-fits-all destination. Specifically, if they were mid-thesis on
 *  `/form/<topic>`, back from Archive should land them back on that topic
 *  page — not on the topic selector. Defaults to `/form`. */
const archiveReturnPath = ref<string>('/form')

// Capture the source route whenever the user transitions INTO Archive.
// `router.beforeEach` gives us both the destination and origin reliably,
// which `router.back()` (history-driven) does not.
router.beforeEach((to, from) => {
  if (to.name === 'Archive' && from.name && from.name !== 'Archive') {
    archiveReturnPath.value = from.fullPath
  }
})

const goBack = () => {
  // Context-aware back: each step in the experience always returns to the
  // step that precedes it.
  //   /form          → home
  //   /form/<topic>  → /form (topic selection)
  //   /archive       → wherever the user was when they entered Archive
  //                    (captured by the router guard above). Default `/form`
  //                    for the cold-load case where there is no prior route.
  const name = route.name
  if (name === 'Form') {
    router.push({ name: 'Home' })
  } else if (name === 'Category') {
    router.push({ name: 'Form' })
  } else if (name === 'Archive') {
    router.push(archiveReturnPath.value)
  } else {
    router.back()
  }
}

// Title deconstruction: each letter of "Dialectic Engine" gets a randomised
// exit trajectory (translation + rotation). On END EXPERIENCE we toggle
// `isResetting`, the CSS animation runs staggered across the letters, and
// the archive clear + route to home happens *behind* the visible signal.
interface TitleChar {
  char: string
  dx: number
  dy: number
  rot: number
}

function randomTitleChars(): TitleChar[] {
  return [...'Dialectic Engine'].map((char) => ({
    char,
    // Each letter falls in a slightly different direction. Vertical bias is
    // strong (gravity feel) with a gentle horizontal drift and a mild tumble —
    // tight ranges so the motion reads as "falling" rather than "exploding".
    dx: (Math.random() - 0.5) * 220,
    dy: 220 + Math.random() * 260,
    rot: (Math.random() - 0.5) * 160,
  }))
}

const titleChars = ref<TitleChar[]>(randomTitleChars())
const isResetting = ref(false)
/** Drives the black-curtain reveal that follows the letter deconstruction.
 *  Sequenced separately from `isResetting` so we can flip `isResetting`
 *  back to false (snapping the letters back to their default position)
 *  WHILE the curtain is at peak black — the user never sees the snap,
 *  only the curtain fading to reveal the home page already rebuilt. */
const isShowingCurtain = ref(false)

/** Total animation time: last letter's delay + the per-letter animation
 *  duration. Keep this in sync with the CSS values. */
const TITLE_CHAR_DELAY_MS = 32
const TITLE_CHAR_ANIM_MS = 950
const DECONSTRUCT_TOTAL_MS =
  ([...'Dialectic Engine'].length - 1) * TITLE_CHAR_DELAY_MS +
  TITLE_CHAR_ANIM_MS

/** Curtain timing — must match the CSS transition duration on
 *  `.black-curtain` (see <style>). */
const CURTAIN_FADE_MS = 280
/** How long the curtain stays at full black after the route swap. Long
 *  enough for the new route's `page-fade-in` keyframe (0.28s) to fully
 *  complete under cover, so the page is already present when the curtain
 *  fades out — no half-mounted reveal. */
const CURTAIN_HOLD_MS = 380

async function resetExperience() {
  if (isResetting.value) return
  // Re-randomise each letter's trajectory so every reset feels fresh.
  titleChars.value = randomTitleChars()
  isResetting.value = true

  // 1. Letters fall.
  await new Promise((r) => setTimeout(r, DECONSTRUCT_TOTAL_MS))

  // 2. Curtain fades to peak black.
  isShowingCurtain.value = true
  await new Promise((r) => setTimeout(r, CURTAIN_FADE_MS))

  // 3. Everything below happens UNDER cover. The user sees a solid black
  //    screen during this phase, so we can swap routes, clear state, and
  //    let the letters snap back to their default position without any
  //    visible glitch.
  clearSelectionArchives()
  router.push({ name: 'Home' })
  isResetting.value = false

  // 4. Hold black long enough for the destination route's own
  //    page-fade-in to complete underneath, then lift the curtain.
  await new Promise((r) => setTimeout(r, CURTAIN_HOLD_MS))
  isShowingCurtain.value = false
}
</script>

<template>
  <!-- Mobile devices get a stop screen on every page except the print page —
       the experience itself is desktop/installation-only. -->
  <main v-if="isBlocked" class="mobile-block">
    <div class="mobile-block-inner">
      <h1 class="mobile-block-title">Dialectic Engine</h1>
      <p class="mobile-block-text">
        this experience lives on the installation — please visit it in person.
      </p>
    </div>
  </main>

  <main v-else class="h-screen">
    <!-- Title block: fixed top-left on every page. Title links home. Topic + instructions are
         filled per page via the provided PageLayoutContext refs. -->
    <div class="home-intro">
      <component
        :is="isPrint ? 'div' : 'router-link'"
        v-bind="isPrint ? {} : { to: { name: 'Home' } }"
        class="home-title-link"
      >
        <h1 :class="{ 'is-deconstructing': isResetting }">
          <span
            v-for="(c, i) in titleChars"
            :key="i"
            class="title-char"
            :style="{
              '--dx': c.dx + 'px',
              '--dy': c.dy + 'px',
              '--rot': c.rot + 'deg',
              animationDelay: i * 32 + 'ms',
            }"
            >{{ c.char === ' ' ? ' ' : c.char }}</span
          >
        </h1>
      </component>
      <!-- Always render the topic slot (even when empty) so the instructions
           block below it sits at a consistent y position across pages. -->
      <p class="home-topic" :aria-hidden="!pageTopic">
        {{ pageTopic ? `/${pageTopic}` : '' }}
      </p>
      <!-- The instruction text is the key explanatory copy, so it gets a
           per-line dark backing (`.text-backing`) that guarantees it reads
           perfectly over any pattern frame. The `+` crosshair is a real
           decorative element (`.instr-plus`) rather than a ::before on the
           <p>, so it has its own precise hover target (rotate-on-hover) and
           can spin as a unit — the readable backing wraps the text only. -->
      <p v-if="pageInstructions" class="home-instructions">
        <span class="instr-plus" aria-hidden="true"></span>
        <span class="text-backing"><span
          v-for="(part, i) in instructionParts"
          :key="i"
          :class="{ 'instr-glow': part.glow }"
          >{{ part.text }}</span
        ></span>
      </p>
      <!-- Pages can teleport optional sub-content (sub-instructions, links, etc.) here. -->
      <div id="layout-extra-slot" class="home-extra-slot"></div>
    </div>

    <Button v-if="isHome" class="corner-tr start-cta" href="./form">Start</Button>
    <button
      v-if="!isHome && !isPrint"
      class="corner-tr group inline-flex h-6 w-6 items-center justify-center cursor-pointer"
      type="button"
      aria-label="Go back"
      @click="goBack"
    >
      <svg
        class="h-26 w-26 opacity-80 transition-opacity group-hover:opacity-100"
        viewBox="0 0 32 24"
        fill="none"
        stroke="currentColor"
        stroke-width="1.33"
      >
        <path d="M30 12H5" />
        <path d="M11 6L5 12l6 6" />
      </svg>
    </button>
    <Button v-if="!isArchive && !isPrint" class="corner-br" href="./archive">
      Archive
    </Button>
    <button
      v-if="!isPrint"
      class="btn corner-bl"
      type="button"
      @click="resetExperience"
    >
      End experience
    </button>

    <!-- Home tagline — chrome, not page content. Rendered here (direct
         child of <main>, z-index 10) so it's always above the readability
         overlay and never trapped by the page-fade-in stacking context. -->
    <p v-if="isHome" class="home-tagline">
      thesis <span class="smallplus"></span>antithesis
      <span class="arrowright">more robust synthesis of the truth</span>
    </p>

    <!-- :key on the routed component forces a remount on every route change,
         and the CSS `page-fade-in` keyframe on the page wrapper fades it in
         natively — no Vue <Transition> wrapper, so the new component can't
         be left hanging by an rAF-stalled transitionend (a problem Category's
         Chladni canvas triggered with the previous setup). -->
    <div :key="$route.fullPath" class="page-fade-in">
      <!-- Readability overlay lives INSIDE the page-fade-in wrapper, before
           the routed view. This is deliberate: the wrapper's opacity fade
           forms a transient stacking context during route changes, and
           anything OUTSIDE it (like the old placement) ends up rendering
           ABOVE the wrapper's content for the 0.28s of the fade — which
           briefly buried the page's own chrome (the restart / save icons)
           under the overlay, flashing them grey before they popped white.
           Inside the wrapper, the overlay (z-5) and the page chrome
           (restart z-10, .archive-page z-6) share one stacking context, so
           the chrome is ALWAYS above the overlay, fade or no fade. The
           overlay still darkens only the canvas (z-0) beneath it. The
           persistent App.vue chrome (title, buttons, tagline) sits at z-10
           OUTSIDE this wrapper, so it stays above the overlay too. -->
      <div class="canvas-overlay" aria-hidden="true"></div>
      <router-view />
    </div>

    <!-- Black curtain — fades in once the title letters finish falling,
         covers the route swap + state reset, then fades out to reveal
         the rebuilt home page. Same dark as the rest of the app
         (var(--bg) / #181618), so the reveal feels continuous. -->
    <div
      class="black-curtain"
      :class="{ 'is-showing': isShowingCurtain }"
      aria-hidden="true"
    ></div>
  </main>
</template>

<style>
/* ── Mobile block screen ─────────────────────────────────────────────────────
   Shown on phones/tablets for every route except the print page. */
.mobile-block {
  position: fixed;
  inset: 0;
  display: grid;
  place-items: center;
  background: var(--bg);
  padding: 2rem;
}
.mobile-block-inner {
  max-width: 34ch;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}
.mobile-block-text {
  font-family: 'Reddit Mono', monospace;
  font-size: var(--fs-body);
  line-height: 1.6;
  color: var(--text);
  opacity: 0.72;
}

/* CSS-only page transition. The :key on the wrapper changes per route, so a
   new wrapper element mounts each time and this keyframe runs on it.
   Opacity ONLY — a `transform` (even `translateY(0)`) on this wrapper would
   become the containing block for `position: fixed` descendants and make
   the Category canvas / Archive grid render at 0×0. Opacity changes don't
   create a containing block, so fixed children stay anchored to the viewport.

   IMPORTANT — fill-mode is `backwards`, NOT `both`. `both`/`forwards` retains
   the animated opacity after the animation ends, which keeps this element as
   a persistent STACKING CONTEXT (a known CSS gotcha). That trapped the page's
   own fixed chrome (e.g. the home tagline, z-index 10) INSIDE this wrapper's
   z-auto context — placing it BELOW the canvas-overlay (z-5), which dimmed the
   white text to grey. `backwards` only fills the pre-start state, retains
   nothing after completion, so no persistent stacking context: the page's
   z-10 chrome correctly escapes to the root context, above the overlay. */
.page-fade-in {
  animation: page-fade-in 0.28s ease-out backwards;
}
@keyframes page-fade-in {
  from { opacity: 0; }
  to   { opacity: 1; }
}

/* Readability vignette over the Chladni canvas. Two stacked linear
   gradients darken the top and bottom thirds — exactly where every piece
   of chrome text lives (title, topic, instructions at the top; tagline,
   corner buttons, restart icon at the bottom). Each band is strong at the
   very edge (where the text sits) and fades SMOOTHLY to fully transparent
   by ~38 %, so:
     • text areas get a deep, even backdrop → extremely readable
     • the centre third (38–62 %) is untouched → the pattern's most
       expressive region stays fully vibrant
     • the fade is continuous (no hard band edge) → reads as the pattern
       sinking into the page background, never a "cut"
   Colour is `var(--bg)` (#181618) so the dimming matches the page, and
   it's pure CSS (no backdrop-filter) so there's ZERO per-frame cost on
   the animating canvas. z-index 5 + pointer-events:none sit it cleanly
   between the canvas (z-0) and the chrome (z-10). */
.canvas-overlay {
  position: fixed;
  inset: 0;
  z-index: 5;
  pointer-events: none;
  background:
    linear-gradient(
      to bottom,
      rgba(24, 22, 24, 0.92) 0%,
      rgba(24, 22, 24, 0.78) 8%,
      rgba(24, 22, 24, 0.45) 20%,
      rgba(24, 22, 24, 0.15) 30%,
      transparent 40%
    ),
    linear-gradient(
      to top,
      rgba(24, 22, 24, 0.92) 0%,
      rgba(24, 22, 24, 0.78) 8%,
      rgba(24, 22, 24, 0.45) 20%,
      rgba(24, 22, 24, 0.15) 30%,
      transparent 40%
    );
}

/* Black curtain that covers the screen during the End-Experience reset.
   `position: fixed` + max z-index puts it above the title block, the
   corner buttons, and the page wrapper. Pointer-events off so clicks
   pass through if the user spams End Experience (the resetExperience
   guard ignores the second call anyway). Duration matches
   CURTAIN_FADE_MS in <script>. */
.black-curtain {
  position: fixed;
  inset: 0;
  background: var(--bg);
  z-index: 9999;
  opacity: 0;
  pointer-events: none;
  transition: opacity 280ms ease-in-out;
}
.black-curtain.is-showing {
  opacity: 1;
}

/* ── Title deconstruction (END EXPERIENCE) ─────────────────────────────
   Each letter of "Dialectic Engine" is its own inline-block span. On reset
   the parent `h1.is-deconstructing` toggles, and per-letter CSS variables
   (--dx / --dy / --rot, randomised in script) drive the exit trajectory.
   Staggered by `i * 45ms` (set inline) so the word falls apart left → right.
   Pure CSS keyframes — no Vue <Transition>, so rAF saturation in the
   destination page can't stall the visual signal. */
h1 .title-char {
  display: inline-block;
  /* Hint the compositor: only transform + opacity change. */
  will-change: transform, opacity;
}
h1.is-deconstructing .title-char {
  /* Smooth ease-in (easeInQuad) — letters start gently and accelerate, like
     real gravity. Avoids the snappy/overshoot feel of the previous curve.
     Tuned to feel brisk: 0.95s duration with a 32ms stagger reads as
     "the title falls apart" without lingering. `animation-delay` is set
     inline per letter (i * 32ms). */
  animation: title-deconstruct 0.95s cubic-bezier(0.55, 0.085, 0.68, 0.53)
    forwards;
}
@keyframes title-deconstruct {
  0% {
    transform: translate(0, 0) rotate(0deg);
    opacity: 1;
  }
  /* Hold full opacity through most of the fall, then fade out near the end
     so the letters stay readable as they accelerate downward. */
  70% {
    opacity: 1;
  }
  100% {
    transform: translate(var(--dx, 0px), var(--dy, 0px))
      rotate(var(--rot, 0deg));
    opacity: 0;
  }
}

.home-title-link {
  text-decoration: none;
  color: inherit;
  display: block;
  width: fit-content;
  transition: color 0.2s ease;
}
.home-title-link:hover {
  color: var(--accent);
}

/* Back-arrow button — accent hover so it reads as actionable. */
main > button.corner-tr {
  color: var(--text);
  transition:
    color 0.18s ease,
    transform 0.18s ease;
}
main > button.corner-tr:hover {
  color: var(--accent);
  transform: translateX(-3px);
}
</style>
