import {
  collection,
  // onSnapshot,
  addDoc,
  getDocs,
  getFirestore,
  query,
  limit,
  startAfter,
  orderBy,
  serverTimestamp
  // startAt,
  // offset
} from 'firebase/firestore'

export const state = () => ({
  apiModule: '/categories',
  table: {
    totalItems: 0,
    allData: [],
    filters: [],
    search: null,
    page: 1,
    lastVisible: null
  },
  fields: {
    arabicName: null,
    englishName: null,
    image: null
  },
  visible: null
})

export const getters = {
  table: state => state.table,
  fields: state => state.fields,
  values: state => state.values
}

export const actions = {
  async getAllDataFromApi({ commit }, { data, total }) {
    await commit('setTableValue', { key: 'allData', value: data })
    await commit('setTableValue', { key: 'totalItems', value: total })

    // await commit('setValues', {
    //   key: 'lastVisible',
    //   value: lastVisible
    // })
    // await commit('setValues', {
    //   key: 'firstVisible',
    //   value: firstVisible
    // })
  },

  async addDataToDB({ state }) {
    const db = getFirestore()
    await addDoc(collection(db, state.apiModule), {
      ...state.fields,
      createdAt: serverTimestamp()
    })
  },

  async updateDataInDB({ state, dispatch }, payload) {
    const storePath = 'handlerFactory/handleFormData'
    const data = await dispatch(storePath, state.fields, { root: true })
    return this.$axios.$patch(`${state.apiModule}/${payload}`, data)
  },

  showSingleData({ commit }, payload) {
    for (const [key, value] of Object.entries(payload)) {
      commit('setFieldValue', { key, value })
    }
  },

  async getDataByQuery({ state, commit }, payload) {
    await commit('setTableValue', {
      key: 'page',
      value: payload || 1
    })
    const db = await getFirestore()

    const q = await query(
      collection(db, 'categories'),
      orderBy('createdAt'),
      limit(10),
      startAfter(JSON.parse(state.values.lastVisible))
    )

    const { docs } = await getDocs(q)

    console.warn('docs', docs)
    const lastVisible = JSON.stringify((await docs[docs.length - 1]) || null)
    const firstVisible = JSON.stringify((await docs[0]) || null)

    await commit('setValues', {
      key: 'lastVisible',
      value: lastVisible
    })
    await commit('setValues', {
      key: 'firstVisible',
      value: firstVisible
    })

    const data = await docs.map(doc => ({
      ...doc.data(),
      id: doc.id
    }))
    await commit('setTableValue', { key: 'allData', value: data })
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
  },
  setValues(state, { key, value }) {
    state[key] = value
  }
}
