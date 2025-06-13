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
        appliance: resolve(__dirname, 'appliance.html'),
        mobility: resolve(__dirname, 'mobility.html'),
        energy: resolve(__dirname, 'energy.html')
      }
    }
  }
})