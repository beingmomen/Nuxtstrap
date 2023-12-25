<template>
  <b-col
    :lg="lg"
    :md="md"
    :sm="sm"
    class="date-picker-form"
  >
    <b-form-group :label="label">
      <b-input-group class="">
        <b-input-group-prepend is-text>
          <UtilsTheFIcon
            :icon="icon"
            :icon-type="iconType"
          />
        </b-input-group-prepend>
        <DatePicker
          v-model="fieldValue"
          class="datepicker-input"
          placeholder="YYYY-MM-DD"
          :disabled="disabled"
          type="date"
          clear-button
          :format="format"
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
    moduleName: {
      type: String,
      default: null
    },
    iconType: {
      type: String,
      default: 'feather'
    },
    icon: {
      type: String,
      default: 'user'
    },
    storeKey: {
      type: String,
      default: null
    },
    required: {
      type: Boolean,
      default: false
    },
    phoneCode: {
      type: Boolean,
      default: false
    },
    type: {
      type: String,
      default: 'text'
    },
    rules: {
      type: String,
      default: null
    },
    disabled: {
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
    return {
      format: 'yyyy-MM-dd'
    }
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
          value: val
        })
      }
    }
  }
}
</script>

<style lang="scss">
.date-picker-form {
  .form-control {
    flex-direction: row-reverse;
    text-align: right;
  }
  .vdp-datepicker {
    position: relative;
    &__clear-button {
      position: absolute;
      left: 10px;
      font-size: 25px;
    }
  }
}
</style>
