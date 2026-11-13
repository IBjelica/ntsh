import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// The site is served from a domain root (ntsh.online on GitHub Pages, via
// public/CNAME), so assets live at /assets/... and the default '/' is right.
//
// BASE_PATH only matters if the site is ever served from a subpath again, such
// as ibjelica.github.io/ntsh/ without the custom domain: build with
// BASE_PATH=/ntsh/ then. With the wrong base every asset 404s and the site
// renders as a blank white page.
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: process.env.BASE_PATH || '/',
})
