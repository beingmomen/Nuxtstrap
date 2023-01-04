<template>
  <b-card :title="$t('create') + ' ' + title">
    <b-form class="vh-50" @submit.prevent="addDataToDB">
      <b-row>
        <slot name="inputs" />
        <!-- reset and submit -->
        <b-col cols="12" class="text-right mt-3">
          <b-button
            type="reset"
            variant="outline-secondary"
            class="fs-5"
            @click="loading = true"
          >
            {{ $t('buttons.reset') }}
          </b-button>
          <b-button
            v-if="loading"
            type="submit"
            variant="primary"
            class="mr-1 fs-5"
          >
            {{ $t('buttons.create') }}
          </b-button>
          <b-button
            v-else
            type="submit"
            variant="primary"
            disabled
            class="mr-1 fs-5"
          >
            {{ $t('buttons.create') }}
            <b-spinner class="ml-2" small />
          </b-button>
        </b-col>
      </b-row>
    </b-form>
  </b-card>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: null
    },
    moduleName: {
      type: String,
      default: null
    }
  },
  data() {
    return {
      loading: true
    }
  },
  methods: {
    async addDataToDB() {
      this.loading = await false
      try {
        await this.$store.dispatch(`${this.moduleName}/addDataToDB`)
        await this.$toast.success(this.$t('msg.add'))
        // await this.$router.push(
        //   this.$route.path.replace(this.localePath('/create'), '')
        // )
        await this.$store.dispatch(`${this.moduleName}/resetData`)
      } catch (error) {
      } finally {
        this.loading = await true
      }
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
