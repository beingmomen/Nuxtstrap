<template>
  <li
    id="dropdown-grouped"
    class="nav-item b-nav-dropdown dropdown dropdown-language"
    variant="link"
  >
    <b-nav-item-dropdown
      id="dropdown-grouped"
      variant="link"
      class="dropdown-language"
      right
    >
      <template #button-content>
        <b-img
          :src="require(`/assets/images/flags/${currentLang.code}.png`)"
          height="14px"
          width="22px"
          :alt="currentLang.name"
        />
        <span class="ml-50 text-body">
          {{ currentLang.name }}
        </span>
      </template>
      <b-dropdown-item
        v-for="locale in availableLocales"
        :key="locale.code"
        @click.native="switchLang(locale.code), $i18n.setLocale(locale.code)"
      >
        <nuxt-link
          class="lang-name d-flex align-items-center cursor-pointer"
          to=""
        >
          <b-img
            :src="require(`/assets/images/flags/${locale.code}.png`)"
            height="20px"
            width="32px"
            alt=""
          />
          <p class="mb-0 ml-50 cursor-pointer">
            {{ locale.name }}
          </p>
        </nuxt-link>
      </b-dropdown-item>
    </b-nav-item-dropdown>
  </li>
</template>

<script>
export default {
  computed: {
    availableLocales() {
      // eslint-disable-next-line arrow-parens
      return this.$i18n.locales.filter(i => i.code !== this.$i18n.locale)
    },
    currentLang() {
      const [lang] = this.$i18n.locales.filter(
        // eslint-disable-next-line arrow-parens
        i => i.code === this.$i18n.locale
      )
      return lang
    }
  },
  methods: {
    switchLang(lang) {
      if (lang === 'ar') {
        this.$store.dispatch('toggleDir', true)
        // document.documentElement.classList.add('arabic-dir')
        document.documentElement.setAttribute('dir', 'rtl')
        document.documentElement.setAttribute('lang', 'ar')
        // document.documentElement.classList.remove('english-dir')
      } else if (lang === 'en') {
        // document.documentElement.classList.remove('arabic-dir')
        document.documentElement.setAttribute('dir', 'ltr')
        document.documentElement.setAttribute('lang', 'en')
        // document.documentElement.classList.add('english-dir')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
