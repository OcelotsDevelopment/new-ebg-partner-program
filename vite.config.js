// import { defineConfig } from 'vite'
// import tailwindcss from '@tailwindcss/vite'
// import { resolve } from 'path'

// export default defineConfig({
//   plugins: [
//     tailwindcss(),
//   ],
//   build: {
//     rollupOptions: {
//       input: {
//         main: resolve(__dirname, 'index.html'),
//         aboutus: resolve(__dirname, 'aboutus.html'),
//         appliance: resolve(__dirname, 'appliance.html'),
//         mobility: resolve(__dirname, 'mobility.html'),
//         energy: resolve(__dirname, 'energy.html')
//       }
//     }
//   }
// })

import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import { resolve } from 'path'

export default defineConfig({
  // plugins: [
  //   tailwindcss(),
  // ],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        aboutus: resolve(__dirname, 'aboutus.html'),
        appliance: resolve(__dirname, 'appliance.html'),
        mobility: resolve(__dirname, 'mobility.html'),
        energy: resolve(__dirname, 'energy.html')
      },
      output: {
        entryFileNames: (chunkInfo) => {
          // Handle main entry differently
          if (chunkInfo.name === 'main') {
            return '[name]-[hash].js'
          }
          // For other entries, place JS files in their respective folders
          return `${chunkInfo.name}/[name]-[hash].js`
        },
        chunkFileNames: '[name]-[hash].js',
        assetFileNames: (assetInfo) => {
          // Handle CSS files
          if (assetInfo.name?.endsWith('.css')) {
            return '[name]-[hash].css'
          }
          return 'assets/[name]-[hash][extname]'
        }
      }
    },
    // Custom rollup plugin to handle HTML file output structure
    // rollupOptions: {
    //   input: {
    //     main: resolve(__dirname, 'index.html'),
    //     aboutus: resolve(__dirname, 'aboutus.html'),
    //     appliance: resolve(__dirname, 'appliance.html'),
    //     mobility: resolve(__dirname, 'mobility.html'),
    //     energy: resolve(__dirname, 'energy.html')
    //   }
    // }
  },
  plugins: [
    tailwindcss(),
    // Custom plugin to handle folder structure
    {
      name: 'folder-structure',
      generateBundle(options, bundle) {
        // Create new bundle structure
        const newBundle = {}
        
        Object.keys(bundle).forEach(fileName => {
          const chunk = bundle[fileName]
          
          if (fileName.endsWith('.html')) {
            // Handle HTML files
            if (fileName === 'index.html') {
              // Keep index.html at root
              newBundle[fileName] = chunk
            } else {
              // Move other HTML files to folders as index.html
              const pageName = fileName.replace('.html', '')
              newBundle[`${pageName}/index.html`] = chunk
            }
          } else {
            // Keep other files as is
            newBundle[fileName] = chunk
          }
        })
        
        // Replace the original bundle
        Object.keys(bundle).forEach(key => delete bundle[key])
        Object.assign(bundle, newBundle)
      }
    }
  ]
})