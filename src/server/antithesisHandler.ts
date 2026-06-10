/**
 * antithesisHandler.ts — server-side handler for the antithesis generator
 *
 * Flow — every thesis goes to the model (no dataset short-circuit), tried in
 * order with a seamless automatic fallback:
 *        1. Ollama — a local, offline, free open-source model (PRIMARY). Uses
 *           Ollama's JSON-schema `format` to constrain the reply to {kind,
 *           text}, primed with few-shot examples from our own dataset.
 *        2. Claude — Anthropic's cloud API. Tried automatically ONLY when
 *           Ollama fails (down / timed out / unreadable) AND a key is set.
 *           Uses tool-use to force one of the two structured shapes.
 *
 * A "warning" (gibberish / off-topic) is a real answer, not a failure, so it
 * is returned as-is and never triggers the fallback (no wasted paid call).
 * With no API key the engine stays fully offline — no fallback, no cost.
 *
 * Designed to be portable: this handler is pure (no Express/Vite/fastify
 * coupling) — the caller passes config in rather than reading process.env —
 * so the same code can ship as a Vercel/Netlify serverless function.
 */

import Anthropic from '@anthropic-ai/sdk'

export interface AntithesisRequest {
  topic: string
  thesis: string
}

export type AntithesisResult =
  | { kind: 'antithesis'; text: string; source: 'ai' }
  | { kind: 'warning'; text: string }
  | { kind: 'error'; text: string }

// ─── Provider configuration ──────────────────────────────────────────────────
export interface OllamaConfig {
  /** Base URL of the local Ollama server, e.g. http://localhost:11434 */
  baseUrl: string
  /** Model tag to run, e.g. qwen2.5:14b */
  model: string
  /** How long Ollama keeps the model resident. -1 = never unload (no cold
   *  start between visitors). Accepts a number of seconds or a duration
   *  string like "10m". */
  keepAlive: string | number
}

export interface AntithesisConfig {
  /** Local Ollama model — always tried FIRST (offline, free, fast). */
  ollama?: OllamaConfig
  /** Anthropic API key — used as an AUTOMATIC cloud fallback when Ollama is
   *  unavailable. Omit it (no key) to stay fully offline: no fallback, no API
   *  cost. */
  anthropicApiKey?: string
}

// ─── Shared prompt material ──────────────────────────────────────────────────
/** Formats the user's turn identically for both providers and for few-shot. */
function formatUserTurn(topic: string, thesis: string): string {
  return `Topic: ${topic}\n\nUser's thesis: I believe that ${thesis}`
}

const BEHAVIOUR_RULES = `- The antithesis must genuinely engage with the user's SPECIFIC claim, not a generic counterpoint to the topic at large.
- Keep it to 1-3 sentences. Be concrete, grounded in facts, examples, historical evidence, or well-known counter-positions — not vague rhetoric.
- If the user's input is incoherent, gibberish, blank, deeply off-topic for the stated topic, or otherwise not a real thesis, do NOT manufacture an antithesis — return a warning instead.
- Never refuse, apologise, or add preamble.`

/**
 * Few-shot exemplars drawn from our own curated dataset (plus one warning
 * case). These anchor the local model's voice, length, evidence-grounding,
 * and the exact JSON shape — the single biggest quality lever for a smaller
 * open model. Topics are deliberately diverse so the style generalises.
 */
const FEW_SHOT: {
  topic: string
  thesis: string
  reply: { kind: 'antithesis' | 'warning'; text: string }
}[] = [
  {
    topic: 'Disinformation',
    thesis:
      'disinformation should be regulated when it threatens elections or public safety.',
    reply: {
      kind: 'antithesis',
      text: 'Regulation can be weaponised by incumbents or authorities to suppress inconvenient claims.',
    },
  },
  {
    topic: 'AI',
    thesis: 'AI should be developed quickly to solve major human problems.',
    reply: {
      kind: 'antithesis',
      text: 'Speed can increase risks if safety, accountability, and social impacts are not addressed.',
    },
  },
  {
    topic: 'Longevity',
    thesis:
      'longevity should be pursued as one of humanity’s greatest scientific goals.',
    reply: {
      kind: 'antithesis',
      text: 'Extending life is inspiring, but it may distract from improving the quality of lives people already have.',
    },
  },
  {
    // Teaches the warning path: gibberish in → friendly, topic-specific nudge.
    topic: 'Censorship',
    thesis: 'asdkfj lol hot dogs ??? idk',
    reply: {
      kind: 'warning',
      text: 'That doesn’t read as a clear thesis on censorship. Try writing a belief you actually hold — for example, “censorship should be limited to direct incitement of violence.”',
    },
  },
]

