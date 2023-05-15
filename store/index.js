export const state = () => ({
  layoutCollapsed: true,
  sidebar: false,
  isDark: false,
  logoWidth: true,
  isRTL: false
})

export const getters = {
  layoutCollapsed(state) {
    return state.layoutCollapsed
  },
  sidebar(state) {
    return state.sidebar
  },
  isDark(state) {
    return state.isDark
  },
  getLogoWidth(state) {
    return state.logoWidth
  },
  isRTL(state) {
    return state.isRTL
  }
}

export const actions = {
  async nuxtServerInit({ commit }) {
    // get All Countries
    // const res = await this.$axios.$get('https://restcountries.com/v3.1/all')
    // const countries = res.map((x, i) => ({
    //   ...x,
    //   display: `${x.name.common} - ${x.translations.ara.common}`,
    //   phoneCode: x.idd.root && `${x.idd.root}${x.idd.suffixes[0]}`
    // }))
    // commit(
    //   'global/setList',
    //   { key: 'countries', value: countries },
    //   { root: true }
    // )
    // get All Countries
    // const { data } = await this.$axios.$get('/categories')
    // commit(
    //   'global/setList',
    //   { key: 'categories', value: data.data },
    //   { root: true }
    // )
  },
  toggleLayoutCollapsed({ dispatch, commit, state }, payload) {
    payload > 1200
      ? commit('layoutCollapsed', !state.layoutCollapsed)
      : dispatch('toggleSidebar')
  },
  toggleSidebar({ commit, state }) {
    commit('setSidebar', !state.sidebar)
  },
  toggleIsDark({ commit, state }, payload) {
    commit('isDark', payload)
  },
  toggleDir({ commit }, payload) {
    commit('isRTL', payload)
  },
  logoWidth({ state, commit }, payload) {
    const width = !state.logoWidth
    commit('setLogoWidth', width)
  }
}

export const mutations = {
  layoutCollapsed(state, val) {
    state.layoutCollapsed = val
  },
  setSidebar(state, val) {
    state.sidebar = val
  },
  isDark(state, val) {
    state.isDark = val
  },
  setLogoWidth(state, val) {
    state.logoWidth = val
  },
  isRTL(state, val) {
    state.isRTL = val
  }
}
