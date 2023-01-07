
<template>
  <li class="nav-item b-nav-dropdown dropdown dropdown-user">
    <b-nav-item-dropdown
      right
      toggle-class="d-flex align-items-center dropdown-user-link"
      class="dropdown-user"
    >
      <template #button-content>
        <div class="d-sm-flex d-none user-nav align-items-start">
          <p class="user-name font-weight-bolder fs-5 mb-0">MaronX</p>
          <span class="user-status">{{ $t('admin') }}</span>
        </div>
        <b-avatar
          size="40"
          :src="require('@/assets/images/logos/tech.png')"
          variant="light-primary"
          badge
          class="badge-minimal"
          badge-variant="success"
        />
      </template>

      <ExtendedBDropdownItem
        route="/panel/profile"
        icon="user"
        :title="$t('navbar.profile')"
      />

      <b-dropdown-divider />

      <b-dropdown-item link-class="d-flex align-items-center" @click="logout">
        <UtilsTheFIcon icon="log-out" />
        <span class="fs-5 ml-1">{{ $t('logout') }}</span>
      </b-dropdown-item>
    </b-nav-item-dropdown>
  </li>
</template>

<script>
export default {
  methods: {
    logout() {
      this.$auth.logout()
      this.$fire.auth.signOut()
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
