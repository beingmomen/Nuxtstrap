<!-- eslint-disable vue/html-self-closing -->

<template>
  <b-col
    :lg="lg"
    :md="md"
    :sm="sm"
    class="date-picker-form"
  >
    <b-form-group :label="label">
      <b-input-group class="d-flex">
        <b-input-group-prepend is-text>
          <UtilsTheFIcon
            :icon="icon"
            :icon-type="iconType"
          />
        </b-input-group-prepend>
        <v-date-picker
          v-model="fieldValue"
          class="cursor-pointer"
          style="flex-grow: 1"
          :masks="masks"
          :popover="{ placement: 'auto', visibility: 'click' }"
          :min-date="minData"
          :max-date="maxData"
        >
          <template #default="{ inputValue, inputEvents }">
            <input
              class="VCalendar border px-2 rounded w-100 cursor-pointer"
              style="height: 40px"
              placeholder="YYYY-MM-DD"
              :value="inputValue"
              :disabled="disabled"
              v-on="inputEvents"
            />
          </template>
        </v-date-picker>
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
    minData: {
      type: [String, Date],
      default: null
    },
    maxData: {
      type: [String, Date],
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
      format: 'yyyy-MM-dd',
      masks: {
        input: 'YYYY-MM-DD'
      }
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
