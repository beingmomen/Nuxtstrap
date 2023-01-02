<template>
  <UtilsTheContentWrapper>
    <template #content>
      <UtilsTheTable
        :title="$t('product')"
        :filter="false"
        :headers="headers"
        :del-key="isRTL ? 'arabicName' : 'englishName'"
        module-name="panel/products"
        path="/panel/products"
        lottie="https://assets7.lottiefiles.com/packages/lf20_V0z5DWDK90.json"
      />
    </template>
  </UtilsTheContentWrapper>
</template>

<script>
export default {
  name: 'Products',
  layout: 'panel',
  async asyncData({ $axios, store }) {
    const data = await $axios.$get('/products')
    store.dispatch('panel/products/getAllDataFromApi', data)
    return {}
  },
  data() {
    return {
      list: [
        {
          text: this.$t('products'),
          active: true,
          to: '/panel/products'
        }
      ],
      headers: [
        {
          key: 'avatar',
          label: this.$t('image'),
          formatter: (value, key, item) => {
            const url = `${this.$config.NODE_URL_images}/products/${item.imageCover}`
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
          key: 'category',
          label: this.$t('category'),
          sortable: false,
          formatter: (value, key, item) => {
            return this.isRTL ? value.arabicName : value.englishName
          }
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
