<template>
  <b-card
    class="text-capitalize card-style"
    :title="$t('cards.update') + ' ' + title"
  >
    <b-form class="vh-50" @submit.prevent="updateDataInDB">
      <b-row>
        <slot name="inputs" />
        <!-- reset and submit -->
        <b-col cols="12" class="text-right mt-5">
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
            {{ $t('buttons.update') }}
          </b-button>
          <b-button
            v-else
            type="submit"
            variant="primary"
            class="mr-1 fs-5"
            disabled
          >
            {{ $t('buttons.update') }}
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
    },
    path: {
      type: String,
      default: null
    },
    id: {
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
    async updateDataInDB() {
      this.loading = await false

      try {
        await this.$store.dispatch(`${this.moduleName}/updateDataInDB`, this.id)
        await this.$toast.success(this.$t('msg.edit'))
        await this.$store.dispatch(`${this.moduleName}/resetData`)
        await this.$router.push(this.localePath('/' + this.path))
      } catch (error) {
      } finally {
        this.loading = await true
      }
    }
  }
}
</script>
