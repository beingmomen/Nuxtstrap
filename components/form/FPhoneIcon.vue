<template>
  <b-col :lg="lg" :md="md" :sm="sm">
    <b-form-group :label="label">
      <!-- class="append-icon-input"  TODO: Add class to the input group for handle border radius -->
      <b-input-group>
        <b-input-group>
          <b-input-group-prepend is-text>
            <UtilsTheFIcon :icon="icon" />
          </b-input-group-prepend>
          <!-- <cleave
            id="phone"
            v-model="fieldValue"
            class="form-control"
            model-value="modelValue"
            placeholder="1234 567 8900"
            :raw="false"
            :options="options.phone"
            :disabled="disabled"
          /> -->
          <b-form-input
            id="phone"
            v-model="fieldValue"
            class="text-start"
            placeholder="1234 567 8900"
            :disabled="disabled"
            :type="type"
          />
          <!-- <b-input-group-append class="phone-select" is-text>
            <FormFVSelectPhone
              :module-name="moduleName"
              label-select="display"
              store-key="phoneCode"
              list-key="countries"
              global
            />
          </b-input-group-append> -->
        </b-input-group>
      </b-input-group>
    </b-form-group>
  </b-col>
</template>

<script>
// import Cleave from 'vue-cleave-component'
// import 'cleave.js/dist/addons/cleave-phone.us'

export default {
  components: {
    // Cleave
  },
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
    type: {
      type: String,
      default: 'tel'
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
      options: {
        phone: {
          phone: true,
          phoneRegionCode: 'EG'
        }
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
.phone-select {
  width: 100px;
  .input-group-text {
    width: 100%;
    padding: 0;
    .v-select {
      .vs__dropdown-toggle {
        border: none;
      }
    }
  }
}
</style>
