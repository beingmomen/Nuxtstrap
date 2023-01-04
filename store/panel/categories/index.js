import {
  collection,
  // onSnapshot,
  addDoc,
  // getDocs,
  getFirestore,
  // query,
  // limit,
  // startAfter,
  // orderBy,
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
  }
})

export const getters = {
  table: state => state.table,
  fields: state => state.fields
}

export const actions = {
  async getAllDataFromApi({ commit }, { data, total }) {
    await commit('setTableValue', { key: 'allData', value: data })
    await commit('setTableValue', { key: 'totalItems', value: total })
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

  async getDataByQuery({ state, commit }) {
    // const db = await getFirestore()
    // const q = query(
    //   collection(db, 'categories'),
    //   orderBy('createdAt'),
    //   offset(22),
    //   limit(10)
    // )
    // const { docs } = await getDocs(q)
    // const data = await docs.map(doc => ({
    //   ...doc.data(),
    //   id: doc.id
    // }))
    // console.warn('data', data)
    // const documentSnapshots = await getDocs(first)
    // // Get the last visible document
    // const lastVisible =
    //   documentSnapshots.docs[documentSnapshots.docs.length - 1]
    // console.log('last', lastVisible)
    // // Construct a new query starting at this document,
    // // get the next 25 cities.
    // const next = query(
    //   collection(db, 'cities'),
    //   orderBy('population'),
    //   limit(25)
    // )
    // const { size } = await getDocs(collection(db, 'categories'))
    // const q = await query(
    //   collection(db, 'categories'),
    //   orderBy('createdAt'),
    //   limit(10)
    // )
    // const startPoint = (state.table.page - 1) * 10
    // const snapshot = await getDocs(q)
    // const lastDoc = snapshot.docs[startPoint]
    // const next = query(
    //   collection(db, 'categories'),
    //   orderBy('createdAt'),
    //   startAfter(lastDoc),
    //   limit(10)
    // )
    // const { docs } = await getDocs(next)
    // const data = await docs.map(doc => ({
    //   ...doc.data(),
    //   id: doc.id
    // }))
    // await commit('setTableValue', { key: 'allData', value: data })
    // await commit('setTableValue', { key: 'totalItems', value: size })
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
