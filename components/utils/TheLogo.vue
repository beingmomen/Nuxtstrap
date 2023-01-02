<template>
  <li class="nav-item mr-auto w-100">
    <b-link class="navbar-brand w-100" to="/">
      <span class="brand-logo">
        <b-img
          :style="{ 'max-width': maxWidth + 'px' }"
          :src="require('@/assets/images/logos/tech.png')"
          alt="logo"
        />
      </span>
      <h2 class="brand-text">
        MaronX
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
  }
}
</script>

<style lang="scss" scoped>
</style>
