
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  define: {
    // process.env 전체가 아닌 API_KEY만 안전하게 문자열로 주입합니다.
    'process.env.API_KEY': JSON.stringify(process.env.API_KEY)
  },
  build: {
    outDir: 'dist',
    sourcemap: false
  }
});
