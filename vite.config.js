import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import AppConfig from "./app.config.js";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: AppConfig.dev
})
