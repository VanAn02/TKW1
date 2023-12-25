<template>
  <v-dialog :style="{bottom:'300px'}">
    <v-container>
        <v-table>
            <thead>
                <tr>
                    <th>STT</th>
                    <th>Tên Tour</th>
                    <th>Ảnh</th>
                    <th>Số lượng</th>
                    <th>Giá</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item,index) in this.list" :key="item">
                    <td>{{ index+1 }}</td>
                    <td>{{ item.TenTour }}</td>
                    <td><v-img :src="item.Anh"></v-img></td>
                    <td>{{ item.SoLuong }}</td>
                    <td>{{ formatCurrency(item.Gia) }}</td>
                </tr>
            </tbody>
        </v-table>
    </v-container>
  </v-dialog>
</template>

<script>
import axios from 'axios';
export default {
 props:{
    id: {
            type: Number,
            default: 0
        },
 },
 data()
 {
    return{
        list:[]
    }
 },
 methods:{
    getChiTietByIdHoaDon(id)
    {
        axios.get('https://localhost:7125/api/ChiTietHoaDon',{
            params:{
                id:id
            }
        }).then(rs=>{
            this.list=rs.data
            console.log(rs.data)
        }
        ).catch(erro=>{
            alert(erro.message)
        })
    },
    formatCurrency(value) {
      const formatter = new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND',
      });
      return formatter.format(value);
    },
 },
 watch:{
    id(newval)
    {
        alert(newval)
        this.getChiTietByIdHoaDon(newval)
    }
 },
}
</script>

<style>

</style>