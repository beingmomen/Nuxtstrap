<template>
  <nuxt-link
    to=""
    class="nav-link modern-nav-toggle text-secondary"
    @click.native="toggleLayoutCollapsed"
  >
    <UtilsTheFIcon icon="align-justify" />
  </nuxt-link>
</template>

<script>
export default {
  props: {
    width: {
      type: Number,
      default: null
    }
  },
  methods: {
    toggleLayoutCollapsed () {
      this.$store.dispatch('toggleLayoutCollapsed', this.width)
      this.$store.dispatch('logoWidth')
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
