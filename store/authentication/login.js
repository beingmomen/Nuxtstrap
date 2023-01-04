import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'

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
  async submit({ state, dispatch }) {
    // await this.$auth.loginWith('local', { data: state.fields })
    // const position = this.$i18n.locale === 'en' ? 'top-right' : 'top-left'
    // const welcomeMessage = this.$i18n.locale === 'en' ? 'Welcome' : 'مرحبا بك'
    // const message = `${welcomeMessage} ${this.$auth.user.name}`

    // this.$toast(message, {
    //   timeout: 3000,
    //   hideProgressBar: false,
    //   position,
    //   closeOnClick: false,
    //   showCloseButtonOnHover: true
    // })

    await dispatch('firebaseSubmit')
  },
  async firebaseSubmit({ state }) {
    try {
      const auth = await getAuth()
      const data = await signInWithEmailAndPassword(
        auth,
        state.fields.email,
        state.fields.password
      )

      const token = await data._tokenResponse

      console.warn('token', token)

      this.$auth
        .setUserToken(token.idToken, token.refreshToken)
        .then(() => this.$toast.success('User set!'))
    } catch (error) {}
  }
}

export const mutations = {
  setFieldValue(state, { key, value }) {
    state.fields[key] = value
  }
}
