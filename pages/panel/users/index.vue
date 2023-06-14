<template>
  <UtilsTheContentWrapper :list="list">
    <template #content>
      <UtilsTheTable
        :title="$t('users')"
        :filter="true"
        filter-list="activeList"
        filter-key="filters"
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
    const data = await $axios.$get('/users', {
      params: { role: 'user' }
    })
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
          key: 'name',
          label: this.$t('name')
        },
        {
          key: 'email',
          label: this.$t('email')
        },
        {
          key: 'phone',
          label: this.$t('phone')
        },
        {
          key: 'active',
          label: this.$t('state')
          // formatter: (value, key, item) => {
          //   const str = value ? this.$t('active') : this.$t('notActive')
          //   return str
          // }
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
