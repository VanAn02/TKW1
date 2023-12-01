<template>
   <div style="margin: 20px;height: 150vh;">
    <v-container>
      <navbar />
      <div class="row">
        <div class="col-md-5 col-sm-5 col-xs-12">
          <v-carousel class="my-10" hide-delimiters cycle>
            <v-carousel-item v-for="(slide, i) in slides" :key="i">
              <div class="d-flex justify-center align-center fill-height">
                <v-img
                  :src="slide.src"
                  object-fit="cover"
                  max-width="100%"
                  width="100%"
                  height="430"
                >
                </v-img>
              </div>
            </v-carousel-item>
          </v-carousel>
        </div>
        <div class="col-md-7 col-sm-7 col-xs-12">
          <v-breadcrumbs class="pb-0" :items="breadcrums"></v-breadcrumbs>
          <div class="pl-6">
            <p class="display-1 mb-0">
              TOUR HÀ GIANG - THÁC BẢN GIỐC TỪ TP.HCM
            </p>
            <v-card-actions class="pa-0">
              <p class="headline font-weight-light pt-3">
                6.890.000đ
                <del style="" class="subtitle-1 font-weight-thin"
                  >7.890.000đ</del
                >
              </p>
              <v-spacer></v-spacer>
              <v-rating
                v-model="rating"
                class=""
                background-color="warning lighten-3"
                color="warning"
                dense
              ></v-rating>
              <span class="body-2 font-weight-thin"> 25 REVIEWS</span>
            </v-card-actions>
            <v-card class="pa-0">
              <v-card-title class="pb-0">
                <v-container fluid>
                  <v-row>
                    <v-col cols="6">
                      <span style="font-size: 20px; color: red">&#128197;</span>
                      <span class="subtitle">Lịch Trình:</span>
                      <br />
                      <span class="subtitle">
                        TP.HCM - HÀ NỘI - HÀ GIANG <br />
                        - ĐỒNG VĂN - MÈO VẠC <br />
                        - CAO BẰNG - THÁC BẢN GIỐC
                      </span>
                    </v-col>

                    <v-col cols="6">
                      <span style="font-size: 20px; color: blue"
                        >&#128337;</span
                      >
                      <span class="subtitle"><b>Thời gian:</b></span>
                      <br />
                      <span class="text-subtitle-1"><b>4 ngày 4 đêm</b></span>
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col cols="6">
                      <span style="font-size: 20px; color: green">&#9992;</span>
                      <span class="subtitle"><b>Khởi hành:</b></span>
                      <span class="text-subtitle-1"
                        ><b>Tối thứ 7 hàng tuần</b></span
                      >
                    </v-col>

                    <v-col cols="6">
                      <span style="font-size: 20px; color: orange"
                        >&#128663;</span
                      >
                      <span class="subtitle"><b>Phương tiện:</b></span>
                      <br />
                      <span class="text-subtitle-1"
                        ><b>Xe giường nằm + xe du lịch</b></span
                      >
                    </v-col>
                  </v-row>
                </v-container>
              </v-card-title>

              <v-card-actions>
                <v-btn
                  to="/cart"
                  class="primary white--text"
                  outlined
                  tile
                  dense
                >
                  <v-icon>mdi-cart</v-icon>Đặt Hàng
                </v-btn>
              </v-card-actions>
            </v-card>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-sm-12 col-xs-12 col-md-12">
          <v-tabs>
            <v-tab>Đặc Điểm Nổi Bật</v-tab>
            <v-tab>Đánh Giá</v-tab>
            <v-tab-item>
              <h4>Điểm nổi bật:</h4>
              <ul>
                <li>
                  <em
                    >Ghé thăm cao nguyên đá Đồng Văn, di sản thế giới được
                    UNESCO công nhận</em
                  >
                </li>
                <li>
                  <em
                    >Chinh phục đèo Mã Pì Lèng, một trong tứ đại đỉnh đèo của
                    Việt Nam</em
                  >
                </li>
                <li>
                  <em
                    >Tham quan hẻm vực sông Nho Quế, một trong những hẻm vực sâu
                    nhất thế giới</em
                  >
                </li>
                <li>
                  <em
                    >Tìm hiểu văn hóa của các dân tộc thiểu số H'Mông, Dzao, Lô
                    Lô, Tày..</em
                  >
                </li>
                <li>
                  <em>Đặt chân đến cột cờ Lũng Cú, điểm cực Bắc của Tổ quốc</em>
                </li>
                <li>
                  <em
                    >Thưởng ngoạn vẻ đẹp của thác Bản Giốc, thác nước lớn nhất
                    Việt Nam</em
                  >
                </li>
              </ul>
            </v-tab-item>

            <v-tab-item>
              <v-list three-line="true" avatar="true">
                <v-list-item-group v-model="item" color="primary">
                  <v-list-item
                    v-for="(item, i) in items"
                    :key="i"
                    inactive="true"
                  >
                    <v-list-item-avatar>
                      <v-img :src="item.avatar"></v-img>
                    </v-list-item-avatar>
                    <v-list-item-content>
                      <v-list-item-title v-html="item.title"></v-list-item-title
                      ><v-rating
                        v-model="rating"
                        class=""
                        background-color="warning lighten-3"
                        color="warning"
                        dense
                      ></v-rating>
                      <v-list-item-subtitle
                        v-html="item.subtitle"
                      ></v-list-item-subtitle>
                    </v-list-item-content>
                  </v-list-item>
                </v-list-item-group>
              </v-list>
            </v-tab-item>
          </v-tabs>
        </div>
      </div>
    </v-container>
  </div>
</template>
<script>
import Navbar from "@/components/Client/Navbar.vue";

export default {
  components: { Navbar },
  name: "DetailComponet",
  data() {
    return {
      slides: [
        {
          src: "https://vietnamtouristvn.com/thumbs/670x500x1/upload/product/ha8-4080.jpg",
        },
        {
          src: "https://vietnamtouristvn.com/thumbs/670x500x1/upload/product/ha5-2224.jpg",
        },
        {
          src: "https://vietnamtouristvn.com/thumbs/670x500x1/upload/product/ha3-8507.jpg",
        },
        {
          src: "https://vietnamtouristvn.com/thumbs/670x500x1/upload/product/untitled-2-0770.jpg",
        },
      ],
      items: [
      {
        avatar: "anh.jpg",
        title: "Hoang Thi  Van Anh?",
        subtitle:
          "<span class='text--primary'>Đây là lần đầu tiên tôi đi sapa</span> &mdash;Đây là lần đầu tiên đoàn mình đăng ký đi du lịch ở Sapa, lên đây thời tiết hơi se se lạnh rất thoải mái.\n" +
          "\n",
      },
      {
        avatar: "anh1.jpg",
        title:
          'Hoang Thi  Van Anh <span class="grey--text text--lighten-1">4</span>',
        subtitle:
        "<span class='text--primary'>Đây là lần đầu tiên tôi đi sapa</span> &mdash;Đây là lần đầu tiên đoàn mình đăng ký đi du lịch ở Sapa, lên đây thời tiết hơi se se lạnh rất thoải mái.\n",

      },
      ],
    };
  },
};
</script>
<style scoped>
.row {
  display: flex;
  align-items: center;
}

.col-md-5, .col-md-7 {
  height: 100%;
}

.v-breadcrumbs, .v-card-actions, .v-card-title {
  height: 100%;
}

.v-card-title .v-container .v-row .v-col {
  height: 100%;
}

</style>
