<script setup lang="ts">
import { ref, computed, watch, nextTick, onMounted, onUnmounted } from 'vue'

interface Props {
  modelValue: string
  options: string[]
  placeholder?: string
  slotType?: 'subject' | 'modal' | 'verb' | 'complement'
}

const props = withDefaults(defineProps<Props>(), {
  placeholder: '···',
  slotType: 'subject',
})

const emit = defineEmits<{
  'update:modelValue': [value: string]
  change: [value: string]
}>()

const open = ref(false)
const query = ref('')
const highlightedIndex = ref(0)
const inputEl = ref<HTMLInputElement | null>(null)
const containerEl = ref<HTMLDivElement | null>(null)

const filtered = computed(() => {
  if (!query.value) return props.options
  const q = query.value.toLowerCase()
  return props.options.filter((o) => o.toLowerCase().includes(q))
})

const isEmpty = computed(() => !props.modelValue)

function openDropdown() {
  open.value = true
  query.value = ''
  highlightedIndex.value = 0
  nextTick(() => inputEl.value?.focus())
}

function selectOption(opt: string) {
  emit('update:modelValue', opt)
  emit('change', opt)
  open.value = false
  query.value = ''
}

function handleKeydown(e: KeyboardEvent) {
  if (e.key === 'ArrowDown') {
    e.preventDefault()
    highlightedIndex.value = Math.min(
      highlightedIndex.value + 1,
      filtered.value.length - 1,
    )
  } else if (e.key === 'ArrowUp') {
    e.preventDefault()
    highlightedIndex.value = Math.max(highlightedIndex.value - 1, 0)
  } else if (e.key === 'Enter') {
    e.preventDefault()
    if (filtered.value[highlightedIndex.value])
      selectOption(filtered.value[highlightedIndex.value])
  } else if (e.key === 'Escape') {
    open.value = false
  }
}

watch(query, () => {
  highlightedIndex.value = 0
})

function handleOutsideClick(e: MouseEvent) {
  if (containerEl.value && !containerEl.value.contains(e.target as Node)) {
    open.value = false
  }
}
onMounted(() => document.addEventListener('mousedown', handleOutsideClick))
onUnmounted(() => document.removeEventListener('mousedown', handleOutsideClick))
</script>

<template>
  <div
    ref="containerEl"
    class="slot-root inline-block relative"
    :class="`slot-type-${slotType}`"
  >
    <button
      type="button"
      class="slot-trigger"
      :class="{ 'is-empty': isEmpty, 'is-open': open }"
      @click="openDropdown"
    >
      <span class="slot-text">{{ modelValue || placeholder }}</span>
      <span class="slot-caret" :class="{ 'rotate-180': open }">
        <svg width="8" height="5" viewBox="0 0 8 5" fill="none">
          <path
            d="M1 1l3 3 3-3"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
          />
        </svg>
      </span>
    </button>

    <Transition name="slot-panel">
      <div v-if="open" class="slot-panel">
        <div class="slot-search-wrap">
          <input
            ref="inputEl"
            v-model="query"
            class="slot-search"
            placeholder="search…"
            @keydown="handleKeydown"
          />
        </div>
        <ul class="slot-options" role="listbox">
          <li
            v-for="(opt, i) in filtered"
            :key="opt"
            class="slot-option"
            :class="{
              'is-highlighted': i === highlightedIndex,
              'is-selected': opt === modelValue,
            }"
            role="option"
            :aria-selected="opt === modelValue"
            @mouseenter="highlightedIndex = i"
            @mousedown.prevent="selectOption(opt)"
          >
            <span class="slot-option-check">{{
              opt === modelValue ? '✓' : ''
            }}</span>
            <span class="slot-option-text">{{ opt }}</span>
          </li>
          <li v-if="filtered.length === 0" class="slot-empty">no matches</li>
        </ul>
      </div>
    </Transition>
  </div>
</template>

<style scoped>
.slot-trigger {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 2px 6px 3px;
  border-radius: 4px;
  border: 1px solid transparent;
  background: transparent;
  cursor: pointer;
  transition:
    background 0.15s,
    border-color 0.15s;
  white-space: nowrap;
  font-family: inherit;
  font-size: inherit;
  line-height: inherit;
  color: inherit;
}

.slot-trigger:hover {
  background: rgba(0, 0, 0, 0.04);
  border-color: rgba(0, 0, 0, 0.12);
}
.slot-trigger.is-open {
  background: rgba(0, 0, 0, 0.06);
  border-color: rgba(0, 0, 0, 0.2);
}
.slot-trigger.is-empty .slot-text {
  opacity: 0.3;
  font-style: italic;
}

.slot-type-subject .slot-trigger:not(.is-empty) {
  color: #1a56db;
}
.slot-type-modal .slot-trigger:not(.is-empty) {
  color: #7e3af2;
}
.slot-type-verb .slot-trigger:not(.is-empty) {
  color: #047481;
}
.slot-type-complement .slot-trigger:not(.is-empty) {
  color: #c27803;
}

.slot-caret {
  opacity: 0.4;
  display: flex;
  align-items: center;
  transition: transform 0.15s;
}
.slot-caret.rotate-180 {
  transform: rotate(180deg);
}

.slot-panel {
  position: absolute;
  top: calc(100% + 6px);
  left: 50%;
  transform: translateX(-50%);
  min-width: 180px;
  max-width: 280px;
  background: #fff;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  box-shadow:
    0 8px 30px rgba(0, 0, 0, 0.12),
    0 2px 8px rgba(0, 0, 0, 0.06);
  z-index: 50;
  overflow: hidden;
}

.slot-search-wrap {
  padding: 8px 8px 4px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.06);
}
.slot-search {
  width: 100%;
  padding: 5px 8px;
  font-size: 12px;
  font-family: inherit;
  border: 1px solid rgba(0, 0, 0, 0.12);
  border-radius: 6px;
  outline: none;
  background: #f9f9f9;
  color: #111;
}
.slot-search:focus {
  border-color: rgba(0, 0, 0, 0.3);
  background: #fff;
}

.slot-options {
  list-style: none;
  margin: 0;
  padding: 4px;
  max-height: 220px;
  overflow-y: auto;
}
.slot-option {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 6px 10px;
  border-radius: 6px;
  font-size: 13px;
  cursor: pointer;
  color: #222;
  transition: background 0.1s;
}
.slot-option.is-highlighted {
  background: #f0f0f0;
}
.slot-option.is-selected {
  font-weight: 600;
}

.slot-option-check {
  font-size: 11px;
  color: #1a56db;
  width: 12px;
  flex-shrink: 0;
}
.slot-option-text {
  flex: 1;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.slot-empty {
  padding: 10px;
  font-size: 12px;
  color: #aaa;
  text-align: center;
  font-style: italic;
}

.slot-panel-enter-active {
  transition:
    opacity 0.12s,
    transform 0.12s;
}
.slot-panel-leave-active {
  transition:
    opacity 0.08s,
    transform 0.08s;
}
.slot-panel-enter-from,
.slot-panel-leave-to {
  opacity: 0;
  transform: translateX(-50%) translateY(-4px);
}
</style>
