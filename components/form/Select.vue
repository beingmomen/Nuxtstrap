<template>
  <b-col :sm="sm" :md="md" :lg="lg" class="mt-1">
    <validation-provider #default="{ errors }" :name="title" rules="required">
      <b-form-group>
        <label v-if="title != 'hid'" :class="{ required: required }">{{
          title
        }}</label>
        <v-select
          style="height: 35px"
          v-model="getContent"
          :reduce="(item) => (notId ? item : item.id)"
          :label="label"
          :dir="dashDir"
          :clearable="clearable"
          :options="listKey ? getAutoList : allData"
          :disabled="disabled"
          :placeholder="placeHolder"
          @input="$emit('changeData')"
        ></v-select>
        <small class="text-danger">{{ errors[0] }}</small>
      </b-form-group>
    </validation-provider>
  </b-col>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "hid",
    },
    label: String,
    storeKey: String,
    allData: Array,
    module: String,
    listKey: String,
    placeHolder: {
      type: String,
      default: "غير محدد",
    },
    multiple: {
      type: Boolean,
      default: false,
    },
    global: {
      type: Boolean,
      default: false,
    },
    clearable: {
      type: Boolean,
      default: false,
    },
    required: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    notId: {
      type: Boolean,
      default: false,
    },
    lg: {
      type: String,
      default: "3",
    },
    md: {
      type: String,
      default: "6",
    },
    sm: {
      type: String,
      default: "12",
    },
  },
  data() {
    return {};
  },
  computed: {
    getContent: {
      get: function () {
        return this.$store.getters[`${this.module}/get${this.storeKey}`];
      },
      set(val) {
        this.$store.commit(`${this.module}/set${this.storeKey}`, val);
      },
    },
    getAutoList() {
      if (this.global) {
        return this.$store.getters[`global/get${this.listKey}`];
      } else {
        return this.$store.getters[`${this.module}/get${this.listKey}`];
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.required {
  position: relative;
  &::after {
    position: absolute;
    content: "*";
    font-size: 25px;
    bottom: -6px;
    left: -10px;
    color: #ea5455;
  }
}
</style>
