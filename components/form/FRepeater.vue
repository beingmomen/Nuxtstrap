
<template>
  <b-col
    :lg="lg"
    :md="md"
    :sm="sm"
    class="mt-2 border border-2 py-1 px-2 mb-3 position-relative"
  >
    <h2>{{ title }}</h2>
    <div class="my-3">
      <UtilsTheFIcon
        icon="plus-square"
        class="text-primary plus"
        @click.native="$emit('repeat')"
      />

      <b-form ref="form">
        <!-- Row Loop -->
        <slot />
      </b-form>
    </div>
  </b-col>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      default: null
    },
    lg: {
      type: String,
      default: '12'
    },
    md: {
      type: String,
      default: '12'
    },
    sm: {
      type: String,
      default: '12'
    }
  }
}
</script>

<style lang="scss">
.plus {
  position: absolute;
  bottom: 10px;
  height: 30px !important;
  width: 30px;
  .feather {
    width: 100% !important;
    height: 100% !important;
  }
  &:dir(ltr) {
    right: 10px;
  }
  &:dir(rtl) {
    left: 10px;
  }
}
</style>
