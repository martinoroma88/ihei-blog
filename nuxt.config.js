export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: "static",

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    htmlAttrs: {
      lang: 'fr'
    },
    title: "IHEI Institut des Hautes Etudes Islamiques",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "L'Islam en France" }
    ],
    script: [
      {
        src: "https://cdn.usefathom.com/script.js",
        "data-site": "JHSZNAJO",
        defer: true
      }
    ]
  },

  env: {
    baseURL: 'https://ihei-asso.org'
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: ["@/assets/style.css"],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    { src: '~/plugins/gdpr-banner', mode: 'client' }
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    "@nuxtjs/tailwindcss",
    "@nuxtjs/google-fonts",
    "@nuxtjs/date-fns"
  ],

  googleFonts: {
    /* module options */
    families: {
      "Merriweather+Sans": {
        wght: [400, 700]
      },
      "Merriweather": {
        wght: [400, 700],
        ital: [400]
      }
    },
    display: "swap"
  },

  generate: {
    fallback: true
  },

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/content
    "@nuxt/content"
  ],

  // Content module configuration (https://go.nuxtjs.dev/config-content)
  content: {
    markdown: {
      remarkPlugins: [["remark-footnotes", { inlineNotes: true }]]
    },
    nestedProperties: ["categories.souscategories"]
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {}
};
