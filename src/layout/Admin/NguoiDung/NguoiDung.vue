<template>
    <div>
      <v-row class="mt-3">
        <v-icon>mdi-account-circle</v-icon>
        <h3 class="ml-2" >Quản lý Người Dùng</h3>
        <v-spacer></v-spacer>
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
                  <th class="text-center">Ảnh Người Dùng</th>
                  <th class="text-center">Họ Và Tên</th>
                  <th class="text-center">Email</th>
                  <th class="text-center">Password</th>
                  <th class="text-center">DiaChi</th>
                  <th class="text-center">Sdt</th>
                  <th class="text-center">Quyen</th>
                  <th class="text-center">Hành động</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(item, index) in datas" :key="index">
                  <td class="text-center">{{ index + 1 }}</td>
                  <td class="text-center pa-1">
                      <img :src="item.NguoiDungHinhAnh" style="width:150px;height:150px;" />
                  </td>
                  <td class="text-center">{{ item.HoVaTen }}</td>
                  <td class="text-center">{{ item.Email }}</td>
                  <td class="text-center">{{ item.Password }}</td>
                  <td class="text-center">{{ item.DiaChi }}</td>
                  <td class="text-center">{{ item.Sdt }}</td>
                  <td class="text-center">{{ item.Quyen }}</td>
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
                    @click="Show(item.NguoiDungId)"
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
  </div>
  <Dialog
    :dialog="dialog"
    @close="dialog = false"
    @updateData="getAll"
    
    :currentData="currentData"
  />
  <thongbao ref="dialog" @deleteData="deleteData" :obj="objId"/>
</template>
      
<script>
  import Dialog from "@/layout/Admin/NguoiDung/Dialog.vue";
  import Thongbao from "@/components/Client/Thongbao.vue";
  import nguoidung from "@/service/nguoidung";
  export default {
    name: "NguoiDungView",
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
        itemsPerPage: 5,
      };
    },
    components: {
      Dialog,
      Thongbao,
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
        const res = await nguoidung.getAll();
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
        const res = await nguoidung.deleteData(id);
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