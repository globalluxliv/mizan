import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/mizan-humanity/', // Replace 'mizan-humanity' with your GitHub repository name
  plugins: [react()],
})
