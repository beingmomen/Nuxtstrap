<template>
  <li class="nav-item d-none d-lg-block">
    <nuxt-link to="" class="nav-link">
      <UtilsTheFIcon
        v-if="isDark"
        icon="sun"
        @click.native="toggleMode(false)"
      />
      <UtilsTheFIcon v-else icon="moon" @click.native="toggleMode(true)" />
    </nuxt-link>
  </li>
</template>

<script>
export default {
  methods: {
    toggleMode (mode) {
      this.$store.dispatch('toggleIsDark', mode)
      this.$cookies.set('dashboard-mode', mode)
      if (mode) {
        document.body.classList.remove('light-layout')
        document.body.classList.add('dark-layout')
      } else {
        document.body.classList.remove('dark-layout')
        document.body.classList.add('light-layout')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
