export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: process.env.BROWSER_TITLE,
    htmlAttrs: {
      lang: 'ar',
      dir: 'rtl',
      class: 'arabic-dir'
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
    link: [
      { rel: 'icon', type: 'image/x-icon', href: `/${process.env.LOGO}` },
      {
        rel: 'stylesheet',
        type: 'image/x-icon',
        href: `/${process.env.LOGO}`
      },
      {
        rel: 'stylesheet',
        href: 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.rtl.min.css',
        integrity:
          'sha384-nU14brUcp6StFntEOOEBvcJm4huWjB0OcIeQ3fltAfSmuZFrkAif0T+UtNGlKKQv',
        crossorigin: 'anonymous'
      },
      {
        rel: 'preconnect',
        href: 'https://fonts.googleapis.com'
      },
      {
        rel: 'preconnect',
        href: 'https://fonts.gstatic.com'
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Almarai:wght@300;400;700;800&family=Cairo&display=swap'
      }
    ],
    scripts: [
      {
        src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js',
        integrity:
          'sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL',
        crossorigin: 'anonymous'
      }
    ]
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
    '~/plugins/catchError.js',
    '~/plugins/fetch.js',
    '~/plugins/axios.js'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    '@nuxtclub/feathericons',
    '@braid/vue-formulate/nuxt',
    '@nuxtjs/fontawesome',
    '@nuxtjs/moment'
  ],

  fontawesome: {
    component: 'Fa',
    suffix: false,
    icons: {
      solid: true,
      brands: true
    }
  },

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
    defaultLocale: 'ar',
    detectBrowserLanguage: false
  },

  auth: {
    localStorage: false,
    strategies: {
      local: {
        token: {
          property: 'access_token'
        },
        user: {
          property: 'data'
        },
        endpoints: {
          login: {
            url: `${process.env.AUTH_LOGIN}/connect/token`,
            method: 'post'
          },
          user: { url: '/profile', method: 'get' }
          // user: false
        }
      }
    },
    redirect: {
      login: '/',
      logout: '/login',
      callback: '/login',
      home: '/'
    }
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    baseURL: process.env.BASE_URL
  },
  env: {
    AUTH_LOGIN: process.env.AUTH_LOGIN,
    API_URL: process.env.API_URL,
    APP_TITLE: process.env.APP_TITLE,
    BROWSER_TITLE: process.env.BROWSER_TITLE,
    APP_NAME: process.env.APP_NAME,
    PLACE: process.env.PLACE,
    LOGO: process.env.LOGO
  },

  server: {
    port: process.env.PORT
  },

  loading: {
    color: ' #7367f0',
    height: '4px'
  },

  generate: {
    fallback: true
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    loaders: {
      svg: 'vue-svg-loader'
    },
    babel: {
      compact: true
    }
  }
}
