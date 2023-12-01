
<template>
  <v-container dark>
    <navbar/>
    <v-responsive class="mx-auto text-center" style="max-width: 500px">
      <v-card>
        <v-toolbar color="primary" dark flat>
          <v-toolbar-title class="text-center">Đăng Nhập</v-toolbar-title>
        </v-toolbar>
        <v-divider aria-orientation="horizontal"></v-divider>
        <v-form ref="form" class="pa-7" @submit.prevent="handleLogin(user)">
          <v-text-field
            label="Email"
            required
            outlined
          ></v-text-field>
          <v-text-field
            label="Password"
            outlined
            type="password"
          ></v-text-field>
          <div v-html="message" style="color:red"></div>
          <v-btn color="primary" x-large block type="submit"
            >Đăng Nhập</v-btn
          >
          <router-link
            to="/forgot"
            style="text-decoration: none"
            class="font-weight-bold"
            >Quên Mật Khẩu?</router-link
          >
          <v-divider aria-orientation="horizontal" class="ma-5"></v-divider>
          <v-btn to="/register" x-large
          color="success"
            >Tạo tài khoản mới</v-btn
          >
        </v-form>
      </v-card>
    </v-responsive>
  </v-container>
</template>

<script>
import Navbar from '../../components/Client/Navbar.vue';
export default {
  components: { 
    Navbar,
   },
  name: "LoginView",
};
</script>

<style>
</style>