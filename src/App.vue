<script setup lang="ts">
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import Button from './components/Button.vue'

const route = useRoute()
const router = useRouter()
const isHome = computed(() => route.name === 'Home')

const goBack = () => {
  router.back()
}
</script>

<template>
  <main class="h-screen">
    <router-link
      to="/"
      class="absolute top-3 left-4 z-10 flex items-center gap-3 text-white cursor-pointer"
      aria-label="Go to home"
    >
      <h1 class="text-xs">Dialectic Engine</h1>
    </router-link>

    <Button v-if="isHome" class="absolute top-3 right-4 z-10" href="./form">
      Start
    </Button>
    <button
      v-if="!isHome"
      class="absolute top-10 right-6 z-10 group inline-flex h-6 w-6 items-center justify-center cursor-pointer"
      type="button"
      aria-label="Go back"
      @click="goBack"
    >
      <svg
        class="h-26 w-26 opacity-80 transition-opacity group-hover:opacity-100"
        viewBox="0 0 32 24"
        fill="none"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path d="M30 12H5" />
        <path d="M11 6L5 12l6 6" />
      </svg>
    </button>
    <Button class="absolute bottom-3 right-4 z-10" href="./archives">
      Archives
    </Button>
    <router-view />
  </main>
</template>
