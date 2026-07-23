// 1. vite.config.js - React Icons ko separate vendor chunk mein bhejo

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ["react", "react-dom", "react-router-dom"],
          icons: ["react-icons"], 
        },
      },
    },
    chunkSizeWarningLimit: 1000,
  },
});