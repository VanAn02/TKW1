<template>
  <v-footer>
    <v-card flat tile class="black white--text py-12 px-5" width="100%" color="black">
      <v-row>
        <v-col cols="12" xs="12" sm="6" md="4" class="pa-16">
          <v-toolbar color="transparent" flat>
            <div class="d-flex align-items-center">
              <v-img
                src="https://vietnamtouristvn.com/upload/photo/logo-7992.jpg"
                contain
                width="50"
              ></v-img>
              <v-toolbar-title class="ml-4">
                <strong class="green--text">VietNam Travel</strong>
              </v-toolbar-title>
            </div>
          </v-toolbar>
          <v-card-text class="pt-0">
            <v-btn
              v-for="icon in icons"
              :key="icon"
              class="mx-1 white--text"
              icon
              fab
              outlined
              small
            >
              <v-icon size="20px">{{ icon }}</v-icon>
            </v-btn>
          </v-card-text>
        </v-col>
        <v-col cols="12" xs="9" sm="3">
          <v-card-text class="white--text pt-0">
            <h3>Tại Hà Nội</h3>
          </v-card-text>
          <v-card-text class="grey--text"
            >Địa Chỉ: Số 110 Lạc Long Quân, Phường Bưởi , Quận Tây Hồ, Thành phố
            Hà Nội</v-card-text
          >
          <v-card-text class="grey--text mt-n4"
            >Điện thoại: +84.4.3 722 8112, Fax: +84.4.3 722 8115</v-card-text
          >
          <v-card-text class="grey--text mt-n4"
            >Hotline: 0983 353 885</v-card-text
          >
          <v-card-text class="grey--text mt-n4"
            >Email: ceo.vietnamtourist@gmail.com</v-card-text
          >
        </v-col>
        <v-col cols="12" xs="9" sm="3">
          <v-card-text class="white--text pt-0">
            <h3>Tại Thành Phố Hồ Chí Minh</h3>
          </v-card-text>
          <v-card-text class="grey--text"
            >Địa Chỉ: Số 219 đường Võ Văn Tần, Phường 5, Quận 3, Thành phố Hồ
            Chí Minh</v-card-text
          >
          <v-card-text class="grey--text mt-n4"
            >Điện thoại: 0816 222 022</v-card-text
          >
          <v-card-text class="grey--text mt-n4"
            >Email: dieuhanh.vietnamtourist@gmail.com</v-card-text
          >
        </v-col>
      </v-row>
    </v-card>
  </v-footer>
</template>

<script>
import '@mdi/font/css/materialdesignicons.css';
export default {
  name: "FooterComponet",
  data: () => ({
    icons: [
      "fab fa-instagram",
      "fab fa-google-plus-g",
      "fab fa-twitter",
      "fab fa-facebook-f",
    ],
  }),
};
</script>

<style></style>
