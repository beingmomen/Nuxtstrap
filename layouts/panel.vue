<template>
  <div>
    <div
      v-show="loading"
      class="
        vertical-layout
        h-100
        vertical-menu-modern
        navbar-floating
        footer-static
      "
      :class="{
        'menu-expanded': makeLayoutCollapsed,
        'menu-collapsed': !makeLayoutCollapsed,
        'dark-icons': makeLayoutCollapsed,
        'menu-hide': width <= 1200 && !toggleSidebar,
        'menu-open': toggleSidebar && width <= 1200
      }"
    >
      <UtilsTheNavbar :width="width" />
      <UtilsTheSidebar :width="width" />
      <div
        class="sidenav-overlay"
        :class="{ show: toggleSidebar }"
        @click="hideOverlay"
      />
      <div class="app-content content">
        <div class="content-overlay" />
        <div class="header-navbar-shadow" />
        <Nuxt />
      </div>
      <!-- <SettingsFooter /> -->
    </div>
    <div
      v-show="!loading"
      class="card align-items-center justify-content-center"
      style="height: calc(100vh)"
    >
      <lottie-player
        src="https://assets9.lottiefiles.com/packages/lf20_x62chJ.json"
        class="lottie-container"
        background="transparent"
        speed="1"
        style="width: 500px; height: 500px"
        loop
        autoplay
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'PanelLayout',
  middleware: ['mode', 'lang', 'loggedIn'],
  data() {
    return {
      width: 0,
      loading: true
    }
  },

  mounted() {
    // eslint-disable-next-line arrow-parens
    document.addEventListener('click', (e) => {
      if (e.target.classList.contains('menu-open')) {
        this.$store.dispatch('toggleSidebar')
      }
    })
    window.addEventListener('resize', this.handleResize)
    this.handleResize()

    setTimeout(() => {
      this.loading = true
    }, 2000)
  },
  methods: {
    handleResize() {
      if (window.innerWidth > 1200) {
        this.$store.commit('setSidebar', false)
      } else {
        this.$store.commit('layoutCollapsed', true)
      }
      this.width = window.innerWidth
    },
    hideOverlay() {
      this.$store.commit('setSidebar', false)
    }
  }
}
</script>

<style lang="scss" scoped>
@import 'assets/scss/base/core/menu/menu-types/vertical-menu.scss';
</style>
