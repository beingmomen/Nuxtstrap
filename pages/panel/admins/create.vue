<template>
  <UtilsTheContentWrapper :list="list">
    <template #content>
      <ContainersDoCreate :title="$t('admin')" :module-name="moduleName">
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
      moduleName: 'panel/admins',
      list: [
        {
          text: this.$t('admins'),
          active: false,
          to: '/panel/admins'
        },
        {
          text: this.$t('create'),
          active: true,
          to: '/panel/admins/create'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
