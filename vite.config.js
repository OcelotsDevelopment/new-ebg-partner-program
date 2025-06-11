import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import { resolve } from 'path'

export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        aboutus: resolve(__dirname, 'aboutus.html'),
        anime: resolve(__dirname, 'anime.html'),
        ourbrand: resolve(__dirname, 'ourbrand.html'),
        copy: resolve(__dirname, 'copy.html')
      }
    }
  }
})