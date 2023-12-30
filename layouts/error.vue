
<template>
  <!-- Error page-->
  <div class="misc-wrapper">
    <div class="misc-inner p-2 p-sm-3">
      <div class="w-100 text-center">
        <span v-if="error.statusCode == 404">
          <h2 class="mb-1">Page Not Found 🕵🏻‍♀️</h2>
          <p class="mb-2">
            Oops! 😖 The requested URL was not found on this server.
          </p>
        </span>
        <span v-if="error.statusCode == 403">
          <h2 class="mb-1">ليس لديك صلاحية للمتابعة</h2>
        </span>
        <span v-else>
          <h2 class="mb-1">{{ error.message }}🕵🏻‍♀️</h2>
          <!-- <p class="mb-2">
            Oops! 😖 The requested URL was not found on this server.
          </p> -->
        </span>
        <div class="d-flex flex-column align-items-center">
          <!-- <b-button
            variant="primary"
            class="mb-2 btn-sm-block w-25"
            @click="$router.back()"
          >

          </b-button> -->
          <b-button
            variant="primary"
            class="mb-2 btn-sm-block"
            :to="localePath('/panel')"
          >
            {{ $t('backToHome') }}
          </b-button>
        </div>

        <!-- image -->
        <b-img
          fluid
          :src="require('@/assets/images/pages/error-dark.svg')"
          alt="Error page"
        />
      </div>
    </div>
  </div>
  <!-- / Error page-->
</template>

<script>
export default {
  layout: 'blog',
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  mounted() {
    console.warn('error', this.error)
  }
}
</script>

<style lang="scss" scoped>
@import 'assets/scss/vue/pages/page-misc.scss';

.brand-logo {
  width: 50px;
  img {
    width: 100%;
  }
}
</style>
