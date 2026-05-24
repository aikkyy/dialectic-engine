import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig(({ command }) => ({
  // Localhost/dev uses relative asset paths; production build is deployed under /dialectic-engine/
  base: command === 'serve' ? './' : '/dialectic-engine/',
  plugins: [vue(), tailwindcss()],
}))
