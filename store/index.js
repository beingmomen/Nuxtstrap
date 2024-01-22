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
  async nuxtServerInit({ commit }) {},
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
