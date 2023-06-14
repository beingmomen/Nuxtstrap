<template>
  <b-col
    lg="3"
    md="5"
    sm="6"
    class="p-0 mb-2 mr-lg-auto"
  >
    <b-form-group class="h-100 mb-0">
      <b-input-group>
        <v-select
          v-model="fieldValue"
          class="w-100 table-filter"
          :reduce="item => (notId ? item : item.id)"
          :label="labelSelect"
          :dir="isRTL ? 'rtl' : 'ltr'"
          :multiple="multiple"
          :clearable="clearable"
          :options="list"
          :disabled="disabled"
          :placeholder="$t('please_select')"
          @input="changeData($event)"
        />
      </b-input-group>
    </b-form-group>
  </b-col>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default: null
    },
    labelSelect: {
      type: String,
      default: 'name'
    },
    storeKey: {
      type: String,
      default: 'filter'
    },
    filterList: {
      type: String,
      default: null
    },
    moduleName: {
      type: String,
      default: null
    },
    icon: {
      type: String,
      default: null
    },
    img: {
      type: Boolean,
      default: false
    },
    image: {
      type: Boolean,
      default: false
    },
    multiple: {
      type: Boolean,
      default: false
    },
    change: {
      type: Boolean,
      default: true
    },
    clearable: {
      type: Boolean,
      default: true
    },
    required: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    notId: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {}
  },
  computed: {
    fieldValue: {
      get: function () {
        const fields = this.$store.getters[`${this.moduleName}/table`]
        return fields[this.storeKey]
      },
      set(val) {
        this.$store.commit(`${this.moduleName}/setTableValue`, {
          key: this.storeKey,
          value: val
        })
      }
    },
    list() {
      const data = this.$store.getters['global/lists']
      return data[this.filterList]
    }
  },
  methods: {
    changeData(data) {
      this.change &&
        this.$store.dispatch(`${this.moduleName}/${this.storeKey}Change`, data)
    }
  }
}
</script>

<style lang="scss">
@import 'assets/scss/vue/libs/vue-select.scss';
</style>
