<template>
  <UtilsTheContentWrapper :list="list">
    <template #content>
      <ContainersDoUpdate
        :id="id"
        :title="$t('category')"
        :module-name="moduleName"
        :path="moduleName"
      >
        <template #inputs>
          <FormFInputIcon
            :label="$t('ar_name')"
            :module-name="moduleName"
            icon="user"
            store-key="arabicName"
          />
          <FormFInputIcon
            :label="$t('en_name')"
            :module-name="moduleName"
            icon="user"
            store-key="englishName"
          />

          <FormFFile
            :label="$t('image')"
            :module-name="moduleName"
            preview="categories"
            store-key="image"
          />
        </template>
      </ContainersDoUpdate>
    </template>
  </UtilsTheContentWrapper>
</template>

<script>
export default {
  name: 'Update',
  beforeRouteLeave(to, from, next) {
    setTimeout(() => {
      this.$store.dispatch('panel/categories/resetData')
    }, 1500)
    next()
  },
  layout: 'panel',
  async asyncData({ $axios, store, params }) {
    await store.dispatch('panel/categories/resetData')
    const id = params.slug.split('-').at(-1)
    const { data } = await $axios.$get(`/categories/${id}`)
    await store.dispatch('panel/categories/showSingleData', data.data)
    return {
      id
    }
  },
  data() {
    return {
      moduleName: 'panel/categories',
      list: [
        {
          text: this.$t('categories'),
          active: false,
          to: '/panel/categories'
        },
        {
          text: this.$t('update'),
          active: true,
          to: '/panel/categories/update'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
