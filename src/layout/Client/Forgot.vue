<template>
  <v-container dark>
    <navbar />
    <v-responsive class="mx-auto text-center" style="max-width: 500px">
      <v-card>
        <v-toolbar color="primary" dark flat>
          <v-toolbar-title class="text-center">Quên Mật Khẩu</v-toolbar-title>
        </v-toolbar>
        <v-divider aria-orientation="horizontal"></v-divider>
        <v-form ref="form" class="pa-7" @submit.prevent="handleLogin(user)">
          <v-text-field label="Email" required outlined></v-text-field>
          <v-btn
            color="green"
            class="mr-4"
            :loading="loading"
            :disabled="loading || !email"
            type="submit"
            >Gửi yêu cầu</v-btn
          >
          <v-divider aria-orientation="horizontal" class="ma-5"></v-divider>
          <p  style="text-decoration: none"
            class="font-weight-bold">Nhớ mật khẩu? <router-link to="/login">Đăng nhập</router-link></p>
          <v-divider aria-orientation="horizontal" class="ma-5"></v-divider>
        </v-form>
      </v-card>
    </v-responsive>
  </v-container>
</template>
  
<script>
import Navbar from "../../components/Client/Navbar.vue";
// import Toast from '@/components/Toast.vue';
// import nguoidungApi from '@/service/nguoidungApi';
export default {
  components: {
    Navbar,
  },
  name: "ForgotView",
  data() {
    //     return {
    //         email: '',
    //         loading: false,
    //         errorSnackbar: false,
    //         errorText: '',
    //         emailRule: [
    //             (value) => !!value || 'Email is required.',
    //             (value) => /.+@.+\..+/.test(value) || 'Email must be valid.',
    //         ],
    //         showAlert: {
    //             show: false,
    //             icon: "$success",
    //             content: "",
    //             color: "success"
    //         },
    //     };
    // },
    // computed: {
    //     snackbarStyle() {
    //         return {
    //             position: 'fixed',
    //             left: '50%',
    //             transform: 'translateX(-50%)',
    //             bottom: '50px',
    //         };
    //     },
    // },
    // components: {
    //     Toast
    // },
    // watch: {
    //     showAlert: {
    //         deep: true,
    //         handler(newVal) {
    //             if (!newVal.show) return;
    //             setTimeout(() => (this.showAlert.show = false), 2000);
    //         }
    //     }
    // },
    // methods: {
    //     async recoverPassword() {
    //         try {
    //             this.loading = true;
    //             const res = await nguoidungApi.Forgot(this.email);
    //             console.log(res.data);
    //             setTimeout(() => {
    //                 if (!this.validateEmail(this.email)) {
    //                     this.errorText = 'Email không đúng định dạng.';
    //                     this.errorSnackbar = true;
    //                 }
    //                 this.email = '';
    //                 this.loading = false;
    //             }, 1500);
    //             this.showAlert(res.data);
    //         } catch (error) {
    //             this.loading = false;
    //             console.log(error);
    //             this.AlertError(error)
    //         }
    //     },
    //     validateEmail(value) {
    //         return /.+@.+\..+/.test(value);
    //     },
    //     AlertSuccess(content) {
    //         this.showAlert.show = true;
    //         this.showAlert.icon = "$success";
    //         this.showAlert.content = content;
    //         this.showAlert.color = "success";
    //     },
    //     AlertError(content) {
    //         this.showAlert.show = true;
    //         this.showAlert.content = content;
    //         this.showAlert.icon = "$error";
    //         this.showAlert.color = "error";
    //     }
  },
};
</script>
  
<style scoped>
/* Align paragraph and button on the same row */
.v-btn,
p {
  display: inline-block;
  vertical-align: middle;
}
</style>
  