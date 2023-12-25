<template>
  <div style="height: 100vh; margin-top: 20px">
    <v-card>
      <v-tabs v-model="tab" color="deep-purple-accent-4" align-tabs="start">
        <v-tab :value="1">Thông tin tài khoản</v-tab>
        <v-tab :value="2">Danh Sách Đặt Tour</v-tab>
      </v-tabs>
      <v-window v-model="tab" style="height: 90vh">
        <v-window-item :value="1">
          <v-container fluid>
            <v-card elevation="2" class="mx-auto" max-width="1000" height="500"
              style="margin-top: 50px; border: 1px solid #333">
              <v-card-title primary-title>
                <div class="text-center">
                  <v-toolbar class="text-center bold-text" style="background-color: rgb(194, 203, 247);">Thông tin người
                    dùng</v-toolbar>
                  <h3>{{ nguoidung.Email }}</h3>
                </div>
              </v-card-title>
              <v-divider></v-divider>
              <v-card-text>
                <v-row>
                  <v-col cols="6">
                    <h4>Ảnh đại diện:</h4>
                  </v-col>
                  <v-col cols="6">
                    <v-avatar class="mx-auto">
                      <v-img alt="Avatar" :src="nguoidung.NguoiDungHinhAnh" style="width: 200px; height: 200px;"></v-img>
                    </v-avatar>
                  </v-col>
                  <v-col cols="6">
                    <h4>Tên người dùng:</h4>
                  </v-col>
                  <v-col cols="6">
                    <h4>{{ nguoidung.HoVaTen }}</h4>
                  </v-col>
                  <v-col cols="6">
                    <h4>Địa chỉ:</h4>
                  </v-col>
                  <v-col cols="6">
                    <h4>{{ nguoidung.DiaChi }}</h4>
                  </v-col>
                  <v-col cols="6">
                    <h4>Số điện thoại:</h4>
                  </v-col>
                  <v-col cols="6">
                    <h4>{{ nguoidung.Sdt }}</h4>
                  </v-col>
                </v-row>
              </v-card-text>
              <v-card-actions class="mt-6">
                <v-btn color="green" @click="edit">Thay đổi thông tin tài khoản</v-btn>
                <v-spacer></v-spacer>
                <v-btn @click="dialogEdit = true, item = nguoidung" color="red">Thay đổi mật khẩu</v-btn>
              </v-card-actions>
            </v-card>
          </v-container>
        </v-window-item>
        <v-window-item :value="2">
          <DanhSachTour/>
          </v-window-item>
      </v-window>
    </v-card>
    <editprofile ref="dialog" :currentData="currentData" @update="getNguoiDungById" />
    <Show style="z-index: 1000" v-model="showAlert.show" :content="showAlert.content" :color="showAlert.color"
      :icon="showAlert.icon" />
    <DoiMatKhau :dialogEdit="dialogEdit" :item="item" @close="dialogEdit = false" />
  </div>
</template>

<script>
import Editprofile from "./Editprofile.vue";
import Show from "@/components/Show.vue";
import axios from 'axios';
import DoiMatKhau from "./DoiMatKhau.vue";
import DanhSachTour from "./DanhSachTour.vue";
export default {
  name: "ProfileView",
  data() {
    return {
      tab: null,
      dialogEdit: false,
      item: '',
      nguoidung: [],
      dialog: false,
      currentData: "",
      image: null,
      currentPage: 1,
      itemsPerPage: 3,
      datas: [],
      expandedIndex: null,
      chitiets: [],
      showAlert: {
        show: false,
        icon: "$success",
        content: "",
        color: "success",
      },
    };
  },
  computed: {
    displayed() {
      if (this.datas && this.datas.length > 0) {
        const startIndex = (this.currentPage - 1) * this.itemsPerPage;
        const endIndex = startIndex + this.itemsPerPage;
        return this.datas.slice(startIndex, endIndex);
      } else {
        return [];
      }
    },
    totalPages() {
      return Math.ceil(this.datas.length / this.itemsPerPage);
    },
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
    toggleExpansion(index) {
      if (this.expandedIndex === index) {
        this.expandedIndex = null;
      } else {
        this.expandedIndex = index;
      }
    },
    getNguoiDungById() {
      axios.get('https://localhost:7125/api/NguoiDung/' + this.$store.state.nguoidungId).then(res => {
        this.nguoidung = res.data;
      }).catch(error => {
        console.log(error);
      })
    },


    edit() {
      this.$refs.dialog.openDialog();
      this.currentData = this.nguoidung;
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
  created() {
    this.getNguoiDungById();
  },
  components: { Editprofile, Show, DoiMatKhau, DanhSachTour },
};
</script>

<style></style>