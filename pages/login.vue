<!-- eslint-disable vue/html-self-closing -->
<template>
  <div class="auth-wrapper auth-v2">
    <b-row class="auth-inner m-0">
      <!-- Brand logo-->
      <b-link class="auth-login align-items-center">
        <b-img
          :src="logo"
          alt="logo"
          class="auth-logo"
        />
        <h2 class="brand-text text-primary ml-1 mb-0 mt-1">
          {{ appTitle }}
        </h2>
      </b-link>
      <!-- /Brand logo-->

      <!-- Left Text-->
      <b-col
        lg="8"
        class="d-none d-lg-flex align-items-center p-5"
      >
        <div
          class="w-100 d-lg-flex align-items-center justify-content-center px-5"
        >
          <b-img
            fluid
            :src="require('~/assets/images/pages/login-v2.svg')"
            alt="Login V2"
          />
        </div>
      </b-col>
      <!-- /Left Text-->
      <!-- Login-->
      <b-col
        lg="4"
        class="d-flex align-items-center auth-bg px-2 p-lg-5"
      >
        <b-col
          sm="8"
          md="6"
          lg="12"
          class="px-xl-2 mx-auto text-start"
        >
          <b-card-title
            class="mb-1 font-weight-bold"
            title-tag="h2"
          >
            مرحبا بك فى {{ appTitle }}! 👋
          </b-card-title>
          <b-card-text class="mb-2">
            الرجاء تسجيل الدخول إلى حسابك وبدء المغامرة
          </b-card-text>

          <!-- form -->
          <ValidationObserver v-slot="{ handleSubmit, invalid }">
            <b-form
              class="auth-login-form mt-2"
              @submit.prevent="handleSubmit(onSubmit)"
            >
              <!-- email -->
              <ValidationProvider
                v-slot="{ errors, classes }"
                rules="required"
                name="Email"
              >
                <b-form-group
                  label="البريد الإلكتروني"
                  label-for="login-email"
                  :class="classes"
                >
                  <b-form-input
                    v-model="login.username"
                    :state="errors.length > 0 ? false : null"
                    :class="classes"
                    autocomplete="off"
                    name="text"
                    placeholder="john@example.com"
                  />
                  <small class="text-danger">{{ errors[0] }}</small>
                </b-form-group>
              </ValidationProvider>

              <!-- forgot password -->
              <ValidationProvider
                v-slot="{ errors, classes }"
                rules="required"
                name="Password"
              >
                <b-form-group :class="classes">
                  <div class="d-flex justify-content-between">
                    <label for="login-password">كلمة المرور</label>
                  </div>
                  <b-input-group
                    class="input-group-merge password-input"
                    :class="errors.length > 0 ? 'is-invalid' : null"
                  >
                    <b-form-input
                      v-model="login.password"
                      :state="errors.length > 0 ? false : null"
                      class="form-control-merge"
                      :type="passwordFieldType"
                      autocomplete="off"
                      name="login-password"
                      placeholder="Password"
                    />
                    <b-input-group-append is-text>
                      <ExtendedEyeIcon
                        :visibility="passwordFieldType"
                        @click.native="togglePasswordVisibility"
                      />
                    </b-input-group-append>
                  </b-input-group>
                  <small class="text-danger">{{ errors[0] }}</small>
                </b-form-group>
              </ValidationProvider>

              <!-- submit buttons -->
              <b-button
                v-if="loading"
                type="submit"
                class="mt-3"
                variant="primary"
                disabled
                block
              >
                الدخول
                <b-spinner small />
              </b-button>
              <b-button
                v-else
                type="submit"
                class="mt-3"
                variant="primary"
                :disabled="invalid"
                block
              >
                الدخول
              </b-button>
            </b-form>
          </ValidationObserver>
        </b-col>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  name: 'Login',

  layout: 'auth',

  data() {
    return {
      loading: false,
      login: {
        grant_type: 'password',
        client_id: 'client',
        client_secret: '!QA2ws3ed',
        AllowedScopes: 'application',
        username: '',
        password: ''
      },
      status: ''
    }
  },
  computed: {
    appTitle() {
      return process.env.APP_TITLE
    },
    logo() {
      return `/${process.env.LOGO}`
    }
  },
  methods: {
    async onSubmit() {
      this.loading = true
      const params = new URLSearchParams()
      params.append('grant_type', 'password')
      params.append('client_id', 'client')
      params.append('client_secret', '!QA2ws3ed')
      params.append('AllowedScopes', 'application')
      params.append('username', this.login.username)
      params.append('password', this.login.password)
      try {
        const res = await this.$auth.loginWith('local', {
          data: params
        })

        if (res.status === 200) {
          this.$toast.success('تم تسجيل الدخول بنجاح')
          this.$auth.fetchUser()
        }

        // });
      } catch (err) {
        this.loading = false
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import 'assets/scss/vue/pages/page-auth.scss';

.auth-login {
  position: absolute;
  display: flex;
  align-items: center;
  z-index: 1000;
  top: 20px;
  right: 20px;
  .auth-logo {
    width: 80px;
    height: 80px;
  }

  .brand-text {
    margin-top: 18px;
    font-weight: bold;
  }
}
</style>
