<template>
  <ContainersDoAuth
    path="/panel"
    :img="img"
    :welcome="`${$t('login.welcome')} ${appTitle}! 👋`"
    :msg="$t('login.please')"
    btn="الدخول"
    :module-name="moduleName"
    :forgot="false"
  >
    <template #inputs>
      <FormFInputIcon
        :label="$t('email')"
        store-key="username"
        type="text"
        icon="mail"
        :module-name="moduleName"
        lg="12"
        md="12"
      />

      <FormFPasswordIcon
        :label="$t('password')"
        store-key="password"
        :module-name="moduleName"
        :forget="true"
        lg="12"
        md="12"
      />
    </template>
  </ContainersDoAuth>
</template>

<script>
export default {
  name: 'Login',
  layout: 'auth',
  data() {
    return {
      moduleName: 'authentication/login',
      img: 'login-v2.svg'
    }
  },
  computed: {
    appTitle() {
      return process.env.APP_TITLE
    }
  }
}
</script>
