import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://snagovskiy.github.io',
  integrations: [], 
  output: 'static',
  build: {
    format: 'directory'
  }
});
