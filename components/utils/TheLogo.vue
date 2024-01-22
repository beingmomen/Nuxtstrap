<template>
  <li class="nav-item mr-auto w-100">
    <b-link
      class="navbar-brand w-100"
      to=""
    >
      <span class="brand-logo">
        <b-img
          :style="{ 'max-width': maxWidth + 'px' }"
          :src="logo"
          alt="logo"
        />
      </span>
      <h2 class="brand-text">
        {{ appTitle }}
      </h2>
    </b-link>
  </li>
</template>

<script>
export default {
  props: {
    maxWidth: {
      type: [Number, String],
      default: 36
    }
  },
  computed: {
    appTitle() {
      return process.env.APP_TITLE
    },
    logo() {
      return `/${process.env.LOGO}`
    }
  }
}
</script>

<style lang="scss" scoped>
.navbar-brand {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
