<template>
  <Nuxt />
</template>

<script>
export default {
  middleware: ['mode', 'lang', 'loggedOut']
}
</script>

<style lang="scss" scoped>
</style>
