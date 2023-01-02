export const state = () => ({
  fields: {
    email: null
  }
})

export const getters = {
  fields: state => state.fields
}

export const actions = {
  async submit({ state }) {
    const data = await this.$axios.$post('/users/forgotPassword', state.fields)
    await this.$toast.success(data.message)
  }
}

export const mutations = {
  setFieldValue(state, { key, value }) {
    state.fields[key] = value
  }
}
