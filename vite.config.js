import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import AppConfig from "./app.config.js";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/scotch-music-react/",
  server: AppConfig.dev
})
