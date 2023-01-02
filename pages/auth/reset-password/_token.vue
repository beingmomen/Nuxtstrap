<template>
  <ContainersDoAuth
    :img="img"
    :welcome="$t('resetPass.welcome')"
    :msg="$t('resetPass.please')"
    :btn="$t('buttons.resetPass')"
    :module-name="moduleName"
    url="/login"
  >
    <template #inputs>
      <FormFPasswordIcon
        :label="$t('inputs.password')"
        store-key="password"
        :module-name="moduleName"
        lg="12"
        md="12"
      />

      <FormFPasswordIcon
        :label="$t('inputs.passwordConfirm')"
        store-key="passwordConfirm"
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
  name: 'ResetPassword',
  layout: 'auth',
  data() {
    return {
      moduleName: 'authentication/resetPass',
      img: 'reset-password-v2.svg',
      btnDisabled: false
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
