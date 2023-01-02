<template>
  <b-row class="content-header">
    <!-- Content Left -->
    <b-col class="content-header-left mb-2">
      <b-row class="breadcrumbs-top">
        <b-col cols="12 d-flex ">
          <div class="d-flex align-items-center">
            <h2 class="content-header-title pe-4 mb-0 text-uppercase">
              {{ title }}
            </h2>
          </div>
          <div class="breadcrumb-wrapper">
            <b-breadcrumb>
              <b-breadcrumb-item
                class="d-flex align-items-center"
                :to="localePath('/panel')"
              >
                <UtilsTheFIcon icon="home" class="icon" />
              </b-breadcrumb-item>
              <b-breadcrumb-item
                v-for="item in list"
                :key="item.text"
                :active="item.active"
                :to="item.to"
                class="text-capitalize fs-4 p-0 ml-50"
              >
                {{ item.text }}
              </b-breadcrumb-item>
            </b-breadcrumb>
          </div>
        </b-col>
      </b-row>
    </b-col>
  </b-row>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: null
    },
    list: {
      type: Array,
      default: null
    }
  }
}
</script>

<style lang="scss" scoped>
.icon {
  margin-top: -6px;
}
</style>
