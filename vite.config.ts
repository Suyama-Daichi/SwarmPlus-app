import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import { VitePWA } from 'vite-plugin-pwa';
import vike from 'vike/plugin';

// https://vitejs.dev/config/
export default defineConfig({
  server: { port: 3003 },
  plugins: [
    react(),
    vike(),
    // TODO: プロダクトに合わせて設定を変更する
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.ico', 'apple-touch-icon.png'],
      injectRegister: 'auto', //ここの記述
      manifest: {
        name: 'PWA Sample Apps',
        short_name: 'PWAApps',
        description: 'PWAサンプルアプリ',
        theme_color: '#ffffff',
        icons: [
          {
            src: 'pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png'
          },
          {
            src: 'pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any'
          },
          {
            src: 'pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'maskable'
          }
        ]
      }
    })],
});

