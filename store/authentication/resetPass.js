export const state = () => ({
  fields: {
    password: null,
    passwordConfirm: null,
  },
});

export const getters = {
  fields: (state) => state.fields,
};

export const actions = {
  async submit({ state }) {
    const token = this.$router.history.current.params.token;
    const data = await this.$axios.$patch(
      `/auth/resetPassword/${token}`,
      state.fields
    );
    await this.$toast.success(data.message);
  },
};

export const mutations = {
  setFieldValue(state, { key, value }) {
    state.fields[key] = value;
  },
};
