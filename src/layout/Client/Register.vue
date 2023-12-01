<template>
  <v-container dark>
    <navbar />
    <v-responsive class="mx-auto text-center" style="max-width: 500px">
      <v-card>
        <v-toolbar color="success" dark flat>
          <v-toolbar-title class="text-center"
            >Tạo Tài Khoản Mới</v-toolbar-title
          >
        </v-toolbar>
        <v-divider aria-orientation="horizontal"></v-divider>
        <v-form ref="form" class="pa-7" v-model="valid" lazy-validation>
          <v-text-field
            :rules="emailRules"
            v-model="user.email"
            label="Email"
            outlined
          ></v-text-field>
          <v-text-field
            :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
            label="Password"
            :type="show ? 'text' : 'password'"
            @click:append="show = !show"
          ></v-text-field>
          <div v-html="message" style="color: red"></div>
          <v-btn :disabled="!valid" type="submit" x-large block color="success"
            >Register</v-btn
          >
          <div v-html="message" style="color: #f542a1" class="py-2"></div>
          <v-checkbox v-model="checkbox"
            ><template v-slot:label>
              <div class="black--text font-weight-bold">I agree</div>
            </template></v-checkbox
          >
          <v-divider aria-orientation="horizontal" class="mb-5"></v-divider>
          <router-link
            to="/login"
            style="text-decoration: none"
            class="font-weight-bold"
            >Nếu bạn đã có tài khoản? Click here.</router-link
          >
        </v-form>
      </v-card>
    </v-responsive>
  </v-container>
</template>

<script>
import { mapMutations } from "vuex";
import Navbar from "@/components/Client/Navbar.vue";

export default {
  components: { Navbar },
  name: "RegisterView",
  data() {
    return {
      valid: true,
      //text: '***',
      checkbox: false,
      show: false,
      user: {
        firstName: "",
        tenDangNhap: "",
        email: "",
        password: "",
      },
      emailRules: [
        (v) => !!v || "E-mail is required",
        (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
      ],
      rules: {
        required: (value) => !!value || "Required.",
        max: (v) =>
          (v && v.length <= 16) || "Password must be less than 16 characters",
        min: (v) => (v && v.length) >= 6 || "Password at least 6 characters",
      },
      message: "",
      loading: false,
    };
  },
  methods: {
    ...mapMutations(["ADD_USER"]),
    handleRegister(user) {
      this.message = "";
      this.successful = false;
      this.loading = true;

      this.$store.dispatch("auth/register", user).then(
        (data) => {
          this.message = data.msg;
          this.successful = true;
          this.loading = false;
        },
        (error) => {
          this.message = error.response.data.msg;
          error.toString();
          this.successful = false;
          this.loading = false;
        }
      );
    },
    validate() {
      this.$refs.form.validate();
    },
  },
  computed: {},
};
</script>

<style>
</style>