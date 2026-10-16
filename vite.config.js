import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  // Дефолт Vite 8 (Chrome 111+/Safari 16.4+) отсекает Android-телефоны со
  // старым Chrome/WebView — страница там просто не запускается. Берём цель
  // пониже: синтаксис транспилируется под более старые движки.
  build: {
    target: ['chrome87', 'edge88', 'firefox91', 'safari14'],
  },
  server: {
    host: true,
  },
})
