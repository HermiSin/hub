// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://hub.app.fuenfgroschenverlag.com',
  output: 'static',
  build: {
    format: 'directory',
  },
  trailingSlash: 'ignore',
});
