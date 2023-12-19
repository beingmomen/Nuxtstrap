export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: process.env.BROWSER_TITLE,
    htmlAttrs: {
      lang: 'ar',
      dir: 'rtl'
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
        rel: 'preconnect',
        href: 'https://fonts.googleapis.com'
      },
      {
        rel: 'preconnect',
        href: 'https://fonts.gstatic.com'
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Montserrat:wght@200;300;400;500;600;700;800&display=swap'
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Tajawal:wght@200;300;400;500;700;800;900&display=swap'
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Cookie&display=swap'
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
    '@nuxtjs/proxy',
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
          property: 'token',
          global: true
        },
        user: {
          property: 'data'
        },
        endpoints: {
          login: {
            url: '/auth/login',
            // url: '/users/login',
            method: 'post'
          },
          // user: { url: '/users/me', method: 'get' }
          user: { url: '/session', method: 'get' }
          // user: false
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
    // baseURL: '/' // Set the base URL to '/'
    baseURL: process.env.BASE_URL
  },
  // axios: {
  //   proxy: true,
  //   baseURL: process.env.BASE_URL
  // },

  // proxy: {
  //   '/api': {
  //     target: process.env.BASE_URL, // Your external API URL
  //     pathRewrite: { '^/api': '/api' }, // Rewrite '/api' to '/api' in the request
  //     changeOrigin: true
  //   }
  // },

  env: {
    BASE_URL: process.env.BASE_URL,
    APP_TITLE: process.env.APP_TITLE,
    BROWSER_TITLE: process.env.BROWSER_TITLE,
    LOGO: process.env.LOGO
  },

  server: {
    port: process.env.PORT
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
