<template>
  <UtilsTheContentWrapper>
    <template #content>
      <ContainersDoCreate :title="$t('category')" :module-name="moduleName">
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

          <FormFInputIcon
            :label="$t('image')"
            :module-name="moduleName"
            icon="user"
            store-key="image"
          />
        </template>
      </ContainersDoCreate>
    </template>
  </UtilsTheContentWrapper>
</template>

<script>
export default {
  name: 'Create',

  layout: 'panel',
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
          text: this.$t('create'),
          active: true,
          to: '/panel/categories/create'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
