<template>
  <b-col lg="3" md="5" sm="6" class="p-0 mb-2 mr-lg-auto">
    <b-form-group class="h-100 mb-0">
      <b-input-group>
        <v-select
          v-model="getContent"
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
      default: false
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
    getContent: {
      get: function () {
        return this.$store.getters[`${this.moduleName}/${this.storeKey}`]
      },
      set(val) {
        this.$store.commit(`${this.moduleName}/${this.storeKey}`, {
          key: this.storeKey,
          value: val
        })
      }
    },
    list() {
      return this.$store.getters[`${this.moduleName}/filters`]
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
