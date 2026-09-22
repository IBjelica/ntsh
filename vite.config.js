import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// This site has two possible homes, and they need different asset paths:
//
//   GitHub Pages  -> served from /ntsh/, so assets must be /ntsh/assets/...
//   HawkHost      -> served from a domain root, so assets must be /assets/...
//
// Defaulting to '/' keeps `npm run build` correct for the HawkHost workflow.
// The `predeploy` script sets BASE_PATH=/ntsh/ for the Pages build.
//
// Without this, the Pages build requested /assets/... while being served from
// /ntsh/, every asset 404'd, and the site rendered as a blank white page.
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: process.env.BASE_PATH || '/',
})
