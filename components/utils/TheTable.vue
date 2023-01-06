<template>
  <b-card no-body>
    <div v-if="table.totalItems">
      <b-card class="mb-0" :title="title">
        <div class="d-flex flex-wrap justify-content-between">
          <!-- Filter  -->
          <HelpersTableTFilter v-if="filter" :module-name="moduleName" />

          <!-- Search -->
          <HelpersTableTSearch v-if="search" :module-name="moduleName" />

          <!-- Create Button -->
          <HelpersTableTButton v-if="create" :title="title" :path="path" />
        </div>
      </b-card>

      <b-table
        striped
        hover
        responsive
        class="position-relative"
        per-page="10"
        :foot-clone="false"
        :current-page="currentPage"
        :fields="headers"
        :items="table.allData"
      >
        <template #cell(avatar)="data">
          <b-avatar class="pull-up" :src="data.value" />
        </template>
        <template #cell(arabicName)="data">
          <b-link to="">
            {{ data.value }}
          </b-link>
        </template>
        <template #cell(englishName)="data">
          <b-link to="">
            {{ data.value }}
          </b-link>
        </template>
        <template #cell(category)="data">
          <b-link to="">
            {{ data.value }}
          </b-link>
        </template>

        <template #cell(actions)="data">
          {{ data.value }}
          <span class="d-flex">
            <nuxt-link
              v-if="show"
              :to="localePath(`${path}/${data.item.slug}-${data.item._id}`)"
            >
              <UtilsTheFIcon icon="eye" />
            </nuxt-link>
            <nuxt-link
              v-if="update"
              :to="localePath(`${path}/${data.item.slug}-${data.item._id}`)"
            >
              <UtilsTheFIcon icon="edit" />
            </nuxt-link>
            <UtilsTheFIcon
              class="text-danger ml-1"
              icon="trash"
              @click.native="showMsgBoxTwo(data)"
            />
          </span>
        </template>

        <!-- Default fall-back custom formatted footer cell -->
        <template #foot()="data">
          <i>{{ data }}</i>
        </template>
      </b-table>

      <HelpersTLottie
        v-if="!table.allData.length"
        :title="title"
        :path="path"
        height="60"
        lottie="https://assets1.lottiefiles.com/packages/lf20_tmsiddoc.json"
      />

      <!-- pagination -->
      <HelpersTableTPagination v-if="pagination" :module-name="moduleName">
        <template #content>
          <b-pagination
            v-model="currentPage"
            per-page="10"
            size="sm"
            :total-rows="table.totalItems"
          />
        </template>
      </HelpersTableTPagination>
    </div>
    <!-- Lottie Player -->
    <HelpersTLottie
      v-else
      :title="title"
      :path="path"
      :lottie="lottie"
      :create="true"
    />
  </b-card>
</template>

<script>
import {
  collection,
  // onSnapshot,
  // addDoc,
  getDocs,
  getFirestore,
  query,
  limit,
  // startAfter,
  orderBy
  // skip
  // serverTimestamp
  // startAt,
  // offset
} from 'firebase/firestore'
export default {
  props: {
    moduleName: {
      type: String,
      default: null
    },
    title: {
      type: String,
      default: null
    },
    path: {
      type: String,
      default: null
    },
    headers: {
      type: Array,
      default: null
    },
    lottie: {
      type: String,
      default: null
    },
    create: {
      type: Boolean,
      default: true
    },
    update: {
      type: Boolean,
      default: false
    },
    show: {
      type: Boolean,
      default: true
    },
    search: {
      type: Boolean,
      default: true
    },
    filter: {
      type: Boolean,
      default: true
    },
    pagination: {
      type: Boolean,
      default: true
    },
    delKey: {
      type: String,
      default: 'name'
    }
  },
  data() {
    return {
      currentPage: 1
    }
  },

  computed: {
    table() {
      return this.$store.getters[`${this.moduleName}/table`]
    }
  },
  watch: {
    async currentPage(newValue) {
      const db = await getFirestore()
      const q = await query(
        collection(db, 'categories'),
        orderBy('createdAt'),
        limit(10)
      )
      const { docs } = await getDocs(q)
      const data = await docs.map(doc => ({
        ...doc.data(),
        id: doc.id
      }))
      await this.$store.commit('setTableValue', { key: 'allData', value: data })
      console.warn('newValue', newValue)
      await this.$store.commit(`${this.moduleName}/setTableValue`, {
        key: 'page',
        value: newValue
      })
      await this.$store.dispatch(`${this.moduleName}/getDataByQuery`, newValue)
    }
  },
  methods: {
    showMsgBoxTwo(data) {
      this.$bvModal
        .msgBoxConfirm(
          `${this.$t('modals.delete_msg')}( ${data.item[this.delKey]} )`,
          {
            title: this.$t('modals.delete_confirm'),
            size: 'sm',
            okVariant: 'primary',
            okTitle: this.$t('buttons.yes'),
            cancelTitle: this.$t('buttons.no'),
            cancelVariant: 'outline-secondary',
            hideHeaderClose: false,
            centered: false
          }
        )
        .then((value, i) => value && this.delete(data.item.id))
    },
    delete(id) {
      this.$store.dispatch(`${this.moduleName}/deleteFromDB`, id).then(() => {
        this.$nuxt.refresh()
        this.$toast.success(this.$t('msg.delete'))
      })
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
