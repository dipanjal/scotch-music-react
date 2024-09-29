import react from '@vitejs/plugin-react';
import { defineConfig, loadEnv } from 'vite';

export default defineConfig(({ mode }) => {
  // Load env file based on `mode` in the current working directory.
  // Set the third parameter to '' to load all env regardless of the `VITE_` prefix.
  const env = loadEnv(mode, process.cwd(), 'VITE_')
  // In case you want to remove the VITE_ prefix
  // const env = Object.fromEntries(
  //     Object.entries(
  //       vite_env
  //     ).map(([key, value]) => [key.replace('VITE_', ''), value])
  // )
  return {
    plugins: [react()],
    base: env.VITE_BASE_URL,
    server: {
      port: env.VITE_PORT
    }
  }
})
