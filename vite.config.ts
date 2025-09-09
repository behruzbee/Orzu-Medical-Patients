import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  base: "/orzu-medical",
  define: {
    global: "globalThis",
  },
  server: {
    port: 3000,
    open: true,
    watch: {
      usePolling: true,
    },
    hmr: {
      overlay: false,
    },
  },
});
