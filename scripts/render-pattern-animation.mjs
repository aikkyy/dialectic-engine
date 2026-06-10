#!/usr/bin/env node
/**
 * scripts/render-pattern-animation.mjs
 *
 * Render a 1000×1000 MP4 of the Chladni pattern morphing between several
 * randomly-picked modes. Reuses the exact math as src/pages/Category.vue's
 * tickBody — particles move stochastically with step size scaled by the
 * Chladni Z-amplitude, and pixels brighten where particles settle near
 * nodal lines. No DOM / no browser needed — we write raw RGBA frames
 * straight to ffmpeg.
 *
 * Outputs:
 *   ./pattern-animation.mp4       — straight playthrough
 *   ./pattern-animation-loop.mp4  — seamlessly looping (ping-pong: forward
 *                                   + reverse concatenated, so the seam
 *                                   between cycles is the same frame
 *                                   played twice)
 *
 * Requires: ffmpeg on PATH.
 *
 *   node scripts/render-pattern-animation.mjs
 */

import { spawn } from 'node:child_process'
import { fileURLToPath } from 'node:url'
import { dirname, resolve } from 'node:path'
import { unlinkSync, copyFileSync, mkdirSync } from 'node:fs'
import { tmpdir } from 'node:os'

// ─── Tunables ────────────────────────────────────────────────────────────────
const SIZE = 1000
const FPS = 30
const NUM_MODES = 6 // total distinct modes shown
// Pacing is baked into the source render so every output format (mp4,
// webm, gif) inherits the same speed without post-processing tricks. The
// mp4 / webm stay at 30 fps for maximum smoothness; the gif resamples
// down to 15 fps but covers the same wall-clock seconds.
const SECONDS_PER_MODE = 0.5
const TRANSITION_SECONDS = 0.25
// More particles + brighter contribution → the nodal lines read as
// crisp, high-contrast strokes rather than a soft cloud.
// `let` not `const` — the static-PNG step hot-swaps both `particles` and
// the count onto a denser pool with a long warm-up, then restores.
let N_PARTICLES = 175000

// Deliverables. The straight playthrough mp4 is written to a temp file
// and deleted at the end — we only keep the loop variants.
const OUTPUT_LOOP_REL = 'pattern-animation-loop.mp4'
const OUTPUT_WEBM_REL = 'pattern-animation-loop.webm'
const OUTPUT_GIF_REL = 'pattern-animation-loop.gif'
// Stills are numbered `pattern-still-01.png` … `pattern-still-NN.png`,
// each on a different Chladni mode. NUM_STILLS controls how many; the
// stills are picked KIND-diverse (cos / sin / mixed / radial round-robin)
// so consecutive numbers always look visually distinct.
const NUM_STILLS = 6
const OUTPUT_STILL_PREFIX = 'pattern-still-'

// GIF-specific tuning. The GIF mirrors the look of the mp4/webm — same
// line thickness, same colour palette — it just halves the frame rate
// to keep the file under 50 MB at 1000×1000. Speed is already baked in
// via SECONDS_PER_MODE / TRANSITION_SECONDS above, so the filter chain
// only resamples — no setpts / no dilation / no brightness lift.
const GIF_FPS = 15
const GIF_FILTER = `fps=${GIF_FPS}`

// Settings for the static PNGs — extra particles and a long warm-up run
// on a single mode so the nodal lines render as crisp settled lines, not
// the soft cloud you'd get a few frames after a mode change.
const PNG_PARTICLES = 250000
const PNG_WARMUP_FRAMES = 600

const FRAMES_PER_MODE = Math.round(SECONDS_PER_MODE * FPS)
const TRANSITION_FRAMES = Math.round(TRANSITION_SECONDS * FPS)
const TOTAL_FRAMES = NUM_MODES * FRAMES_PER_MODE

