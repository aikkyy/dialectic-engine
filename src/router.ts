import { createRouter, createWebHistory } from 'vue-router'
import HomePage from './pages/Home.vue'
import FormPage from './pages/Form.vue'

const routes = [
  { path: '/', name: 'Home', component: HomePage },
  { path: '/form', name: 'Form', component: FormPage },
]

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})
