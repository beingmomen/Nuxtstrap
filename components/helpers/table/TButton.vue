<template>
  <b-col
    lg="2"
    md="4"
    sm="6"
    class="
      px-0
      d-flex
      flex-row-reverse
      align-items-start
      order-sm-2 order-md-2 order-lg-3
    "
  >
    <b-button :to="localePath(`${path}/create`)" class="ms-4" variant="primary">
      <span class="text-nowrap text-capitalize fs-5">
        {{ $t('buttons.add') }} {{ title }}
      </span>
    </b-button>
  </b-col>
</template>

<script>
export default {
  props: {
    path: {
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
