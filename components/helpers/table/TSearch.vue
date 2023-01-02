<template>
  <b-col lg="3" md="5" sm="6" class="px-0 order-sm-3 order-md-3 mb-2">
    <b-form-group class="h-100 mb-0">
      <b-input-group size="md" class="table-search">
        <b-form-input
          id="filterInput"
          v-model="fieldValue"
          class="rounded-end"
          type="search"
          :placeholder="$t('inputs.searchPlaceholder')"
          @input="change"
        />
        <b-input-group-append>
          <b-button
            class="search-btn-table rounded-end"
            :disabled="!fieldValue"
            @click="searchData()"
          >
            {{ $t('buttons.search') }}
          </b-button>
        </b-input-group-append>
      </b-input-group>
    </b-form-group>
  </b-col>
</template>

<script>
export default {
  props: {
    moduleName: {
      type: String,
      default: null
    }
  },

  computed: {
    fieldValue: {
      get() {
        const { search } = this.$store.getters[`${this.moduleName}/table`]
        return search
      },
      set(val) {
        this.$store.commit(`${this.moduleName}/setTableValue`, {
          key: 'search',
          value: val
        })
      }
    }
  },

  methods: {
    searchData() {
      this.$store.dispatch(`${this.moduleName}/getDataByQuery`)
    },
    change() {
      this.fieldValue || this.searchData()
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
