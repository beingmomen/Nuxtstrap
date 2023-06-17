<template>
  <b-col
    :lg="lg"
    :md="md"
    :sm="sm"
    class="mt-2"
  >
    <b-form-group :label="label">
      <b-input-group class="position-relative">
        <b-input-group-prepend is-text>
          <UtilsTheFIcon :icon="icon" />
        </b-input-group-prepend>
        <b-form-file
          v-model="fieldValue"
          drop-placeholder="Drop image here..."
          value="value"
          :placeholder="$t('inputs.filePlaceholder')"
          :disabled="disabled"
          :multiple="multiple"
          :accept="type"
          @change="handleImgSrc"
        />

        <b-avatar-group
          v-if="uploadedFiles.length"
          size="32px"
          class="preview-img"
          :class="{ 'one-img': uploadedFiles.length === 1 }"
        >
          <b-avatar
            v-for="file in uploadedFiles"
            :key="file.name"
            class="pull-up"
            :src="file.src"
          />
        </b-avatar-group>
        <b-avatar-group
          v-else-if="previewImgs.length"
          size="32px"
          class="preview-img"
          :class="{ 'one-img': previewImgs.length === 1 }"
        >
          <b-avatar
            v-for="(file, i) in previewImgs"
            :key="file + i"
            class="pull-up"
            :src="file"
          />
        </b-avatar-group>
        <b-avatar-group
          v-else
          size="32px"
          class="preview-img"
        >
          <b-avatar
            v-for="file in 3"
            :key="file"
            class="pull-up"
            :src="file.toString()"
          />
        </b-avatar-group>
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
      default: true
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
      uploadedFiles: []
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
    previewImgs() {
      const fields = this.$store.getters[`${this.moduleName}/fields`]
      const arr = fields[this.storeKey] || []
      return arr
        .filter(Boolean)
        .map(img => `${process.env.IMG_PATH}/${this.preview}/${img}`)
    }
  },
  methods: {
    async handleImgSrc(event) {
      this.uploadedFiles = await []
      const files = await event.target.files

      // Process each file
      for (let i = 0; i < files.length; i++) {
        const file = files[i]
        if (!file || !file.type.match('image.*')) {
          continue
        }

        // Store the file in the uploadedFiles array
        this.uploadedFiles.push({
          name: file.name,
          src: URL.createObjectURL(file)
        })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.preview-img {
  position: absolute;
  top: -38px;
  &.one-img {
    .b-avatar {
      width: 3rem !important;
    }
  }
  &:dir(ltr) {
    right: 0;
  }
  &:dir(rtl) {
    left: 0;
  }
}
</style>