// ─── Mode catalog (copied verbatim from src/pages/Category.vue) ──────────────
const MODES = [
  // cos-symmetric (even/even)
  { n: 2, m: 2, kind: 'cos' },
  { n: 2, m: 4, kind: 'cos' },
  { n: 2, m: 6, kind: 'cos' },
  { n: 2, m: 8, kind: 'cos' },
  { n: 2, m: 10, kind: 'cos' },
  { n: 4, m: 4, kind: 'cos' },
  { n: 4, m: 6, kind: 'cos' },
  { n: 4, m: 8, kind: 'cos' },
  { n: 4, m: 10, kind: 'cos' },
  { n: 6, m: 6, kind: 'cos' },
  { n: 6, m: 8, kind: 'cos' },
  { n: 8, m: 8, kind: 'cos' },
  // sin-symmetric (odd/odd)
  { n: 1, m: 3, kind: 'sin' },
  { n: 1, m: 5, kind: 'sin' },
  { n: 1, m: 7, kind: 'sin' },
  { n: 1, m: 9, kind: 'sin' },
  { n: 3, m: 3, kind: 'sin' },
  { n: 3, m: 5, kind: 'sin' },
  { n: 3, m: 7, kind: 'sin' },
  { n: 3, m: 9, kind: 'sin' },
  { n: 5, m: 5, kind: 'sin' },
  { n: 5, m: 7, kind: 'sin' },
  // mixed (one even, one odd)
  { n: 1, m: 2, kind: 'mixed' },
  { n: 1, m: 4, kind: 'mixed' },
  { n: 2, m: 3, kind: 'mixed' },
  { n: 2, m: 5, kind: 'mixed' },
  { n: 3, m: 4, kind: 'mixed' },
  { n: 3, m: 6, kind: 'mixed' },
  { n: 4, m: 5, kind: 'mixed' },
  // radial (concentric rings)
  { n: 2, m: 0, kind: 'radial' },
  { n: 3, m: 0, kind: 'radial' },
  { n: 4, m: 0, kind: 'radial' },
]

// ─── Constants ───────────────────────────────────────────────────────────────
// Most values mirror Category.vue. ADDITIVE_GAIN and VIS_THRESHOLD are
// dialled up here vs. the in-app values so the offline export reads as
// punchier, high-contrast strokes — the live app intentionally runs
// softer so the orbiting text stays readable on top of it.
const GRID = 512
const RADIAL_TABLE_SIZE = 512
const RADIAL_R_MAX = 1.6
const VIS_THRESHOLD = 0.45 // was 0.4 — slightly wider band around nodes counts as "on the line"
const STEP_SCALE = 8
const STEP_MIN = 0.18
const ADDITIVE_GAIN = 320 // was 180 — brighter contribution per particle hit

// ─── Lookup tables ───────────────────────────────────────────────────────────
const cosN = new Float32Array(GRID)
const cosM = new Float32Array(GRID)
const sinN = new Float32Array(GRID)
const sinM = new Float32Array(GRID)
const cosRadial = new Float32Array(RADIAL_TABLE_SIZE)
const oldCosN = new Float32Array(GRID)
const oldCosM = new Float32Array(GRID)
const oldSinN = new Float32Array(GRID)
const oldSinM = new Float32Array(GRID)
const oldCosRadial = new Float32Array(RADIAL_TABLE_SIZE)

let nVal = 2
let mVal = 4
let currentKind = 'cos'
let oldKind = null
let transitionT = 1

function buildCartTables() {
  for (let i = 0; i < GRID; i++) {
    const t = i / GRID
    const tn = nVal * Math.PI * t
    const tm = mVal * Math.PI * t
    cosN[i] = Math.cos(tn)
    cosM[i] = Math.cos(tm)
    sinN[i] = Math.sin(tn)
    sinM[i] = Math.sin(tm)
  }
}

function buildRadialTable() {
  for (let i = 0; i < RADIAL_TABLE_SIZE; i++) {
    const r = (i / RADIAL_TABLE_SIZE) * RADIAL_R_MAX
    cosRadial[i] = Math.cos(nVal * Math.PI * r)
  }
}

