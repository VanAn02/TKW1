<template>
  <div>
    <v-dialog v-model="dialogAction" max-width="900px">
      <v-card>
        <v-card-title class="text-center">
          <span>{{
            !currentData
              ? "Thêm thông tin người dùng mới "
              : "Cập nhập thông tin người dùng"
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
                    label="Ảnh Người Dùng"
                    @change="handleImageChange"
                  ></v-file-input>
                </v-col>
                <v-col cols="12" sm="6">
                  <v-text-field
                    label="Họ và Tên*"
                    required
                    v-model="formData.HoTen"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6">
                  <v-text-field
                    label="Email*"
                    required
                    v-model="formData.Email"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6">
                  <v-text-field
                    label="Password*"
                    required
                    v-model="formData.Password"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6">
                  <v-text-field
                    label="Địa Chỉ*"
                    required
                    v-model="formData.DiaChi"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6">
                  <v-text-field
                    label="Sdt*"
                    required
                    v-model="formData.Sdt"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6">
                  <v-text-field
                    label="Quyen*"
                    required
                    v-model="formData.Quyen"
                  ></v-text-field>
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
        AnhNguoiDung: "",
        HoTen: "",
        Email: "",
        Password: "",
        DiaChi: "",
        Sdt: "",
        Quyen: "",

      },
      nguoidungs: [],
      selectedImage: null,
      image: null,
    };
  },
  watch: {
    currentData: function () {
      this.formData.Id = this.currentData.Id;
      this.formData.AnhNguoiDung = this.currentData.AnhNguoiDung;
      this.formData.HoTen = this.currentData.HoTen;
      this.formData.Email = this.currentData.Email;
      this.formData.Password = this.currentData.Password;
      this.formData.DiaChi = this.currentData.DiaChi;
      this.formData.Sdt = this.currentData.Sdt;
      this.formData.Quyen = this.currentData.Quyen;

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
          this.formData.AnhNguoiDung = this.image;
          console.log(this.formData);
          //console.log(res.data);
          const rs = await nguoidung.addData(this.formData);
          console.log(rs);
        } else {
          this.formData.AnhNguoiDung = this.image;
          const res = await nguoidung.updateData(this.formData.Id, this.formData);
          console.log(res.data);
        }
      } catch (error) {
        console.log(error);
      }
      this.$emit("close");
      this.$emit("updateData");
    },
    async getNguoiDung() {
      try {
        const res = await nguoidung.getAll();
        this.nguoidungs = res.data;
        console.log(this.nguoidungs);
      } catch (error) {
        console.log(error);
      }
    },
  },
  created() {
    this.getNguoiDung();
  },
};
</script>
    
    <style></style>