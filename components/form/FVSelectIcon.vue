<template>
  <b-col :lg="lg" :md="md" :sm="sm">
    <b-form-group :label="label">
      <b-input-group class="d-flex flex-nowrap">
        <b-input-group-prepend is-text>
          <UtilsTheFIcon :icon="icon" />
        </b-input-group-prepend>
        <v-select
          v-model="fieldValue"
          class="w-100"
          :reduce="item => (notId ? item : item.id)"
          :label="labelSelect"
          :dir="isRTL ? 'rtl' : 'ltr'"
          :multiple="multiple"
          :clearable="clearable"
          :options="listKey ? getAutoList : allData"
          :disabled="disabled"
          :placeholder="label"
          @input="changeData($event)"
        >
          <template v-if="imgAvatar || colorAvatar" #option="{ color, image }">
            <span v-if="color">
              <b-avatar
                size="20"
                :style="{
                  backgroundColor: color,
                  color: color
                }"
              />
              <span class="ml-2">{{ color }}</span>
            </span>
            <b-avatar
              v-if="image"
              size="60"
              :src="`${$config.NODE_URL_images}/${storeKey}/${image}`"
            />
          </template>
        </v-select>
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
    moduleName: {
      type: String,
      default: null
    },
    icon: {
      type: String,
      default: null
    },
    listKey: {
      type: String,
      default: null
    },
    imgAvatar: {
      type: Boolean,
      default: false
    },
    colorAvatar: {
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
        const fields = this.$store.getters[`${this.moduleName}/fields`]
        return fields[this.storeKey]
      },
      set(val) {
        this.$store.commit(`${this.moduleName}/setFieldValue`, {
          key: this.storeKey,
          value: val
        })
      }
    },
    getAutoList() {
      if (this.global) {
        const data = this.$store.getters['global/lists']
        return data[this.listKey]
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
