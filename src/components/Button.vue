<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{ href?: string }>()

/** Treat any non-protocol href as an in-app route (e.g. "./archive",
 *  "/form"). Protocol-prefixed hrefs (https://, mailto:, etc.) stay as
 *  plain external anchors. */
const isInternal = computed(() => {
  const href = props.href || ''
  if (!href) return false
  return !/^[a-z]+:/i.test(href)
})

/** Path passed to <router-link> for internal routes. Strips the leading
 *  "./" so "./archive" becomes "/archive" — Vue Router resolves that
 *  against the app base automatically. */
const internalTo = computed(() => {
  const href = props.href || ''
  const trimmed = href.replace(/^\.\/?/, '')
  return trimmed.startsWith('/') ? trimmed : `/${trimmed}`
})

/** Fallback for external / empty hrefs — plain anchor behaviour. */
const externalHref = computed(() => {
  const href = props.href || ''
  if (!href) return '#'
  return href
})
</script>

<template>
  <!-- In-app routes go through <router-link> so navigation stays SPA
       (no full page reload). This is important for state continuity —
       e.g. App.vue tracks where the user came from when entering Archive
       so the back arrow can return them there; a hard reload would wipe
       that context. -->
  <router-link
    v-if="isInternal"
    :to="internalTo"
    class="btn uppercase underline"
  >
    <slot />
  </router-link>
  <a v-else :href="externalHref" class="btn uppercase underline">
    <slot />
  </a>
</template>
