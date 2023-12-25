
<template>
    <v-container>
        <v-table fixed-header height="800px">
            <thead>
                <tr>
                    <th class="text-left">
                        STT
                    </th>
                    <th class="text-left">
                        Họ và tên
                    </th>
                    <th class="text-left">
                        Số điện thoại
                    </th>
                    <th class="text-left">
                        Ngày dặt
                    </th>
                    <th class="text-left">
                        Ghi chú
                    </th>
                    <th class="text-left">
                        Địa chỉ
                    </th>
                    <th class="text-left">
                        Tổng tiền
                    </th>
                    <th class="text-left">
                        Trạng thái
                    </th>
                    <th class="text-left">
                        Tùy chỉnh
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item, index) in datas" :key="index">
                    <td class="text-left">{{ index + 1 }}</td>
                    <td class="text-left">{{ item.HoVaTen }}</td>
                    <td class="text-left">{{ item.HoaDonSdt }}</td>
                    <td class="text-left">{{ item.NgayTao }}</td>
                    <td class="text-left">{{ item.GhiChu }}</td>
                    <td class="text-left">{{ item.DiaChi }}</td>
                    <td class="text-left">{{ item.TongTien }}</td>
                    <td class="text-left" v-if="item.TrangThai===0">Chưa duyệt</td>
                    <td class="text-left">

                        <v-btn color="red" size="x-small" class="mr-3" icon
                            @click="dialogDelete = true, DeleteId = item.HoaDonId">
                            <v-icon>mdi-delete</v-icon>
                        </v-btn>
                        <v-btn @click="show(item.HoaDonId)" color="green" size="x-small" class="mr-3" icon>
                            <v-icon>mdi-eye</v-icon>
                        </v-btn>
                    </td>
                </tr>
            </tbody>
        </v-table>
        <v-dialog max-width="400" v-model="dialogDelete">
            <c-card>
                <v-alert type="error">
                    <v-row align="center">
                        <v-col cols="11" class="text-center">
                            Bạn có muốn hủy hay không ?
                        </v-col>
                    </v-row>
                    <v-row align="center">
                        <v-col cols="6" class="text-center">
                            <v-btn variant="text" @click="deleteItem">Đồng ý</v-btn>
                        </v-col>
                        <v-col cols="6" class="text-center">
                            <v-btn variant="text" @click="dialogDelete = false">Hủy bỏ</v-btn>
                        </v-col>
                    </v-row>
                </v-alert>
            </c-card>

        </v-dialog>



        <chi-tiet-don-hang :id="this.idHoaDon" v-model="showChiTietDonHang"/>
    </v-container>

</template>

<script>
import axios from 'axios';
import ChiTietDonHang from './ChiTietDonHang.vue';
export default {
  components: { ChiTietDonHang },
    name: 'DanhSachDatTour',
    data() {
        return {
            datas: [],
            DeleteId:'',
            dialogDelete:false,
            showChiTietDonHang:false,
            idHoaDon:''
        }
    },
    methods: {
        getHoaDonById() {
            axios.get('https://localhost:7125/api/HoaDon/getById/' + this.$store.state.nguoidungId).then(res => {
                this.datas = res.data;
                console.log(this.datas);
            }).catch(error => {
                console.log(error);
            })
        },
        deleteItem(){
            axios.get('https://localhost:7125/api/HoaDon/' + this.DeleteId).then(res => {
                this.getHoaDonById();
            }).catch(error => {
                console.log(error);
            })
            this.dialogDelete=false;

        },
        show(id)
        {
            // alert(id)
            this.idHoaDon=id
            this.showChiTietDonHang=true
        }
    },
    created() {
        this.getHoaDonById();
    },
   
}
</script>

<style></style>