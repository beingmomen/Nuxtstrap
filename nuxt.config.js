export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'MaronX',
    htmlAttrs: {
      lang: 'en',
      dir: 'ltr'
    },
    bodyAttrs: {
      class: 'light-layout'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/fonts/font.scss',
    '~/assets/scss/override/rtl-override.scss',
    '~/assets/scss/core.scss'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/settings/layout.js',
    { src: '~/plugins/settings/lottie-player.js', mode: 'client' },
    '~/plugins/settings/vee-validate.js',
    '~/plugins/catchError.js'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    '@nuxtclub/feathericons',
    '@braid/vue-formulate/nuxt'
  ],

  formulate: {
    configPath: '~/formulate.config.js'
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    // https://go.nuxtjs.dev/axios
    'nuxt-vue-select',
    '@nuxtjs/axios',
    '@nuxtjs/auth-next',
    '@nuxtjs/i18n',
    'cookie-universal-nuxt',
    [
      'vue-toastification/nuxt',
      {
        timeout: 4000,
        draggable: false,
        position: 'top-center'
      }
    ]
  ],

  i18n: {
    lazy: false,
    langDir: 'locales/',
    locales: [
      {
        code: 'ar',
        iso: 'ar-EG',
        file: 'ar',
        dir: 'rtl',
        name: 'Arabic',
        name_ar: 'العربية'
      },
      {
        code: 'en',
        iso: 'en-US',
        file: 'en',
        dir: 'ltr',
        name: 'English',
        name_ar: 'الإنجليزية'
      }
    ],
    defaultLocale: 'en',
    detectBrowserLanguage: false
  },

  auth: {
    localStorage: false,
    strategies: {
      local: {
        token: {
          prefix: '_token_maron_x_panel.',
          property: 'token'
        },
        user: {
          property: 'data.data'
        },
        endpoints: {
          login: { url: '/users/login', method: 'post' },
          user: { url: '/users/me', method: 'get' }
          // user: false,
        }
      }
    },
    redirect: {
      login: '/panel',
      logout: '/login',
      callback: '/login',
      home: '/panel'
    }
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    // baseURL: 'https://lakohouseapi-3r7n.onrender.com/api/v1',
    baseURL: 'http://127.0.0.1:5678/api/v1'
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
  publicRuntimeConfig: {
    SITE_TITLE: 'MaronX',
    NODE_URL_images: 'http://127.0.0.1:5678/images/'
  }
}
