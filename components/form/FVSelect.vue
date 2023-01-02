<template>
  <b-col :lg="lg" :md="md" :sm="sm">
    <b-form-group :label="label">
      <b-input-group class="input-group-merge">
        <v-select
          v-model="fieldValue"
          class="h-35 w-87"
          :reduce="item => (notId ? item : item.id)"
          :label="labelSelect"
          :dir="isRTL && 'rtl'"
          :multiple="multiple"
          :clearable="clearable"
          :options="listKey ? getAutoList : allData"
          :disabled="disabled"
          :placeholder="label"
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
      default: null
    },
    allData: {
      type: Array,
      default: null
    },
    module: {
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
      get: function () {
        return this.$store.getters[`${this.module}/${this.storeKey}`]
      },
      set(val) {
        this.$store.commit(`${this.module}/${this.storeKey}`, {
          key: this.storeKey,
          value: val
        })
      }
    },
    getAutoList() {
      if (this.global) {
        return this.$store.getters[`global/${this.listKey}`]
      } else {
        return this.$store.getters[`${this.module}/${this.listKey}`]
      }
    }
  },
  methods: {
    changeData(data) {
      this.change &&
        this.$store.dispatch(`${this.module}/${this.storeKey}Change`, data)
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
