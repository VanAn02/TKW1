
<template>
  <v-container dark>
    <navbar />
    <v-responsive class="mx-auto text-center" style="max-width: 500px">
      <v-card>
        <v-toolbar color="primary" dark flat>
          <v-toolbar-title class="text-center">Đăng Nhập</v-toolbar-title>
        </v-toolbar>
        <v-divider aria-orientation="horizontal"></v-divider>
        <v-form ref="form" class="pa-7" @submit.prevent="Login">
          <v-text-field type="Email" label="Email" required outlined v-model="FormLogin.Email"></v-text-field>
          <v-text-field label="Password" outlined type="password" v-model="FormLogin.Password"></v-text-field>
          <div v-html="message" style="color: red"></div>
          <v-btn color="primary" x-large block type="submit" class="mr-4" :loading="loading"
            :disabled="loading || !FormLogin.Email || !FormLogin.Password">Đăng Nhập</v-btn>
          <router-link to="/forgot" style="text-decoration: none" class="font-weight-bold">Quên Mật Khẩu?</router-link>
          <v-divider aria-orientation="horizontal" class="ma-5"></v-divider>
          <v-btn to="/register" x-large color="success">Tạo tài khoản mới</v-btn>
        </v-form>
      </v-card>
    </v-responsive>
    <show style="z-index: 1000" v-model="showAlert.show" :content="showAlert.content" :color="showAlert.color"
      :icon="showAlert.icon" />
  </v-container>
</template>

<script>
import nguoidung from "@/service/nguoidung";
import Navbar from "../../components/Client/Navbar.vue";
import Show from "@/components/Show.vue";
export default {
  components: {
    Navbar,
    Show
  },
  name: "LoginView",
  data() {
    return {
      FormLogin: {
        Email: "",
        Password: "",
      },
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
    async Login() {
      try {
        this.loading = true;
        const res = await nguoidung.Login(this.FormLogin);
        console.log(res.data);
        setTimeout(() => {
          this.Email = "";
          this.Password = "";
          this.loading = false;
        }, 1500);
        this.Token(res.data.token);
        this.$store.dispatch("Login", res.data.token);
        this.AlertSuccess(res.data.message);        
        if(res.data.quyen === 'Người dùng'){
          this.$router.push('/');
        }else{
          this.$router.push('/admin');
        }
      } catch (error) {
        this.loading = false;
        this.AlertError(error.response.data);
      }
    },
    async Token(token) {
      try {
        const res = await nguoidung.Token(token);
        this.$store.dispatch("Token", res.data);
        console.log(res.data);
      } catch (error) {
        console.log(error);
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
    },
  },
};
</script>
<style></style>