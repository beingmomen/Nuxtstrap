<template>
  <v-select
    v-model="fieldValue"
    class="w-100"
    :reduce="item => (notId ? item : item)"
    :label="labelSelect"
    :dir="isRTL ? 'rtl' : 'ltr'"
    :multiple="multiple"
    :clearable="clearable"
    :options="listKey ? getAutoList : allData"
    :disabled="disabled"
    :placeholder="label"
    @input="changeData($event)"
  >
    <template #option="{ display }">
      <p>{{ display }}</p>
    </template>
  </v-select>
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
      default: null
    },
    allData: {
      type: Array,
      default: null
    },
    moduleName: {
      type: String,
      default: null
    },
    listKey: {
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
    global: {
      type: Boolean,
      default: false
    },
    change: {
      type: Boolean,
      default: false
    },
    clearable: {
      type: Boolean,
      default: false
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
    },
    lg: {
      type: String,
      default: '6'
    },
    md: {
      type: String,
      default: '6'
    },
    sm: {
      type: String,
      default: '12'
    }
  },
  data() {
    return {}
  },
  computed: {
    fieldValue: {
      get() {
        const fields = this.$store.getters[`${this.moduleName}/fields`]
        return fields[this.storeKey]
      },
      set(val) {
        this.$store.commit(`${this.moduleName}/setFieldValue`, {
          key: this.storeKey,
          value: val.phoneCode
        })
      }
    },
    getAutoList() {
      if (this.global) {
        const { countries } = this.$store.getters['global/lists']
        return countries
      } else {
        return this.$store.getters[`${this.moduleName}/${this.listKey}`]
      }
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

<style lang="scss" scoped>
</style>
