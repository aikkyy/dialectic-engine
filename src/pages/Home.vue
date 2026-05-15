<template>
  <div class="flex flex-col w-full h-screen bg-stone-50">
    <!-- TOP TICKER — subject words (alphabetically ordered) -->
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
        click a subject
      </span>
    </div>

    <!-- CENTER — sentence builder -->
    <div
      class="flex items-center justify-center px-12 py-8 bg-stone-50 border-b border-stone-200 overflow-visible"
    >
      <SentenceBuilder
        v-model:subject="selectedSubject"
        v-model:opinion="selectedOpinion"
        ref="sentenceBuilder"
      />
    </div>

    <!-- BOTTOM TICKER — opinion words for selected subject -->
    <div class="relative flex-1 bg-stone-100 overflow-hidden">
      <WordTickerBackground
        v-if="currentSubjectOpinions.length > 0"
        :words="currentSubjectOpinions"
        :rows="4"
        :speed="125"
        :word-opacity="0.35"
        @select="onOpinionWord"
      />
      <span
        class="absolute top-2 right-3 text-[10px] italic text-stone-300 pointer-events-none z-10 font-serif"
      >
        {{ selectedSubject ? 'click an opinion' : 'select a subject first' }}
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
// @ts-nocheck
import { ref, computed } from 'vue'
import WordTickerBackground from '../components/WordTickerBackground.vue'
import SentenceBuilder from '../components/SentenceBuilder.vue'
import { opinions } from '../opinions.js'

type OpinionGroup = {
  subject: string
  opinions: string[]
}

const opinionGroups = opinions as OpinionGroup[]

const selectedSubject = ref<string>('')
const selectedOpinion = ref<string>('')
const sentenceBuilder = ref(null)

// Extract and sort subjects alphabetically
const subjectWords = computed(() => {
  const subjects = opinionGroups.map((o) => o.subject)
  return subjects.sort()
})

// Get opinions for the selected subject
const currentSubjectOpinions = computed(() => {
  if (!selectedSubject.value) return []
  const subjectData = opinionGroups.find(
    (o) => o.subject === selectedSubject.value,
  )
  return subjectData?.opinions || []
})

function onSubjectWord(word: string) {
  selectedSubject.value = word
  selectedOpinion.value = ''
}

function onOpinionWord(word: string) {
  selectedOpinion.value = word
}
</script>
