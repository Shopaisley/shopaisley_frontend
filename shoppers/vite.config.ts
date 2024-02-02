import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { VitePWA } from 'vite-plugin-pwa';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),
    VitePWA({
      strategies: 'injectManifest',
      srcDir: 'src/custom-sw',
      filename: 'my-sw.ts'
    })
  ],
  // server: {
  //   proxy: {
  //     "product": {
  //       target: "https://shopaisley-backend.onrender.com/",
  //       changeOrigin: true,
  //     },
  //   },
  // }
});
