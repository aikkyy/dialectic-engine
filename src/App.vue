<script setup lang="ts">
import Button from './components/Button.vue'
</script>

<template>
  <main class="h-screen">
    <h1 class="absolute top-3 left-4 z-10 text-xs text-white">
      Dialectic Engine
    </h1>

    <Button class="absolute top-3 right-4 z-10" href="/form"> Start </Button>

    <router-view />
  </main>
</template>
