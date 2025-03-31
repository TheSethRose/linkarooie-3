import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://linkarooie.com',
  base: '/',
  integrations: [],
  output: 'static',
  image: {
    domains: ['pbs.twimg.com']
  },
  vite: {
    plugins: [tailwindcss()]
  }
});
