<template>
  <b-col :lg="lg" :md="md" :sm="sm">
    <b-form-group :label="label">
      <b-form-input v-model="fieldValue" :disabled="disabled" :type="type" />
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
    module: {
      type: String,
      default: null
    },
    storeKey: {
      type: String,
      default: null
    },
    required: {
      type: Boolean,
      default: false
    },
    type: {
      type: String,
      default: 'text'
    },
    rule: {
      type: String,
      default: 'required'
    },
    disabled: {
      type: Boolean,
      default: false
    },
    lg: {
      type: String,
      default: '3'
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
  computed: {
    fieldValue: {
      get: function () {
        return this.$store.getters[`${this.module}/${this.storeKey}`]
      },
      set(val) {
        this.$store.commit(`${this.module}/${this.storeKey}`, val)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