function snapshotCurrentToOld() {
  oldCosN.set(cosN)
  oldCosM.set(cosM)
  oldSinN.set(sinN)
  oldSinM.set(sinM)
  oldCosRadial.set(cosRadial)
}

function morphToMode(mode) {
  snapshotCurrentToOld()
  oldKind = currentKind
  nVal = mode.n
  mVal = mode.m
  currentKind = mode.kind
  buildCartTables()
  if (currentKind === 'radial') buildRadialTable()
  transitionT = 0
}

// ─── Frame buffers ───────────────────────────────────────────────────────────
const dataBuf = new Uint8ClampedArray(SIZE * SIZE * 4)
const bgBuf = new Uint8ClampedArray(SIZE * SIZE * 4)
for (let i = 0; i < bgBuf.length; i += 4) {
  bgBuf[i] = 24 // R
  bgBuf[i + 1] = 22 // G
  bgBuf[i + 2] = 24 // B
  bgBuf[i + 3] = 255 // A
}

// ─── Particles ───────────────────────────────────────────────────────────────
let particles = new Float32Array(N_PARTICLES * 3)
for (let i = 0; i < N_PARTICLES; i++) {
  particles[i * 3] = Math.random() * SIZE
  particles[i * 3 + 1] = Math.random() * SIZE
  particles[i * 3 + 2] = 0.45 + Math.random() * 0.55 // grain
}

// ─── Pick the mode sequence (no consecutive duplicates) ──────────────────────
const modeSequence = []
let lastIdx = -1
for (let i = 0; i < NUM_MODES; i++) {
  let idx
  do {
    idx = Math.floor(Math.random() * MODES.length)
  } while (idx === lastIdx)
  modeSequence.push(MODES[idx])
  lastIdx = idx
}

// ─── Pick a kind-diverse mode set for the stills ─────────────────────────────
// Stills are most useful when they look visually DIFFERENT from each
// other — e.g. one Chladni cell-grid, one radial ring, one mixed lattice
// — so we round-robin across the four kinds (cos / sin / mixed / radial)
// instead of picking randomly (which can land on six cos-symmetric grids
// that all look like variations of each other).
function pickDiverseModes(count) {
  const byKind = { cos: [], sin: [], mixed: [], radial: [] }
  for (const m of MODES) byKind[m.kind].push(m)
  // Shuffle each kind so successive runs surface different examples.
  for (const k of Object.keys(byKind)) {
    const arr = byKind[k]
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[arr[i], arr[j]] = [arr[j], arr[i]]
    }
  }
  const out = []
  const kinds = ['cos', 'sin', 'mixed', 'radial']
  let k = 0
  while (out.length < count) {
    const arr = byKind[kinds[k % kinds.length]]
    if (arr.length) out.push(arr.shift())
    k += 1
    // Safety: if all kinds are drained but we still need more, restart.
    if (k > count * 8) break
  }
  return out
}
const stillModes = pickDiverseModes(NUM_STILLS)

// Start on the first mode without a cross-fade.
nVal = modeSequence[0].n
mVal = modeSequence[0].m
currentKind = modeSequence[0].kind
buildCartTables()
if (currentKind === 'radial') buildRadialTable()
transitionT = 1
oldKind = null

const TRANSITION_SPEED = 1 / TRANSITION_FRAMES

