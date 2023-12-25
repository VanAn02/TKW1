<template>
  <div>
    <v-row class="mt-3">
      <v-icon>mdi-airplane</v-icon>
      <h3 class="ml-2">Quản Lý Tour Du Lịch</h3>
      <v-spacer></v-spacer>
      <v-responsive class="mx-auto" max-width="344">
        <v-text-field
          label="Search"
          hide-details="auto"
          prepend-inner-icon="mdi-magnify"
        ></v-text-field>
      </v-responsive>
      <v-btn icon color="green" @click="(dialog = true), (currentData = '')">
        <v-icon>mdi-plus</v-icon>
      </v-btn>
    </v-row>
    <v-row class="mt-8">
      <v-col>
        <v-card>
          <v-table>
            <thead>
              <tr style="background-color: rgb(194, 203, 247)">
                <th class="text-center">STT</th>
                <th class="text-center">Ảnh Tour</th>
                <th class="text-center">Tên Tour</th>
                <th class="text-center">Mô Tả</th>
                <th class="text-center">Giá</th>
                <th class="text-center">Địa Điểm</th>
                <th class="text-center">Khu Vực</th>
                <th class="text-center">Thời Gian</th>
                <th class="text-center">Khởi Hành</th>
                <th class="text-center">Phương Tiện</th>
                <th class="text-center">Khách Sạn</th>
                <th class="text-center">Hành động</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item, index) in displayed" :key="index">
                <td class="text-center">{{ index + 1 }}</td>
                <td class="text-center">
                  <img
                    :src="item.AnhTour"
                    style="width:150px;height:150px;" 
                  />
                </td>
                <td class="text-center">{{ item.TenTour }}</td>
                <td class="text-center">{{ item.MoTa }}</td>
                <td class="text-center">{{ item.Gia }}</td>
                <td class="text-center">{{ item.KhoiHanh }}</td>
                <td class="text-center">{{ item.KhuVuc }}</td>
                <td class="text-center">{{ item.ThoiGian }}</td>
                <td class="text-center">{{ item.KhoiHanh }}</td>
                <td class="text-center">{{ item.PhuongTien }}</td>
                <td class="text-center">{{ item.KhachSan }}</td>
                <td class="text-center">
                  <v-btn
                    icon
                    color="green"
                    size="small"
                    @click="(dialog = true), (currentData = item)"
                  >
                    <v-icon>mdi-pencil</v-icon>
                  </v-btn>
                  <v-btn
                    icon
                    color="red"
                    size="small"
                    @click="Show(item.TourId)"
                  >
                    <v-icon>mdi-delete</v-icon>
                  </v-btn>
                </td>
              </tr>
            </tbody>
          </v-table>
          <show
            style="z-index: 1000"
            v-model="showAlert.show"
            :content="showAlert.content"
            :color="showAlert.color"
            :icon="showAlert.icon"
          />
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
  <thongbao ref="dialog" @deleteData="deleteData" :obj="objId"/>
  <Dialog
    :dialog="dialog"
    @close="dialog = false"
    @updateData="getAll"
    
    :currentData="currentData"
  />
  </div>
</template>
      
    
<script>
import Dialog from "@/layout/Admin/Tour/Dialog.vue";
import Thongbao from "@/components/Client/Thongbao.vue";
import tour from "@/service/tour";
import Show from "@/components/Show.vue";
export default {
  name: "TourView",
  data() {
    return {
      dialog: false,
      currentData: "",
      objId: "",
      datas: [],
      showAlert: {
        show: false,
        icon: "$success",
        content: "",
        color: "success",
      },
      //dialogloading: false,
      currentPage: 1,
      itemsPerPage: 4,
    };
  },
  components: {
    Dialog,
    Thongbao,
    Show,
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
  methods: {
    async getAll() {
      try {
        this.dialogloading = true;
        const res = await tour.getAll();
        this.datas = res.data;
        this.dialogloading = false;
      } catch (error) {
        console.log(error);
        this.dialogloading = false;
      }
    },
    Show(id) {
      (this.objId = id), this.$refs.dialog.openDialog();
    },
    async deleteData(id) {
      try {
        this.dialogloading = true;
        const res = await tour.deleteData(id);
        console.log(res.data);
        this.dialogloading = false;
        this.getAll();
        this.AlertSuccess("Xóa thành công");
      } catch (error) {
        console.log(error);
        this.dialogloading = false;
        this.AlertError("Thao tác xóa chưa được thực hiện");
      }
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
    this.getAll();
  },
};
</script>
    
<style></style>