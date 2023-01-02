<template>
  <li class="navigation-header text-truncate">
    <span class="fs-6">{{ title }}</span>
    <div v-html="$feathericons[icon].toSvg()" />
    <!-- <TheFIcon :icon="icon" /> -->
  </li>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: null
    },
    icon: {
      type: String,
      default: 'more-horizontal'
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
