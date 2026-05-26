<template>
  <!-- <ChladniBackground color="#ffffff" bgColor="#0f0f14" audioSrc="/base.mp3" /> -->
  <ChladniBackground color="#ffffff" bgColor="#0f0f14" />
  <p
    class="plusafter absolute top-32 left-18 z-10 text-base text-white max-w-xs bg-black"
  >
    {{ texts[currentIndex] }}
  </p>

  <p
    class="absolute bottom-2 left-1/2 -translate-x-1/2 z-10 text-base text-white bg-black"
  >
    thesis <span class="smallplus"></span>antithesis
    <span class="arrowright">more robust synthesis of the truth</span>
  </p>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import ChladniBackground from '../components/ChladniBackground.vue'

const texts = [
  'a tool that allows you to test the strength of your own convictions',
  'a tool that gives you control over the power structures that may be oppressing you',
  'a tool that helps you disrupt the comfort of absolute certainty',
  'a tool that cultivates autonomous and resilient minds',
  'a tool that enables you to compare, reframe, and challenge the narratives you believe in',
]

const currentIndex = ref(0)
let intervalId = 0

onMounted(() => {
  intervalId = window.setInterval(() => {
    currentIndex.value = (currentIndex.value + 1) % texts.length
  }, 3000)
})

onUnmounted(() => {
  window.clearInterval(intervalId)
})
</script>
