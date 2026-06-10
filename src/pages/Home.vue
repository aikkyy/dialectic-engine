<template>
  <!-- The "thesis + antithesis → …" tagline now lives in App.vue chrome
       (rendered when isHome) so it's a direct child of <main>, always
       above the readability overlay. Keeping it here, inside the routed
       page wrapper, made it briefly grey on entry: the page-fade-in
       opacity animation forms a transient stacking context that buries
       the tagline under the overlay until the fade completes. -->
  <DialecticEngine class="fixed inset-0 z-0" />
</template>

<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue'
import DialecticEngine from '../components/DialecticEngine.vue'
import { usePageLayout } from '../composables/usePageLayout'

const texts = [
  'a tool for tuning into the other frequencies an opinion can hold',
  'a tool that allows you to test the strength of your own convictions',
  'a tool that helps you disrupt the comfort of absolute certainty',
  'a tool that cultivates autonomous and resilient minds',
  'a tool that gives you control over the power structures that may be oppressing you',
]

let currentIndex = 0
const { pageInstructions } = usePageLayout({ instructions: texts[0] })

let intervalId = 0
onMounted(() => {
  intervalId = window.setInterval(() => {
    currentIndex = (currentIndex + 1) % texts.length
    pageInstructions.value = texts[currentIndex]
  }, 9500)
})

onUnmounted(() => {
  window.clearInterval(intervalId)
})
</script>
