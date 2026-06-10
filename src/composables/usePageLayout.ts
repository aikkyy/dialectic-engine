import { inject, onBeforeUnmount, watchEffect, type Ref } from 'vue'

export interface PageLayoutContext {
  pageInstructions: Ref<string>
  pageTopic: Ref<string>
}

/**
 * Declares the current page's instruction text (and optional topic) for the
 * global layout chrome in App.vue. Both values are cleared on unmount so the
 * next route can't inherit stale text.
 *
 * Pass a string for a static value, or a `() => string` getter for something
 * derived from reactive state (e.g. route params) — getters are tracked with
 * `watchEffect`, so they stay in sync without remounting the component.
 */
export function usePageLayout(opts: {
  instructions: string | (() => string)
  topic?: string | (() => string)
}) {
  const ctx = inject<PageLayoutContext>('pageLayout')
  if (!ctx) {
    throw new Error(
      'usePageLayout(): PageLayoutContext not provided. Is App.vue mounted?',
    )
  }

  if (typeof opts.instructions === 'function') {
    const get = opts.instructions
    watchEffect(() => {
      ctx.pageInstructions.value = get()
    })
  } else {
    ctx.pageInstructions.value = opts.instructions
  }

  if (opts.topic != null) {
    if (typeof opts.topic === 'function') {
      const get = opts.topic
      watchEffect(() => {
        ctx.pageTopic.value = get()
      })
    } else {
      ctx.pageTopic.value = opts.topic
    }
  }

  onBeforeUnmount(() => {
    ctx.pageInstructions.value = ''
    ctx.pageTopic.value = ''
  })

  return ctx
}
