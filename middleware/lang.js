export default async function ({ app, store, $config }) {
  // console.warn('app middleware', await app.i18n)
  const cookieRes = await app.i18n.localeProperties.code
  // console.warn('cookieRes', cookieRes)
  if (cookieRes === 'ar') {
    // app.head.htmlAttrs.class = 'arabic-dir'
    app.head.htmlAttrs.dir = 'rtl'
    app.head.htmlAttrs.lang = 'ar'
    store.dispatch('toggleDir', true)
  } else if (cookieRes === 'en') {
    // app.head.htmlAttrs.class = 'english-dir'
    app.head.htmlAttrs.dir = 'ltr'
    app.head.htmlAttrs.lang = 'en'
    store.dispatch('toggleDir', false)
  }
}
