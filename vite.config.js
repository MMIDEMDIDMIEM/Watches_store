import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import flowbitePlugin from 'flowbite/plugin'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    flowbitePlugin,
  ],
  
  // ✅ أضف هذا الجزء لتعطيل Rolldown (المسبب للمشكلة)
  experimental: {
    rollup: true, // يرجع للنظام القديم المستقر
  },
})
