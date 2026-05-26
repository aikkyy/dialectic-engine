<!-- In your /form page component -->
<template>
  <p
    class="plusafter absolute top-32 left-18 z-10 text-base text-white max-w-xs bg-black"
  >
    Scroll to select a topic
  </p>

  <div class="w-full h-screen">
    <CategoryScatter />
  </div>
</template>

<script setup lang="ts">
import CategoryScatter from '../components/CategoryScatter.vue'
</script>
