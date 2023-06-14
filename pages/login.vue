<template>
  <ContainersDoAuth
    path="/panel"
    :img="img"
    :welcome="`${$t('login.welcome')} ${appTitle}! 👋`"
    :msg="$t('login.please')"
    :btn="$t('buttons.login')"
    :module-name="moduleName"
    :forgot="true"
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

      <FormFPasswordIcon
        :label="$t('password')"
        store-key="password"
        :module-name="moduleName"
        :forget="true"
        lg="12"
        md="12"
      />
    </template>
    <template #pages>
      <span class="fs-4">{{ $t('login.new_platform') }}</span>
      <b-link :to="localePath('/auth/register')">
        <span class="fs-4">&nbsp; {{ $t('login.new_account') }}</span>
      </b-link>
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
