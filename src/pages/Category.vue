<template>
  <p
    class="plusafter absolute top-26 left-6 z-10 text-base text-white max-w-xs"
  >
    /{{ category }}
  </p>
  <div class="w-full h-screen">
    <div class="absolute inset-0 flex items-center justify-center">
      <PixelCircle
        class="w-72 h-72"
        text="I believe that"
        :size="220"
        :pixelSize="10"
        :gap="2"
        :density="0.2"
        :fadeStrength="2.8"
        :randomness="0.8"
        :fontSize="14"
        :animationDensity="0.1"
      />
    </div>
    <router-view />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import PixelCircle from '../components/PixelCircle.vue'

const route = useRoute()
const category = computed(() => String(route.params.category ?? ''))
</script>
