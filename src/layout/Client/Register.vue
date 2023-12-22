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
        <v-form ref="form" class="pa-7" v-model="valid" @submit.prevent="signup" lazy-validation>
          <v-text-field
            v-model="FormDangKy.HoVaTen"
            label="Họ tên"
            outlined
          ></v-text-field>
          <v-text-field
            :rules="emailRules"
            v-model="FormDangKy.Email"
            label="Email"
            outlined
          ></v-text-field>
          <v-text-field
            v-model="FormDangKy.Password"
            :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
            label="Password"
            :type="show ? 'text' : 'password'"
            @click:append="show = !show"
          ></v-text-field>
          <div v-html="message" style="color: red"></div>
          <v-btn
            type="submit"
            x-large
            block
            color="success"
            :loading="loading"
            :disabled="loading || !FormDangKy.HoVaTen || !FormDangKy.Email || !FormDangKy.Password"
            > Đăng Ký</v-btn
          >
          <div v-html="message" style="color: #f542a1" class="py-2"></div>
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
    <show
      style="z-index: 1000"
      v-model="showAlert.show"
      :content="showAlert.content"
      :color="showAlert.color"
      :icon="showAlert.icon"
    />
  </v-container>
</template>

<script>
import Navbar from "@/components/Client/Navbar.vue";
//import nguoidung from "@/service/nguoidung";
import Show from "@/components/Show.vue";
import axios from "axios";
export default {
  components: { Navbar,
  Show },
  name: "RegisterView",
  data() {
    return {
      FormDangKy: {
        HoVaTen: "",
        Email: "",
        Password: "",
        // Quyen: "Người dùng",
      },
      errorSnackbar: false,
      errorText: "",
      loading: false,
      showAlert: {
        show: false,
        icon: "$success",
        content: "",
        color: "success",
      },
    };
  },
  watch: {
    showAlert: {
      deep: true,
      handler(newVal) {
        if (!newVal.show) return;
        setTimeout(() => (this.showAlert.show = false), 2000);
      },
    },
  },
  methods: {
         signup() {
            try {
                this.loading = true;
                //console.log(this.FormDangKy)
                axios.post('https://localhost:7125/api/NguoiDung/register',this.FormDangKy).then(rs=>{
                   alert(rs.data)
                   setTimeout(() => {
                    this.$router.push("/login");
                    this.name = '';
                      this.email = '';
                      this.password = '';
                      this.loading = false;
                  }, 1500);
                })
                this.errorSnackbar = true;
            } catch (error) {
                this.loading = false;
                console.log(error.response);
                this.AlertError(error.response.data);
            }
        },
        AlertSuccess(content) {
            this.showAlert.show = true;
            this.showAlert.icon = "$success";
            this.showAlert.content = content;
            this.showAlert.color = "success";
        },
        AlertError(content) {
            this.showAlert.show = true;
            this.showAlert.content = content;
            this.showAlert.icon = "$error";
            this.showAlert.color = "error";
        }
    }
};
</script>

<style>
</style>