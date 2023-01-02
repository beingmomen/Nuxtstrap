<template>
  <ContainersDoAuth
    :img="img"
    :welcome="$t('forgetPass.welcome')"
    :msg="$t('forgetPass.please')"
    :btn="$t('buttons.forgetPass')"
    :module-name="moduleName"
    url="/login"
  >
    <template #inputs>
      <FormFInputIcon
        :label="$t('email')"
        store-key="email"
        type="email"
        icon="mail"
        :module-name="moduleName"
        lg="12"
        md="12"
      />
    </template>
    <template #pages>
      <b-link class="d-flex justify-content-center" :to="localePath('/login')">
        <UtilsTheFIcon class="mr-1" icon="chevron-left" />
        {{ $t('forgetPass.back') }}
      </b-link>
    </template>
  </ContainersDoAuth>
</template>

<script>
export default {
  name: 'ForgotPassword',
  layout: 'auth',
  data() {
    return {
      moduleName: 'authentication/forgetPass',
      img: 'forgot-password-v2-dark.svg',
      btnDisabled: false
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
