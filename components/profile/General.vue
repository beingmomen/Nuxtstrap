<template>
  <b-card>
    <!-- media -->
    <b-media no-body>
      <b-avatar
        v-if="avatar"
        class="border border-1 rounded"
        size="70px"
        :src="avatar"

      />
      <b-avatar
        v-else
        class="border border-1 rounded"
        size="70px"
        :src="fieldValue"

      />

      <b-media-body class="mt-2 ml-75">
        <!-- upload button -->
        <b-button
          variant="primary"
          size="sm"
          class="mr-75"
          @click="$refs.fileInput.$el.click()"
        >
          {{ $t('upload') }}
        </b-button>
        <b-form-file
          ref="fileInput"
          accept="image/*"
          :hidden="true"
          plain
          @input="inputImageRenderer"
        />
        <!--/ upload button -->
      </b-media-body>
    </b-media>
    <!--/ media -->

    <!-- form -->
    <b-form class="mt-2">
      <b-row>
        <FormFInputIcon
          :label="$t('name')"
          :module-name="moduleName"
          icon="user"
          store-key="name"
        />
        <FormFInputIcon
          :label="$t('email')"
          :module-name="moduleName"
          icon="mail"
          store-key="email"
        />
        <FormFVSelectIcon
          :label="$t('country')"
          icon="globe"
          label-select="display"
          store-key="country"
          reduce="display"
          list-key="countries"
          :module-name="moduleName"
          global
        />

        <FormFPhoneIcon
          :label="$t('phone')"
          store-key="phone"
          type="tel"
          icon="phone"
          :module-name="moduleName"
        />

        <b-col
          cols="12"
          class="text-right"
        >
          <b-button
            variant="primary"
            class="mt-2 mr-1"
            @click="saveChanges"
          >
            {{ $t('save_changes') }}
          </b-button>
        </b-col>
      </b-row>
    </b-form>
  </b-card>
</template>

<script>
export default {
  name: 'GeneralProfile',
  data() {
    return {
      moduleName: 'panel/profile',
      avatar: null
    }
  },
  computed: {
    fieldValue: {
      get() {
        const fields = this.$store.getters[`${this.moduleName}/fields`]
        return `${process.env.IMG_PATH}/users/${fields.photo}`
      },
      set(val) {
        this.$store.commit(`${this.moduleName}/setFieldValue`, {
          key: 'photo',
          value: val
        })
      }
    }
  },
  methods: {
    resetForm() {},
    async inputImageRenderer() {
      const file = await this.$refs.fileInput.files[0]
      if (file) {
        this.fieldValue = file
        const reader = await new FileReader()
        reader.onload = async (e, i) => {
          this.avatar = await e.target.result
        }
        await reader.readAsDataURL(file)
      }
    },
    async saveChanges() {
      await this.$store.dispatch(`${this.moduleName}/updateDataInDB`)
      await this.$toast.success(this.$t('msg.edit'))
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
