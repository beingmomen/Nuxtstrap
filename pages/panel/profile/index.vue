<template>
  <UtilsTheContentWrapper :list="list">
    <template #content>
      <b-tabs
        vertical
        content-class="col-12 col-md-9 mt-1 mt-md-0"
        pills
        nav-wrapper-class="col-md-3 col-12"
        nav-class="nav-left"
      >
        <!-- general tab -->
        <b-tab active>
          <!-- title -->
          <template #title>
            <UtilsTheFIcon
              icon="user"
              height="22.33"
            />
             <span class="font-weight-bold">{{ $t('general') }}</span>
          </template>

          <ProfileGeneral />
        </b-tab>
        <!--/ general tab -->

        <!-- change password tab -->
        <b-tab>
          <!-- title -->
          <template #title>
            <UtilsTheFIcon
              icon="lock"
              height="22.33"
            />
                <span class="font-weight-bold">{{ $t('change_password') }}</span>
          </template>

          <ProfileAccountSettingPassword />
        </b-tab>
        <!--/ change password tab -->
      </b-tabs>
    </template>
  </UtilsTheContentWrapper>
</template>

<script>
export default {
  name: 'Profile',
  layout: 'panel',
  async asyncData({ store }) {
    await store.dispatch('panel/profile/getAllDataFromApi')
    return {}
  },
  data() {
    return {
      list: [
        {
          text: this.$t('admins'),
          active: true,
          to: '/panel/admins'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
