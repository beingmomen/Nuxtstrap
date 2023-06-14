<template>
  <div
    class="main-menu menu-fixed menu-accordion menu-shadow menu-light"
    :class="{
      expanded: makeLayoutCollapsed || true,
      expanded: hover
    }"
    @mouseenter="hoverSidebar"
    @mouseleave="hoverSidebar"
  >
    <div class="navbar-header expanded w-100 d-flex align-items-center pl-1">
      <ul class="nav navbar-nav flex-row w-100">
        <UtilsTheLogo max-width="55" />
      </ul>
    </div>
    <div class="shadow-bottom" />
    <div
      class="ps-container main-menu-content scroll-area ps ps--active-y mt-2"
    >
      <ul class="navigation navigation-main">
        <ExtendedBSLink
          :title="$t(`dashboard`)"
          icon="home"
          route="panel"
        />
        <!-- <ExtendedBSDivider :title="$t(`more_page`)" /> -->
        <ExtendedBSLink
          :title="$t(`admins`)"
          icon="users"
          icon-type="awesome"
          route="/panel/admins"
        />
        <ExtendedBSLink
          :title="$t(`users`)"
          icon="users"
          route="/panel/users"
        />
        <ExtendedBSLink
          :title="$t(`categories`)"
          icon="grid"
          route="/panel/categories"
        />
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    width: {
      type: Number,
      default: null
    }
  },
  data() {
    return {
      hover: false,

      isOpen: false
    }
  },
  computed: {
    returnDashboardChild() {
      const arr = [
        { name: this.$t('sidebar.settings'), route: '/panel/eCommerce' },
        { name: this.$t('sidebar.pages'), route: '/panel/analytics' }
      ]
      return arr
    },
    logoWidth() {
      return this.$store.getters.getLogoWidth
    }
  },
  methods: {
    // toggleSidebar() {
    //   this.$store.dispatch('toggleSidebar')
    // },
    hoverSidebar() {
      if (this.width > 1200) {
        this.hover = !this.hover

        if (!this.makeLayoutCollapsed) {
          this.$store.dispatch('logoWidth')
        }
      }
    }
  }
}
</script>

<style lang="scss">
</style>
