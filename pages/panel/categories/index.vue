<template>
  <UtilsTheContentWrapper :list="list">
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
export default {
  name: 'Categories',
  layout: 'panel',
  async asyncData({ $axios, store }) {
    const data = await $axios.$get('/categories')
    store.dispatch('panel/categories/getAllDataFromApi', data)
    return {}
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
          label: this.$t('image')
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
