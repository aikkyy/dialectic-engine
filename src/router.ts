import { createRouter, createWebHistory } from 'vue-router'
import HomePage from './pages/Home.vue'
import FormPage from './pages/Form.vue'
import CategoryFreeform from './pages/Category.vue'
import CategoryDragAndDrop from './pages/CategoryDragAndDrop.vue'
import ArchivePage from './pages/Archive.vue'
import ArchivePrintPage from './pages/ArchivePrint.vue'

/** Which form variant the topic page (/form/:category) renders.
 *
 *  Set at build time via `VITE_FORM_VARIANT`:
 *    - unset / `freeform` → new inline-input form (Category.vue)         [default]
 *    - `dragdrop`         → original orbit + drag-and-drop form
 *                           (CategoryDragAndDrop.vue, preserved verbatim)
 *
 *  Running two Vite servers side-by-side on different ports — one with
 *  the env var, one without — lets you A/B the two experiences in real
 *  time. See .claude/launch.json for the dev / dev-dragdrop entries. */
const CategoryPage =
  import.meta.env.VITE_FORM_VARIANT === 'dragdrop'
    ? CategoryDragAndDrop
    : CategoryFreeform

const routes = [
  { path: '/', name: 'Home', component: HomePage },
  { path: '/form', name: 'Form', component: FormPage },
  { path: '/form/:category', name: 'Category', component: CategoryPage },
  { path: '/archive', name: 'Archive', component: ArchivePage },
  {
    path: '/archive/print',
    name: 'ArchivePrint',
    component: ArchivePrintPage,
  },
]

export const router = createRouter({
  // import.meta.env.BASE_URL automatically picks up the `base` from vite.config.ts
  // so this correctly becomes '/dialectic-engine/' in production
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})
