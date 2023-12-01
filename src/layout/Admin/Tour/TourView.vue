<template>
    <div>
      <v-row class="mt-3">
        <v-icon>mdi-airplane</v-icon>
        <h3 class="ml-2">Quản Lý Tour Du Lịch</h3>
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
                <tr>
                  <th class="text-center">STT</th>
                  <th class="text-center">Tên Tour</th>
                  <th class="text-center">Ảnh Tour</th>
                  <th class="text-center">Mô Tả</th>
                  <th class="text-center">Giá</th>
                  <th class="text-center">Địa Điểm</th>
                  <th class="text-center">Khu Vực</th>
                  <th class="text-center">Thời Gian</th>
                  <th class="text-center">Khởi Hành</th>
                  <th class="text-center">Phương Tiện</th>
                  <th class="text-center">Hành động</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(item, index) in datas" :key="index">
                  <td class="text-center">{{ index + 1 }}</td>
                  <td class="text-center">{{ item.TenTour }}</td>
                  <td class="text-center">
                    <img
                      :src="item.AnhTour"
                      style="width: 120px; height: 100px"
                    />
                  </td>
                  <td class="text-center">{{ item.MoTa }}</td>
                  <td class="text-center">{{ item.Gia }}</td>
                  <td class="text-center">{{ item.KhoiHanh }}</td>
                  <td class="text-center">{{ item.KhuVuc }}</td>
                  <td class="text-center">{{ item.ThoiGian }}</td>
                  <td class="text-center">{{ item.KhoiHanh }}</td>
                  <td class="text-center">{{ item.PhuongTien }}</td>
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
                      @click="Confirm(item.id)"
                    >
                      <v-icon>mdi-delete</v-icon>
                    </v-btn>
                  </td>
                </tr>
              </tbody>
            </v-table>
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
    <thongbao ref="dialog" :obj="objId" @xoaData="xoaData" />
  </template>
      
    
<script>
  import Dialog from "@/layout/Admin/Tour/Dialog.vue";
  import Thongbao from "@/components/Client/Thongbao.vue";
  import tour from "@/service/tour";
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
        dialogloading: false,
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
    methods: {
      Confirm(id) {
        (this.objId = id), this.$refs.dialog.openDialog();
      },
      async getAll(){
          try{
            const rs= await tour.getAll();
            this.datas=rs.data;
            console.log(this.datas)
          }catch(error){
            console.log(error);
          }
      },
      async xoaData(id) {
        try {
          const res = await tour.deleteData(id);
          console.log(res.data);
          this.getAll();
        } catch (error) {
          console.log(error);
        }
      },
     
    },
    created() {
      this.getAll();
    },
  };
  </script>
    
<style></style>