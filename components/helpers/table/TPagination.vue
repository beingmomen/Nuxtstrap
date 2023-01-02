<template>
  <b-card-body class="d-flex justify-content-end flex-wrap pt-0">
    <div>
      <b-pagination
        v-model="currentPage"
        :total-rows="totalItems"
        :per-page="perPage"
        align="center"
        size="sm"
        class="my-0"
      />
    </div>
  </b-card-body>
</template>

<script>
export default {
  props: {
    moduleName: String,
    default: null
  },
  data() {
    return {
      perPage: 10,
      currentPage: 1
    }
  },
  computed: {
    totalItems() {
      return this.$store.getters[`${this.moduleName}/totalItems`]
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
