<template>
  <b-card>
    <!-- form -->
    <b-form>
      <b-row>
        <FormFPasswordIcon
          :label="$t('old_password')"
          store-key="passwordCurrent"
          :module-name="moduleName"
          lg="12"
          md="12"
        />

        <FormFPasswordIcon
          :label="$t('password')"
          store-key="password"
          :module-name="moduleName"
          md="12"
        />

        <FormFPasswordIcon
          :label="$t('confirm_password')"
          store-key="passwordConfirm"
          :module-name="moduleName"
          md="12"
        />

        <!-- buttons -->
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
        <!--/ buttons -->
      </b-row>
    </b-form>
  </b-card>
</template>

<script>
export default {
  data() {
    return {
      moduleName: 'panel/profile/updatePassword'
    }
  },
  methods: {
    async saveChanges() {
      await this.$store.dispatch(`${this.moduleName}/updateDataInDB`)
      // await this.$toast.success(this.$t('msg.edit'))
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
