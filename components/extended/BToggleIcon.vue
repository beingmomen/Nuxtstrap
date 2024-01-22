<!-- eslint-disable vue/no-v-html -->
<template>
  <nuxt-link
    to=""
    class="nav-link modern-nav-toggle text-secondary"
    @click.native="toggleLayoutCollapsed"
  >
    <div
      style="height: 20px"
      class="cursor-pointer"
      v-html="$feathericons['align-justify'].toSvg()"
    />
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
    toggleLayoutCollapsed() {
      this.$store.dispatch('toggleLayoutCollapsed', this.width)
      this.$store.dispatch('logoWidth')
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
