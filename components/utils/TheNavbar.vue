
<template>
  <div
    class="
      navbar
      header-navbar
      navbar navbar-shadow
      align-items-center
      navbar-light navbar-expand
      floating-nav
    "
  >
    <div class="navbar-container d-flex content align-items-center">
      <ExtendedBToggleIcon :width="width" />
      <ul class="navbar-nav nav align-items-center ml-auto">
        <ExtendedBDropdownLang />
        <ExtendedBDarkMode />
        <ExtendedBDropdownUser />
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  filters: {
    languageName (value) {
      switch (value) {
        case 'ar':
          return (value = 'Arabic')
        case 'en':
          return (value = 'English')
        default:
          break
      }
    }
  },
  props: {
    width: {
      type: Number,
      default: null
    }
  },
  data () {
    return {
      view: false,
      currentLang: '',
      locales: [
        {
          locale: 'ar',
          // eslint-disable-next-line import/no-absolute-path
          img: require('/assets/images/flags/de.png'),
          name: 'Arabic'
        },
        {
          locale: 'en',
          // eslint-disable-next-line import/no-absolute-path
          img: require('/assets/images/flags/en.png'),
          name: 'English'
        }
      ]
    }
  },
  computed: {
    availableLocales () {
      // eslint-disable-next-line arrow-parens
      return this.$i18n.locales.filter((i) => i.code !== this.$i18n.locale)
    },
    theLang () {
      // return (this.currentLang = this.$cookies.get(this.$config.i18nKey))
      return 'en'
    }
  },
  methods: {
    switchLang (lang) {
      this.currentLang = lang
      this.$store.dispatch('toggleDir', lang)
      if (lang === 'ar') {
        document.documentElement.classList.add('arabic-dir')
        document.documentElement.setAttribute('dir', 'rtl')
        document.documentElement.setAttribute('lang', 'ar')
        document.documentElement.classList.remove('english-dir')
      } else {
        document.documentElement.classList.remove('arabic-dir')
        document.documentElement.setAttribute('dir', 'ltr')
        document.documentElement.setAttribute('lang', 'en')
        document.documentElement.classList.add('english-dir')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
// @import 'assets/scss/base/themes/bordered-layout.scss';
</style>
