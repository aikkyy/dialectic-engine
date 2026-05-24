/**
 * useTicker.ts
 * ─────────────────────────────────────────────────────────────────────────────
 * A single shared requestAnimationFrame loop for the entire app.
 * All PixelCircle instances share ONE rAF — not one per component.
 *
 * Usage:
 *   const { register, unregister } = useTicker()
 *   register(myCallback)     // called every frame with performance.now()
 *   unregister(myCallback)   // call in onUnmounted
 *
 * The loop pauses automatically when the document is hidden (tab switch)
 * and resumes on visibility change — saves battery & CPU on background tabs.
 */

type TickFn = (now: number) => void

// Module-level singletons — shared across all component instances
const callbacks = new Set<TickFn>()
let rafId: number | null = null
let frameCount = 0

// Frame skip: run callbacks every N frames to cap CPU on slow machines.
// 1 = every frame (60fps), 2 = every other frame (30fps equivalent work).
const FRAME_SKIP = 2

function tick(now: number) {
  rafId = requestAnimationFrame(tick)
  frameCount++
  if (frameCount % FRAME_SKIP !== 0) return
  for (const fn of callbacks) fn(now)
}

function start() {
  if (rafId === null && callbacks.size > 0) {
    rafId = requestAnimationFrame(tick)
  }
}

function stop() {
  if (rafId !== null) {
    cancelAnimationFrame(rafId)
    rafId = null
  }
}

// Pause when tab is hidden — massive power saving
if (typeof document !== 'undefined') {
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) stop()
    else start()
  })
}

export function useTicker() {
  function register(fn: TickFn) {
    callbacks.add(fn)
    start()
  }

  function unregister(fn: TickFn) {
    callbacks.delete(fn)
    if (callbacks.size === 0) stop()
  }

  return { register, unregister }
}
