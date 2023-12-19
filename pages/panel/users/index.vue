<template>
  <UtilsTheContentWrapper :list="list">
    <template #content>
      <UtilsTheTable
        :title="$t('users')"
        :filter="false"
        :headers="headers"
        :create="false"
        :show="false"
        module-name="panel/users"
        path="/panel/users"
        lottie="https://assets9.lottiefiles.com/packages/lf20_q0vtqaxf.json"
      />
    </template>
  </UtilsTheContentWrapper>
</template>

<script>
export default {
  name: 'Users',
  layout: 'panel',
  async asyncData({ $axios, store }) {
    const data = await $axios.$get('/users')
    store.dispatch('panel/users/getAllDataFromApi', data)
  },
  data() {
    return {
      list: [
        {
          text: this.$t('users'),
          active: true,
          to: '/panel/users'
        }
      ],
      headers: [
        {
          key: 'avatar',
          label: this.$t('image'),
          formatter: (value, key, item) => {
            return item.photo
          }
        },
        {
          key: 'name',
          label: this.$t('name')
        },
        {
          key: 'email',
          label: this.$t('email')
        },
        {
          key: 'role',
          label: this.$t('role')
        },
        {
          key: 'phone',
          label: this.$t('phone')
        },

        {
          key: 'actions',
          label: this.$t('actions')
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
