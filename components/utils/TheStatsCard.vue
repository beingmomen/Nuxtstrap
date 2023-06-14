<template>
  <b-card no-body>
    <b-card-body class="d-flex justify-content-between align-items-center">
      <div class="truncate">
        <h2 class="mb-25 font-weight-bolder">
          {{ statistic }}
        </h2>
        <span>{{ $t(statisticTitle) }}</span>
      </div>
      <b-avatar
        :variant="`light-${color}`"
        size="45"
      >
        <UtilsTheFIcon
          :icon="icon"
          :icon-type="type ? 'awesome' : 'feather'"
        />
      </b-avatar>
    </b-card-body>
  </b-card>
</template>

<script>
export default {
  props: {
    icon: {
      type: String,
      default: 'user'
    },
    type: {
      type: Boolean,
      default: false
    },
    statistic: {
      type: [Number, String],
      required: true
    },
    statisticTitle: {
      type: String,
      default: ''
    },
    color: {
      type: String,
      default: 'primary'
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
