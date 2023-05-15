<template>
  <UtilsTheContentWrapper>
    <template #content>
      <b-button @click="random">create random data</b-button>
      <UtilsTheTable
        :title="$t('category')"
        :filter="false"
        :headers="headers"
        module-name="panel/categories"
        path="/panel/categories"
        lottie="https://assets10.lottiefiles.com/packages/lf20_ekfccbba.json"
        @changePage="changePage"
      />
    </template>
  </UtilsTheContentWrapper>
</template>

<script>
import {
  collection,
  getDocs,
  getFirestore,
  query,
  orderBy,
  startAfter,
  addDoc,
  serverTimestamp,
  limitToLast,
  endBefore,
  limit
} from 'firebase/firestore'
export default {
  name: 'Categories',
  layout: 'panel',
  async asyncData({ store }) {
    const db = getFirestore()
    // eslint-disable-next-line no-unused-vars
    const { size } = await getDocs(collection(db, 'categories'))
    // eslint-disable-next-line no-unused-vars
    const q = await query(
      collection(db, 'categories'),
      orderBy('createdAt'),
      limit(10)
    )

    const { docs } = await getDocs(q)

    const lastVisible = (await docs[docs.length - 1]) || null
    const firstVisible = (await docs[0]) || null

    // await store.commit('panel/categories/setValues', {
    //   key: 'visible',
    //   value: [pagination]
    // })
    // await store.commit('panel/categories/setValues', {
    //   key: 'firstVisible',
    //   value: firstVisible
    // })
    // const lastVisible = JSON.stringify((await docs[docs.length - 1]) || null)
    // const firstVisible = JSON.stringify((await docs[0]) || null)

    const data = await docs.map(doc => ({
      ...doc.data(),
      id: doc.id
    }))
    store.dispatch('panel/categories/getAllDataFromApi', {
      data,
      total: size
    })

    return {
      lastVisible,
      firstVisible
    }
  },
  data() {
    return {
      lastVisible: null,
      firstVisible: null,
      list: [
        {
          text: this.$t('categories'),
          active: true,
          to: '/panel/categories'
        }
      ],
      headers: [
        {
          key: 'test',
          label: 'test'
        },
        {
          key: 'key1',
          label: this.$t('ar_name')
        },
        {
          key: 'key2',
          label: this.$t('en_name')
        },
        {
          key: 'key3',
          label: this.$t('ar_name')
        },
        {
          key: 'key4',
          label: this.$t('en_name')
        },
        {
          key: 'actions',
          label: this.$t('actions')
        }
      ]
    }
  },
  // async mounted() {
  //   const db = getFirestore()

  //   const { size } = await getDocs(collection(db, 'categories'))

  //   const q = await query(
  //     collection(db, 'categories'),
  //     orderBy('createdAt'),
  //     limit(10)
  //   )

  //   const { docs } = await getDocs(q)
  //   this.lastVisible = (await docs[docs.length - 1]) || null
  //   this.firstVisible = (await docs[0]) || null

  //   const data = await docs.map(doc => ({
  //     ...doc.data(),
  //     id: doc.id
  //   }))

  //   this.$store.dispatch('panel/categories/getAllDataFromApi', {
  //     data,
  //     total: size
  //   })
  // },
  methods: {
    async changePage({ to, from }) {
      if (to > from) {
        const db = await getFirestore()
        const q = await query(
          collection(db, 'categories'),
          orderBy('createdAt'),
          limit(10),
          startAfter(this.lastVisible)
        )
        const { docs } = await getDocs(q)
        this.lastVisible = (await docs[docs.length - 1]) || null
        this.firstVisible = (await docs[0]) || null
        const data = await docs.map(doc => ({
          ...doc.data(),
          id: doc.id
        }))
        await this.$store.commit('panel/categories/setTableValue', {
          key: 'allData',
          value: data
        })
      } else {
        const db = await getFirestore()
        const q = await query(
          collection(db, 'categories'),
          orderBy('createdAt'),
          limitToLast(10),
          endBefore(this.firstVisible)
        )
        const { docs } = await getDocs(q)
        this.lastVisible = (await docs[docs.length - 1]) || null
        this.firstVisible = (await docs[0]) || null
        const data = await docs.map(doc => ({
          ...doc.data(),
          id: doc.id
        }))
        await this.$store.commit('panel/categories/setTableValue', {
          key: 'allData',
          value: data
        })
      }
    },
    async random() {
      const db = await getFirestore()

      const keys = ['key1', 'key2', 'key3', 'key4']

      const generateRandomObject = () => {
        const obj = {}
        for (let i = 0; i < 20; i++) {
          const key = keys[i]
          const value = Math.random().toString(36).substring(2, 12)
          obj[key] = `${value} - ${i + 1}`
        }
        return obj
      }

      for (let i = 0; i < 55; i++) {
        await addDoc(collection(db, 'categories'), {
          ...generateRandomObject(),
          test: `test ${i + 1}`,
          createdAt: serverTimestamp()
        })
      }
    }
  }
}
</script>

<style lang="scss" scoped></style>
