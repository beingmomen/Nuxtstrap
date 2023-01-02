<template>
  <b-col :lg="lg" :md="md" :sm="sm">
    <b-form-group :label="label">
      <b-input-group class="append-icon-input">
        <b-input-group-prepend is-text>
          <UtilsTheFIcon :icon="icon" />
        </b-input-group-prepend>
        <b-form-input
          :id="'basic-password' + '-' + label"
          v-model="fieldValue"
          :type="passwordFieldType"
          placeholder="* * * * * * * * * * * * * "
        />
        <b-input-group-append class="cursor-pointer" is-text>
          <UtilsTheFIcon
            :icon="passwordToggleIcon"
            @click.native="togglePasswordVisibility"
          />
        </b-input-group-append>
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
    icon: {
      type: String,
      default: 'lock'
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
      passwordFieldType: 'password',
      passwordToggleIcon: 'eye'
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
  },
  methods: {
    togglePasswordVisibility() {
      this.passwordFieldType =
        this.passwordFieldType === 'text' ? 'password' : 'text'
      this.passwordToggleIcon =
        this.passwordToggleIcon === 'eye' ? 'eye-off' : 'eye'
    }
  }
}
</script>

<style lang="css" scoped>
</style>
