<template>
  <li
    class="nav-item has-sub"
    :class="{ open: sub }"
  >
    <b-link
      class="d-flex align-items-center add-arrow-icon"
      @click.native="sub = !sub"
    >
      <UtilsTheFIcon :icon="icon" />
      <span
        class="menu-title text-truncate"
        v-text="title"
      />
      <!-- <b-badge pill variant="light-warning" class="mr-1 ml-auto">23</b-badge> -->
    </b-link>
    <b-collapse
      v-model="sub"
      class="menu-content"
      tag="ul"
    >
      <slot
        class="sssssssssssss"
        name="links"
      />
    </b-collapse>
  </li>
</template>

<script>
export default {
  props: {
    icon: {
      type: String,
      default: null
    },
    title: {
      type: String,
      default: null
    }
  },
  data() {
    return {
      sub: false
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