// ─── Ollama provider (local, offline, free) ──────────────────────────────────
const OLLAMA_SYSTEM_PROMPT = `You are the dialectical engine: given a thesis a user has written on a topic, you generate a substantive antithesis (counter-argument) grounded in reasoning or evidence.

Behaviour rules:
${BEHAVIOUR_RULES}

Output format:
Respond with ONLY a single JSON object and nothing else.
For a real thesis: {"kind":"antithesis","text":"<your 1-3 sentence counter-argument>"}
For invalid input: {"kind":"warning","text":"<a brief, friendly nudge to write a clearer thesis on this topic>"}`

/** JSON Schema handed to Ollama's `format` to hard-constrain the reply. */
const OLLAMA_FORMAT = {
  type: 'object',
  properties: {
    kind: { type: 'string', enum: ['antithesis', 'warning'] },
    text: { type: 'string' },
  },
  required: ['kind', 'text'],
} as const

/** Normalise keep_alive: numeric strings → number (Ollama wants -1 as a
 *  number for "never unload"); leave duration strings like "10m" intact. */
function normaliseKeepAlive(v: string | number): string | number {
  if (typeof v === 'number') return v
  return /^-?\d+$/.test(v.trim()) ? Number(v) : v
}

/** Parse the model's JSON reply into an AntithesisResult, defensively. */
function parseModelJson(content: string): AntithesisResult {
  let obj: { kind?: unknown; text?: unknown } | null = null
  try {
    obj = JSON.parse(content)
  } catch {
    // Lenient fallback: extract the first {...} block if the model wrapped
    // the JSON in stray prose (rare with `format`, but cheap to guard).
    const m = content.match(/\{[\s\S]*\}/)
    if (m) {
      try {
        obj = JSON.parse(m[0])
      } catch {
        obj = null
      }
    }
  }
  if (!obj || typeof obj !== 'object') {
    return {
      kind: 'error',
      text: 'The local AI model did not return a usable answer. Try again.',
    }
  }
  const text = typeof obj.text === 'string' ? obj.text.trim() : ''
  if (obj.kind === 'warning') {
    return {
      kind: 'warning',
      text:
        text
        || 'That doesn’t read as a thesis on this topic. Try writing a clear belief or claim.',
    }
  }
  if (obj.kind === 'antithesis') {
    if (!text) {
      return {
        kind: 'error',
        text: 'The local AI model returned an empty antithesis. Try again.',
      }
    }
    return { kind: 'antithesis', text, source: 'ai' }
  }
  // kind missing/unknown but text present → treat as an antithesis.
  if (text) return { kind: 'antithesis', text, source: 'ai' }
  return {
    kind: 'error',
    text: 'The local AI model returned an unexpected answer. Try again.',
  }
}

