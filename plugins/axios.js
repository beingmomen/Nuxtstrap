export default function ({ $axios, $auth, store }) {
  $axios.onRequest((config, i) => {
    // console.warn('url', config.url)
  })
}