// ─── One frame of simulation + paint (verbatim from Category.vue tickBody) ──
function renderFrame() {
  if (transitionT < 1) {
    transitionT += TRANSITION_SPEED
    if (transitionT >= 1) {
      transitionT = 1
      oldKind = null
    }
  }

  dataBuf.set(bgBuf)
  const invThresh = 1 / VIS_THRESHOLD
  const gridRX = GRID / SIZE
  const gridRY = GRID / SIZE
  const halfW = SIZE * 0.5
  const halfH = SIZE * 0.5
  const halfMin = halfW < halfH ? halfW : halfH
  const invHalfMin = 1 / halfMin
  const rIdxScale = RADIAL_TABLE_SIZE / RADIAL_R_MAX
  const kind = currentKind
  const oldK = oldKind
  const inTransition = oldK !== null
  // smoothstep on transitionT
  const tw = inTransition
    ? transitionT * transitionT * (3 - 2 * transitionT)
    : 1
  const tw1 = 1 - tw

  for (let i = 0; i < N_PARTICLES; i++) {
    const base = i * 3
    let px = particles[base]
    let py = particles[base + 1]
    const grain = particles[base + 2]

    let zNew
    const ix = (px * gridRX) | 0
    const iy = (py * gridRY) | 0
    if (kind === 'radial') {
      const dx = px - halfW
      const dy = py - halfH
      const r = Math.sqrt(dx * dx + dy * dy) * invHalfMin
      let rIdx = (r * rIdxScale) | 0
      if (rIdx >= RADIAL_TABLE_SIZE) rIdx = RADIAL_TABLE_SIZE - 1
      zNew = cosRadial[rIdx]
    } else if (kind === 'sin') {
      zNew = sinN[ix] * sinM[iy] + sinM[ix] * sinN[iy]
    } else if (kind === 'mixed') {
      zNew = cosN[ix] * sinM[iy] + cosM[ix] * sinN[iy]
    } else {
      zNew = cosN[ix] * cosM[iy] + cosM[ix] * cosN[iy]
    }

    let z
    if (inTransition) {
      let zOld
      if (oldK === 'radial') {
        const dx = px - halfW
        const dy = py - halfH
        const r = Math.sqrt(dx * dx + dy * dy) * invHalfMin
        let rIdx = (r * rIdxScale) | 0
        if (rIdx >= RADIAL_TABLE_SIZE) rIdx = RADIAL_TABLE_SIZE - 1
        zOld = oldCosRadial[rIdx]
      } else if (oldK === 'sin') {
        zOld = oldSinN[ix] * oldSinM[iy] + oldSinM[ix] * oldSinN[iy]
      } else if (oldK === 'mixed') {
        zOld = oldCosN[ix] * oldSinM[iy] + oldCosM[ix] * oldSinN[iy]
      } else {
        zOld = oldCosN[ix] * oldCosM[iy] + oldCosM[ix] * oldCosN[iy]
      }
      z = tw * zNew + tw1 * zOld
    } else {
      z = zNew
    }
    const az = z < 0 ? -z : z

    const step = az * az * STEP_SCALE + STEP_MIN
    px += (Math.random() - 0.5) * step
    py += (Math.random() - 0.5) * step

    if (px < 0) px += SIZE
    else if (px >= SIZE) px -= SIZE
    if (py < 0) py += SIZE
    else if (py >= SIZE) py -= SIZE

    particles[base] = px
    particles[base + 1] = py

    if (az < VIS_THRESHOLD) {
      const u = az * invThresh
      const omU = 1 - u
      const intensity = omU * omU * omU * grain
      const contrib = (intensity * ADDITIVE_GAIN) | 0
      if (contrib > 0) {
        const xi = px | 0
        const yi = py | 0
        if (xi >= 0 && xi < SIZE && yi >= 0 && yi < SIZE) {
          const idx = (yi * SIZE + xi) * 4
          let v = dataBuf[idx] + contrib
          if (v > 255) v = 255
          dataBuf[idx] = v
          dataBuf[idx + 1] = v
          dataBuf[idx + 2] = v > 24 ? v - 4 : v
          dataBuf[idx + 3] = 255
        }
      }
    }
  }
}

// ─── Drive ffmpeg ────────────────────────────────────────────────────────────
const here = dirname(fileURLToPath(import.meta.url))
// The straight playthrough is an intermediate — the loop concat needs a
// seekable input. Write it to /tmp and delete at the end so the project
// root ends with exactly three deliverables (mp4 loop, webm loop, png).
const tmpDir = resolve(tmpdir(), 'dialectic-render-' + process.pid)
mkdirSync(tmpDir, { recursive: true })
const tmpStraightPath = resolve(tmpDir, 'straight.mp4')

