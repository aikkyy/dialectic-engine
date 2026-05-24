import { createRouter, createWebHistory } from 'vue-router'
import HomePage from './pages/Home.vue'
import FormPage from './pages/Form.vue'
import CategoryPage from './pages/Category.vue'
import ResultPage from './pages/Result.vue'
import ArchivesPage from './pages/Archives.vue'

const routes = [
  { path: '/', name: 'Home', component: HomePage },
  { path: '/form', name: 'Form', component: FormPage },
  { path: '/form/:category', name: 'Category', component: CategoryPage },
  { path: '/archives', name: 'Archives', component: ArchivesPage },
  {
    path: '/result',
    name: 'Result',
    component: ResultPage,
  },
]

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})
