// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  modules: ['@nuxt/content'],

  css: ['~/assets/css/main.css', 'katex/dist/katex.min.css'],

  content: {
    // Node 26 ships node:sqlite natively - avoids better-sqlite3 native builds on Windows
    experimental: {
      sqliteConnector: 'native',
    },
    build: {
      markdown: {
        toc: { depth: 3, searchDepth: 3 },
        remarkPlugins: {
          'remark-math': {},
        },
        rehypePlugins: {
          'rehype-katex': {
            output: 'html',
          },
        },
      },
    },
  },

  runtimeConfig: {
    public: {
      // Empty until go-live: canonical/og:url tags only activate when a real domain is set
      siteUrl: '',
      giscus: {
        repo: 'arif-izzudin/electrical-stuffs',
        repoId: 'R_kgDOUIOufA',
        category: 'Announcements',
        categoryId: 'DIC_kwDOUIOufM4DEhh9',
      },
    },
  },

  app: {
    head: {
      htmlAttrs: { lang: 'en' },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'theme-color', content: '#1a365d' },
      ],
    },
  },
})
