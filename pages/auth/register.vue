<template>
  <ContainersDoAuth
    :img="img"
    :welcome="$t('register.welcome')"
    :msg="$t('register.please')"
    :second="$t('register.signIn')"
    :btn="$t('buttons.signUp')"
    :module-name="moduleName"
    url="/login"
  >
    <template #inputs>
      <FormFInputIcon
        :label="$t('inputs.name')"
        store-key="name"
        :module-name="moduleName"
        lg="12"
        md="12"
      />

      <FormFInputIcon
        :label="$t('inputs.email')"
        store-key="email"
        type="email"
        icon="mail"
        :module-name="moduleName"
        lg="12"
        md="12"
      />

      <FormFPhoneIcon
        :label="$t('inputs.phone')"
        store-key="phone"
        type="tel"
        icon="phone"
        :module-name="moduleName"
        lg="12"
        md="12"
      />

      <FormFPasswordIcon
        :label="$t('inputs.password')"
        store-key="password"
        :module-name="moduleName"
        lg="12"
        md="12"
      />

      <FormFInputIcon
        :label="$t('image_url')"
        store-key="url"
        :module-name="moduleName"
        lg="12"
        md="12"
      />
    </template>

    <template #pages>
      <span class="fs-4">{{ $t('register.already') }}</span>
      <b-link :to="localePath('/login')">
        <span class="fs-4">&nbsp; {{ $t('register.signIn') }}</span>
      </b-link>
    </template>
  </ContainersDoAuth>
</template>

<script>
export default {
  name: 'Register',
  layout: 'auth',
  data() {
    return {
      moduleName: 'authentication/register',
      img: 'register-v2-dark.svg',
      btnDisabled: false
    }
  },
  computed: {
    getPhoneCode() {
      return this.$store.getters[`${this.moduleName}/phoneCode`]
    }
  }
}
</script>

  <style lang="scss" scoped>
</style>
