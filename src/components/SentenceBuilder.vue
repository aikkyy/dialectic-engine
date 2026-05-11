<script setup lang="ts">
import { ref, computed, watch } from 'vue'
import SentenceSlot from './SentenceSlot.vue'
import {
  SUBJECTS,
  MODAL_VERBS,
  OPINIONS,
  type OpinionRow,
} from '../data/opinions'

interface Props {
  fontSize?: string
}

const props = withDefaults(defineProps<Props>(), {
  fontSize: 'clamp(16px, 2.1vw, 18px)',
})

// ── All static option lists (no cascade filtering) ───────────
const subjectOptions = SUBJECTS
const modalOptions = MODAL_VERBS
const verbOptions = [...new Set(OPINIONS.map((o) => o.verb))]
const complementOptions = [...new Set(OPINIONS.map((o) => o.complement))]

// ── State — all slots fully independent ──────────────────────
const subject = ref('')
const modalVerb = ref('')
const verb = ref('')
const complement = ref('')

// ── Sentence ─────────────────────────────────────────────────
const sentence = computed(() =>
  [
    'I believe that',
    subject.value,
    modalVerb.value,
    verb.value,
    complement.value,
  ]
    .filter(Boolean)
    .join(' '),
)

const isComplete = computed(
  () => !!(subject.value && modalVerb.value && verb.value && complement.value),
)

// ── Emits ─────────────────────────────────────────────────────
const emit = defineEmits<{
  complete: [sentence: string, parts: Partial<OpinionRow>]
  change: [sentence: string]
}>()

watch(sentence, (s) => {
  emit('change', s)
  if (isComplete.value) {
    emit('complete', s, {
      subject: subject.value,
      modalVerb: modalVerb.value,
      verb: verb.value,
      complement: complement.value,
    })
  }
})

// ── External injection (from tickers) ────────────────────────
function injectSubject(word: string) {
  subject.value = word.toLowerCase().trim()
}
function injectComplement(word: string) {
  complement.value = word.toLowerCase().trim()
}

// ── Reset ─────────────────────────────────────────────────────
function reset() {
  subject.value = modalVerb.value = verb.value = complement.value = ''
}

const hasAny = computed(
  () => !!(subject.value || modalVerb.value || verb.value || complement.value),
)

defineExpose({ injectSubject, injectComplement })
</script>

<template>
  <div class="sentence-builder-root" :style="{ '--sentence-font-size': props.fontSize }">
    <!-- LEFT SIDE: Builder -->
    <div class="builder-side">
      <div class="sentence-line" role="group" aria-label="Sentence builder">
        <span class="sentence-prefix">I believe that</span>

        <div class="slots-container">
          <SentenceSlot
            v-model="subject"
            :options="subjectOptions"
            placeholder="subject"
            slot-type="subject"
          />
          <SentenceSlot
            v-model="modalVerb"
            :options="modalOptions"
            placeholder="should…"
            slot-type="modal"
          />
          <SentenceSlot
            v-model="verb"
            :options="verbOptions"
            placeholder="verb"
            slot-type="verb"
          />
          <SentenceSlot
            v-model="complement"
            :options="complementOptions"
            placeholder="…"
            slot-type="complement"
          />

          <span class="sentence-period" :class="{ 'is-visible': isComplete }"
            >.</span
          >
        </div>
      </div>

    </div>

    <!-- DIVIDER -->
    <div class="divider" aria-hidden="true">
      <button
        v-if="hasAny"
        class="reset-btn"
        type="button"
        @click="reset"
        aria-label="Clear sentence"
      >
        clear
      </button>
    </div>

    <!-- RIGHT SIDE: Preview -->
    <div class="preview-side">
      <div class="preview-container">
        <Transition name="preview-fade">
          <p v-if="isComplete" class="sentence-preview" aria-live="polite">
            {{ sentence }}.
          </p>
        </Transition>
      </div>
    </div>
  </div>
</template>

<style scoped>
.sentence-builder-root {
  display: flex;
  gap: 24px;
  width: 100%;
  font-family: 'Georgia', 'Times New Roman', serif;
}

.builder-side {
  display: flex;
  flex-direction: column;
  gap: 10px;
  flex: 1 1 0;
  min-width: 0;
}

.divider {
  flex: 0 0 72px;
  position: relative;
  align-self: stretch;
  display: flex;
  align-items: center;
  justify-content: center;
}

.divider::before {
  content: '';
  position: absolute;
  inset: 0;
  margin: auto;
  width: 1px;
  height: 100%;
  background-color: #e0e0d5;
}

.preview-side {
  flex: 1 1 0;
  display: flex;
  align-items: center;
  min-width: 0;
}

.preview-container {
  width: 100%;
  min-height: 60px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
}

.sentence-line {
  display: flex;
  align-items: baseline;
  gap: 4px;
  font-size: var(--sentence-font-size);
  font-weight: 400;
  color: #111;
  line-height: 1.6;
  letter-spacing: -0.01em;
  flex-wrap: wrap;
}

.sentence-prefix {
  flex-shrink: 0;
  margin-right: 2px;
  color: #555;
  font-style: italic;
  white-space: nowrap;
}

.slots-container {
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
  align-items: baseline;
  flex: 1;
}

.sentence-period {
  opacity: 0;
  transition: opacity 0.3s;
  font-size: inherit;
  flex-shrink: 0;
}
.sentence-period.is-visible {
  opacity: 1;
}

.sentence-preview {
  font-size: var(--sentence-font-size);
  color: #555;
  letter-spacing: 0.01em;
  font-style: italic;
  margin: 0;
  padding: 0;
  line-height: 1.6;
  word-wrap: break-word;
}

.reset-btn {
  position: relative;
  z-index: 1;
  width: 40px;
  height: 40px;
  border: 1px solid #d1d1c5;
  border-radius: 999px;
  background: #f7f4ee;
  padding: 0;
  font-size: 10px;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: #7a7a6b;
  cursor: pointer;
  font-family: inherit;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.04);
  transition:
    color 0.15s,
    border-color 0.15s,
    background 0.15s,
    transform 0.15s;
}
.reset-btn:hover {
  color: #3f3f36;
  border-color: #b9b9aa;
  background: #fff;
  transform: translateY(-1px);
}

.reset-btn:focus-visible {
  outline: 2px solid #8a8a7a;
  outline-offset: 2px;
}

.preview-fade-enter-active {
  transition:
    opacity 0.4s,
    transform 0.3s;
}
.preview-fade-leave-active {
  transition: opacity 0.2s;
}
.preview-fade-enter-from {
  opacity: 0;
  transform: translateY(4px);
}
.preview-fade-leave-to {
  opacity: 0;
}
</style>
