<template>
  <UtilsTheContentWrapper :list="list">
    <template #content>
      <UtilsTheTable
        :title="$t('sidebar.admins')"
        :filter="false"
        :headers="headers"
        module-name="panel/admins"
        path="/panel/admins"
        lottie="https://assets9.lottiefiles.com/packages/lf20_q0vtqaxf.json"
      />
    </template>
  </UtilsTheContentWrapper>
</template>

<script>
export default {
  name: 'Admins',
  layout: 'panel',
  async asyncData({ $axios, store }) {
    const data = await $axios.$get('/users', {
      params: { role: 'admin' }
    })
    store.dispatch('panel/admins/getAllDataFromApi', data)
  },
  data() {
    return {
      list: [
        {
          text: this.$t('admins'),
          active: true,
          to: '/panel/admins'
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
