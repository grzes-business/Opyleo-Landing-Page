// astro.config.mjs
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://grzes-business.github.io',
  base: 'Opyleo-Landing-Page',
  integrations: [tailwind()],
  vite: {
    ssr: {
      noExternal: ['swiper', 'swiper/*']
    }
  }
});