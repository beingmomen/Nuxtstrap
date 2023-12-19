export const state = () => ({
  apiModule: '/users',
  table: {
    totalItems: 0,
    allData: [],
    filters: null,
    search: null,
    page: null
  },
  lists: {
    firstList: []
  },
  fields: {
    name: null,
    email: null,
    password: null,
    passwordConfirm: null,
    phoneCode: '+20',
    phone: null
  },
  display: {
    count: 5
  }
})

export const getters = {
  table: state => state.table,
  lists: state => state.lists,
  fields: state => state.fields,
  display: state => state.display
}

export const actions = {
  getAllDataFromApi({ commit }, { total, data }) {
    commit('setTableValue', { key: 'totalItems', value: total })
    commit('setTableValue', { key: 'allData', value: data })
  },

  addDataToDB({ state }) {
    return this.$axios.$post(`${state.apiModule}/admin`, state.fields)
  },

  updateDataInDB({ state, dispatch }, payload) {
    const execute = ['password', 'passwordConfirm']
    execute.forEach(k => delete state.fields[k])
    return this.$axios.$patch(`${state.apiModule}/${payload}`, state.fields)
  },

  showSingleData({ commit }, payload) {
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

  filtersChange({ state, dispatch }, payload) {
    dispatch('getDataByQuery')
  },

  async changeState({ state, dispatch }, { id, active }) {
    await this.$axios.$patch(`${state.apiModule}/${id}`, {
      active
    })
    await dispatch('getDataByQuery')
    // eslint-disable-next-line no-useless-return
    return
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
  setListsValue(state, { key, value }) {
    state.lists[key] = value
  },
  setFieldValue(state, { key, value }) {
    state.fields[key] = value
  },
  setDisplayValue(state, { key, value }) {
    state.display[key] = value
  }
}
