export default function ({ $axios, store }) {
  // eslint-disable-next-line arrow-parens
  $axios.onError(error => {
    store.dispatch('handlerFactory/displayErrors', error.response.data.errors)
  })
}
