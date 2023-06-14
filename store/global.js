export const state = () => ({
  lists: {
    countries: [],
    categories: [],
    activeList: [
      { id: 0, name: 'Not Active' },
      { id: 1, name: 'Active' }
    ]
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
