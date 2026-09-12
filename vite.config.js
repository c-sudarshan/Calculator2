import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/Caclulator/',  // Replace with your actual repo name
  plugins: [react()],
})
