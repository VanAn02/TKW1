<template>
  <div style="margin: 20px;height: 150vh;">
     <v-container>
      <v-row>
        <v-col sm="4" v-for="(tour, i) in tours" :key="i" :class="tour.class">
          <v-card class="mx-auto mt-6 card1" color="white">
            <v-card class="d-flex flex-column" flat outlined tile>
              <v-img
                :src="tour.image"
                class="flex-grow-1"
                style="object-fit: cover"
              ></v-img>
              <v-card-text class="mt-n4">
                <strong class="text-uppercase font-weight-bold">{{
                  tour.title
                }}</strong>
                <br />
                <strong >{{
                  tour.mota
                }}</strong>
              </v-card-text>
              <v-card-text class="mt-n4">
                <v-icon
                  class="mr-1"
                >
                  mdi-currency-usd
                </v-icon>
                <strong
                  class="font-weight-bold text-primary discounted-price"
                  
                  >{{ tour.price }}</strong
                >
              </v-card-text>
              <v-card-text class="mt-n4">
                <v-icon
                  class="mr-1"
                >
                  mdi-map-marker
                </v-icon>
                <strong
                  class="font-weight-bold text-primary discounted-price"
                  >{{ tour.location }}</strong
                >
              </v-card-text>
              <v-card-text class="mt-n4">
                <v-icon
                  class="mr-1"
                >
                  mdi-map
                </v-icon>
                <strong
                  class="font-weight-bold text-primary discounted-price"
                  >{{ tour.area }}</strong
                >
              </v-card-text>
            </v-card>
            <v-card-actions>
              <router-link to="/detail" style="color: black">
                <v-btn rounded color="red"> Chi Tiết </v-btn>
              </router-link>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
     </v-container>
      <v-pagination prev-icon="mdi-menu-left" next-icon="mdi-menu-right" class="pa-8" :length="totalPages"
          v-model="currentPage"></v-pagination>
      <Loading v-model="dialogloading" />
  </div>
</template>
<script>
export default {
  name: "MainComponet",
  data: () => ({
    datas: [],
    page: 1,
    tours: [
      {
        class: "pa-0",
        sold: "-20%",
        image:
          "https://vietnamtouristvn.com/thumbs/670x500x1/upload/product/phim-truong-miosa-9469.jpg",
        title: "TOUR SAPA - LÀO CAI 3N2Đ TỪ TP. HỒ CHÍ MINH",
        mota: "(Tour trọn gói vé bay khứ hồi/xe di chuyển + Lưu trú + Ăn/uống + Địa điểm tham quan  theo chương trình)",
        price: "7.490.000đ",
        location: "TP.Hcm - Hà Nội - Sapa - TP. Lào Cai",
        area: "Miền Bắc",
      },
      {
        class: "pa-0",
        sold: "-30%",
        image:
          "https://vietnamtouristvn.com/thumbs/670x500x1/upload/product/ha8-4080.jpg",
        title: "TOUR HÀ GIANG - THÁC BẢN GIỐC TỪ TP.HCM",
        mota: "(Tour trọn gói vé bay khứ hồi/xe di chuyển + Lưu trú + Ăn/uống + Địa điểm tham quan  theo chương trình)",
        price: " 6.890.000đ",
        location: "TP.HCM - HÀ NỘI - HÀ GIANG - CAO BẰNG ",
        area: "Miền Bắc",
      },
      {
        class: "pa-0",
        sold: "-17%",
        image:
          "https://vietnamtouristvn.com/thumbs/670x500x1/upload/product/ivivutourhanoi1nhoalutamcoctamcoc-2787.jpg",
        title: "TOUR HOA LƯ - HANG MÚA - TAM CỐC",
        mota: "(Tour trọn gói vé bay khứ hồi/xe di chuyển + Lưu trú + Ăn/uống + Địa điểm tham quan  theo chương trình)",
        price: "850.000đ ",
        location: "NINH BÌNH (HOA LƯ - HANG MÚA - TAM CỐC)",
        area: "Miền Bắc",
      },
      {
        class: "pa-0",
        sold: "-15%",
        image:
          "https://vietnamtouristvn.com/thumbs/670x500x1/upload/product/da-nang-0181.png",
        title: "TOUR ĐÀ NẴNG - HỘI AN 3N2Đ",
        mota: "(Tour trọn gói vé bay khứ hồi/xe di chuyển + Lưu trú + Ăn/uống + Địa điểm tham quan  theo chương trình)",
        price: "6.690.000đ ",
        location: "TP.HCM - ĐÀ NẴNG - HỘI AN",
        area: "Miền Trung",
      },
      {
        class: "pa-0",
        sold: "-20%",
        image:
          "https://vietnamtouristvn.com/thumbs/670x500x1/upload/product/nha-trang-1-5380.png",
        title: "Tour Bình Ba - Nha Trang 2 Ngày 2 Đêm",
        mota: "(Tour trọn gói vé bay khứ hồi/xe di chuyển + Lưu trú + Ăn/uống + Địa điểm tham quan  theo chương trình)",
        price: "2.290.000đ ",
        location: "Bình Ba - Nha Trang",
        area: "Miền Trung",
      },
      {
        class: "pa-0",
        sold: "-10%",
        image:
          "https://vietnamtouristvn.com/thumbs/670x500x1/upload/product/vinwonders-khoi-dong-cuoc-thi-sang-tao-cac-nhan-vat-co-tich-phien-ban-viet-02-7164-9960.jpg",
        title: "TOUR PHÚ QUỐC 4 NGÀY 3 ĐÊM",
        mota: "(Tour trọn gói vé bay khứ hồi/xe di chuyển + Lưu trú + Ăn/uống + Địa điểm tham quan  theo chương trình)",
        price: "7.690.000đ",
        location: "TP.HCM - PHÚ QUỐC",
        area: "Miền Nam",
      },
      
    ],
  }),
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