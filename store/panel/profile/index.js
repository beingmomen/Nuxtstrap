export const state = () => ({
  apiModule: '/users',
  fields: {
    name: null,
    email: null,
    country: null,
    phone: null,
    phoneCode: '+20',
    photo: null
  }
})

export const getters = {
  fields: state => state.fields
}

export const actions = {
  getAllDataFromApi({ dispatch, rootState }) {
    const user = rootState.auth.user
    dispatch('showSingleData', user)
  },

  async updateDataInDB({ state, dispatch }, payload) {
    const storePath = 'handlerFactory/handleFormData'
    const data = await dispatch(storePath, state.fields, { root: true })
    await this.$axios.$patch(`${state.apiModule}/updateMe`, data)
    // await this.$auth.fetchUser()
  },

  showSingleData({ state, commit }, payload) {
    // Main Function
    const extract = Object.keys(state.fields)
    const extractedData = extract.map(key => ({ [key]: payload[key] }))
    const result = Object.assign({}, ...extractedData)

    for (const [key, value] of Object.entries(result)) {
      commit('setFieldValue', { key, value })
    }
  }
}

export const mutations = {
  setFieldValue(state, { key, value }) {
    state.fields[key] = value
  }
}
