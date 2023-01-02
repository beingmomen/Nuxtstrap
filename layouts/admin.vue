<template>
  <div>
    <SettingsFonts />
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
        'menu-hide': window.width <= 1200,
        'menu-open': toggleSidebar,
      }"
    >
      <SettingsNavbar :width="window.width" />
      <SettingsSidebar :width="window.width" />
      <div class="sidenav-overlay"></div>
      <Nuxt />
      <!-- <SettingsFooter /> -->
    </div>
    <div v-show="!loading" class="flower-spinner">
      <div class="dots-container">
        <div class="bigger-dot">
          <div class="smaller-dot"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "admin",
  middleware: ["mode", "lang", "authentication"],
  mounted() {
    document.addEventListener("click", (e) => {
      if (e.target.classList.contains("menu-open")) {
        this.$store.dispatch("hideSidebar");
      }
    });
    window.addEventListener("resize", this.handleResize);
    this.handleResize();

    setTimeout(() => {
      this.loading = true;
    }, 2000);
  },
  data() {
    return {
      window: {
        width: 0,
        height: 0,
      },
      loading: false,
    };
  },
  methods: {
    handleResize() {
      this.window.width = window.innerWidth;
      this.window.height = window.innerHeight;
    },
  },
};
</script>

<style lang="scss">
</style>
