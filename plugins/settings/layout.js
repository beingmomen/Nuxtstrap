import Vue from 'vue'

const mixins = {
  computed: {
    makeLayoutCollapsed () {
      return this.$store.getters.layoutCollapsed
    },
    toggleSidebar () {
      return this.$store.getters.sidebar
    },
    isDark () {
      return this.$store.getters.isDark
    },
    isRTL () {
      return this.$store.getters.isRTL
    }
  }
}

Vue.mixin(mixins)
