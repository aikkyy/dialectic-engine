/**
 * useChladni.ts — Sand Particle edition
 * ─────────────────────────────────────────────────────────────────────────────
 * Drop next to ChladniBackground.vue. Zero external dependencies.
 *
 * Audio file location:
 * Place base.mp3 in your project's /public folder:
 * your-project/
 * public/
 * base.mp3   ← HERE
 * src/
 * components/
 * ChladniBackground.vue
 * useChladni.ts
 *
 * Then pass the prop:  <ChladniBackground audioSrc="/base.mp3" />
 * The /public folder is served at the root URL in both Vite and Vue CLI.
 * Audio starts on first user click (browser autoplay policy).
 */

import { ref, onMounted, onUnmounted, type Ref } from 'vue'

// ─── Public options ───────────────────────────────────────────────────────────

export interface ChladniOptions {
  audioSrc?: string
  color?: string
  bgColor?: string
  /**
   * Internal render resolution for the Chladni field.
   * Higher = sharper pattern. Default: 700.
   * The canvas CSS always fills the full viewport.
   */
  resolution?: number
  /**
   * How many 1-px sand particles. Default: 200000 for dense sand.
   * Lower for performance. High numbers are crucial for the grainy sand effect.
   */
  particleCount?: number
}

export interface ChladniState {
  modeN: Ref<number>
  modeM: Ref<number>
  threshold: Ref<number>
  audioActive: Ref<boolean>
}

// ─── Seeded PRNG — mulberry32 ─────────────────────────────────────────────────

function mulberry32(seed: number) {
  return () => {
    seed |= 0
    seed = (seed + 0x6d2b79f5) | 0
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed)
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}

// ─── 1-D value noise & fractal noise ─────────────────────────────────────────

function makeNoise1D(tableSize = 512, seed = 0xdeadbeef) {
  const rng = mulberry32(seed)
  const table = new Float32Array(tableSize)
  for (let i = 0; i < tableSize; i++) table[i] = rng() * 2 - 1
  return (t: number): number => {
    const ti = Math.floor(t) & (tableSize - 1)
    const f = t - Math.floor(t)
    const u = f * f * (3 - 2 * f) // smoothstep
    return table[ti] + (table[(ti + 1) & (tableSize - 1)] - table[ti]) * u
  }
}

function makeFractalNoise(octaves = 4, seed = 0xdeadbeef) {
  const noise = makeNoise1D(512, seed)
  return (t: number): number => {
    let v = 0,
      amp = 1,
      freq = 1,
      max = 0
    for (let o = 0; o < octaves; o++) {
      v += noise(t * freq) * amp
      max += amp
      amp *= 0.5
      freq *= 2.07
    }
    return v / max // [-1, 1]
  }
}

// ─── Composable ───────────────────────────────────────────────────────────────

