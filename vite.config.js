import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3001, // Ensure the port is correct
    open: true,  // This will open the page automatically in the browser
  },
});
