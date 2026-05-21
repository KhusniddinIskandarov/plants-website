import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

/** @type {import('vite').UserConfig} */
export default defineConfig({
  plugins: [tailwindcss()],
  base: process.env.GITHUB_ACTIONS ? '/plants-website/' : '/'
})
