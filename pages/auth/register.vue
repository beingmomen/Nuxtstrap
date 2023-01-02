<template>
  <div class="auth-wrapper auth-v2">
    <b-row class="auth-inner m-0">
      <!-- Brand logo-->
      <b-link class="brand-logo">
        <img src="/img/logo.svg" alt="logo" />

        <h2 class="brand-text text-primary ml-1">Bline Orders</h2>
      </b-link>
      <!-- /Brand logo-->

      <!-- Left Text-->
      <b-col lg="8" class="d-none d-lg-flex align-items-center p-5">
        <div
          class="w-100 d-lg-flex align-items-center justify-content-center px-5"
        >
          <b-img
            fluid
            :src="require('@/assets/images/pages/register-v2-dark.svg')"
            alt="Register V2"
          />
        </div>
      </b-col>
      <!-- /Left Text-->

      <!-- Register-->
      <b-col lg="4" class="d-flex align-items-center auth-bg px-2 p-lg-5">
        <b-col sm="8" md="6" lg="12" class="px-xl-2 mx-auto">
          <b-card-title title-tag="h2" class="font-weight-bold mb-1">
            Adventure starts here 🚀
          </b-card-title>
          <b-card-text class="mb-2">
            Make your app management easy and fun!
          </b-card-text>

          <!-- form -->
          <validation-observer ref="form">
            <b-form class="auth-register-form mt-2">
              <!-- name -->
              <b-form-group label="Name" label-for="register-name">
                <validation-provider
                  #default="{ errors }"
                  name="Name"
                  rules="required"
                >
                  <b-form-input
                    id="register-name"
                    v-model="form.name"
                    name="register-name"
                    :state="errors.length > 0 ? false : null"
                    placeholder="johndoe"
                  />
                  <small class="text-danger">{{ errors[0] }}</small>
                </validation-provider>
              </b-form-group>

              <!-- Phone Number -->
              <b-form-group label="Phone Number" label-for="phone-number">
                <validation-provider
                  #default="{ errors }"
                  name="Phone Number"
                  rules="required"
                >
                  <b-form-input
                    id="phone-number"
                    v-model="form.phone"
                    name="phone-number"
                    :state="errors.length > 0 ? false : null"
                    placeholder="+20**********"
                  />
                  <small class="text-danger">{{ errors[0] }}</small>
                </validation-provider>
              </b-form-group>

              <!-- email -->
              <b-form-group label="Email" label-for="register-email">
                <validation-provider
                  #default="{ errors }"
                  name="Email"
                  rules="required|email"
                >
                  <b-form-input
                    id="register-email"
                    v-model="form.email"
                    name="register-email"
                    :state="errors.length > 0 ? false : null"
                    placeholder="john@example.com"
                  />
                  <small class="text-danger">{{ errors[0] }}</small>
                </validation-provider>
              </b-form-group>

              <!-- password -->
              <b-form-group label-for="register-password" label="Password">
                <validation-provider
                  #default="{ errors }"
                  name="Password"
                  rules="required"
                >
                  <b-input-group
                    class="input-group-merge"
                    :class="errors.length > 0 ? 'is-invalid' : null"
                  >
                    <b-form-input
                      id="register-password"
                      v-model="form.password"
                      class="form-control-merge"
                      :type="passwordFieldType"
                      :state="errors.length > 0 ? false : null"
                      name="register-password"
                      placeholder="············"
                    />
                    <b-input-group-append is-text>
                      <MainEyeIcon
                        :visibility="passwordFieldType"
                        @click.native="togglePasswordVisibility"
                      />
                    </b-input-group-append>
                  </b-input-group>
                  <small class="text-danger">{{ errors[0] }}</small>
                </validation-provider>
              </b-form-group>

              <!-- governorates -->
              <b-form-group
                label-for="register-governorates"
                label="governorates"
              >
                <validation-provider
                  #default="{ errors }"
                  name="governorates"
                  rules="required"
                >
                  <v-select
                    style="height: 35px"
                    v-model="form.city_id"
                    :reduce="(item) => item.id"
                    label="name"
                    :dir="dashDir"
                    :clearable="false"
                    :options="[
                      { id: 0, name: 'Choose' },
                      ...getListForAllGovernorates,
                    ]"
                  ></v-select>
                  <small class="text-danger">{{ errors[0] }}</small>
                </validation-provider>
              </b-form-group>

              <!-- areas -->
              <b-form-group label-for="register-areas" label="areas">
                <validation-provider
                  #default="{ errors }"
                  name="areas"
                  rules="required"
                >
                  <v-select
                    style="height: 35px"
                    v-model="form.area_id"
                    :reduce="(item) => item.id"
                    label="name"
                    :dir="dashDir"
                    :clearable="false"
                    :disabled="form.city_id ? false : true"
                    :options="[
                      { id: 0, name: 'Choose' },
                      ...getListForAllAreas,
                    ]"
                  ></v-select>
                  <small class="text-danger">{{ errors[0] }}</small>
                </validation-provider>
              </b-form-group>

              <!-- Address -->
              <b-form-group label="Address" label-for="address">
                <validation-provider
                  #default="{ errors }"
                  name="Address"
                  rules="required"
                >
                  <b-form-textarea
                    id="address"
                    v-model="form.address"
                    name="address"
                    placeholder="Street ST."
                    rows="3"
                    max-rows="6"
                  />
                  <small class="text-danger">{{ errors[0] }}</small>
                </validation-provider>
              </b-form-group>

              <b-button
                variant="primary"
                block
                type="submit"
                @click.prevent="signUp"
              >
                Sign up
              </b-button>
            </b-form>
          </validation-observer>

          <p class="text-center mt-2">
            <span>Already have an account?</span>
            <b-link to="/login">
              <span>&nbsp;Sign in instead</span>
            </b-link>
          </p>
        </b-col>
      </b-col>
      <!-- /Register-->
    </b-row>
  </div>
</template>

<script>
import { EyeIcon } from "vue-feather-icons";
export default {
  name: "register",
  layout: "auth",
  async asyncData({ $axios, store }) {
    await $axios
      .$get(`/cities/list`)
      .then((res) => {
        store.dispatch("admin/governorates/getAllDataFromApi", res);
      })
      .catch((err) => console.warn("err :::", err.response));
    return {};
  },
  data() {
    return {
      form: {
        name: "",
        phone: "",
        email: "",
        password: "",
        city_id: 0,
        area_id: 0,
        address: "",
      },
      disabledArea: null,
    };
  },
  components: {
    EyeIcon,
  },
  methods: {
    signUp() {
      this.$refs.form.validate().then((res) => {
        let data = {};
        for (const [key, value] of Object.entries(this.form)) {
          if (value) {
            data[key] = value;
          }
        }
        if (res) {
          this.$axios
            .$post("/register", data)
            .then((res) => {
              this.$toast.success("تم التسجيل بنجاح");
              if (res.success) {
                this.$router.push("/login");
              }
            })
            .catch((err) => {
              this.$store.dispatch("handleError", err.response.data.errors, {
                root: true,
              });
            });
        }
      });
    },
  },
  watch: {
    async "form.city_id"(newValue, oldValue) {
      let arr = [];
      await this.$axios
        .$get(`/areas/list`)
        .then((res) => {
          res.data.forEach((x) => {
            newValue == x.city.id ? arr.push(x) : "";
          });
          this.$store.dispatch("admin/areas/getAllDataFromApi", { data: arr });
        })
        .catch((err) => console.warn("err :::", err.response));
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