export function useChladni(
  canvasRef: Ref<HTMLCanvasElement | null>,
  options: ChladniOptions = {},
) {
  const RES = options.resolution ?? 700
  const COLOR_LINE = options.color ?? '#ffffff'
  const COLOR_BG = options.bgColor ?? '#000000'
  const AUDIO_SRC = options.audioSrc ?? ''
  // 1. INCREASE PARTICLE COUNT FOR GRANULAR SAND EFFECT
  const PARTICLE_COUNT = options.particleCount ?? 200000 // default to high count for dense sand

  // ── Color parsing ─────────────────────────────────────────────────────────

  const parseColor = (css: string): [number, number, number] => {
    const c = document.createElement('canvas')
    c.width = c.height = 1
    const cx = c.getContext('2d')!
    cx.fillStyle = css
    cx.fillRect(0, 0, 1, 1)
    const d = cx.getImageData(0, 0, 1, 1).data
    return [d[0], d[1], d[2]]
  }

  // ── Reactive state ────────────────────────────────────────────────────────

  const modeN = ref(3)
  const modeM = ref(4)
  const threshold = ref(0.06)
  const audioActive = ref(false)

  // ── Private state ─────────────────────────────────────────────────────────

  let rafId = 0
  let mouseX = 0.5
  let mouseY = 0.5
  let t0 = 0

  // Two superimposed Chladni modes. Pattern in image looks complex but stable.
  // 2. HARDCODE STABLE BASE MODES TO PRESERVE PATTERN
  let baseN1 = 3,
    baseM1 = 4
  let baseN2 = 0, // Disable superimposition for cleaner reproduction
    baseM2 = 0
  let nextJump = 1e6 // seconds until next autonomous mode jump, disabled

  // Click flash
  let flashIntensity = 0

  // Audio
  let audioCtx: AudioContext | null = null
  let analyser: AnalyserNode | null = null
  let sourceNode: AudioBufferSourceNode | null = null
  let freqData: Uint8Array<ArrayBuffer> | null = null
  let audioReady = false
  let audioFailed = false

  // Six independent noise streams — different seeds so they diverge. Disabling drift.
  const noiseN1 = makeFractalNoise(4, 0x11111111)
  const noiseM1 = makeFractalNoise(4, 0x22222222)
  const noiseN2 = makeFractalNoise(3, 0x33333333)
  const noiseM2 = makeFractalNoise(3, 0x44444444)
  const noiseThr = makeFractalNoise(2, 0x55555555)
  const noiseBlend = makeFractalNoise(2, 0x66666666)

  // Colors
  let lineRGB: [number, number, number] = [255, 255, 255]
  let bgRGB: [number, number, number] = [0, 0, 0]
  let colorBg32 = 0

  // Pixel buffer
  let imgData: ImageData | null = null
  let buf: Uint32Array | null = null

  // Inline xorshift32 PRNG — fast, called millions of times
  let _rng = 0x9e3779b9
  const fastRand = (): number => {
    _rng ^= _rng << 13
    _rng ^= _rng >> 17
    _rng ^= _rng << 5
    return (_rng >>> 0) / 4_294_967_296
  }

  // ── Chladni field functions ───────────────────────────────────────────────

  /** Raw field value for one mode pair, range roughly [-1, 1] */
  const PI = Math.PI
  function chladniField(x: number, y: number, n: number, m: number): number {
    return (
      Math.cos(n * PI * x) * Math.cos(m * PI * y) -
      Math.cos(m * PI * x) * Math.cos(n * PI * y)
    )
  }

  /** Blended absolute field — 0 on nodal lines */
  function fieldAt(
    x: number,
    y: number,
    n1: number,
    m1: number,
    n2: number,
    m2: number,
    bl: number,
  ): number {
    const f1 = chladniField(x, y, n1, m1)
    const f2 = chladniField(x, y, n2, m2)
    return Math.abs(f1 * (1 - bl) + f2 * bl)
  }

  // ── Sand particles ────────────────────────────────────────────────────────
  //
  // Each particle is a single pixel. They drift toward nodal lines via
  // gradient descent on the Chladni field, plus a small random walk.
  // Alpha encodes proximity to the line so they fade organically at edges.

  // Store as flat typed arrays for cache efficiency
  let px_arr: Float32Array // x positions, 0..1
  let py_arr: Float32Array // y positions, 0..1
  let pvx_arr: Float32Array // x velocity
  let pvy_arr: Float32Array // y velocity
  let palpha_arr: Float32Array // base opacity 0..1 (varies per grain)

  function initParticles() {
    const rng = mulberry32(0xcafebabe)
    px_arr = new Float32Array(PARTICLE_COUNT)
    py_arr = new Float32Array(PARTICLE_COUNT)
    pvx_arr = new Float32Array(PARTICLE_COUNT)
    pvy_arr = new Float32Array(PARTICLE_COUNT)
    palpha_arr = new Float32Array(PARTICLE_COUNT)
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      px_arr[i] = rng()
      py_arr[i] = rng()
      pvx_arr[i] = 0
      pvy_arr[i] = 0
      // 3. INCREASE BASE OPACITY FOR taktiler sand feel
      palpha_arr[i] = 0.8 + rng() * 0.2 // mostly opaque grains
    }
  }

  function stepParticles(
    n1: number,
    m1: number,
    n2: number,
    m2: number,
    bl: number,
  ) {
    // Physics constants
    const PULL = 0.00065 // gradient pull strength, slightly increased
    const DAMPING = 0.82 // velocity damping
    const JITTER = 0.00065 // random thermal motion, slightly increased for texture
    const EPS = 0.0035 // finite-difference step for gradient

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      let x = px_arr[i]
      let y = py_arr[i]

      // Gradient of |field| — negative gradient points toward the nodal line
      const fc = fieldAt(x, y, n1, m1, n2, m2, bl)
      const fx = fieldAt(x + EPS, y, n1, m1, n2, m2, bl)
      const fy = fieldAt(x, y + EPS, n1, m1, n2, m2, bl)
      const gx = (fx - fc) / EPS
      const gy = (fy - fc) / EPS

      // Accelerate toward lower field (nodal line)
      pvx_arr[i] += -gx * PULL + (fastRand() - 0.5) * JITTER
      pvy_arr[i] += -gy * PULL + (fastRand() - 0.5) * JITTER

      // Damp and integrate
      pvx_arr[i] *= DAMPING
      pvy_arr[i] *= DAMPING
      x += pvx_arr[i]
      y += pvy_arr[i]

      // Wrap — torus topology
      if (x < 0) x += 1
      if (x > 1) x -= 1
      if (y < 0) y += 1
      if (y > 1) y -= 1

      px_arr[i] = x
      py_arr[i] = y
    }
  }

  /** Scatter particles from a click point */
  function scatterParticles(cx: number, cy: number) {
    const FORCE = 0.022
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const dx = px_arr[i] - cx
      const dy = py_arr[i] - cy
      const dist = Math.sqrt(dx * dx + dy * dy) + 0.005
      const f = FORCE / (dist * dist + 0.01)
      pvx_arr[i] += (dx / dist) * f
      pvy_arr[i] += (dy / dist) * f
    }
  }

  /** Write particles into the pixel buffer as 1-px dots */
  function drawParticles(
    n1: number,
    m1: number,
    n2: number,
    m2: number,
    bl: number,
    thr: number,
  ) {
    if (!buf) return

    const lr = lineRGB[0],
      lg = lineRGB[1],
      lb = lineRGB[2]

    // 4. INCREASE PROXIMITY BAND to scatter particles more like screenshot
    const band = thr * 6 // wider band for softer edges and more scattered sand

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const x = px_arr[i]
      const y = py_arr[i]
      const fc = fieldAt(x, y, n1, m1, n2, m2, bl)

      // Fade in as particle approaches the nodal line
      // 1.0 = right on the line, 0.0 = at band edge
      const proximity = Math.max(0, 1 - fc / band)
      if (proximity <= 0) continue

      // Final alpha: grain's inherent opacity × proximity curve × optional flash
      // 5. REMOVE QUADRATIC PROXIMITY for more dense lines near center
      const a = palpha_arr[i] * proximity + flashIntensity * 0.3
      if (a < 0.02) continue

      const clampedA = Math.min(1, a)

      // Blend: grain color over whatever is already in the pixel
      const bx = Math.round(x * RES)
      const by = Math.round(y * RES)
      if (bx < 0 || bx >= RES || by < 0 || by >= RES) continue

      const idx = by * RES + bx
      const existing = buf[idx]
      const er = existing & 0xff
      const eg = (existing >> 8) & 0xff
      const eb = (existing >> 16) & 0xff

      // Grain color: slightly randomized lightness per grain for texture
      const jitter = (fastRand() - 0.5) * 18
      const gr = Math.max(0, Math.min(255, lr + jitter))
      const gg = Math.max(0, Math.min(255, lg + jitter))
      const gb = Math.max(0, Math.min(255, lb + jitter))

      const nr = Math.round(er + (gr - er) * clampedA)
      const ng = Math.round(eg + (gg - eg) * clampedA)
      const nb = Math.round(eb + (gb - eb) * clampedA)

      buf[idx] = (255 << 24) | (nb << 16) | (ng << 8) | nr
    }
  }

  // ── Color & canvas setup ──────────────────────────────────────────────────

  function buildColorPalette() {
    lineRGB = parseColor(COLOR_LINE)
    bgRGB = parseColor(COLOR_BG)
    colorBg32 = (255 << 24) | (bgRGB[2] << 16) | (bgRGB[1] << 8) | bgRGB[0]
  }

  function setupCanvas() {
    const canvas = canvasRef.value
    if (!canvas) return
    canvas.width = RES
    canvas.height = RES
    imgData = new ImageData(RES, RES)
    buf = new Uint32Array(imgData.data.buffer)
  }

  // ── Render ────────────────────────────────────────────────────────────────

  function render(
    n1: number,
    m1: number,
    n2: number,
    m2: number,
    bl: number,
    thr: number,
  ) {
    if (!buf || !imgData || !canvasRef.value) return

    // Clear to background
    buf.fill(colorBg32)

    // 6. ABOLISH ALL BACKGROUND field rendering. All visual texture comes from particles.

    // Sand particles drawn on top. They will define the lines, not the background.
    drawParticles(n1, m1, n2, m2, bl, thr)

    // 7. ADD central dot and ring constraints artifacts manually to reproduction.
    // Standard plate modes don't have these. They must be constraints or artifacts.
    // This is hard to do with the field itself, so I'll add them as additional visual elements.
    const cx = 0.5,
      cy = 0.5
    const cbx = Math.round(cx * RES),
      cby = Math.round(cy * RES)
    const dotSize = 2 // pixel radius for the center dot
    const white32 = (255 << 24) | (255 << 16) | (255 << 8) | 255

    // Draw solid white central dot
    for (let r = 0; r < dotSize; r++) {
      for (let th = 0; th < 2 * PI; th += 0.1 / r) {
        const rx = cbx + Math.round(r * Math.cos(th))
        const ry = cby + Math.round(r * Math.sin(th))
        if (rx >= 0 && rx < RES && ry >= 0 && ry < RES) {
          buf[ry * RES + rx] = white32
        }
      }
    }
    // Also draw a tiny central attractive node to central keyhole
    // This part is hard and might disrupt stability. Disabling for initial fix.

    const ctx = canvasRef.value.getContext('2d')!
    ctx.putImageData(imgData, 0, 0)
  }

  // ── Audio ─────────────────────────────────────────────────────────────────

  async function initAudio() {
    if (!AUDIO_SRC || audioFailed || audioReady) return
    try {
      audioCtx = new (
        window.AudioContext || (window as any).webkitAudioContext
      )()
      const res = await fetch(AUDIO_SRC)
      if (!res.ok) throw new Error(`HTTP ${res.status}`)
      const decoded = await audioCtx.decodeAudioData(await res.arrayBuffer())

      analyser = audioCtx.createAnalyser()
      analyser.fftSize = 2048
      freqData = new Uint8Array(new ArrayBuffer(analyser.frequencyBinCount))

      sourceNode = audioCtx.createBufferSource()
      sourceNode.buffer = decoded
      sourceNode.loop = true
      sourceNode.connect(analyser)
      analyser.connect(audioCtx.destination)
      sourceNode.start()

      audioReady = true
      audioActive.value = true
    } catch (err) {
      console.warn('[useChladni] Audio failed — autonomous mode active:', err)
      audioFailed = true
      audioActive.value = false
    }
  }

  function readAudio(): { freq: number; amp: number } {
    if (!analyser || !freqData || !audioCtx) return { freq: 0, amp: 0 }
    analyser.getByteFrequencyData(freqData)

    // Weighted centroid frequency (smoother than just the peak bin)
    let weightedSum = 0,
      totalWeight = 0
    for (let i = 0; i < freqData.length; i++) {
      weightedSum += i * freqData[i]
      totalWeight += freqData[i]
    }
    const dominantBin = totalWeight > 0 ? weightedSum / totalWeight : 0
    const freq = (dominantBin / freqData.length) * (audioCtx.sampleRate / 2)

    // RMS amplitude
    let sum = 0
    for (let i = 0; i < freqData.length; i++) sum += freqData[i] * freqData[i]
    const amp = Math.sqrt(sum / freqData.length) / 255

    return { freq, amp }
  }

  // ── Animation loop ────────────────────────────────────────────────────────

  function loop(now: number) {
    rafId = requestAnimationFrame(loop)
    if (!t0) t0 = now
    const t = (now - t0) / 1000 // seconds elapsed

    let n1: number, m1: number, n2: number, m2: number, bl: number, thr: number

    if (audioReady && analyser) {
      // ── Audio-driven ────────────────────────────────────────────────────
      const { freq, amp } = readAudio()

      // Map frequency centroid → n (low freq = simple patterns, high = complex)
      const rawN = 1 + freq / 200
      n1 = Math.max(1, Math.min(18, rawN))
      m1 = Math.max(1, Math.min(18, n1 + 1 + amp * 3))
      n2 = Math.max(1, Math.min(18, n1 + 3))
      m2 = Math.max(1, Math.min(18, Math.abs(m1 - 2) + 1))

      // Amplitude: louder = more pattern blend + wider threshold
      bl = 0.08 + amp * 0.35
      thr = 0.038 + amp * 0.12
    } else {
      // ── Autonomous drift — DISABLED FOR STABLE REPRODUCTION ──
      /*
      if (t > nextJump) {
        const rng = mulberry32(((t * 997) | 0) ^ 0xabcdef)
        baseN1 = 2 + Math.floor(rng() * 9)
        baseM1 = 2 + Math.floor(rng() * 9)
        baseN2 = 2 + Math.floor(rng() * 12)
        baseM2 = 2 + Math.floor(rng() * 12)
        nextJump = t + 5 + rng() * 9
      }
      const spd = 0.065
      n1 = Math.max(1, Math.min(18, baseN1 + noiseN1(t * spd) * 3.2))
      m1 = Math.max(1, Math.min(18, baseM1 + noiseM1(t * spd + 7.3) * 3.2))
      n2 = Math.max(1, Math.min(18, baseN2 + noiseN2(t * spd * 1.4 + 3) * 2.8))
      m2 = Math.max(1, Math.min(18, baseM2 + noiseM2(t * spd * 0.8 + 17) * 2.8))
      bl = 0.22 + noiseBlend(t * 0.038) * 0.18
      thr = 0.048 + noiseThr(t * 0.09) * 0.022
      */
      // 8. USE FIXED STABLE BASE MODES derived from user's HUD
      n1 = baseN1
      m1 = baseM1
      n2 = baseN2
      m2 = baseM2
      bl = 0.0
      thr = 0.06 // Fixed threshold and blend for sharp, textured lines
    }

    // Pointer continuously warps the primary mode. Preserve pattern but allow subtle interaction.
    // Pointer creep allows subtle interaction without losing pattern.
    n1 = Math.max(1, Math.min(20, n1 + (mouseX - 0.5) * 4)) // slightly reduced warp
    m1 = Math.max(1, Math.min(20, m1 + (mouseY - 0.5) * 4)) // slightly reduced warp

    // Flash decay
    if (flashIntensity > 0) flashIntensity = Math.max(0, flashIntensity - 0.03)

    // Step particles (cheap — O(PARTICLE_COUNT) gradient samples)
    stepParticles(n1, m1, n2, m2, bl)

    // Expose
    modeN.value = Math.round(n1)
    modeM.value = Math.round(m1)
    threshold.value = +thr.toFixed(3)

    render(n1, m1, n2, m2, bl, thr)
  }

  // ── Events ────────────────────────────────────────────────────────────────

  function onPointerMove(x: number, y: number) {
    mouseX = Math.max(0, Math.min(1, x / window.innerWidth))
    mouseY = Math.max(0, Math.min(1, y / window.innerHeight))
  }

  function onPointerClick(x: number, y: number) {
    const nx = Math.max(0, Math.min(1, x / window.innerWidth))
    const ny = Math.max(0, Math.min(1, y / window.innerHeight))
    baseN1 = 1 + Math.floor(nx * 9)
    baseM1 = 1 + Math.floor(ny * 9)
    baseN2 = Math.max(1, baseN1 + 3)
    baseM2 = Math.max(1, baseM1 + 2)
    flashIntensity = 0.8
    scatterParticles(nx, ny)
    if (AUDIO_SRC && !audioReady && !audioFailed) initAudio()
    else if (audioCtx?.state === 'suspended') audioCtx.resume()
  }

  const handleMouseMove = (e: MouseEvent) => onPointerMove(e.clientX, e.clientY)
  const handleClick = (e: MouseEvent) => onPointerClick(e.clientX, e.clientY)
  const handleTouchMove = (e: TouchEvent) => {
    e.preventDefault()
    onPointerMove(e.touches[0].clientX, e.touches[0].clientY)
  }
  const handleTouchStart = (e: TouchEvent) => {
    onPointerClick(e.touches[0].clientX, e.touches[0].clientY)
  }

  // ── Lifecycle ─────────────────────────────────────────────────────────────

  onMounted(() => {
    buildColorPalette()
    setupCanvas()
    initParticles()
    rafId = requestAnimationFrame(loop)
    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    window.addEventListener('click', handleClick, { passive: true })
    window.addEventListener('touchmove', handleTouchMove, { passive: false })
    window.addEventListener('touchstart', handleTouchStart, { passive: true })
    if (AUDIO_SRC) initAudio()
  })

  onUnmounted(() => {
    cancelAnimationFrame(rafId)
    window.removeEventListener('mousemove', handleMouseMove)
    window.removeEventListener('click', handleClick)
    window.removeEventListener('touchmove', handleTouchMove)
    window.removeEventListener('touchstart', handleTouchStart)
    try {
      sourceNode?.stop()
      sourceNode?.disconnect()
      analyser?.disconnect()
      audioCtx?.close()
    } catch (_) {
      /* ignore */
    }
  })

  return { modeN, modeM, threshold, audioActive } satisfies ChladniState
}
