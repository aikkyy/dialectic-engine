/**
 * Cloudflare Pages Function — POST /api/antithesis
 *
 * Makes the DEPLOYED site self-sufficient: it generates the antithesis via
 * Claude (Anthropic API) right on Cloudflare's edge, so the experience runs
 * straight from the public URL with no local server, no Node, no Ollama.
 *
 * Mirrors the Claude path in src/server/antithesisHandler.ts, but written for
 * the Workers runtime: plain `fetch` to the Anthropic API (not the Node SDK),
 * and the same { kind, text } contract the frontend already expects.
 *
 * Setup (one-time, in the Cloudflare dashboard):
 *   Pages project → Settings → Variables and Secrets → add (encrypted)
 *     ANTHROPIC_API_KEY = <your key>
 *   Optional: ANTHROPIC_MODEL = claude-opus-4-8   (max quality, higher cost)
 *   Then redeploy so the function picks up the value.
 */

const BEHAVIOUR_RULES = `- The antithesis must genuinely engage with the user's SPECIFIC claim, not a generic counterpoint to the topic at large.
- Keep it to 1-3 sentences. Be concrete, grounded in facts, examples, historical evidence, or well-known counter-positions — not vague rhetoric.
- If the user's input is incoherent, gibberish, blank, deeply off-topic for the stated topic, or otherwise not a real thesis, do NOT manufacture an antithesis — return a warning instead.
- Never refuse, apologise, or add preamble.`

const SYSTEM_PROMPT = `You are the dialectical engine: an interactive tool that, given a thesis a user has written on a topic, generates a substantive antithesis (counter-argument) supported by reasoning or evidence.

Behaviour rules:
${BEHAVIOUR_RULES}
- Always respond by calling exactly one of the two tools provided.`

const TOOLS = [
  {
    name: 'respond_with_antithesis',
    description:
      'Use this when the user has written a coherent thesis on the topic. Provide a substantive counter-argument grounded in reasoning or evidence.',
    input_schema: {
      type: 'object',
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
  },
  {
    name: 'respond_with_warning',
    description:
      'Use this when the user input is gibberish, incoherent, blank, deeply off-topic for the stated topic, or otherwise not a real thesis worth engaging with.',
    input_schema: {
      type: 'object',
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
  },
]

function json(body, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { 'content-type': 'application/json; charset=utf-8' },
  })
}

export async function onRequestPost(context) {
  const { request, env } = context

  const apiKey = env.ANTHROPIC_API_KEY
  if (!apiKey) {
    return json({
      kind: 'error',
      text: 'The antithesis service is not configured. Add ANTHROPIC_API_KEY in the Cloudflare Pages settings.',
    })
  }

  // Default to Sonnet — excellent for a 1-3 sentence antithesis and far cheaper
  // than Opus, so a fixed credit balance lasts the whole exhibition. Override
  // with ANTHROPIC_MODEL=claude-opus-4-8 for maximum quality.
  const model = env.ANTHROPIC_MODEL || 'claude-sonnet-4-6'

  let topic = ''
  let thesis = ''
  try {
    const body = await request.json()
    topic = (body?.topic ?? '').toString().trim()
    thesis = (body?.thesis ?? '').toString().trim()
  } catch {
    return json({ kind: 'error', text: 'Invalid request body.' })
  }

  if (!thesis) {
    return json({
      kind: 'warning',
      text: 'Write a thesis first — something you actually believe about the topic.',
    })
  }
  if (!topic) {
    return json({ kind: 'error', text: 'Missing topic.' })
  }

  let res
  try {
    res = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'x-api-key': apiKey,
        'anthropic-version': '2023-06-01',
      },
      body: JSON.stringify({
        model,
        max_tokens: 1024,
        system: SYSTEM_PROMPT,
        tools: TOOLS,
        tool_choice: { type: 'any' },
        messages: [
          {
            role: 'user',
            content: `Topic: ${topic}\n\nUser's thesis: I believe that ${thesis}`,
          },
        ],
      }),
    })
  } catch {
    return json({
      kind: 'error',
      text: 'Could not reach the antithesis service. Check the connection and try again.',
    })
  }

  if (!res.ok) {
    let detail = ''
    try {
      detail = (await res.text()).toLowerCase()
    } catch {
      /* ignore */
    }
    if (res.status === 401) {
      return json({
        kind: 'error',
        text: 'The antithesis service is not authenticated. Check ANTHROPIC_API_KEY in Cloudflare.',
      })
    }
    if (res.status === 429) {
      return json({
        kind: 'error',
        text: 'The antithesis service is busy. Try again in a moment.',
      })
    }
    if (
      detail.includes('credit balance') ||
      detail.includes('credit_balance') ||
      detail.includes('billing')
    ) {
      return json({
        kind: 'error',
        text: 'The Anthropic account has no credit. Top up at console.anthropic.com → Plans & Billing.',
      })
    }
    return json({
      kind: 'error',
      text: `The antithesis service returned an error (${res.status}). Try again.`,
    })
  }

  let data
  try {
    data = await res.json()
  } catch {
    return json({
      kind: 'error',
      text: 'The antithesis service returned an unreadable response.',
    })
  }

  const toolUse = Array.isArray(data?.content)
    ? data.content.find((b) => b.type === 'tool_use')
    : null
  if (!toolUse) {
    return json({
      kind: 'error',
      text: 'The antithesis service returned an unexpected response.',
    })
  }

  if (toolUse.name === 'respond_with_antithesis') {
    const text =
      typeof toolUse.input?.antithesis === 'string'
        ? toolUse.input.antithesis.trim()
        : ''
    if (!text) return json({ kind: 'error', text: 'Empty antithesis returned.' })
    return json({ kind: 'antithesis', text, source: 'ai' })
  }

  if (toolUse.name === 'respond_with_warning') {
    const text =
      typeof toolUse.input?.warning === 'string'
        ? toolUse.input.warning.trim()
        : ''
    return json({
      kind: 'warning',
      text:
        text ||
        'That doesn’t read as a thesis on this topic. Try writing a clear belief or claim.',
    })
  }

  return json({ kind: 'error', text: `Unknown tool: ${toolUse.name}` })
}
