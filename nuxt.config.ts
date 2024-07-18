// https://nuxt.com/docs/api/configuration/nuxt-config
import fs from 'fs';
import path from 'path';

export default defineNuxtConfig({
  app: {
    head: {
      script: [{src: 'https://stats.ha-infra.xyz/info.js', async: true, defer: 'true', referrerpolicy: 'unsafe-url', 'data-domain': 'billabear.com'}],
    }
  },
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  modules: [
      "@nuxtjs/i18n",
      "@nuxt/content"
  ],
  i18n: {
    vueI18n: './i18n.config.ts' // if you are using custom path, default
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  generate: {
    routes() {
      const files = fs.readdirSync(path.resolve(__dirname, 'content/blog'));
      return files.map(file => {
        const slug = file.replace('.md', '');
        return `/blog/${slug}`;
      });
    }
  }
})
