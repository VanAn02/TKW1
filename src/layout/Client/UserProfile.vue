<template>
  <div style="height: 100vh; margin-top: 20px">
    <v-card>
      <v-tabs v-model="tab" color="deep-purple-accent-4" align-tabs="end">
        <v-tab :value="1">Thông tin tài khoản</v-tab>
        <v-tab :value="2">Danh Sách Đặt Tour</v-tab>
      </v-tabs>
      <v-window v-model="tab" style="height: 90vh">
        <v-window-item :value="1">
          <v-container fluid>
            <v-card
              elevation="2"
              class="mx-auto"
              max-width="1000"
              height="500"
              style="margin-top: 50px; border: 1px solid #333"
            >
              <v-card-title primary-title>
                <div class="text-center">
                  <v-toolbar class="text-center bold-text" style="background-color: rgb(194, 203, 247);">Thông tin người dùng</v-toolbar>
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
                      <v-img
                        alt="Avatar"
                        :src="nguoidung.NguoiDungHinhAnh" style="width: 200px; height: 200px;"
                      ></v-img>
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
                <v-btn color="green" @click="edit"
                  >Thay đổi thông tin tài khoản</v-btn
                >
                <v-spacer></v-spacer>
                <v-btn color="red">Thay đổi mật khẩu</v-btn>
              </v-card-actions>
            </v-card>
          </v-container>
        </v-window-item>
        <v-window-item :value="2">
          <v-row class="mt-8">
            <v-col>
              <v-card>
                <v-expansion-panels>
                  <v-expansion-panel
                    v-for="(item, index) in displayed"
                    :key="index"
                  >
                    <v-expansion-panel-header>
                      <div class="d-flex align-center justify-space-between">
                        <div>
                          <div>Số điện thoại: {{ item.HoaDonSdt }}</div>
                          <div>Ngày Đặt: {{ item.NgayTao }}</div>
                          <div>Tổng tiền: {{ item.TongTien }} VNĐ</div>
                          <div v-if="item.TrangThai === 0">
                            Trạng thái: Đang chờ duyệt...
                          </div>
                        </div>
                        <v-btn color="red" @click="viewDetails(item.HoaDonId)"
                          >Xem chi tiết</v-btn
                        >
                      </div>
                    </v-expansion-panel-header>
                  </v-expansion-panel>
                </v-expansion-panels>
                <v-expansion-panels v-if="this.datas.length > 0">
                  <v-expansion-panel
                    v-for="(item, index) in displayed"
                    :key="index"
                  >
                    <v-expansion-panel-header @click="toggleExpansion(index)">
                      <div
                        class="d-flex align-center justify-space-between ma-6"
                      >
                        <div>
                          <div>Địa chỉ giao hàng: {{ item.hoaDonDiaChi }}</div>
                          <div>Số điện thoại: {{ item.hoaDonSdt }}</div>
                          <div>Ngày đặt: {{ item.ngayTao }}</div>
                          <div>Tổng tiền: {{ item.tongTien }} VNĐ</div>
                          <div v-if="item.trangThai === 0">
                            Trạng thái: Đang chờ duyệt...
                          </div>
                        </div>
                      </div>
                      <div class="ma-6">
                        <v-btn color="red" @click="HuyDon(item.HoaDonId)"
                          >Hủy đơn hàng
                        </v-btn>
                        <v-btn
                          color="green"
                          @click.stop="viewDetails(item.HoaDonId)"
                          >Xem chi tiết
                        </v-btn>
                      </div>
                    </v-expansion-panel-header>
                    <v-expansion-panel-content v-if="expandedIndex === index">
                      <v-card>
                        <v-card-text v-if="chitiets[item.HoaDonId]">
                          <v-table>
                            <thead>
                              <tr>
                                <th class="text-center">STT</th>
                                <th class="text-center">Hình ảnh</th>
                                <th class="text-center">Sản phẩm</th>
                                <th class="text-center">Đơn giá</th>
                                <th class="text-center">Số lượng</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr
                                v-for="(detail, key) in chitiets[item.HoaDonId]"
                                :key="key"
                              >
                                <td class="text-center">{{ (key += 1) }}</td>
                                <td class="text-center">
                                  <img
                                    :src="detail.AnhTour"
                                    style="width: 120px; height: 80px"
                                  />
                                </td>
                                <td class="text-center">
                                  {{ detail.TenTour }}
                                </td>
                                <td class="text-center">{{ detail.Gia }}</td>
                                <td class="text-center">
                                  {{ detail.SoLuong }}
                                </td>
                              </tr>
                            </tbody>
                          </v-table>
                        </v-card-text>
                      </v-card>
                    </v-expansion-panel-content>
                  </v-expansion-panel>
                </v-expansion-panels>
                <v-pagination
                  prev-icon="mdi-menu-left"
                  next-icon="mdi-menu-right"
                  class="pa-8"
                  :length="totalPages"
                  v-model="currentPage"
                ></v-pagination>
              </v-card>
            </v-col>
          </v-row>
        </v-window-item>
      </v-window>
    </v-card>
    <editprofile
      ref="dialog"
      :currentData="currentData"
      @update="getNguoiDung"
    />
    <Loading v-model="dialogloading" />
    <Show
      style="z-index: 1000"
      v-model="showAlert.show"
      :content="showAlert.content"
      :color="showAlert.color"
      :icon="showAlert.icon"
    />
  </div>
</template>

<script>
import nguoidung from "@/service/nguoidung";
import { mapState } from "vuex";
import Editprofile from "./Editprofile.vue";
import hoadon from "../../service/hoadon";
import Show from "@/components/Show.vue";
export default {
  name: "ProfileView",
  data() {
    return {
      tab: null,
      nguoidung: [],
      dialog: false,
      currentData: "",
      image: null,
      currentPage: 1,
      itemsPerPage: 3,
      datas: [],
      expandedIndex: null,
      chitiets: [],
      dialogloading: false,
      showAlert: {
        show: false,
        icon: "$success",
        content: "",
        color: "success",
      },
    };
  },
  computed: {
    ...mapState(["nguoidungId"]),
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
    async viewDetails(index) {
      this.dialogloading = true;
      try {
        const res = await hoadon.getChiTietById(index);
        const HoaDonIdDetails = res.data;
        if (!this.chitiets[index]) {
          this.chitiets[index] = HoaDonIdDetails;
          console.log(this.chitiets[index]);
        } else {
          this.chitiets[index] = HoaDonIdDetails;
        }
        this.expandedIndex = this.displayed.findIndex(
          (item) => item.HoaDonId === index
        );
        this.dialogloading = false;
      } catch (error) {
        console.log(error);
        this.dialogloading = false;
      }
    },
    async getNguoiDung() {
      try {
        const res = await nguoidung.getById(this.nguoidungId);
        this.nguoidung = res.data;
      } catch (error) {
        console.log(error);
      }
    },
    async getHoaDonById() {
      this.dialogloading = true;
      try {
        const res = await hoadon.getById(this.nguoidungId);
        this.datas = res.data;
        this.dialogloading = false;
      } catch (error) {
        console.log(error);
        this.dialogloading = false;
      }
    },
    async HuyDon(id) {
      this.dialogloading = true;
      try {
        const res = await hoadon.huyDon(id);
        this.AlertSuccess(res.data);
        this.dialogloading = false;
        this.getHoaDonById();
      } catch (error) {
        this.AlertError(error.response.data);
        this.dialogloading = false;
      }
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
    this.getNguoiDung();
    this.getHoaDonById();
  },
  components: { Editprofile, Loading, Show },
};
</script>

<style></style>