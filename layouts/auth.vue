<template>
  <Nuxt />
</template>

<script>
export default {
  middleware: ['mode', 'lang', 'loggedOut'],
  beforeCreate() {
    console.warn('test', this.$auth)
  }
}
</script>

<style lang="scss" scoped>
</style>
