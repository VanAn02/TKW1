<template>
  <div>
    <v-dialog v-model="dialogAction" max-width="800px">
      <v-card>
        <v-toolbar class="text-center bold-text" style="background-color: rgb(194, 203, 247)" :title="this.idEdit != null
          ? 'Sửa thông tin bài viết mới'
          : 'Thêm thông tin bài viết mới'
          "></v-toolbar>
        <v-card-text>
          <v-form>
            <v-container>
              <v-row>
                <v-col cols="12" sm="6">
                  <v-file-input v-model="image" type="file" accept="image/png, image/jpeg, image/bmp"
                    placeholder="Chọn ảnh" prepend-icon="mdi-camera" label="Hình ảnh"
                    @change="handleImageChange"></v-file-input>
                  <img v-if="selectedImage" :src="selectedImage" style="width: 150px; height: 150px" alt="1" />
                </v-col>
                <v-col cols="12" sm="6">
                  <v-text-field label="Tiêu Đề*" required v-model="formData.TieuDe"></v-text-field>
                </v-col>
                <v-col cols="12" sm="6">
                  <v-select v-model="formData.NguoiDungId" :items="this.nguoidungs" item-title="HoVaTen"
                    item-value="NguoiDungId" label="Người Dùng"></v-select>
                </v-col>
                <v-col cols="12">
                  <v-textarea label="Mô Tả*" required v-model="formData.NoiDung"></v-textarea>
                </v-col>
              </v-row>
            </v-container>
          </v-form>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
          <v-btn color="green" @click="updateData()"> Lưu </v-btn>
          <v-spacer> </v-spacer>
          <v-btn color="red" @click="$emit('close'), reSetForm"> Hủy </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <show style="z-index: 1000" v-model="showAlert.show" :content="showAlert.content" :color="showAlert.color"
      :icon="showAlert.icon" />
  </div>
</template>
    
  
<script>
import Show from "@/components/Show.vue";
import axios from 'axios';

export default {
  components: { Show },
  name: "DialogView",
  props: ["dialog", "currentData"],
  computed: {
    dialogAction: {
      get() {
        return this.dialog;
      },
      set(value) {
        if (!value) {
          this.$emit("close");
        }
      },
    },
  },
  data() {
    return {
      formData: {
        BaiVietId: "",
        AnhBaiViet: "",
        TieuDe: "",
        NoiDung: "",
        NgayDang: "10/10/2023",
        NguoiDungId: "",
      },
      showAlert: {
        show: false,
        icon: "$success",
        content: "",
        color: "success",
      },
      nguoidungs: [],
      selectedImage: null,
      image: null,
      baiviets: [],
    };
  },
  watch: {
    currentData: function () {
      this.formData.BaiVietId = this.currentData.BaiVietId;
      this.formData.AnhBaiViet = this.currentData.AnhBaiViet;
      this.formData.TieuDe = this.currentData.TieuDe;
      this.formData.NgayDang = this.currentData.NgayDang;
      this.formData.NguoiDungId = this.currentData.NguoiDungId;
      this.formData.NoiDung = this.currentData.NoiDung;
    },
    showAlert: {
      deep: true,
      handler(newVal) {
        if (!newVal.show) return;
        setTimeout(() => (this.showAlert.show = false), 2000);
      },
    },
  },
  methods: {

    handleImageChange(event) {
      const selectedFile = event.target.files[0];
      if (selectedFile) {
        this.image = selectedFile;
        this.selectedImage = URL.createObjectURL(selectedFile);
      } else {
        this.image = null;
        this.selectedImage = null;
      }
    },
    reSetForm() {
      this.formData.BaiVietId = "";
      this.formData.AnhBaiViet = "";
      this.formData.TieuDe = "";
      this.formData.NguoiDungId = "";
      this.formData.NgayDang = "";
      this.formData.NoiDung = "";
      this.image = null;
      this.selectedImage = null;
    },
    updateData() 
    {
      this.dialogloading = true;
      if (this.formData.BaiVietId === "") {
        this.formData.BaiVietId = 0;
        this.formData.AnhBaiViet = this.image;
        axios.post('https://localhost:7125/api/BaiViet', this.formData, {
          headers: {
            "Content-Type": "multipart/form-data"
          }
        }).then(res => {
          console.log(res.data);
          this.getBaiViet();
          this.dialogloading = false;
          this.AlertSuccess("Thêm mới thông tin thành công");
          this.$emit("close");
          this.$emit("updateData");
          this.reSetForm();
        })

      } else {
        this.formData.AnhBaiViet = this.image;
        axios.put('https://localhost:7125/api/BaiViet/' + this.formData.BaiVietId, this.formData, {
          headers: {
            "Content-Type": "multipart/form-data"
          }
        }).then(res => {
          console.log(res.data);
          this.dialogloading = false;
          this.getBaiViet();
          this.AlertSuccess("Cập nhập thông tin thành công");
          this.$emit("close");
          this.$emit("updateData");
          this.reSetForm();
        })
      }

    },
    getBaiViet() {
      axios.get('https://localhost:7125/api/NguoiDung').then(res => {
        this.nguoidungs = res.data;
      }).catch(error => {
        console.log(error);
      })
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
    this.getBaiViet();
  },
};
</script>
  
<style></style>