
<template>
  <li class="nav-item b-nav-dropdown dropdown dropdown-user">
    <b-nav-item-dropdown
      right
      toggle-class="d-flex align-items-center dropdown-user-link"
      class="dropdown-user"
    >
      <template #button-content>
        <div class="d-sm-flex d-none user-nav align-items-start">
          <p class="user-name font-weight-bolder fs-5 mb-0">
            {{ $auth.user.name || $config.SITE_TITLE }}
          </p>
          <span class="user-status">{{ $auth.user.role || $t('admin') }}</span>
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

      <ExtendedBDropdownItem
        icon="log-out"
        :title="$t('navbar.logout')"
        @click.native="logout"
      />
    </b-nav-item-dropdown>
  </li>
</template>

<script>
export default {
  methods: {
    logout() {
      this.$auth.logout()
      this.$auth.strategy.token.reset()
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
