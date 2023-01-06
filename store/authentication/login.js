export const state = () => ({
  fields: {
    email: 'abdelmomenelshatory@gmail.com',
    password: 'password'
  }
})

export const getters = {
  fields: state => state.fields
}

export const actions = {
  async submit({ state }) {
    const { user } = await this.$fire.auth.signInWithEmailAndPassword(
      state.fields.email,
      state.fields.password
    )

    await this.$auth.setUserToken(user._delegate.accessToken, user.refreshToken)

    const position =
      (await this.$i18n.locale) === 'en' ? 'top-right' : 'top-left'
    const welcomeMessage =
      (await this.$i18n.locale) === 'en' ? 'Welcome' : 'مرحبا بك'
    const message = await `${welcomeMessage} ${user.displayName}`

    await this.$toast(message, {
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
