<script setup lang="ts">
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import Button from './components/Button.vue'

const route = useRoute()
const router = useRouter()
const isHome = computed(() => {
  if (route.matched.some((record) => record.name === 'Home')) return true
  const normalizedPath = route.path.replace(/\/+$/, '')
  return normalizedPath === '' || normalizedPath === '/'
})

const isArchives = computed(() =>
  route.matched.some((record) => record.name === 'Archives'),
)

const goBack = () => {
  router.back()
}
</script>

<template>
  <main class="h-screen">
    <router-link
      :to="{ name: 'Home' }"
      class="absolute top-3 left-4 z-10 flex items-center gap-3 text-white cursor-pointer"
      aria-label="Go to home"
    >
      <h1 class="text-xs">Dialectic Engine</h1>
    </router-link>

    <Button v-if="isHome" class="absolute top-6 right-4 z-10" href="./form">
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
    <Button
      v-if="!isArchives"
      class="absolute bottom-2 right-4 z-10"
      href="./archives"
    >
      Archives
    </Button>
    <router-view v-slot="{ Component }">
      <Transition name="page" mode="out-in">
        <component :is="Component" />
      </Transition>
    </router-view>
  </main>
</template>

<style>
.page-enter-active,
.page-leave-active {
  transition:
    opacity 0.32s ease,
    transform 0.32s ease;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  transform: translateY(18px) scale(0.98);
}
.page-enter-to,
.page-leave-from {
  opacity: 1;
  transform: none;
}
</style>
