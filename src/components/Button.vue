<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{ href?: string }>()

const resolvedHref = computed(() => {
  const href = props.href || ''
  if (!href) return '#'
  if (/^[a-z]+:/i.test(href)) return href

  const base = import.meta.env.BASE_URL || '/'
  const normalizedBase = base.endsWith('/') ? base : `${base}/`
  const normalizedPath = href.replace(/^\.?\/?/, '')
  return `${normalizedBase}${normalizedPath}`
})
</script>

<template>
  <a :href="resolvedHref" class="btn uppercase underline">
    <slot />
  </a>
</template>
