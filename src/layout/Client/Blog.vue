<template>
  <div>
    <navbar />
    <h1
      class="display-3 font-weight-bold text-center pa-4"
      style="
        font-size: 50px;
        color: #0f5091;
        text-shadow: 10px 10px 14px rgba(0, 0, 0, 0.5);
      "
    >
      DANH SÁCH CÁC BÀI VIẾT
    </h1>
    <v-container>
      <v-row>
        <v-col
          sm="4"
          v-for="(baiviet, i) in baiviets"
          :key="i"
          :class="baiviet.class"
        >
          <v-card
            class="mx-auto mt-6 card1"
            color="white"
            max-width="400"
            outlined
            tile
          >
            <v-img
              class="white--text align-end"
              height="400px"
              :src="baiviet.AnhBaiViet"
            >
              <v-card-title class="text-uppercase font-weight-bold" color="white">{{
                baiviet.TieuDe
              }}</v-card-title>
            </v-img>
            <v-card-subtitle
              class="pb-0"
              style="color: blue; font-weight: bold; font-size: 18px"
            >
             {{ baiviet.NgayDang }}
            </v-card-subtitle>
            <v-card-text class="text--primary">
              <div>
                {{ baiviet.NoiDung }}
              </div>
            </v-card-text>
            <v-card-actions>
              <router-link :to="'/post/'+baiviet.BaiVietId"  style="color: black">
                <v-btn color="orange" text> Đọc Thêm </v-btn>
              </router-link>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <v-pagination
      prev-icon="mdi-menu-left"
      next-icon="mdi-menu-right"
      class="pa-8"
      :length="totalPages"
      v-model="currentPage"
    ></v-pagination>
    <Loading v-model="dialogloading" />
    <Footer />
  </div>
</template>

<script>
import Navbar from "@/components/Client/Navbar.vue";
import Footer from "@/components/Client/Footer.vue";
import baiviet from "@/service/baiviet";
export default {
  components: { Navbar, Footer },
  name: "BlogView",
  data: () => ({
    datas: [],
    page: 1,
    baiviets: [],
  }),
  methods: {
    async getBaiViet() {
      const res = await baiviet.getAll();
      this.baiviets = res.data;
      console.log(res.data);
    },
  },
  created() {
    this.getBaiViet();
  },
};
</script>

<style>
.container {
  padding: 0px !important;
}
.v-btn.withoutupercase {
  text-decoration: none;
}
.v-chip.v-size--default {
  border-radius: 50px !important;
  font-size: 14px !important;
  height: 40px !important;
  width: 40px !important;
}
.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: 0.5;
  position: absolute;
  width: 100%;
}
.card1 {
  z-index: 10;
}
.card2 {
  z-index: 1;
}
</style>