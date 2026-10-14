import { defineConfig } from 'astro/config';

// GitHub Pages serves the site at https://easysimho.github.io/mago-maxime/.
// With a custom domain (e.g. www.magomaxime.it) set site to it and base to '/'.
export default defineConfig({
  site: 'https://easysimho.github.io',
  base: '/mago-maxime',
  server: {
    host: true,
  },
});
