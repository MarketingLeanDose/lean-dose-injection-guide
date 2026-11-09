import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { viteSingleFile } from 'vite-plugin-singlefile';

// `npm run build:preview-single` produces one self-contained HTML file
// (used only for sharing review previews). Normal builds are standard Vite output for Vercel.
export default defineConfig(({ mode }) => ({
  plugins: [react(), ...(process.argv.includes('dist-single') ? [viteSingleFile()] : [])],
  build: { outDir: mode === 'review' && !process.argv.includes('dist-single') ? 'dist-review' : undefined },
}));
