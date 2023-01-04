<template>
  <UtilsTheContentWrapper :list="list">
    <template #content>
      <UtilsTheTable
        :title="$t('sidebar.admins')"
        :filter="true"
        :headers="headers"
        module-name="panel/admins"
        path="/panel/admins"
        lottie="https://assets9.lottiefiles.com/packages/lf20_q0vtqaxf.json"
      />
    </template>
  </UtilsTheContentWrapper>
</template>

<script>
import { getAuth } from 'firebase/auth'
export default {
  name: 'Admins',
  layout: 'panel',
  async asyncData({ $axios, store }) {
    // const data = await $axios.$get('/users', {
    //   params: { role: 'admin' }
    // })
    // store.dispatch('panel/admins/getAllDataFromApi', data)
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
          key: 'actions',
          label: this.$t('actions')
        }
      ]
    }
  },
  mounted() {
    getAuth()
      .getUser('IbAeLZTo3VO46YQwEwAVgLwDYKH2')
      .then((userRecord, i) => {
        // See the UserRecord reference doc for the contents of userRecord.
        console.warn(`Successfully fetched user data: ${userRecord}`)
      })
  }
}
</script>

<style lang="scss" scoped>
</style>