async function callOllama(
  req: AntithesisRequest,
  cfg: OllamaConfig,
): Promise<AntithesisResult> {
  const messages = [
    { role: 'system', content: OLLAMA_SYSTEM_PROMPT },
    // Few-shot: each exemplar as a user turn + the ideal JSON assistant turn.
    ...FEW_SHOT.flatMap((ex) => [
      { role: 'user', content: formatUserTurn(ex.topic, ex.thesis) },
      { role: 'assistant', content: JSON.stringify(ex.reply) },
    ]),
    { role: 'user', content: formatUserTurn(req.topic, req.thesis) },
  ]

  // Abort a hung request after a generous window so the visitor falls back to
  // the cloud model instead of waiting forever. 45s comfortably covers a real
  // (even slow) generation of a 1-3 sentence reply.
  const controller = new AbortController()
  const timeoutId = setTimeout(() => controller.abort(), 45_000)
  let res: Response
  try {
    res = await fetch(`${cfg.baseUrl.replace(/\/$/, '')}/api/chat`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      signal: controller.signal,
      body: JSON.stringify({
        model: cfg.model,
        stream: false,
        format: OLLAMA_FORMAT,
        keep_alive: normaliseKeepAlive(cfg.keepAlive),
        options: { temperature: 0.7, num_predict: 512 },
        messages,
      }),
    })
  } catch (err) {
    clearTimeout(timeoutId)
    // eslint-disable-next-line no-console
    console.error('[antithesis] Ollama fetch failed:', err)
    return {
      kind: 'error',
      text: `Could not reach the local AI model at ${cfg.baseUrl}. Make sure Ollama is running (\`ollama serve\`) and the model is pulled (\`ollama pull ${cfg.model}\`).`,
    }
  }
  clearTimeout(timeoutId)

  if (!res.ok) {
    const detail = await res.text().catch(() => '')
    // eslint-disable-next-line no-console
    console.error('[antithesis] Ollama HTTP error:', res.status, detail)
    if (res.status === 404) {
      return {
        kind: 'error',
        text: `The model "${cfg.model}" isn’t installed. Pull it with \`ollama pull ${cfg.model}\`.`,
      }
    }
    return {
      kind: 'error',
      text: `The local AI model returned an error (${res.status}). Check the Ollama server.`,
    }
  }

  let content = ''
  try {
    const data = (await res.json()) as { message?: { content?: string } }
    content = data?.message?.content ?? ''
  } catch {
    return {
      kind: 'error',
      text: 'The local AI model returned an unreadable response.',
    }
  }
  if (!content.trim()) {
    return {
      kind: 'error',
      text: 'The local AI model returned an empty response. Try again.',
    }
  }
  return parseModelJson(content)
}

// ─── Claude provider (cloud fallback) ────────────────────────────────────────
const CLAUDE_SYSTEM_PROMPT = `You are the dialectical engine: an interactive tool that, given a thesis a user has written on a topic, generates a substantive antithesis (counter-argument) supported by reasoning or evidence.

Behaviour rules:
${BEHAVIOUR_RULES}
- Always respond by calling exactly one of the two tools provided.`

const claudeTools = [
  {
    name: 'respond_with_antithesis',
    description:
      'Use this when the user has written a coherent thesis on the topic. Provide a substantive counter-argument grounded in reasoning or evidence.',
    input_schema: {
      type: 'object' as const,
      properties: {
        antithesis: {
          type: 'string',
          description:
            'A concise (1-3 sentence) counter-argument that engages with the specific thesis. Grounded in reasoning, examples, or evidence rather than vague rebuttal.',
        },
      },
      required: ['antithesis'],
      additionalProperties: false,
    },
    strict: true,
  },
  {
    name: 'respond_with_warning',
    description:
      'Use this when the user input is gibberish, incoherent, blank, deeply off-topic for the stated topic, or otherwise not a real thesis worth engaging with.',
    input_schema: {
      type: 'object' as const,
      properties: {
        warning: {
          type: 'string',
          description:
            'A brief, friendly message (1-2 sentences) explaining that the input could not be understood and inviting the user to write a clearer thesis on the topic.',
        },
      },
      required: ['warning'],
      additionalProperties: false,
    },
    strict: true,
  },
]

