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

<style scoped>
.plusafter {
  position: relative;
  --plus-size: 2rem; /* total arm length */
  --plus-offset: 2rem; /* center of plus, left of element */
  --plus-thickness: 1px; /* line thickness */
}
.plusafter::before,
.plusafter::after {
  content: '';
  position: absolute;
  color: currentColor;
}
.plusafter::before {
  /* horizontal arm centered at the plus center */
  left: calc(-1 * var(--plus-offset) - var(--plus-size) / 2);
  top: 50%;
  width: var(--plus-size);
  height: 0;
  border-top: var(--plus-thickness) solid currentColor;
  transform: translateY(-50%);
}
.plusafter::after {
  /* vertical arm centered at the same plus center */
  left: calc(-1 * var(--plus-offset));
  top: calc(50% - var(--plus-size) / 2);
  width: 0;
  height: var(--plus-size);
  border-left: var(--plus-thickness) solid currentColor;
}

.smallplus {
  position: relative;
  margin-left: 1.5rem;
  --plus-size: 1rem; /* total arm length */
  --plus-offset: 1rem; /* center of plus, left of element */
  --plus-thickness: 1px; /* line thickness */
}
.smallplus::before,
.smallplus::after {
  content: '';
  position: absolute;
  color: currentColor;
}
.smallplus::before {
  /* horizontal arm centered at the plus center */
  left: calc(-1 * var(--plus-offset) - var(--plus-size) / 2);
  top: 50%;
  width: var(--plus-size);
  height: 0;
  border-top: var(--plus-thickness) solid currentColor;
  transform: translateY(-50%);
}
.smallplus::after {
  /* vertical arm centered at the same plus center */
  left: calc(-1 * var(--plus-offset));
  top: calc(50% - var(--plus-size) / 2);
  width: 0;
  height: var(--plus-size);
  border-left: var(--plus-thickness) solid currentColor;
}
.arrowright {
  margin-left: 4rem; /* external spacing – optional */
  position: relative;
  display: inline-block;

  /* Custom properties */
  --shaft-length: 2rem; /* length of the horizontal line */
  --shaft-thickness: 1px; /* thickness of the shaft & arrowhead outline */
  --arrowhead-size: 0.5rem; /* size of the triangle (height = base width) */
  --arrow-offset: -3.5rem; /* left offset (negative moves it left) */

  color: currentColor;

  /* Give the parent enough height and width to contain the absolute children */
  height: 1.5rem; /* adjust to your needs */
  min-width: calc(
    var(--shaft-length) + var(--arrowhead-size) - var(--arrow-offset)
  );
}

/* Shaft: horizontal line */
.arrowright::before {
  content: '';
  position: absolute;
  left: var(--arrow-offset);
  top: 50%;
  width: var(--shaft-length);
  height: 0;
  border-top: var(--shaft-thickness) solid currentColor;
  transform: translateY(-50%);
}

/* Arrowhead: right‑pointing triangle */
.arrowright::after {
  content: '';
  position: absolute;
  /* 👇 key fix: start at the end of the shaft */
  left: calc(var(--arrow-offset) + var(--shaft-length));
  top: 50%;
  transform: translateY(-50%);
  width: 0;
  height: 0;
  border-style: solid;
  /* triangle using the left border */
  border-width: calc(var(--arrowhead-size) / 2) 0
    calc(var(--arrowhead-size) / 2) var(--arrowhead-size);
  border-color: transparent transparent transparent currentColor;
}
</style>
