<template>
  <b-card-body class="d-flex justify-content-end flex-wrap pt-0">
    <div>
      <b-pagination
        v-model="currentPage"
        :total-rows="table.totalItems"
        :per-page="perPage"
        align="center"
        size="sm"
        class="my-0"
      />
    </div>
  </b-card-body>
</template>

<script>
import {
  getFirestore,
  collection,
  query,
  orderBy,
  startAfter,
  limit,
  getDocs
} from 'firebase/firestore'
export default {
  props: {
    moduleName: {
      type: String,
      default: null
    }
  },
  data() {
    return {
      perPage: 10,
      currentPage: 1
    }
  },
  computed: {
    table() {
      return this.$store.getters[`${this.moduleName}/table`]
    }
  },
  watch: {
    async currentPage(newValue) {
      const db = await getFirestore()
      // Query the first page of docs
      const first = query(
        collection(db, 'categories'),
        orderBy('cratedAt'),
        limit(10)
      )
      const documentSnapshots = await getDocs(first)

      // Get the last visible document
      const lastVisible =
        documentSnapshots.docs[documentSnapshots.docs.length - 1]
      console.warn('last', lastVisible)

      // Construct a new query starting at this document,
      // get the next 10 categories.
      const q = query(
        collection(db, 'categories'),
        orderBy('cratedAt'),
        startAfter(lastVisible || 1),
        limit(10)
      )

      const { docs } = await getDocs(q)

      const data = await docs.map(doc => ({
        ...doc.data(),
        id: doc.id
      }))

      console.warn('data', data)
    }
    // async currentPage(newValue) {
    //   // await this.$store.commit(`${this.moduleName}/setTableValue`, {
    //   //   key: 'page',
    //   //   value: newValue
    //   // })

    //   // await this.$store.dispatch(`${this.moduleName}/getDataByQuery`)
    // }
  }
}
</script>

<style lang="scss" scoped>
</style>
