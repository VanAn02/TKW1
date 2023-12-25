<template>
    <v-dialog v-model="dialog" max-width="500px">
        <v-card>
            <v-card-title class="primary white--text">
                <span class="headline">Đổi mật khẩu</span>
            </v-card-title>
            <v-card-text>
                <v-text-field v-model="data.Password" label="Nhập mật khẩu mới"></v-text-field>
            </v-card-text>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="primary" @click="Change">Đổi mật khẩu</v-btn>
                <v-btn text @click="closeDialog">Hủy</v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>
  
<script>
import axios from 'axios';
export default {
    data() {
        return {
            data: {
                NguoiDungId: '',
                NguoiDungHinhAnh: '',
                HoVaTen: '',
                Email: '',
                DiaChi: '',
                Sdt: '',
                Quyen: '',
                Password: ''
            }
        };
    },
    props: ['dialogEdit', 'item'],
    computed: {
        dialog: {
            get() {
                return this.dialogEdit;
            },
            set(value) {
                if (!value) {
                    this.$emit('close');
                }
            }
        }
    },
    watch: {
        item: function () {
            this.data.Password = this.item.Password;
            this.data.NguoiDungHinhAnh=this.item.NguoiDungHinhAnh;
            this.data.Email=this.item.Email;
            this.data.HoVaTen=this.item.HoVaTen;
            this.data.DiaChi=this.item.DiaChi;
            this.data.NguoiDungId=this.item.NguoiDungId;
            this.data.Quyen=this.item.Quyen;
            this.data.Sdt=this.item.Sdt;
        }
    },
    methods: {
        closeDialog() {
            this.$emit('close');
        },
        Change() {
            axios.put('https://localhost:7125/api/NguoiDung/updateUser/' + this.data.NguoiDungId, this.data,
                {
                    headers: {
                        "Content-Type": "multipart/form-data"
                    }
                }).then(res => {
                    console.log(res.data);
                    alert("Đổi mật khẩu thành công");
            this.$emit('close');

                }).catch(error => {
                    console.log(error);
                })
        }
    }
};
</script>
  
<style scoped>
/* Thêm CSS tùy chỉnh cho dialog đặt hàng */
</style>
  