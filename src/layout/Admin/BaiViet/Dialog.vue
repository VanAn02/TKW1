<template>
  <div>
    <v-dialog v-model="dialogAction" max-width="900px">
      <v-card>
        <v-card-title class="text-center">
          <span>{{
            !currentData
              ? "Thêm thông tin bài viết mới "
              : "Cập nhập thông tin bài viết"
          }}</span>
        </v-card-title>
        <v-card-text>
          <v-form>
            <v-container>
              <v-row>
                <v-col cols="12" sm="6">
                  <v-file-input
                    v-model="image"
                    type="file"
                    accept="image/png, image/jpeg, image/bmp"
                    placeholder="Chọn ảnh"
                    prepend-icon="mdi-camera"
                    label="Hình ảnh"
                    @change="handleImageChange"
                  ></v-file-input>
                </v-col>
                <v-col cols="12" sm="6">
                  <v-text-field
                    label="Tiêu Đề*"
                    required
                    v-model="formData.TieuDe"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6">
                  <v-text-field
                    label="Nội Dung*"
                    required
                    v-model="formData.NoiDung"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6">
                  <v-text-field
                  type="date"
                    label=""
                    required
                    v-model="formData.NgayDang"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6">
                  <v-select
                    v-model="formData.NguoiDungId"
                    :items="this.nguoidungs"
                    item-title="HoTen"
                    item-value="Id"
                    label="Người Dùng"
                  ></v-select>
                </v-col>
              </v-row>
            </v-container>
          </v-form>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
          <v-btn color="green" @click="updateData"> Lưu </v-btn>
          <v-spacer> </v-spacer>
          <v-btn color="red" @click="$emit('close'), reSetForm"> Hủy </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>
    
  
  <script>
import baiviet from "@/service/baiviet";
import nguoidung from "@/service/nguoidung";

export default {
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
        Id: "",
        AnhTieuDe:"",
        TieuDe: "",
        NoiDung: "",
        NgayDang: "",
        NguoiDungId: "",
      },
      nguoidungs:[],
      selectedImage: null,
      image: null,
      baiviets: [],
    };
  },
  watch: {
    currentData: function () {
      this.formData.Id = this.currentData.Id;
      this.formData.TieuDe = this.currentData.TieuDe;
      this.formData.NoiDung = this.currentData.NoiDung;
      this.formData.NgayDang = this.currentData.NgayDang;
      this.formData.NguoiDungId = this.currentData.NguoiDung;
      this.formData.AnhTieuDe=this.currentData.AnhTieuDe;
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
    async updateData() {
      console.log(this.formData);
      this.dialogloading = true;
      try {
        if (this.formData.Id === "") {
          this.formData.Id = 0;
          this.formData.AnhTieuDe=this.image;
          console.log(this.formData);
          //console.log(res.data);
          const rs =await baiviet.addData(this.formData);
          console.log(rs);
        } else {
          this.formData.AnhTieuDe = this.image;
          const res = await baiviet.updateData(
            this.formData.Id,
            this.formData
          );
          console.log(res.data);
        }
      } catch (error) {
        console.log(error);
      }
      this.$emit("close");
      this.$emit("updateData");
    },
    async getBaiViet() {
            try {
                const res = await nguoidung.getAll();
                this.nguoidungs = res.data;
                console.log(this.nguoidungs);
            } catch (error) {
                console.log(error);
            }
        },
  },
  created(){
    this.getBaiViet();
  }
};
</script>
  
  <style></style>