export const state = () => ({
  apiModule: '/users',
  table: {
    totalItems: 0,
    allData: [],
    filters: [],
    search: null,
    page: null
  },
  fields: {
    name: null,
    email: null,
    password: null,
    passwordConfirm: null,
    phoneCode: '+20',
    phone: null
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

  addDataToDB({ state }) {
    return this.$axios.$post(`${state.apiModule}/admin`, state.fields)
  },

  updateDataInDB({ state, dispatch }, payload) {
    return this.$axios.$patch(`${state.apiModule}/${payload}`, state.data)
  },

  showSingleData({ commit }, payload) {
    for (const [key, value] of Object.entries(payload)) {
      commit('setFieldValue', { key, value })
    }
  },

  async getDataByQuery({ state, dispatch }) {
    const params = {
      page: state.table.page || 1,
      search: state.table.search,
      role: 'admin'
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
      if (field !== 'phoneCode') {
        commit('setFieldValue', { key: field, value: null })
      }
    })
    commit('setFieldValue', { key: 'phoneCode', value: '+20' })
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
