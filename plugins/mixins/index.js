// We haven't added icon's computed property because it makes this mixin coupled with UI

import Vue from "vue";

const mixins = {
  computed: {},

  methods: {
    // التاريخ
    formatDate(value) {
      return this.$moment(value).format("YYYY-MM-DD");
    },

    // القيمة
    formatValue(value) {
      return value?.toLocaleString();
    },
  },
};

Vue.mixin(mixins);
