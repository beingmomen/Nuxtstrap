export const state = () => ({
  apiModule: '/products',
  table: {
    totalItems: 0,
    allData: [],
    filters: [],
    search: null,
    page: null
  },
  fields: {
    arabicName: null,
    englishName: null,
    category: null,
    discount: null,
    imageCover: null,
    images: null,
    colors: null,
    woodColors: null,
    shippingDate: null,
    store: null,
    englishDescription: null,
    arabicDescription: null,
    dimensions: null
  }
})

export const getters = {
  table: state => state.table,
  fields: state => state.fields
}

export const actions = {
  getAllDataFromApi({ commit }, { total, data }) {
    commit('setTableValue', { key: 'totalItems', value: total })
    commit('setTableValue', { key: 'allData', value: data.data })
  },

  async addDataToDB({ state, dispatch, rootState }) {
    const userId = rootState.auth.user._id
    const payload = { ...state.fields, user: userId }
    const storePath = 'handlerFactory/handleFormData'
    const data = await dispatch(storePath, payload, { root: true })
    return this.$axios.$post(`${state.apiModule}`, data)
  },

  async updateDataInDB({ state, dispatch }, payload) {
    const storePath = 'handlerFactory/handleFormData'
    const data = await dispatch(storePath, state.fields, { root: true })
    return this.$axios.$patch(`${state.apiModule}/${payload}`, data)
  },

  showSingleData({ commit, state }, payload) {
    const mutateFields = ['category', 'woodColors']
    mutateFields.forEach((field, i) => (payload[field] = payload[field]._id))

    const colors = payload.colors.map(color => color._id)
    payload.colors = colors

    // Main Function
    const extract = Object.keys(state.fields)
    const extractedData = extract.map(key => ({ [key]: payload[key] }))
    const result = Object.assign({}, ...extractedData)

    for (const [key, value] of Object.entries(result)) {
      commit('setFieldValue', { key, value })
    }
  },

  async getDataByQuery({ state, dispatch }) {
    const params = {
      page: state.table.page || 1,
      search: state.table.search
    }
    const data = await this.$axios.$get(state.apiModule, {
      params
    })

    dispatch('getAllDataFromApi', data)
  },

  deleteFromDB({ state }, payload) {
    return this.$axios.$delete(`${state.apiModule}/${payload}`)
  },

  resetData({ commit, state }) {
    Object.keys(state.fields).forEach((field, i) => {
      commit('setFieldValue', { key: field, value: null })
    })
  }
}

export const mutations = {
  setTableValue(state, { key, value }) {
    state.table[key] = value
  },
  setFieldValue(state, { key, value }) {
    state.fields[key] = value
  }
}
