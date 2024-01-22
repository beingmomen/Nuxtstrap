<template>
  <div class="auth-wrapper auth-v2">
    <b-row class="auth-inner m-0">
      <div class="auth-login">
        <b-img
          :src="logo"
          alt="logo"
          class="auth-logo"
        />
        <h2 class="brand-text text-primary mb-0">
          {{ appTitle }}
        </h2>
      </div>

      <b-col
        lg="8"
        class="d-none d-lg-flex align-items-center p-5"
      >
        <div
          class="w-100 d-lg-flex align-items-center justify-content-center px-5"
        >
          <b-img
            fluid
            :src="require(`@/assets/images/pages/${img}`)"
            alt="Register V2"
          />
        </div>
      </b-col>
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
            title-tag="h2"
            class="bold fs-2 mb-1"
          >
            {{ welcome }}
          </b-card-title>
          <b-card-text class="mb-2 fs-5">
            {{ msg }}
          </b-card-text>
          <b-form
            class="mt-2"
            @submit.prevent="addDataToDB"
          >
            <b-row>
              <slot name="inputs" />
            </b-row>

            <div
              v-if="forgot"
              class="d-flex justify-content-between"
            >
              <b-link :to="localePath('/auth/forgot-password')">
                <small class="fs-5">{{ $t('inputs.forget') }}</small>
              </b-link>
            </div>

            <b-button
              type="submit"
              class="mt-3 fs-5"
              variant="primary"
              block
              :disabled="!disabled || !fields.username || !fields.password"
            >
              {{ btn }}
              <b-spinner
                v-if="!disabled"
                class="ml-1"
                small
              />
            </b-button>
          </b-form>
          <p class="text-center mt-2">
            <slot name="pages" />
          </p>
        </b-col>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  props: {
    moduleName: {
      type: String,
      default: null
    },
    img: {
      type: String,
      default: null
    },
    welcome: {
      type: String,
      default: null
    },
    msg: {
      type: String,
      default: null
    },
    path: {
      type: String,
      default: '/login'
    },
    forgot: {
      type: Boolean,
      default: false
    },
    btn: {
      type: String,
      default: null
    }
  },
  data() {
    return {
      disabled: true
    }
  },
  computed: {
    appTitle() {
      return process.env.APP_TITLE
    },
    logo() {
      return `/${process.env.LOGO}`
    },
    fields() {
      return this.$store.getters[`${this.moduleName}/fields`]
    }
  },
  methods: {
    async addDataToDB() {
      try {
        this.disabled = await false
        await this.$store.dispatch(`${this.moduleName}/submit`)
        // await this.$router.push(this.localePath(this.path))
      } catch (error) {
      } finally {
        this.disabled = true
      }

      // .then(() => {
      //   this.disabled = true
      // })
      // .catch(() => {
      //   this.disabled = true
      // })
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
