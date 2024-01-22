<template>
  <li class="nav-item">
    <nuxt-link
      :to="localePath(`${route}`)"
      class="d-flex align-items-center nav-item-link-style"
    >
      <UtilsTheFIcon
        class="sidebar-icon"
        :icon-type="iconType"
        :icon="icon"
        height="22.33"
      />
      <span
        class="menu-title text-truncate fs-5"
        v-text="title"
      />
    </nuxt-link>
  </li>
</template>

<script>
export default {
  props: {
    route: {
      type: String,
      default: null
    },
    iconType: {
      type: String,
      default: 'feather'
    },
    icon: {
      type: String,
      default: null
    },
    title: {
      type: String,
      default: null
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
