<template>
  <UtilsTheContentWrapper :list="list">
    <template #content>
      <ContainersDoUpdate
        :id="id"
        :title="$t('category')"
        :module-name="moduleName"
        :path="moduleName"
      >
        <template #inputs>
          <FormFInputIcon
            :label="$t('ar_name')"
            :module-name="moduleName"
            icon="user"
            store-key="arabicName"
          />
          <FormFInputIcon
            :label="$t('en_name')"
            :module-name="moduleName"
            icon="user"
            store-key="englishName"
          />

          <FormFVSelectIcon
            :label="$t('categories')"
            :label-select="isRTL ? 'arabicName' : 'englishName'"
            :module-name="moduleName"
            icon="list"
            global
            list-key="categories"
            store-key="category"
          />

          <FormFInputIcon
            :label="$t('discount')"
            :module-name="moduleName"
            icon="user"
            store-key="discount"
          />

          <FormFFile
            :label="$t('image')"
            :module-name="moduleName"
            preview="products"
            store-key="imageCover"
          />

          <FormFFileMultiple
            :label="$t('images')"
            :module-name="moduleName"
            preview="products"
            store-key="images"
          />

          <FormFVSelectIcon
            :label="$t('colors')"
            :module-name="moduleName"
            :multiple="true"
            :color-avatar="true"
            label-select="color"
            icon="list"
            global
            list-key="colors"
            store-key="colors"
          />

          <FormFVSelectIcon
            :label="$t('woodColors')"
            :module-name="moduleName"
            :img-avatar="true"
            label-select="image"
            icon="list"
            global
            list-key="woodColors"
            store-key="woodColors"
          />

          <FormFInputIcon
            :label="$t('shippingDays')"
            :module-name="moduleName"
            icon="user"
            store-key="shippingDate"
          />

          <FormFInputIcon
            :label="$t('store')"
            :module-name="moduleName"
            icon="user"
            store-key="store"
          />
          <FormFInputIcon
            :label="$t('englishDescription')"
            :module-name="moduleName"
            icon="user"
            store-key="englishDescription"
          />

          <FormFInputIcon
            :label="$t('arabicDescription')"
            :module-name="moduleName"
            icon="user"
            store-key="arabicDescription"
          />

          <FormFRepeater :title="$t('dimensions')" @repeat="repeat">
            <AssetsCategoriesRepeaterForm
              :fields="fields"
              @removeItem="removeItem"
            />
          </FormFRepeater>
        </template>
      </ContainersDoUpdate>
    </template>
  </UtilsTheContentWrapper>
</template>

<script>
export default {
  name: 'Update',
  beforeRouteLeave(to, from, next) {
    setTimeout(() => {
      this.$store.dispatch('panel/products/resetData')
    }, 1500)
    next()
  },
  layout: 'panel',
  async asyncData({ $axios, store, params }) {
    await store.dispatch('panel/products/resetData')
    const id = params.slug.split('-').at(-1)
    const { data } = await $axios.$get(`/products/${id}`)
    await store.dispatch('panel/products/showSingleData', data.data)
    return {
      id
    }
  },
  data() {
    return {
      moduleName: 'panel/products',
      list: [
        {
          text: this.$t('products'),
          active: false,
          to: '/panel/products'
        },
        {
          text: this.$t('update'),
          active: true,
          to: '/panel/products/update'
        }
      ],
      fields: [
        {
          arabicDimension: null,
          englishDimension: null,
          price: null,
          main: true
        }
      ]
    }
  },

  computed: {
    dimensions() {
      const { dimensions } = this.$store.getters[`${this.moduleName}/fields`]
      return dimensions
    }
  },
  mounted() {
    this.fields = this.dimensions
  },
  methods: {
    repeat() {
      this.fields = [
        ...this.fields,
        {
          arabicDimension: null,
          englishDimension: null,
          price: null,
          main: false
        }
      ]
    },
    removeItem(index) {
      if (this.fields.length > 1) {
        this.fields.splice(index, 1)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