const ffmpeg = spawn(
  'ffmpeg',
  [
    '-y',
    '-f', 'rawvideo',
    '-pix_fmt', 'rgba',
    '-s', `${SIZE}x${SIZE}`,
    '-r', String(FPS),
    '-i', '-',
    '-c:v', 'libx264',
    '-pix_fmt', 'yuv420p',
    '-crf', '18',
    '-movflags', '+faststart',
    tmpStraightPath,
  ],
  { stdio: ['pipe', 'inherit', 'inherit'] },
)

const ffmpegDone = new Promise((res, rej) => {
  ffmpeg.on('error', rej)
  ffmpeg.on('close', (code) => (code === 0 ? res() : rej(new Error(`ffmpeg exited ${code}`))))
})

const frameStartedAt = Date.now()
const startedAt = Date.now()

// Frame 0 of each mode segment (after the first) triggers a morph.
const drainOK = (canKeepGoing) => {
  if (canKeepGoing) return Promise.resolve()
  return new Promise((res) => ffmpeg.stdin.once('drain', res))
}

const frameBuf = Buffer.from(dataBuf.buffer, dataBuf.byteOffset, dataBuf.byteLength)

for (let frame = 0; frame < TOTAL_FRAMES; frame++) {
  const inModeFrame = frame % FRAMES_PER_MODE
  if (inModeFrame === 0 && frame > 0) {
    const modeIdx = Math.floor(frame / FRAMES_PER_MODE)
    morphToMode(modeSequence[modeIdx])
  }
  renderFrame()
  const ok = ffmpeg.stdin.write(frameBuf)
  if (!ok) await drainOK(false)
  if (frame % FPS === 0) {
    const elapsed = ((Date.now() - startedAt) / 1000).toFixed(1)
    process.stderr.write(
      `frame ${String(frame).padStart(4)}/${TOTAL_FRAMES}  (${elapsed}s elapsed)\n`,
    )
  }
}
ffmpeg.stdin.end()
await ffmpegDone

const total = ((Date.now() - frameStartedAt) / 1000).toFixed(1)
process.stderr.write(`\nrendered ${TOTAL_FRAMES} frames in ${total}s\n`)

// ─── Build the looping variant ───────────────────────────────────────────────
// Ping-pong: forward then reversed back to start. The seam between cycles
// is the SAME frame played twice (last frame of the reverse == first frame
// of the next forward), so the loop is pixel-perfect regardless of where
// the particles happened to land.
//
// The pattern morphs play in reverse during the second half — visually
// this still reads as a Chladni reel because every transition is just a
// linear cross-fade between two static modes, which is symmetric.
const outLoopPath = resolve(here, '..', OUTPUT_LOOP_REL)
process.stderr.write(`\nbuilding seamlessly-looping variant…\n`)

const loopFfmpeg = spawn(
  'ffmpeg',
  [
    '-y',
    '-i', tmpStraightPath,
    '-filter_complex',
    // Drop the last frame of the reversed clip so the seam doesn't hold
    // for two frames (which would read as a tiny stutter at the loop
    // boundary). trim+setpts re-normalises timestamps for concat. The
    // explicit `fps=` filter on the output is necessary because the
    // `reverse` filter strips the source framerate metadata, and ffmpeg
    // would otherwise fall back to its default 25 fps and silently drop
    // frames on encode.
    `[0:v]reverse,trim=start_frame=1,setpts=PTS-STARTPTS[r];[0:v][r]concat=n=2:v=1,fps=${FPS}[out]`,
    '-map', '[out]',
    '-r', String(FPS),
    '-c:v', 'libx264',
    '-pix_fmt', 'yuv420p',
    '-crf', '18',
    '-movflags', '+faststart',
    outLoopPath,
  ],
  { stdio: ['ignore', 'inherit', 'inherit'] },
)

