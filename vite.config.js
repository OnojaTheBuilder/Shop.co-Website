import { defineConfig } from 'vite'
// No longer need to import tailwindcss here for Vite plugins
export default defineConfig({
  plugins: [
    // Tailwind CSS will be handled by PostCSS
  ],
})