export const state = () => ({
  apiModule: 'categories',
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
    image: null
  }
})

export const getters = {
  table: state => state.table,
  fields: state => state.fields
}

export const actions = {
  async getAllDataFromApi({ commit }, { data, total }) {
    const docs = await data.map(doc => ({ ...doc.data(), id: doc.id }))
    await commit('setTableValue', { key: 'totalItems', value: total })
    await commit('setTableValue', { key: 'allData', value: docs })
  },

  async addDataToDB({ state, dispatch, commit }) {
    const img = await state.fields.image
    const imgName = await `${img.lastModified + img.name}`.replace(/\s/g, '')
    const createdAt =
      await this.$fireModule.firestore.FieldValue.serverTimestamp()
    const file = await this.$fire.storage
      .ref(`${state.apiModule}/${imgName}`)
      .put(state.fields.image)

    const url = await file.ref.getDownloadURL()

    await commit('setFieldValue', { key: 'image', value: url })

    await this.$fire.firestore
      .collection(state.apiModule)
      .add({ ...state.fields, createdAt })
  },

  async updateDataInDB({ state, commit }, payload) {
    const img = await state.fields.image
    let imgName = await null
    const createdAt =
      await this.$fireModule.firestore.FieldValue.serverTimestamp()

    if (typeof img !== 'string') {
      imgName = await `${img.lastModified + img.name}`.replace(/\s/g, '')
      const file = await this.$fire.storage
        .ref(`${state.apiModule}/${imgName}`)
        .put(state.fields.image)

      const url = await file.ref.getDownloadURL()

      await commit('setFieldValue', { key: 'image', value: url })
    }

    await this.$fire.firestore
      .collection(state.apiModule)
      .doc(payload)
      .update({ ...state.fields, createdAt })
  },

  showSingleData({ commit }, payload) {
    for (const [key, value] of Object.entries(payload)) {
      commit('setFieldValue', { key, value })
    }
  },

  async getDataByQuery({ state, commit }) {
    const page = await state.table.page
    await console.warn('page', page)
    const { docs } = await this.$fire.firestore
      .collection(state.apiModule)
      .orderBy('createdAt', 'asc')
      .limit(10)
      .startAfter(page * 10)
      .get()

    const data = await docs.map(doc => ({ ...doc.data(), id: doc.id }))
    await commit('setTableValue', { key: 'allData', value: data })

    console.warn('data', data[0].key1)
    // const params = {
    //   page: state.table.page || 1,
    //   search: state.table.search
    // }
    // const data = await this.$axios.$get(state.apiModule, {
    //   params
    // })
    // dispatch('getAllDataFromApi', data)
  },

  async deleteFromDB({ state }, { id, img }) {
    let response = null
    try {
      response = await fetch(img)
    } catch (error) {
      return
    } finally {
      if (response?.status !== 404) {
        const fileName = await new URL(img).pathname.split('/').pop()
        const index = fileName.indexOf('%2F')
        const newStr = fileName.substring(index + 3)
        const storageRef = this.$fire.storage.ref()
        const imageRef = storageRef.child(`${state.apiModule}/${newStr}`)
        await imageRef.delete()
      }
      this.$fire.firestore.collection(state.apiModule).doc(id).delete()
    }
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
