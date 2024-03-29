import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/project-react/',
  publicDir: 'public',
  build: {
    // копіювати папку public
    outDir: 'dist',
    assetsDir: 'public',
    // інші налаштування збірки...
  }
})
