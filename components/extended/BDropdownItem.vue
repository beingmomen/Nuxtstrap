<template>
  <b-dropdown-item
    :to="localePath(route)"
    link-class="d-flex align-items-center"
  >
    <UtilsTheFIcon :icon="icon" />
    <span class="fs-5 ml-1">{{ title }}</span>
  </b-dropdown-item>
</template>

<script>
export default {
  props: {
    route: {
      type: String,
      default: null
    },
    icon: {
      type: String,
      default: null
    },
    title: {
      type: String,
      default: null
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
