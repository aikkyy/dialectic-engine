<script setup lang="ts">
import { ref, computed, watch } from 'vue'
import SentenceSlot from './SentenceSlot.vue'
import {
  SUBJECTS,
  MODAL_VERBS,
  OPINIONS,
  type OpinionRow,
} from '../data/opinions'

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
  <div class="sentence-builder-root">
    <div class="sentence-line" role="group" aria-label="Sentence builder">
      <span class="sentence-prefix">I believe that</span>

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

    <Transition name="preview-fade">
      <p v-if="isComplete" class="sentence-preview" aria-live="polite">
        {{ sentence }}.
      </p>
    </Transition>

    <button
      v-if="hasAny"
      class="reset-btn"
      type="button"
      @click="reset"
      aria-label="Clear"
    >
      clear
    </button>
  </div>
</template>

<style scoped>
.sentence-builder-root {
  display: flex;
  flex-direction: column;
  gap: 10px;
  font-family: 'Georgia', 'Times New Roman', serif;
}

.sentence-line {
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  gap: 2px 0;
  font-size: clamp(18px, 2.4vw, 28px);
  font-weight: 400;
  color: #111;
  line-height: 1.6;
  letter-spacing: -0.01em;
}

.sentence-prefix {
  margin-right: 4px;
  color: #555;
  font-style: italic;
  white-space: nowrap;
}

.sentence-period {
  opacity: 0;
  transition: opacity 0.3s;
  font-size: inherit;
}
.sentence-period.is-visible {
  opacity: 1;
}

.sentence-preview {
  font-size: 13px;
  color: #777;
  letter-spacing: 0.01em;
  font-style: italic;
  margin: 0;
  padding-left: 2px;
}

.reset-btn {
  align-self: flex-start;
  background: none;
  border: none;
  padding: 0;
  font-size: 11px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #bbb;
  cursor: pointer;
  font-family: inherit;
  transition: color 0.15s;
}
.reset-btn:hover {
  color: #555;
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
