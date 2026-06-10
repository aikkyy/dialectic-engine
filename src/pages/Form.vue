<template>
  <CategoryScatter />

  <!-- Sub-instructions teleported into the layout chrome, right under the main instructions. -->
  <Teleport to="#layout-extra-slot">
    <p class="home-subinstructions">
      or check the
      <button
        type="button"
        class="topic-index-link"
        @click="modalOpen = true"
      >topic index</button>
    </p>
  </Teleport>

  <!-- Topic index modal -->
  <Transition name="modal">
    <div
      v-if="modalOpen"
      class="topic-modal-overlay"
      role="dialog"
      aria-modal="true"
      aria-labelledby="topic-modal-title"
      @click.self="modalOpen = false"
    >
      <div class="topic-modal">
        <header class="topic-modal-header">
          <h2 id="topic-modal-title" class="topic-modal-title">topic index</h2>
          <button
            type="button"
            class="topic-modal-close"
            aria-label="Close"
            @click="modalOpen = false"
          >
            <svg
              viewBox="0 0 24 24"
              width="20"
              height="20"
              fill="none"
              stroke="currentColor"
              stroke-width="1.2"
            >
              <path d="M6 6 L18 18 M18 6 L6 18" />
            </svg>
          </button>
        </header>
        <div class="topic-modal-body">
          <ul class="topic-list">
            <li v-for="topic in topics" :key="topic">
              <a class="topic-link" @click="selectTopic(topic)">{{ topic }}</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref, watch } from 'vue'
import { useRouter } from 'vue-router'
import CategoryScatter from '../components/CategoryScatter.vue'
import { usePageLayout } from '../composables/usePageLayout'
import { engineOpinions } from '../data/engineOpinions'

usePageLayout({ instructions: '*scroll* the mouse to select a topic' })

const router = useRouter()
const modalOpen = ref(false)

// Unique categories, sorted alphabetically, displayed lowercase to match the orbit.
const topics = computed(() => {
  const seen = new Set<string>()
  const list: string[] = []
  for (const op of engineOpinions) {
    if (!seen.has(op.category)) {
      seen.add(op.category)
      list.push(op.category)
    }
  }
  return list.sort((a, b) => a.localeCompare(b))
})

function selectTopic(category: string) {
  modalOpen.value = false
  router.push(`/form/${encodeURIComponent(category.toLowerCase())}`)
}

function onKey(e: KeyboardEvent) {
  if (e.key === 'Escape' && modalOpen.value) modalOpen.value = false
}

// Lock the underlying scroll-stage while the modal is open so the page doesn't
// scroll behind the dialog when the user reaches the modal's scroll boundaries.
watch(modalOpen, (open) => {
  const stage = document.querySelector('.scroll-stage') as HTMLElement | null
  if (stage) stage.style.overflowY = open ? 'hidden' : ''
})

onMounted(() => window.addEventListener('keydown', onKey))
onUnmounted(() => {
  window.removeEventListener('keydown', onKey)
  const stage = document.querySelector('.scroll-stage') as HTMLElement | null
  if (stage) stage.style.overflowY = ''
})
</script>

<!-- All modal styles moved to src/style.css so the opinion index on
     /form/<topic> can use the same classes. -->
