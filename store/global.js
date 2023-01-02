export const state = () => ({
  lists: {
    countries: [],
    categories: [],
    colors: [],
    woodColors: []
  }
})

export const getters = {
  lists(state) {
    return state.lists
  }
}

export const actions = {}

export const mutations = {
  setList(state, { key, value }) {
    state.lists[key] = value
  }
}