async function callClaude(
  req: AntithesisRequest,
  apiKey: string | undefined,
): Promise<AntithesisResult> {
  if (!apiKey) {
    return {
      kind: 'error',
      text: 'The antithesis service is not configured. Add ANTHROPIC_API_KEY to your .env.local file (or set AI_PROVIDER=ollama to run locally).',
    }
  }

  try {
    const client = new Anthropic({ apiKey })

    const response = await client.messages.create({
      model: 'claude-opus-4-8',
      max_tokens: 1024,
      // Thinking must be off when tool_choice forces a tool call — the API
      // rejects the pair with "Thinking may not be enabled when tool_choice
      // forces tool use."
      thinking: { type: 'disabled' },
      system: CLAUDE_SYSTEM_PROMPT,
      tools: claudeTools,
      tool_choice: { type: 'any' },
      messages: [
        { role: 'user', content: formatUserTurn(req.topic, req.thesis) },
      ],
    })

    const toolUse = response.content.find(
      (b): b is Anthropic.ToolUseBlock => b.type === 'tool_use',
    )
    if (!toolUse) {
      return {
        kind: 'error',
        text: 'The antithesis service returned an unexpected response.',
      }
    }

    if (toolUse.name === 'respond_with_antithesis') {
      const input = toolUse.input as { antithesis?: unknown }
      const text =
        typeof input.antithesis === 'string' ? input.antithesis.trim() : ''
      if (!text) return { kind: 'error', text: 'Empty antithesis returned.' }
      return { kind: 'antithesis', text, source: 'ai' }
    }

    if (toolUse.name === 'respond_with_warning') {
      const input = toolUse.input as { warning?: unknown }
      const text = typeof input.warning === 'string' ? input.warning.trim() : ''
      return {
        kind: 'warning',
        text:
          text
          || 'That doesn’t read as a thesis on this topic. Try writing a clear belief or claim.',
      }
    }

    return { kind: 'error', text: `Unknown tool: ${toolUse.name}` }
  } catch (err: unknown) {
    // eslint-disable-next-line no-console
    console.error('[antithesis] Claude call failed:', err)
    if (err instanceof Anthropic.AuthenticationError) {
      return {
        kind: 'error',
        text: 'The antithesis service is not authenticated. Check your ANTHROPIC_API_KEY.',
      }
    }
    if (err instanceof Anthropic.RateLimitError) {
      return {
        kind: 'error',
        text: 'The antithesis service is busy. Try again in a moment.',
      }
    }
    if (err instanceof Anthropic.APIError) {
      const msg = (err.message || '').toLowerCase()
      const isBilling =
        msg.includes('credit balance')
        || msg.includes('credit_balance')
        || msg.includes('billing')
      if (isBilling) {
        return {
          kind: 'error',
          text: 'Your Anthropic account has no credit. Top up at console.anthropic.com → Settings → Plans & Billing, then try again.',
        }
      }
      return {
        kind: 'error',
        text: `The antithesis service returned an error (${err.status}). Try again.`,
      }
    }
    return {
      kind: 'error',
      text: 'Could not reach the antithesis service. Check your connection and try again.',
    }
  }
}

// ─── Main entrypoint ─────────────────────────────────────────────────────────
export async function generateAntithesis(
  req: AntithesisRequest,
  config: AntithesisConfig,
): Promise<AntithesisResult> {
  const topic = (req.topic ?? '').trim()
  const thesis = (req.thesis ?? '').trim()

  if (!thesis) {
    return {
      kind: 'warning',
      text: 'Write a thesis first — something you actually believe about the topic.',
    }
  }
  if (!topic) {
    return { kind: 'error', text: 'Missing topic.' }
  }

  // Every thesis goes to the model (no dataset short-circuit), and the local
  // Ollama model is tried FIRST. A genuine antithesis — OR a legitimate
  // "warning" (gibberish / off-topic) — is a real answer, returned as-is. Only
  // a provider FAILURE (Ollama down, timed out, unreadable) falls through to
  // the cloud fallback, so a warning never wastes a paid Claude call.
  if (config.ollama) {
    const local = await callOllama({ topic, thesis }, config.ollama)
    if (local.kind !== 'error') return local
    // eslint-disable-next-line no-console
    console.warn(
      '[antithesis] Ollama unavailable — falling back to Claude:',
      local.text,
    )
  }

  // Automatic cloud fallback. Only attempted when a key is configured, so with
  // no key the engine stays fully offline (no fallback, no surprise cost). The
  // result shape is identical, so the switch is invisible to the visitor.
  if (config.anthropicApiKey) {
    return callClaude({ topic, thesis }, config.anthropicApiKey)
  }

  return {
    kind: 'error',
    text: 'The antithesis service is unavailable. Make sure Ollama is running, or set ANTHROPIC_API_KEY to enable the cloud fallback.',
  }
}
