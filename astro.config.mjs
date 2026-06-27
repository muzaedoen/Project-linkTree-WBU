// astro.config.mjs
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import vercel from '@astrojs/vercel'; // <--- Pastikan ini ada jika pakai SSR

export default defineConfig({
  integrations: [tailwind()],
  output: 'server', // <--- Opsional: Ubah ke server jika datanya ingin real-time dari database nanti
  adapter: vercel(),
});

