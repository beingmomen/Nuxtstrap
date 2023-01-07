<template>
  <b-col :lg="lg" :md="md" :sm="sm" class="mt-2">
    <b-form-group :label="label">
      <b-input-group class="position-relative">
        <b-input-group-prepend is-text>
          <UtilsTheFIcon :icon="icon" />
        </b-input-group-prepend>
        <b-form-file
          v-model="fieldValue"
          drop-placeholder="Drop file here..."
          :placeholder="$t('inputs.filePlaceholder')"
          :disabled="disabled"
          :multiple="multiple"
          :accept="type"
          @change="handleImgSrc"
        />
        <div class="preview-img">
          <b-avatar
            v-if="previewUrl"
            class="pull-up cursor-pointer ml-2"
            :src="previewUrl"
          />
          <b-avatar
            v-else
            class="pull-up cursor-pointer ml-2"
            :src="previewImg"
          />
        </div>
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
      default: 'user'
    },
    storeKey: {
      type: String,
      default: null
    },
    type: {
      type: String,
      default: 'image/*'
    },
    required: {
      type: Boolean,
      default: false
    },
    multiple: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    preview: {
      type: String,
      default: null
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
      previewUrl: null
    }
  },
  computed: {
    fieldValue: {
      get() {
        const fields = this.$store.getters[`${this.moduleName}/fields`]
        return Array.isArray(fields[this.storeKey])
          ? fields[this.storeKey]
          : null
      },
      set(val) {
        this.$store.commit(`${this.moduleName}/setFieldValue`, {
          key: this.storeKey,
          value: val
        })
      }
    },
    previewImg() {
      const fields = this.$store.getters[`${this.moduleName}/fields`]
      return fields[this.storeKey]
    }
  },
  methods: {
    handleImgSrc(event) {
      try {
        const file = event.target.files[0]
        if (!file || !file.type.match('image.*')) {
          return
        }
        const reader = new FileReader()
        // eslint-disable-next-line arrow-parens
        reader.onload = e => {
          this.previewUrl = e.target.result
        }
        reader.readAsDataURL(file)
      } catch (error) {
        this.previewUrl = null
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.preview-img {
  position: absolute;
  top: -38px;
  &:dir(ltr) {
    right: 0;
  }
  &:dir(rtl) {
    left: 0;
  }
}
</style>
