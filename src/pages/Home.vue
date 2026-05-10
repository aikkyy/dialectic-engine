<template>
  <div class="flex flex-col w-full h-screen bg-stone-50">
    <!-- TOP TICKER — subject words -->
    <div
      class="relative flex-1 border-b border-stone-200 bg-stone-100 overflow-hidden"
    >
      <WordTickerBackground
        :words="subjectWords"
        :rows="4"
        :speed="125"
        :word-opacity="0.35"
        @select="onSubjectWord"
      />
      <span
        class="absolute bottom-2 right-3 text-[10px] italic text-stone-300 pointer-events-none z-10 font-serif"
      >
        click a word to set the subject
      </span>
    </div>

    <!-- SENTENCE BUILDER — center -->
    <div
      class="flex items-center justify-center px-12 py-8 bg-stone-50 border-b border-stone-200 overflow-visible"
    >
      <SentenceBuilder
        ref="sentenceBuilder"
        @complete="onComplete"
        @change="onSentenceChange"
      />
    </div>

    <!-- BOTTOM TICKER — complement words -->
    <div class="relative flex-1 bg-stone-100 overflow-hidden">
      <WordTickerBackground
        :words="complementWords"
        :rows="4"
        :speed="125"
        :word-opacity="0.35"
        @select="onComplementWord"
      />
      <span
        class="absolute top-2 right-3 text-[10px] italic text-stone-300 pointer-events-none z-10 font-serif"
      >
        click a word to set the ending
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import WordTickerBackground from '../components/WordTickerBackground.vue'
import SentenceBuilder from '../components/SentenceBuilder.vue'
import { OPINIONS } from '../data/opinions'
import type { OpinionRow } from '../data/opinions'

const sentenceBuilder = ref<InstanceType<typeof SentenceBuilder> | null>(null)

const subjectWords = [...new Set(OPINIONS.map((o) => o.subject))]
const complementWords = [...new Set(OPINIONS.map((o) => o.complement))]

function onSubjectWord(word: string) {
  sentenceBuilder.value?.injectSubject(word)
}

function onComplementWord(word: string) {
  sentenceBuilder.value?.injectComplement(word)
}

function onComplete(sentence: string, parts: Partial<OpinionRow>) {
  console.log('Complete:', sentence, parts)
}

function onSentenceChange(_sentence: string) {}
</script>
