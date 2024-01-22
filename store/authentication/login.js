export const state = () => ({
  fields: {
    username: '',
    password: ''
  }
})

export const getters = {
  fields: state => state.fields
}

export const actions = {
  async submit({ state }) {
    // try {
    const { fields } = state

    const params = new URLSearchParams()
    params.append('grant_type', 'password')
    params.append('client_id', 'client')
    params.append('client_secret', '!QA2ws3ed')
    params.append('AllowedScopes', 'application')
    params.append('username', fields.username)
    params.append('password', fields.password)
    await this.$auth.loginWith('local', { data: params })

    this.$toast.success('تم تسجيل الدخول بنجاح')
  }
}

export const mutations = {
  setFieldValue(state, { key, value }) {
    state.fields[key] = value
  }
}
