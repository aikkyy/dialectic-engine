import fs from 'node:fs'
import path from 'node:path'
import { defineConfig, loadEnv, type Plugin } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'
import type { AntithesisConfig } from './src/server/antithesisHandler'

/**
 * SPA fallback for static hosts. The save-archive QR points phones at the deep
 * link /archive/print, which has no file on disk. Netlify/Cloudflare Pages use
 * public/_redirects (/* -> /index.html 200); as a belt-and-braces fallback for
 * any host that instead serves 404.html for unknown paths, we also copy the
 * built index.html to 404.html so the client-side router resolves the route
 * either way. Build-only.
 */
function spaFallback404(): Plugin {
  return {
    name: 'spa-fallback-404',
    apply: 'build',
    closeBundle() {
      const dist = path.resolve(process.cwd(), 'dist')
      const index = path.join(dist, 'index.html')
      if (fs.existsSync(index)) {
        fs.copyFileSync(index, path.join(dist, '404.html'))
      }
    },
  }
}

/**
 * Dev-server middleware that exposes POST /api/antithesis.
 *
 * Reads the request body as JSON, hands it to the handler (which lives in
 * src/server so it can be reused by a serverless function in production),
 * and writes the structured result back as JSON. The handler is loaded via
 * `server.ssrLoadModule` so Vite's transform pipeline handles the TS
 * imports — that's how we can reach src/data/engineOpinions.ts from a Node
 * context without a separate build step.
 *
 * `aiConfig` (provider + Ollama/Claude settings) is built once from env at
 * server start and passed straight through to the handler.
 */
function antithesisApiPlugin(aiConfig: AntithesisConfig): Plugin {
  return {
    name: 'antithesis-api',
    configureServer(server) {
      server.middlewares.use('/api/antithesis', async (req, res, next) => {
        if (req.method !== 'POST') return next()
        try {
          const chunks: Buffer[] = []
          for await (const chunk of req) chunks.push(chunk as Buffer)
          const raw = Buffer.concat(chunks).toString('utf-8') || '{}'
          const body = JSON.parse(raw)

          const mod = (await server.ssrLoadModule(
            '/src/server/antithesisHandler.ts',
          )) as typeof import('./src/server/antithesisHandler')

          const result = await mod.generateAntithesis(body, aiConfig)

          res.statusCode = 200
          res.setHeader('Content-Type', 'application/json')
          res.end(JSON.stringify(result))
        } catch (err) {
          // eslint-disable-next-line no-console
          console.error('[antithesis-api]', err)
          res.statusCode = 500
          res.setHeader('Content-Type', 'application/json')
          res.end(
            JSON.stringify({
              kind: 'error',
              text: 'The antithesis service returned an unexpected error.',
            }),
          )
        }
      })
    },
  }
}

export default defineConfig(({ command, mode }) => {
  // Vite doesn't auto-expose .env vars server-side. Load them explicitly so
  // the dev middleware can read the AI provider settings from the user's
  // .env.local without sticking any of it in the client bundle.
  const env = loadEnv(mode, process.cwd(), '')

  // Local Ollama generates the antithesis (offline, free, fast). If it's
  // unavailable, the handler automatically falls back to Claude — but only when
  // ANTHROPIC_API_KEY is set, so with no key the engine stays fully offline.
  const aiConfig: AntithesisConfig = {
    anthropicApiKey: env.ANTHROPIC_API_KEY,
    ollama: {
      baseUrl: env.OLLAMA_URL || 'http://localhost:11434',
      model: env.OLLAMA_MODEL || 'qwen2.5:14b',
      keepAlive: env.OLLAMA_KEEP_ALIVE || '-1',
    },
  }

  return {
    // Dev uses relative asset paths; the production build is served from the
    // root of the custom domain (dialectic-engine.online), so an absolute "/".
    base: command === 'serve' ? './' : '/',
    plugins: [
      vue(),
      tailwindcss(),
      antithesisApiPlugin(aiConfig),
      spaFallback404(),
    ],
  }
})
