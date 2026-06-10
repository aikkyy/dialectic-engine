# Running the antithesis engine offline (Ollama)

The dialectic engine generates antitheses with a **local, open-source AI model**
via [Ollama](https://ollama.com). It's free, and once the model is downloaded it
runs **fully offline** — no WiFi, no API key, no per-prompt cost. Perfect for an
exhibition kiosk.

> The backend is chosen by `AI_PROVIDER` in `.env.local`:
> `ollama` (default, local) or `claude` (Anthropic cloud). Nothing else changes.

---

## One-time setup on the exhibition iMac

### 1. Check the machine
 (Apple menu) → **About This Mac**. Note the **Chip** and **Memory**.
The chip matters more than RAM: Apple Silicon (M1/M2/M3/M4) runs these models fast.

### 2. Install Ollama
```bash
brew install ollama          # or download the app from https://ollama.com
```
Make sure the Ollama server is running (the menu-bar app, or `ollama serve`).

### 3. Pull a model — pick by Memory

| Memory (About This Mac) | Pull this | Notes |
|---|---|---|
| Apple Silicon, **24–32 GB** | `ollama pull qwen2.5:32b` | Best quality. Keep it **only if** replies stay ~snappy. |
| Apple Silicon, **16 GB**   | `ollama pull qwen2.5:14b` | The safe, snappy default. |
| **Intel** iMac             | `ollama pull qwen2.5:7b`  | Keeps the CPU responsive. |

This download is the **only** moment you need internet. After it finishes,
everything works offline.

### 4. Tell the app which model
Edit `.env.local` so `OLLAMA_MODEL` matches what you pulled:
```ini
AI_PROVIDER=ollama
OLLAMA_MODEL=qwen2.5:14b     # ← match the model you pulled
OLLAMA_KEEP_ALIVE=-1         # keep the model in RAM (no cold-start between visitors)
```

### 5. Warm it up and check speed
```bash
# First run loads the model into RAM (a few seconds), then answers instantly after.
ollama run qwen2.5:14b "Give a one-sentence counter-argument to: AI should be unregulated."
```
If the answer streams back in a couple of seconds, you're set. If a 32B model
feels sluggish, drop `OLLAMA_MODEL` to `qwen2.5:14b`.

### 6. Run the app
```bash
npm install        # first time only (needs Node 20.19+ or 22.12+)
npm run dev        # or: npm run build && npm run preview
```

### 7. Confirm it's truly offline
Turn off WiFi, open the form, type a thesis that **isn't** one of the suggested
ones, and confirm an antithesis appears. (Suggested/verbatim theses are answered
instantly from the built-in dataset and never touch the model.)

---

## Keep Ollama running automatically (optional but recommended)

So you don't have to start it by hand after a reboot:
```bash
brew services start ollama
```
With `OLLAMA_KEEP_ALIVE=-1`, the model stays resident, so the **first visitor of
the day** gets the same instant response as everyone else.

---

## Switching back to Claude (needs WiFi + credit)
In `.env.local`:
```ini
AI_PROVIDER=claude
ANTHROPIC_API_KEY=sk-ant-...
```
Restart the dev server. Useful for testing on a laptop without Ollama installed.

---

## Troubleshooting

| Symptom | Fix |
|---|---|
| `Could not reach the local AI model…` | Ollama isn't running. Start the app or `ollama serve`. |
| `The model "…" isn't installed` | `ollama pull <model>`, and make sure `OLLAMA_MODEL` matches. |
| Replies are slow | Use a smaller model (`qwen2.5:14b` → `:7b`), or close other heavy apps. |
| Want a different model | Browse https://ollama.com/library, `ollama pull <name>`, set `OLLAMA_MODEL`. |
| Config changes ignored | Restart the dev server — `.env.local` and `vite.config.ts` are read at startup. |
