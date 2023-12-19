export const state = () => ({
  fields: {
    email: '',
    password: ''
  }
})

export const getters = {
  fields: state => state.fields
}

export const actions = {
  async submit({ state }) {
    await this.$auth.loginWith('local', { data: state.fields })
    const position = this.$i18n.locale === 'en' ? 'top-right' : 'top-left'
    const welcomeMessage = this.$i18n.locale === 'en' ? 'Welcome' : 'مرحبا بك'
    const message = `${welcomeMessage} ${this.$auth.user.name}`

    this.$toast(message, {
      timeout: 3000,
      hideProgressBar: false,
      position,
      closeOnClick: false,
      showCloseButtonOnHover: true
    })
  }
}

export const mutations = {
  setFieldValue(state, { key, value }) {
    state.fields[key] = value
  }
}
