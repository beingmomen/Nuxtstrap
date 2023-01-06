<template>
  <b-card-body class="d-flex justify-content-end flex-wrap pt-0">
    <div>
      <slot name="content" />
    </div>
  </b-card-body>
</template>

<script>
// import {
//   getFirestore,
//   collection,
//   query,
//   orderBy,
//   // startAt,
//   // endAt,
//   // startAfter,
//   // endBefore,
//   limit,
//   getDocs
// } from 'firebase/firestore'
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
      currentPage: 1,
      firstDoc: null,
      lastDoc: null,
      firstVisible: null,
      lastVisible: null
    }
  },
  computed: {
    table() {
      return this.$store.getters[`${this.moduleName}/table`]
    }
  },
  watch: {
    async currentPage(newValue, oldValue) {
      // console.warn('newValue paginated', newValue)
      // const db = await getFirestore()
      // const first = query(
      //   collection(db, 'categories'),
      //   orderBy('createdAt'),
      //   limit(10 * newValue)
      // )
      // const snapshots = await getDocs(first)
      // const data = await snapshots.docs.map(doc => ({
      //   ...doc.data(),
      //   id: doc.id
      // }))
    }
  }
  // watch: {
  //   async currentPage(newValue, oldValue) {
  //     const db = await getFirestore()
  //     const first = query(
  //       collection(db, 'categories'),
  //       orderBy('createdAt'),
  //       limit(10)
  //     )
  //     const snapshots = await getDocs(first)
  //     if (!this.lastVisible) {
  //       this.firstDoc =
  //         snapshots.docs[0]._document.data.value.mapValue.fields.arabicName.stringValue
  //       this.lastDoc =
  //         snapshots.docs[
  //           snapshots.docs.length - 1
  //         ]._document.data.value.mapValue.fields.arabicName.stringValue
  //       this.firstVisible = snapshots.docs[0]
  //       this.lastVisible = snapshots.docs[snapshots.docs.length - 1]
  //     }
  //     if (newValue > oldValue) {
  //       const next = query(
  //         collection(db, 'categories'),
  //         orderBy('createdAt'),
  //         startAfter(this.lastVisible),
  //         limit(10)
  //       )
  //       const newSnapshots = await getDocs(next)
  //       this.firstDoc =
  //         newSnapshots.docs[0]._document.data.value.mapValue.fields.arabicName.stringValue
  //       this.lastDoc =
  //         newSnapshots.docs[
  //           newSnapshots.docs.length - 1
  //         ]._document.data.value.mapValue.fields.arabicName.stringValue
  //       this.firstVisible = newSnapshots.docs[0]
  //       this.lastVisible = newSnapshots.docs[newSnapshots.docs.length - 1]
  //       const data = await newSnapshots.docs.map(doc => ({
  //         ...doc.data(),
  //         id: doc.id
  //       }))
  //       console.warn('data', data)

  //       this.$store.dispatch('panel/categories/getAllDataFromApi', {
  //         data,
  //         total: 27
  //       })
  //     } else {
  //       const next = query(
  //         collection(db, 'categories'),
  //         orderBy('createdAt'),
  //         endBefore(this.lastVisible),
  //         limit(10)
  //       )
  //       const newSnapshots = await getDocs(next)
  //       this.firstDoc =
  //         newSnapshots.docs[0]._document.data.value.mapValue.fields.arabicName.stringValue
  //       this.lastDoc =
  //         newSnapshots.docs[
  //           newSnapshots.docs.length - 1
  //         ]._document.data.value.mapValue.fields.arabicName.stringValue
  //       this.firstVisible = newSnapshots.docs[0]
  //       this.lastVisible = newSnapshots.docs[newSnapshots.docs.length - 1]
  //       const data = await newSnapshots.docs.map(doc => ({
  //         ...doc.data(),
  //         id: doc.id
  //       }))
  //       console.warn('data', data)
  //       this.$store.dispatch('panel/categories/getAllDataFromApi', {
  //         data,
  //         total: 27
  //       })
  //     }
  //   },
  //   firstVisible(newValue) {
  //     console.warn('firstVisible newValue', newValue.data())
  //   }
  // }
}
</script>

<style lang="scss" scoped>
</style>
