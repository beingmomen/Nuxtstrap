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
  addDoc,
  serverTimestamp,
  limit
} from 'firebase/firestore'
export default {
  name: 'Categories',
  layout: 'panel',
  async asyncData({ store }) {
    const db = getFirestore()

    const { size } = await getDocs(collection(db, 'categories'))

    const q = await query(
      collection(db, 'categories'),
      orderBy('createdAt'),
      limit(10)
    )

    const { docs } = await getDocs(q)

    const data = await docs.map(doc => ({
      ...doc.data(),
      id: doc.id
    }))

    store.dispatch('panel/categories/getAllDataFromApi', {
      data,
      total: size
    })
  },
  data() {
    return {
      list: [
        {
          text: this.$t('categories'),
          active: true,
          to: '/panel/categories'
        }
      ],
      headers: [
        // {
        //   key: 'avatar',
        //   label: this.$t('image'),
        //   formatter: (value, key, item) => {
        //     const url = `${this.$config.NODE_URL_images}/categories/${item.image}`
        //     return url
        //   }
        // },
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
          key: 'key5',
          label: this.$t('ar_name')
        },
        {
          key: 'key6',
          label: this.$t('en_name')
        },
        {
          key: 'actions',
          label: this.$t('actions')
        }
      ]
    }
  },
  methods: {
    async random() {
      const db = await getFirestore()

      const keys = [
        'key1',
        'key2',
        'key3',
        'key4',
        'key5',
        'key6',
        'key7',
        'key8',
        'key9',
        'key10',
        'key11',
        'key12',
        'key13',
        'key14',
        'key15',
        'key16',
        'key17',
        'key18',
        'key19',
        'key20'
      ]

      const generateRandomObject = () => {
        const obj = {}
        for (let i = 0; i < 20; i++) {
          const key = keys[i]
          const value = Math.random().toString(36).substring(2, 12)
          obj[key] = value
        }
        return obj
      }

      for (let i = 0; i < 200; i++) {
        await addDoc(collection(db, 'categories'), {
          ...generateRandomObject(),
          createdAt: serverTimestamp()
        })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
