export const state = () => ({
  fields: {
    email: null,
    password: null,
    passwordConfirm: null,
    phoneCode: '+20',
    phone: null
  }
})

export const getters = {
  fields: state => state.fields
}

export const actions = {
  async submit({ state }) {
    await this.$axios.$post('/users/signup', state.fields)
    const welcomeMessage =
      (await this.$i18n.locale) === 'en'
        ? 'successfully registered'
        : 'تم التسجيل بنجاح'
    await this.$toast.success(welcomeMessage)
  }
}

export const mutations = {
  setFieldValue(state, { key, value }) {
    state.fields[key] = value
  }
}
