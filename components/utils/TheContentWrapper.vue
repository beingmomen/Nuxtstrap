<template>
  <div class="content-wrapper">
    <ExtendedBCBreadcrumb :title="title" :list="list" />
    <div class="content-body">
      <b-row>
        <b-col cols="12">
          <slot name="content" />
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: null
    },
    list: {
      type: Array,
      default: null
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
