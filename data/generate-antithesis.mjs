/**
 * Antithesis Generator — Node.js pipeline
 *
 * Usage:
 *   ANTHROPIC_API_KEY=sk-ant-... node generate-antithesis.mjs
 *
 * Or set the key once in your shell:
 *   export ANTHROPIC_API_KEY=sk-ant-...
 *   node generate-antithesis.mjs
 *
 * Options (edit the CONFIG block below):
 *   INPUT_FILE    — path to your combinations.js
 *   OUTPUT_FILE   — where to write anti-thesis.js
 *   BATCH_SIZE    — theses per API call (20–50 recommended)
 *   CONCURRENCY   — parallel API calls (3–5 recommended)
 *   RESUME        — true = skip already-completed entries in OUTPUT_FILE
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// ── CONFIG ───────────────────────────────────────────────────────────────────

const CONFIG = {
  INPUT_FILE:   './combinations.js',
  OUTPUT_FILE:  './anti-thesis.js',
  BATCH_SIZE:   30,
  CONCURRENCY:  4,
  RESUME:       true,   // set false to start over
  RETRY_LIMIT:  3,
  RETRY_DELAY:  2000,   // ms between retries (doubles each attempt)
};

// ── SYSTEM PROMPT ─────────────────────────────────────────────────────────────

const SYSTEM = `You are a dialectic engine. For each thesis line the user sends, produce exactly one antithesis.

Input format per line:  "I believe that [subject] should [opinion]"
Output format per line: "I believe that [subject] shouldn't [opinion], because [one concrete reason citing a real institution, law, study, or data source]."

Rules:
- Preserve the exact subject and opinion words — do NOT paraphrase them
- The "because" clause must cite a real, named source (WHO, OECD, UN SDG 5, GDPR, APA, WPATH, IOC, etc.)
- Output ONLY the antithesis lines — no numbering, no labels, no quotes, no blank lines, no preamble
- Exactly one output line per input line, same order`;

// ── HELPERS ──────────────────────────────────────────────────────────────────

function loadTheses(filePath) {
  const text = fs.readFileSync(filePath, 'utf8');
  const matches = [...text.matchAll(/"((?:[^"\\]|\\.)*)"/g)].map(m => m[1]);
  return matches.filter(s => s.includes(' should '));
}

function loadExisting(filePath) {
  if (!fs.existsSync(filePath)) return [];
  const text = fs.readFileSync(filePath, 'utf8');
  const matches = [...text.matchAll(/"((?:[^"\\]|\\.)*)"/g)].map(m => m[1]);
  return matches.filter(s => s.length > 5);
}

function saveOutput(antitheses, filePath) {
  const lines = antitheses
    .map(s => '  "' + (s || '').replace(/\\/g, '\\\\').replace(/"/g, '\\"') + '",')
    .join('\n');
  fs.writeFileSync(filePath, `const antitheses = [\n${lines}\n];\n\nexport default antitheses;\n`);
}

function sleep(ms) { return new Promise(r => setTimeout(r, ms)); }

function fmt(n) { return n.toLocaleString(); }

// ── API CALL ─────────────────────────────────────────────────────────────────

async function callClaude(batch, apiKey) {
  const userContent = batch.map(t => 'I believe that ' + t).join('\n');

  const res = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': apiKey,
      'anthropic-version': '2023-06-01',
    },
    body: JSON.stringify({
      model: 'claude-haiku-4-5-20251001',  // cheapest + fastest for this task
      max_tokens: 4096,
      system: SYSTEM,
      messages: [{ role: 'user', content: userContent }],
    }),
  });

  if (res.status === 429) {
    const retry = res.headers.get('retry-after');
    throw new Error('rate_limit:' + (retry || '60'));
  }

  if (!res.ok) {
    const body = await res.text();
    throw new Error(`HTTP ${res.status}: ${body.slice(0, 300)}`);
  }

  const data = await res.json();
  const text = data.content.map(b => b.text || '').join('');
  return text.split('\n').map(l => l.trim()).filter(l => l.length > 0);
}

// ── BATCH PROCESSOR ──────────────────────────────────────────────────────────

async function processBatch(indices, theses, antitheses, apiKey, stats) {
  const batch = indices.map(i => theses[i]);

  for (let attempt = 0; attempt < CONFIG.RETRY_LIMIT; attempt++) {
    try {
      const results = await callClaude(batch, apiKey);

      for (let i = 0; i < indices.length; i++) {
        const idx = indices[i];
        antitheses[idx] = results[i] || fallback(theses[idx]);
        stats.done++;
      }

      // Save checkpoint after every successful batch
      saveOutput(antitheses, CONFIG.OUTPUT_FILE);
      return;

    } catch (err) {
      const isRateLimit = err.message.startsWith('rate_limit:');
      const wait = isRateLimit
        ? parseInt(err.message.split(':')[1], 10) * 1000
        : CONFIG.RETRY_DELAY * Math.pow(2, attempt);

      if (attempt < CONFIG.RETRY_LIMIT - 1) {
        console.error(`  ✗ [${indices[0]}] ${err.message} — retry in ${(wait/1000).toFixed(0)}s`);
        await sleep(wait);
      } else {
        console.error(`  ✗ [${indices[0]}] FAILED: ${err.message}`);
        for (const idx of indices) {
          antitheses[idx] = fallback(theses[idx]);
          stats.done++;
          stats.errors++;
        }
        saveOutput(antitheses, CONFIG.OUTPUT_FILE);
      }
    }
  }
}

function fallback(thesis) {
  return 'I believe that ' + thesis.replace(' should ', " shouldn't ") + '.';
}

// ── MAIN ─────────────────────────────────────────────────────────────────────

async function main() {
  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    console.error('Error: ANTHROPIC_API_KEY environment variable not set.');
    console.error('Run: export ANTHROPIC_API_KEY=sk-ant-...');
    process.exit(1);
  }

  console.log('Loading theses…');
  const theses = loadTheses(CONFIG.INPUT_FILE);
  console.log(`  ${fmt(theses.length)} theses loaded.`);

  // Resume support
  let antitheses = new Array(theses.length).fill(null);
  let startFrom = 0;

  if (CONFIG.RESUME && fs.existsSync(CONFIG.OUTPUT_FILE)) {
    const existing = loadExisting(CONFIG.OUTPUT_FILE);
    if (existing.length > 0) {
      for (let i = 0; i < Math.min(existing.length, theses.length); i++) {
        antitheses[i] = existing[i];
      }
      startFrom = existing.length;
      console.log(`  Resuming from index ${fmt(startFrom)} (${fmt(existing.length)} already done).`);
    }
  }

  // Build work queue
  const pending = [];
  for (let i = startFrom; i < theses.length; i += CONFIG.BATCH_SIZE) {
    const end = Math.min(i + CONFIG.BATCH_SIZE, theses.length);
    pending.push(Array.from({ length: end - i }, (_, k) => i + k));
  }

  const stats = { done: startFrom, errors: 0 };
  const total = theses.length;
  const t0 = Date.now();

  console.log(`\nProcessing ${fmt(pending.length)} batches (size=${CONFIG.BATCH_SIZE}, concurrency=${CONFIG.CONCURRENCY})…\n`);

  // Progress printer
  const progress = setInterval(() => {
    const pct = ((stats.done / total) * 100).toFixed(1);
    const elapsed = (Date.now() - t0) / 1000;
    const rate = (stats.done - startFrom) / elapsed;
    const remaining = rate > 0 ? ((total - stats.done) / rate / 60).toFixed(0) : '?';
    process.stdout.write(`\r  ${fmt(stats.done)}/${fmt(total)} (${pct}%) — ${rate.toFixed(0)}/s — ~${remaining}min left — ${stats.errors} errors   `);
  }, 1000);

  // Process in concurrent waves
  let qi = 0;
  while (qi < pending.length) {
    const wave = pending.slice(qi, qi + CONFIG.CONCURRENCY);
    qi += CONFIG.CONCURRENCY;
    await Promise.all(wave.map(indices => processBatch(indices, theses, antitheses, apiKey, stats)));
  }

  clearInterval(progress);
  process.stdout.write('\n');

  // Final save
  saveOutput(antitheses, CONFIG.OUTPUT_FILE);

  const elapsed = ((Date.now() - t0) / 1000 / 60).toFixed(1);
  console.log(`\n✓ Done. ${fmt(stats.done)} antitheses written to ${CONFIG.OUTPUT_FILE}`);
  console.log(`  Time: ${elapsed}min | Errors (fallback used): ${stats.errors}`);
}

main().catch(err => { console.error(err); process.exit(1); });
