<template>
  <div>
    <v-container>
      <navbar />
      <v-card class="mt-10" elevation="8">
        <div class="row" style="display: flex; align-items: center;padding: 10px;">
          <div>
            <div>
              <v-img :src="item.AnhTour" object-fit="cover" max-width="100%" width="400" height="400">
              </v-img>
            </div>
          </div>
          <div>
            <div class="pl-6" width="400">
                <v-card-title class="pb-0">
                  <v-row>
                    <v-col>
                      <v-card-title class="text-center">
                        {{ item.TenTour }}
                      </v-card-title>
                    </v-col>
                    <v-divider></v-divider>
                    <v-col cols="6">
                      <span style="font-size: 20px; color: red">&#128197;</span>
                      <span class="subtitle"><b>Khu vực:</b></span>
                      <span class="text-subtitle-1">
                        <b>{{ item.KhuVuc }}</b>
                      </span>
                    </v-col>
                    <v-col cols="6" class="text-right">
                      <span style="font-size: 20px; color: blue">&#128337;</span>
                      <span class="subtitle"><b>Thời gian:</b></span>
                      <span class="text-subtitle-1">
                        <b>{{ item.ThoiGian }}</b>
                      </span>
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col cols="6">
                      <span style="font-size: 20px; color: green">&#9992;</span>
                      <span class="subtitle"><b>Khởi hành:</b></span>
                      <span class="text-subtitle-1">
                        <b>{{ item.KhoiHanh }}</b>
                      </span>
                    </v-col>
                    <v-col cols="6" class="text-right">
                      <span style="font-size: 20px; color: orange">&#128663;</span>
                      <span class="subtitle"><b>Phương tiện:</b></span>
                      <span class="text-subtitle-1">
                        <b>{{ item.PhuongTien }}</b>
                      </span>
                    </v-col>
                    <v-col cols="6">
                      <span style="font-size: 20px; color: green">&#128221;</span>
                      <span class="subtitle"><b>Mô tả:</b></span>
                      <span class="text-subtitle-1">
                        <b>{{ item.MoTa }}</b>
                      </span>
                    </v-col>
                    <v-col cols="12">
                      <span style="font-size: 20px; color: orange">&#128176;</span>
                      <span class="subtitle"><b>Giá:</b></span>
                      <br />
                      <span class="text-subtitle-1">
                        <span style="font-size: 25px; color: rgb(246, 10, 10)">{{
                          formatCurrency(item.Gia)
                        }}</span>
                      </span>
                    </v-col>
                  </v-row>
                </v-card-title>
                <v-card-actions>
                  <v-btn @click="this.showDialog=true" class="primary white--text" outlined tile dense>
                    Đặt Tour
                  </v-btn>
                </v-card-actions>
            </div>
          </div>
        </div>
      </v-card>
    </v-container>
    <DetailsView :TourId="this.TourId" v-model="showDialog"/>
  </div>
  <Footer />
</template>
<script>
import DetailsView from '@/layout/Client/ModalDatTour.vue'
import Navbar from "@/components/Client/Navbar.vue";
import tour from "@/service/tour";
import Footer from "@/components/Client/Footer.vue"

export default {
  components: { Navbar,Footer,DetailsView},
  name: "DetailComponet",
  data() {
    return {
      item: {
        BaiVietId: "",
        TieuDe: "",
        NoiDung: "",
        AnhBaiViet: "",
        NgayDang: "",
      },
      showDialog:false,
      TourId:0
    };
  },
  methods: {
     async getById(id) {
      const res = await tour.getById(id);
      this.TourId=id
      this.item = res.data;
    },
    formatCurrency(value) {
            const formatter = new Intl.NumberFormat('vi-VN', {
                style: 'currency',
                currency: 'VND',
            });
            return formatter.format(value);
        },
  },
  mounted() {
    const id = this.$route.params.id;
    this.getById(id);
  },
};
</script>
<style scoped>
.row {
  display: flex;
  align-items: center;
}

.col-md-5,
.col-md-7 {
  height: 100%;
}

.v-breadcrumbs,
.v-card-actions,
.v-card-title {
  height: 100%;
}

.v-card-title .v-container .v-row .v-col {
  height: 100%;
}
</style>
