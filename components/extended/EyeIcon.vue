<!-- eslint-disable vue/no-v-html -->
<template>
  <div>
    <div
      v-if="visibility == 'password'"
      v-html="$feathericons['eye'].toSvg()"
    />
    <div
      v-else
      v-html="$feathericons['eye-off'].toSvg()"
    />
  </div>
</template>

<script>
export default {
  props: {
    visibility: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
