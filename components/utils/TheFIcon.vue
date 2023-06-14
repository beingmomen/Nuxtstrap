<!-- eslint-disable vue/no-v-html -->
<template>
  <div
    v-if="iconType === 'feather'"
    :style="{ height: height + 'px' }"
    class="cursor-pointer"
    v-html="$feathericons[icon].toSvg()"
  />

  <div
    v-else
    :style="{ height: height + 'px' }"
  >
    <fa
      :icon="['fas', icon]"
      class="fa-4x awesome"
      style="width: 20px; height: 20px"
    />
  </div>
</template>

<script>
export default {
  props: {
    iconType: {
      type: String,
      default: 'feather'
    },
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
