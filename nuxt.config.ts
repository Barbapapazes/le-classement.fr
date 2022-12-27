export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      microsoftClarityID: process.env.MICROSOFT_CLARITY_ID,
      indexable: true,
    },
  },
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxt/content",
    "@vueuse/nuxt",
    "nuxt-icon",
    "nuxt-schema-org",
    "@nuxtjs/fontaine",
    "nuxt-simple-robots",
    "nuxt-simple-sitemap",
  ],
  schemaOrg: {
    canonicalHost: "https://le-classement.fr",
    defaultLanguage: "fr-FR",
    tagPosition: "head",
  },
  robots: {
    sitemap: "https://le-classement.fr/sitemap.xml",
  },
  sitemap: {
    hostname: "https://le-classement.fr",
  },
  content: {
    documentDriven: true,
    defaultLocale: "fr",
    navigation: {
      fields: ["for"],
    },
  },
  app: {
    head: {
      link: [
        { rel: "icon", type: "image/png", href: "/favicon.png" },
        { rel: "author", type: "text/plain", href: "/humans.txt" },
      ],
      meta: [
        {
          name: "google-site-verification",
          content: "TdbVQQq00musVnOqyiFS2ulrIvi29dUNAhPXtGXWags",
        },
        {
          hid: "og:site_name",
          property: "og:site_name",
          content: "Le Classement des Associations",
        },
        { hid: "og:type", property: "og:type", content: "website" },
        { hid: "twitter:site", name: "twitter:site", content: "@Leclassement" },
        {
          hid: "twitter:card",
          name: "twitter:card",
          content: "summary_large_image",
        },
      ],
    },
  },

  nitro: {
    prerender: {
      routes: ["/", "/design-kit", "/le-pense-bete"],
      crawlLinks: true,
    },
  },
  routeRules: {
    // "/**/": { static: true },
  },
});
