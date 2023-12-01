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
                <tr>
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
                  <td class="text-center">
                      <img :src="item.NguoiDungHinhAnh" style="width:120px;height:80px;" />
                  </td>
                  <td class="text-center">{{ item.HoTen }}</td>
                  <td class="text-center">{{ item.Email }}</td>
                  <td class="text-center">{{ item.Password }}</td>
                  <td class="text-center">{{ item.DiaChi }}</td>
                  <td class="text-center">{{ item.Sdt }}</td>
                  <td class="text-center">{{ item.Quyen }}</td>

                  <td class="text-center">
                    <v-btn
                      icon
                      type="submit"
                      color="green"
                      size="small"
                      @click="(dialog = true), (currentData = item)"
                    >
                      <v-icon>mdi-pencil</v-icon>
                    </v-btn>
                    <v-btn
                      icon
                      type="submit"
                      color="red"
                      size="small"
                      @click="Confirm(item.Id)"
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
            const rs= await nguoidung.getAll();
            this.datas=rs.data;
            console.log(this.datas)
          }catch(error){
            console.log(error);
          }
      },
      async xoaData(id) {
        try {
          const res = await nguoidung.deleteData(id);
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