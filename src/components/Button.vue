<script setup lang="ts">
const props = defineProps<{ href?: string }>()
</script>

<template>
  <a :href="props.href" class="btn uppercase underline">
    <slot />
  </a>
</template>
