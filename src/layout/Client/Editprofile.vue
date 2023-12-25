<template>
    <v-row justify="center">
        <v-dialog v-model="dialog" persistent width="10s00">
            <v-card elevation="2">
                <v-card-title>
                    <v-toolbar class="text-center bold-text" style="background-color: rgb(194, 203, 247);">Cập nhập thông
                        tin tài khoản</v-toolbar>
                </v-card-title>
                <v-card-text>
                    <v-form @submit.prevent="update">
                        <v-file-input v-model="image" type="file" accept="image/png, image/jpeg, image/bmp"
                            placeholder="Chọn ảnh" prepend-icon="mdi-camera" label="Hình ảnh"
                            @change="handleImageChange"></v-file-input>
                        <v-text-field v-model="formData.HoVaTen" label="Họ và tên"></v-text-field>
                        <v-text-field v-model="formData.DiaChi" label="Địa chỉ"></v-text-field>
                        <v-text-field v-model="formData.Sdt" label="Số điện thoại"></v-text-field>
                    </v-form>
                </v-card-text>
                <v-card-actions>
                    <v-btn @click="update" color="green">Cập nhập thông tin</v-btn>
                    <v-spacer></v-spacer>
                    <v-btn @click="this.dialog = false" color="red">Đóng</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </v-row>
</template>

<script>
import axios from 'axios';
export default {
    name: 'EditView',
    props: ['currentData'],
    data() {
        return {
            dialog: false,
            formData: {
                NguoiDungId: '',
                NguoiDungHinhAnh: '',
                HoVaTen: '',
                DiaChi: '',
                Sdt: '',
                Email: '',
                Password: '',
                Quyen: ''
            },
            image: null
        };
    },
    methods: {
        handleImageChange(event) {
            this.formData.NguoiDungHinhAnh = event.target.files[0];
        },
        openDialog() {
            this.dialog = true;
        },
        update() {
            axios.put('https://localhost:7125/api/NguoiDung/updateUser/' + this.formData.NguoiDungId,this.formData,
                {
                    headers: {
                        "Content-Type": "multipart/form-data"
                    }
                }).then(res => {
                    console.log(res.data);
                }).catch(error => {
                    console.log(error);
                })
            this.$emit("update")
            this.dialog = false;
        }
    },
    watch: {
        currentData: function () {
            this.formData.NguoiDungId = this.currentData.NguoiDungId,
                this.formData.NguoiDungHinhAnh = this.currentData.NguoiDungHinhAnh,
                this.formData.HoVaTen = this.currentData.HoVaTen,
                this.formData.DiaChi = this.currentData.DiaChi,
                this.formData.Email = this.currentData.Email,
                this.formData.Password = this.currentData.Password,
                this.formData.Quyen = this.currentData.Quyen,
                this.formData.Sdt = this.currentData.Sdt
        }

    }
}
</script>

<style></style>