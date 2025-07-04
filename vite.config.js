import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import { VitePWA } from "vite-plugin-pwa";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    svelte(),
    VitePWA({
      registerType: "autoUpdate",
      manifest: {
        name: "Todo List PWA",
        short_name: "TodoPWA",
        description: "A simple todo list app as a Progressive Web App",
        theme_color: "#242424",
        background_color: "#242424",
        display: "standalone",
        icons: [
          {
            src: "/testpwa/logo-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "/testpwa/logo-512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
        ],
      },
    }),
  ],
  base: "/testpwa/",
});
