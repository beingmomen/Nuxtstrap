<template>
  <UtilsTheContentWrapper>
    <template #content>
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
        {
          key: 'avatar',
          label: this.$t('image'),
          formatter: (value, key, item) => {
            const url = `${this.$config.NODE_URL_images}/categories/${item.image}`
            return url
          }
        },
        {
          key: 'arabicName',
          label: this.$t('ar_name')
        },
        {
          key: 'englishName',
          label: this.$t('en_name')
        },
        {
          key: 'actions',
          label: this.$t('actions')
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