await new Promise((res, rej) => {
  loopFfmpeg.on('error', rej)
  loopFfmpeg.on('close', (code) =>
    code === 0 ? res() : rej(new Error(`ffmpeg (loop) exited ${code}`)),
  )
})

process.stderr.write(`output: ${outLoopPath}\n`)

// ─── WebM (VP9) variant of the loop ──────────────────────────────────────────
// Same content, web-native, much smaller than an equivalent GIF and with
// far better quality. Drop into a <video loop muted autoplay playsinline>
// or use it as the source for any web-facing motion asset.
const outWebmPath = resolve(here, '..', OUTPUT_WEBM_REL)
process.stderr.write(`\nencoding webm (vp9)…\n`)

const webmFfmpeg = spawn(
  'ffmpeg',
  [
    '-y',
    '-i', outLoopPath,
    '-c:v', 'libvpx-vp9',
    // crf 32 + constrained mode (-b:v 0) ≈ visually transparent at this
    // line-art content. row-mt + tile-columns let VP9 parallelise on the
    // M-series cores so this stays sub-30s.
    '-crf', '32',
    '-b:v', '0',
    '-row-mt', '1',
    '-tile-columns', '2',
    '-pix_fmt', 'yuv420p',
    '-an',
    outWebmPath,
  ],
  { stdio: ['ignore', 'inherit', 'inherit'] },
)
await new Promise((res, rej) => {
  webmFfmpeg.on('error', rej)
  webmFfmpeg.on('close', (code) =>
    code === 0 ? res() : rej(new Error(`ffmpeg (webm) exited ${code}`)),
  )
})
process.stderr.write(`output: ${outWebmPath}\n`)

// ─── GIF (two-pass: palette + paletteuse) ────────────────────────────────────
// Naive GIF encoding of a 1000×1000 motion clip produces a 60-100 MB file
// with visible banding. ffmpeg's `palettegen` walks the video to build an
// optimal 256-colour palette tuned to this content, then `paletteuse` does
// the actual encode against that palette with Sierra-2-4A dithering. The
// result lands around 20-30 MB with film-quality gradient handling.
const outGifPath = resolve(here, '..', OUTPUT_GIF_REL)
const tmpPalettePath = resolve(tmpDir, 'palette.png')

process.stderr.write(`\nencoding gif (two-pass palette)…\n`)

// Pass 1 — generate the palette. The palette must see the ALREADY-styled
// frames (sped up, dilated, brightened, desaturated) so the 256 colours
// it picks actually match what we'll encode in pass 2.
const paletteFfmpeg = spawn(
  'ffmpeg',
  [
    '-y',
    '-i', outLoopPath,
    '-vf', `${GIF_FILTER},palettegen=stats_mode=diff`,
    tmpPalettePath,
  ],
  { stdio: ['ignore', 'inherit', 'inherit'] },
)
await new Promise((res, rej) => {
  paletteFfmpeg.on('error', rej)
  paletteFfmpeg.on('close', (code) =>
    code === 0 ? res() : rej(new Error(`ffmpeg (palette) exited ${code}`)),
  )
})

// Pass 2 — encode the GIF using the palette. Same filter chain on the
// input stream, then paletteuse with Sierra-2-4A error-diffusion dither
// for the smoothest highlights. `diff_mode=rectangle` lets each frame
// reference only the changed region of the previous frame, shaving bytes.
const gifFfmpeg = spawn(
  'ffmpeg',
  [
    '-y',
    '-i', outLoopPath,
    '-i', tmpPalettePath,
    '-filter_complex',
    `[0:v]${GIF_FILTER}[v];[v][1:v]paletteuse=dither=sierra2_4a:diff_mode=rectangle`,
    '-loop', '0',
    outGifPath,
  ],
  { stdio: ['ignore', 'inherit', 'inherit'] },
)
await new Promise((res, rej) => {
  gifFfmpeg.on('error', rej)
  gifFfmpeg.on('close', (code) =>
    code === 0 ? res() : rej(new Error(`ffmpeg (gif) exited ${code}`)),
  )
})
process.stderr.write(`output: ${outGifPath}\n`)

