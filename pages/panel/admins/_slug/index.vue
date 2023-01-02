<template>
  <UtilsTheContentWrapper :list="list">
    <template #content>
      <ContainersDoUpdate
        :id="id"
        :title="$t('admin')"
        :module-name="moduleName"
        :path="moduleName"
      >
        <template #inputs>
          <FormFInputIcon
            :label="$t('name')"
            :module-name="moduleName"
            icon="user"
            store-key="name"
          />

          <FormFInputIcon
            :label="$t('email')"
            store-key="email"
            type="email"
            icon="mail"
            :module-name="moduleName"
          />

          <FormFPasswordIcon
            :label="$t('password')"
            store-key="password"
            :module-name="moduleName"
          />

          <FormFPasswordIcon
            :label="$t('confirm_password')"
            store-key="passwordConfirm"
            :module-name="moduleName"
          />

          <FormFPhoneIcon
            :label="$t('phone')"
            store-key="phone"
            type="tel"
            icon="phone"
            :module-name="moduleName"
          />
        </template>
      </ContainersDoUpdate>
    </template>
  </UtilsTheContentWrapper>
</template>

<script>
export default {
  name: 'Update',
  layout: 'panel',
  async asyncData({ $axios, store, params }) {
    await store.dispatch('panel/admins/resetData')
    const id = params.slug.split('-').at(-1)
    const { data } = await $axios.$get(`/users/${id}`)
    await store.dispatch('panel/admins/showSingleData', data.data)
    return {
      id
    }
  },
  data() {
    return {
      moduleName: 'panel/admins',
      list: [
        {
          text: this.$t('admins'),
          active: false,
          to: '/panel/admins'
        },
        {
          text: this.$t('update'),
          active: true,
          to: '/panel/admins/update'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
