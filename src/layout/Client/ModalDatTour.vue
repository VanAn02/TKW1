<template>
    <v-dialog max-width="800px">
        <v-card>
            <v-toolbar class="text-center bold-text" style="background-color: rgb(194, 203, 247);"
                title="Đặt tour"></v-toolbar>
            <v-card-text>
                <v-form>
                    <v-container>
                        <v-row>
                            <v-col cols="12" sm="6">
                                <v-text-field v-model="this.formData.HoVaTen" label="Họ và tên" required></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="6">
                                <v-text-field v-model="this.formData.HoaDonSdt" label="Số điện thoại" required></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="6">
                                <v-text-field v-model="this.formData.DiaChi" label="Địa chỉ" required></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="6">
                                <v-text-field v-model="this.formData.SoLuong" label="Số lượng" type="number" required></v-text-field>
                            </v-col>
                            <!-- <v-col cols="12" sm="6">
                                <v-text-field label="Ngày khởi hành" type="date" required></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="6">
                                <v-text-field label="Ngày dự kiến" required type="date"></v-text-field>
                            </v-col> -->
                            <v-col cols="12">
                                <v-textarea v-model="this.formData.GhiChu" label="Nội dung" required></v-textarea>
                            </v-col>
                        </v-row>
                    </v-container>
                </v-form>
            </v-card-text>
            <v-divider></v-divider>
            <v-card-actions>
                <v-btn @click="dattour()" color="green"> Đặt </v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script>
import axios from 'axios';
export default {
    name: 'DatTour',
    props: {
        TourId: {
            type: Number,
            default: -1
        },
    },
    data() {
        return {
            formData:{
                HoVaTen:'',
                DiaChi:'',
                NguoiDungId:'',
                HoaDonSdt:'',
                GhiChu:'',
                SoLuong:'',
                TourId:''
            }
        }
    },
    methods:{
        dattour()
        {
            console.log(this.formData)
            axios.post("https://localhost:7125/api/HoaDon",this.formData).then(rs=>{
                this.$emit('close')
                alert("Bạn đặt thành công")
            }).catch(error=>{
                alert(error.message)
            })
        }
    },
    created(){
        this.formData.NguoiDungId=this.$store.state.nguoidungId;
    },
    watch:{
        TourId(newval){
            this.formData.TourId=newval
        }
    }
    
}
</script>

<style></style>