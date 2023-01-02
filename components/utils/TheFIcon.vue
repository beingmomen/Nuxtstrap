<!-- eslint-disable vue/no-v-html -->
<template>
  <div
    :style="{ height: height + 'px' }"
    class="cursor-pointer"
    v-html="$feathericons[icon].toSvg()"
  />
</template>

<script>
export default {
  props: {
    icon: {
      type: String,
      default: 'user'
    },
    height: {
      type: String,
      default: '20'
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
