export const state = () => ({
  apiModule: "/auth",
  fields: {
    passwordCurrent: null,
    password: null,
    passwordConfirm: null,
  },
});

export const getters = {
  fields: (state) => state.fields,
};

export const actions = {
  getAllDataFromApi({ dispatch, rootState }) {
    const user = rootState.auth.user;
    dispatch("showSingleData", user);
  },

  updateDataInDB({ state, dispatch, rootState }, payload) {
    this.$axios
      .$patch(`${state.apiModule}/updateMyPassword`, state.fields)
      .then(() => {
        this.$toast.success("Password updated now login");
        this.$auth.logout();
        dispatch("resetData");
      })
      .catch(() => {});
  },

  showSingleData({ state, commit }, payload) {
    // Main Function
    const extract = Object.keys(state.fields);
    const extractedData = extract.map((key) => ({ [key]: payload[key] }));
    const result = Object.assign({}, ...extractedData);

    for (const [key, value] of Object.entries(result)) {
      commit("setFieldValue", { key, value });
    }
  },

  resetData({ commit, state }) {
    Object.keys(state.fields).forEach((field, i) => {
      commit("setFieldValue", { key: field, value: null });
    });
  },
};

export const mutations = {
  setFieldValue(state, { key, value }) {
    state.fields[key] = value;
  },
};
