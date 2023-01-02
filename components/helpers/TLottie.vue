<template>
  <div
    class="card align-items-center justify-content-around"
    :style="{ height: height + 'vh' }"
  >
    <lottie-player
      :src="lottie"
      class="lottie-container"
      background="transparent"
      speed="1"
      style="
        max-width: 400px;
        max-height: 300px;
        min-width: 50%;
        min-height: 50%;
      "
      loop
      autoplay
    />
    <b-button
      v-if="create"
      :to="localePath(path + '/create')"
      class="ms-4"
      variant="primary"
    >
      <span class="text-nowrap text-capitalize fs-5">
        {{ $t('buttons.add') }} {{ title }}
      </span>
    </b-button>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: null
    },
    path: {
      type: String,
      default: null
    },
    create: {
      type: Boolean,
      default: null
    },
    lottie: {
      type: String,
      default: null
    },
    height: {
      type: String,
      default: '80'
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
