import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5174,
    host: true,
    watch: {
      ignored: ['**/*.png', '**/node_modules/**', '**/.git/**', '**/.planning/**']
    }
  }
})
