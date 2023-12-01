<template>
  <div>
    <navbar/>
    <p
      class="display-3 font-weight-bold text-center pa-4"
      style="color: #336699; text-shadow: 10px 10px 14px rgba(0, 0, 0, 0.5)"
    >
      CẨM NANG DU LỊCH
    </p>
    <v-container>
     <v-row>
      <v-col sm="4" v-for="(blog, i) in blogs" :key="i" :class="blog.class">
        <!-- <div class="row">
        <div class="col-md-4 col-sm-4 col-xs-12">
          <v-card class="mx-auto" max-width="400" outlined tile href="/Post">
            <v-img
              class="white--text align-end"
              height="400px"
              src="https://i1-dulich.vnecdn.net/2022/05/10/homestay-Sa-Pa-9082-1650277615-9417-1652148660.jpg?w=0&h=0&q=100&dpr=1&fit=crop&s=qcWFCr4KfkW2vIBwnKEutQ"
            >
              <v-card-title class="text-uppercase font-weight-bold"
                >Kinh nghiệm du lịch Sa Pa 2023 từ A-Z</v-card-title
              >
            </v-img>
            <v-card-subtitle
              class="pb-0"
              style="color: blue; font-weight: bold; font-size: 18px"
            >
              Sa Pa mùa nào đẹp?
            </v-card-subtitle>
            <v-card-text class="text--primary">
              <div>
                Từ tháng 2 đến tháng 5, mùa xuân Sa Pa rực rỡ với trăm hoa khoe
                sắc như mai anh đào, đào, mận... Mùa hè từ tháng 6 đến tháng 8
                là thời điểm khách du lịch đến Sa Pa để trốn nóng, ngắm những
                thửa ruộng bậc thang xanh mát.
              </div>
            </v-card-text>

            <v-card-actions>
              <router-link to="/Post" style="color: black">
                  <v-btn color="orange" text> Đọc Thêm </v-btn>
                  </router-link>
            </v-card-actions>
          </v-card>
        </div>
      </div> -->
      <v-card class="mx-auto mt-6 card1" color="white">
        <v-card class="d-flex flex-column" flat outlined tile>
          <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="red" small dark>{{ tour.sold }}</v-btn>
              </v-card-actions>
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
                <strong :class="hover ? 'red--text' : 'black--text'">{{
                  tour.mota
                }}</strong>
              </v-card-text>
              <v-card-text class="mt-n4">
                <v-icon
                  class="mr-1"
                  :class="hover ? 'red--text' : 'black--text'"
                >
                  mdi-currency-usd
                </v-icon>
                <strong
                  class="font-weight-bold text-primary discounted-price"
                  :class="hover ? 'red--text' : 'black--text'"
                  >{{ tour.price }}</strong
                >
              </v-card-text>
              <v-card-text class="mt-n4">
                <v-icon
                  class="mr-1"
                  :class="hover ? 'red--text' : 'black--text'"
                >
                  mdi-map-marker
                </v-icon>
                <strong
                  class="font-weight-bold text-primary discounted-price"
                  :class="hover ? 'red--text' : 'black--text'"
                  >{{ tour.location }}</strong
                >
              </v-card-text>
              <v-card-text class="mt-n4">
                <v-icon
                  class="mr-1"
                  :class="hover ? 'red--text' : 'black--text'"
                >
                  mdi-map
                </v-icon>
                <strong
                  class="font-weight-bold text-primary discounted-price"
                  >{{ tour.area }}</strong
                >
              </v-card-text>
        </v-card>
      </v-card>

      </v-col>
     </v-row>
    </v-container>
  </div>
</template>

<script>
import Navbar from '../../components/Client/Navbar.vue';
export default {
  components: { 
    Navbar,
   },
   blogs: [
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
name:'BlogView'
}
</script>

<style>

</style>