// ─── Static PNGs — one per diverse mode ─────────────────────────────────────
// Reuses the same simulation but pins it to one mode for a long warm-up
// run, so the particles have time to fully settle on the nodal lines.
// A frame plucked mid-animation looks soft — these look like real photos
// of a Chladni plate.
process.stderr.write(
  `\nrendering ${NUM_STILLS} stills (${PNG_WARMUP_FRAMES} warm-up frames each, kind-diverse)…\n`,
)

// Allocate the dense particle pool once and reuse it across all stills —
// we just re-randomise positions between renders.
const stillParticles = new Float32Array(PNG_PARTICLES * 3)

// Stash the loop particle set so renderFrame() walks the still set.
const loopParticles = particles
const loopNParticles = N_PARTICLES
particles = stillParticles
N_PARTICLES = PNG_PARTICLES

const pad = (n) => String(n).padStart(2, '0')

for (let stillIdx = 0; stillIdx < stillModes.length; stillIdx++) {
  const stillMode = stillModes[stillIdx]

  // Fresh particle distribution each time, so successive stills don't
  // inherit drift from the previous run.
  for (let i = 0; i < PNG_PARTICLES; i++) {
    stillParticles[i * 3] = Math.random() * SIZE
    stillParticles[i * 3 + 1] = Math.random() * SIZE
    stillParticles[i * 3 + 2] = 0.45 + Math.random() * 0.55
  }

  // Pin to this mode (no cross-fade — start on it directly).
  nVal = stillMode.n
  mVal = stillMode.m
  currentKind = stillMode.kind
  oldKind = null
  transitionT = 1
  buildCartTables()
  if (currentKind === 'radial') buildRadialTable()

  // Warm up so the nodal lines fully resolve.
  for (let f = 0; f < PNG_WARMUP_FRAMES; f++) {
    renderFrame()
  }

  // Save this still.
  const outStillPath = resolve(
    here,
    '..',
    `${OUTPUT_STILL_PREFIX}${pad(stillIdx + 1)}.png`,
  )
  const pngFfmpeg = spawn(
    'ffmpeg',
    [
      '-y',
      '-loglevel', 'error',
      '-f', 'rawvideo',
      '-pix_fmt', 'rgba',
      '-s', `${SIZE}x${SIZE}`,
      '-i', '-',
      '-frames:v', '1',
      outStillPath,
    ],
    { stdio: ['pipe', 'inherit', 'inherit'] },
  )
  pngFfmpeg.stdin.end(
    Buffer.from(dataBuf.buffer, dataBuf.byteOffset, dataBuf.byteLength),
  )
  await new Promise((res, rej) => {
    pngFfmpeg.on('error', rej)
    pngFfmpeg.on('close', (code) =>
      code === 0 ? res() : rej(new Error(`ffmpeg (png ${stillIdx + 1}) exited ${code}`)),
    )
  })
  process.stderr.write(
    `  ${pad(stillIdx + 1)}/${pad(stillModes.length)}  ` +
      `${stillMode.kind} n=${stillMode.n} m=${stillMode.m}  → ${outStillPath}\n`,
  )
}

// Restore (purely so this stays clean if the script is ever extended).
particles = loopParticles
N_PARTICLES = loopNParticles

// Clean up the singular-still file from older versions of this script —
// idempotent: silently skipped if it isn't there.
try {
  unlinkSync(resolve(here, '..', 'pattern-still.png'))
} catch {
  /* not present, fine */
}

// ─── Tidy up the intermediate straight playthrough ──────────────────────────
try {
  unlinkSync(tmpStraightPath)
} catch {
  /* best-effort */
}

// Also remove any stale straight-playthrough mp4 left over from previous
// runs (back when the script kept both). Idempotent.
const stalePath = resolve(here, '..', 'pattern-animation.mp4')
try {
  unlinkSync(stalePath)
} catch {
  /* not present, fine */
}

process.stderr.write('\n✓ done\n')
