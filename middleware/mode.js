export default async function ({ app, store }) {
  const cookieRes = await app.$cookies.get('dashboard-mode')
  if (cookieRes) {
    app.head.bodyAttrs.class = 'dark-layout'
    store.dispatch('toggleIsDark', true)
  } else {
    app.head.bodyAttrs.class = 'light-layout'
    store.dispatch('toggleIsDark', false)
  }
}
