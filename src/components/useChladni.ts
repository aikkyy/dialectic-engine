/**
 * useChladni.ts — Sand Particle edition (Crisp Resolution & Aspect Ratio Fixed)
 * ─────────────────────────────────────────────────────────────────────────────
 * Drop next to ChladniBackground.vue. Zero external dependencies.
 */

import { ref, onMounted, onUnmounted, type Ref } from 'vue'

export interface ChladniOptions {
  audioSrc?: string
  color?: string
  bgColor?: string
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

// ─── Composable ───────────────────────────────────────────────────────────────

export function useChladni(
  canvasRef: Ref<HTMLCanvasElement | null>,
  options: ChladniOptions = {},
) {
  const COLOR_LINE = options.color ?? '#ffffff'
  const COLOR_BG = options.bgColor ?? '#000000'
  const AUDIO_SRC = options.audioSrc ?? ''
  const PARTICLE_COUNT = options.particleCount ?? 80000

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

  let baseN1 = 3,
    baseM1 = 4
  let baseN2 = 0,
    baseM2 = 0

  let flashIntensity = 0

  let audioCtx: AudioContext | null = null
  let analyser: AnalyserNode | null = null
  let sourceNode: AudioBufferSourceNode | null = null
  let freqData: Uint8Array<ArrayBuffer> | null = null
  let audioReady = false
  let audioFailed = false

  // Colors
  let lineRGB: [number, number, number] = [255, 255, 255]
  let bgRGB: [number, number, number] = [0, 0, 0]
  let colorBg32 = 0

  // Pixel buffer & dynamic sizing
  let imgData: ImageData | null = null
  let buf: Uint32Array | null = null
  let cw = 0
  let ch = 0
  let aspect = 1

  // Inline xorshift32 PRNG
  let _rng = 0x9e3779b9
  const fastRand = (): number => {
    _rng ^= _rng << 13
    _rng ^= _rng >> 17
    _rng ^= _rng << 5
    return (_rng >>> 0) / 4_294_967_296
  }

  // ── Chladni field functions ───────────────────────────────────────────────

  const PI = Math.PI
  function chladniField(x: number, y: number, n: number, m: number): number {
    // Map to [-1, 1] centered
    const cx = (x - 0.5) * 2
    const cy = (y - 0.5) * 2

    // Aspect-correct so the pattern is a true circle, not an ellipse
    const ax = aspect >= 1 ? cx / aspect : cx
    const ay = aspect >= 1 ? cy : cy * aspect

    const r = Math.sqrt(ax * ax + ay * ay)
    const theta = Math.atan2(ay, ax)

    // Radial Chladni: Bessel-like standing wave on a circular membrane
    // cos(n * PI * r) gives concentric rings
    // cos(m * theta) gives radial spokes — keep m small for cleaner look
    return Math.abs(Math.cos(n * PI * r) * Math.cos(m * theta))
  }

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

  let px_arr: Float32Array
  let py_arr: Float32Array
  let pvx_arr: Float32Array
  let pvy_arr: Float32Array
  let palpha_arr: Float32Array

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
      palpha_arr[i] = 0.8 + rng() * 0.2
    }
  }

  function stepParticles(
    n1: number,
    m1: number,
    n2: number,
    m2: number,
    bl: number,
  ) {
    const PULL = 0.00065
    const DAMPING = 0.82
    const JITTER = 0.00065
    const EPS = 0.0035

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      let x = px_arr[i]
      let y = py_arr[i]

      const fc = fieldAt(x, y, n1, m1, n2, m2, bl)
      const fx = fieldAt(x + EPS, y, n1, m1, n2, m2, bl)
      const fy = fieldAt(x, y + EPS, n1, m1, n2, m2, bl)
      const gx = (fx - fc) / EPS
      const gy = (fy - fc) / EPS

      pvx_arr[i] += -gx * PULL + (fastRand() - 0.5) * JITTER
      pvy_arr[i] += -gy * PULL + (fastRand() - 0.5) * JITTER

      pvx_arr[i] *= DAMPING
      pvy_arr[i] *= DAMPING
      x += pvx_arr[i]
      y += pvy_arr[i]

      // Bounce off walls (perfectly physically accurate for non-square plates)
      if (x < 0) {
        x = -x
        pvx_arr[i] *= -1
      } else if (x > 1) {
        x = 2 - x
        pvx_arr[i] *= -1
      }

      if (y < 0) {
        y = -y
        pvy_arr[i] *= -1
      } else if (y > 1) {
        y = 2 - y
        pvy_arr[i] *= -1
      }

      px_arr[i] = x
      py_arr[i] = y
    }
  }

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
    const band = thr * 6

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const x = px_arr[i]
      const y = py_arr[i]
      const fc = fieldAt(x, y, n1, m1, n2, m2, bl)

      const proximity = Math.max(0, 1 - fc / band)
      if (proximity <= 0) continue

      const a = palpha_arr[i] * proximity + flashIntensity * 0.3
      if (a < 0.02) continue
      const clampedA = Math.min(1, a)

      // Map [0, 1] to actual crisp canvas pixels
      const bx = Math.round(x * cw)
      const by = Math.round(y * ch)

      // Safety bounds check
      if (bx < 0 || bx >= cw || by < 0 || by >= ch) continue

      const idx = by * cw + bx
      const existing = buf[idx]
      const er = existing & 0xff
      const eg = (existing >> 8) & 0xff
      const eb = (existing >> 16) & 0xff

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

  // ── Canvas Setup & Resizing ───────────────────────────────────────────────

  function buildColorPalette() {
    lineRGB = parseColor(COLOR_LINE)
    bgRGB = parseColor(COLOR_BG)
    colorBg32 = (255 << 24) | (bgRGB[2] << 16) | (bgRGB[1] << 8) | bgRGB[0]
  }

  function resize() {
    const canvas = canvasRef.value
    if (!canvas) return

    // Clamp DPR to 2 so extreme 4K+ mobile screens don't melt the GPU with a 33-million pixel array,
    // while keeping things perfectly sharp on modern displays.
    const dpr = Math.min(window.devicePixelRatio || 1, 2)

    cw = Math.floor(window.innerWidth * dpr)
    ch = Math.floor(window.innerHeight * dpr)
    aspect = cw / ch

    canvas.width = cw
    canvas.height = ch

    // Reallocate the crisp buffer to the exact screen dimensions
    imgData = new ImageData(cw, ch)
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

    buf.fill(colorBg32)

    drawParticles(n1, m1, n2, m2, bl, thr)

    // // In the render function, update the center dot section:
    // const cx = 0.5, // Keep this as 0.5 for exact center
    //   cy = 0.5 // Keep this as 0.5 for exact center
    // const cbx = Math.round(cx * cw),
    //   cby = Math.round(cy * ch)

    // const dotSize = 2
    // const white32 = (255 << 24) | (255 << 16) | (255 << 8) | 255

    // for (let r = 0; r < dotSize; r++) {
    //   for (let th = 0; th < 2 * PI; th += 0.1 / r) {
    //     const rx = cbx + Math.round(r * Math.cos(th))
    //     const ry = cby + Math.round(r * Math.sin(th))
    //     if (rx >= 0 && rx < cw && ry >= 0 && ry < ch) {
    //       buf[ry * cw + rx] = white32
    //     }
    //   }
    // }

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

    let weightedSum = 0,
      totalWeight = 0
    for (let i = 0; i < freqData.length; i++) {
      weightedSum += i * freqData[i]
      totalWeight += freqData[i]
    }
    const dominantBin = totalWeight > 0 ? weightedSum / totalWeight : 0
    const freq = (dominantBin / freqData.length) * (audioCtx.sampleRate / 2)

    let sum = 0
    for (let i = 0; i < freqData.length; i++) sum += freqData[i] * freqData[i]
    const amp = Math.sqrt(sum / freqData.length) / 255

    return { freq, amp }
  }

  // ── Animation loop ────────────────────────────────────────────────────────

  function loop(now: number) {
    rafId = requestAnimationFrame(loop)
    if (!t0) t0 = now

    let n1: number, m1: number, n2: number, m2: number, bl: number, thr: number

    if (audioReady && analyser) {
      const { freq, amp } = readAudio()
      const rawN = 1 + freq / 200
      n1 = Math.max(1, Math.min(18, rawN))
      m1 = Math.max(1, Math.min(18, n1 + 1 + amp * 3))
      n2 = Math.max(1, Math.min(18, n1 + 3))
      m2 = Math.max(1, Math.min(18, Math.abs(m1 - 2) + 1))
      bl = 0.08 + amp * 0.35
      thr = 0.038 + amp * 0.12
    } else {
      n1 = baseN1 // controls ring count
      m1 = baseM1 // controls spoke count — keep this 1–4 for clean circles
      n2 = baseN2
      m2 = baseM2
      bl = 0.0
      thr = 0.06
    }

    n1 = Math.max(1, Math.min(20, n1 + (mouseX - 0.5) * 4))
    m1 = Math.max(1, Math.min(20, m1 + (mouseY - 0.5) * 4))

    if (flashIntensity > 0) flashIntensity = Math.max(0, flashIntensity - 0.03)

    stepParticles(n1, m1, n2, m2, bl)

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
    baseN1 = 1 + Math.floor(nx * 7) // 1–8 rings
    baseM1 = 1 + Math.floor(ny * 3) // 1–4 spokes max — keeps it round
    baseN2 = Math.max(1, baseN1 + 2)
    baseM2 = Math.max(1, baseM1 + 1)
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
  const handleResize = () => resize()

  // ── Lifecycle ─────────────────────────────────────────────────────────────

  onMounted(() => {
    buildColorPalette()
    resize() // Setup native sizes on mount
    initParticles()
    rafId = requestAnimationFrame(loop)
    window.addEventListener('resize', handleResize, { passive: true })
    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    window.addEventListener('click', handleClick, { passive: true })
    window.addEventListener('touchmove', handleTouchMove, { passive: false })
    window.addEventListener('touchstart', handleTouchStart, { passive: true })
    if (AUDIO_SRC) initAudio()
  })

  onUnmounted(() => {
    cancelAnimationFrame(rafId)
    window.removeEventListener('resize', handleResize)
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
