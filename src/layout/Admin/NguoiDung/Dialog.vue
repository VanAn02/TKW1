<template>
  <div>
    <v-dialog v-model="dialogAction" max-width="900px">
      <v-card>
        <v-toolbar
          class="text-center bold-text"
          style="background-color: rgb(194, 203, 247)"
          :title="
            this.idEdit != null
              ? 'Sửa thông tin người dùng mới'
              : 'Thêm thông tin người dùng mới'
          "
        ></v-toolbar>
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
                  <img
                    v-if="selectedImage"
                    :src="selectedImage"
                    style="width: 200px; height: 200px"
                    alt="1"
                  />
                </v-col>
                <v-col cols="12" sm="6">
                  <v-text-field
                    label="Họ Và Tên*"
                    required
                    v-model="formData.HoVaTen"
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
                    label="Quyền*"
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
          <v-btn color="green" @click="updateData()"> Lưu </v-btn>
          <v-spacer> </v-spacer>
          <v-btn color="red" @click="$emit('close'), reSetForm"> Hủy </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <show
      style="z-index: 1000"
      v-model="showAlert.show"
      :content="showAlert.content"
      :color="showAlert.color"
      :icon="showAlert.icon"
    />
  </div>
</template>
    
  
<script>
import nguoidung from "@/service/nguoidung";
import Show from "@/components/Show.vue";

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
        NguoiDungId: "",
        NguoiDungHinhAnh: "",
        HoVaTen: "",
        Email: "",
        Password: "",
        DiaChi: "",
        Sdt: "",
        Quyen: "",
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
    };
  },
  watch: {
    currentData: function () {
      this.formData.NguoiDungId = this.currentData.NguoiDungId;
      this.formData.NguoiDungHinhAnh = this.currentData.NguoiDungHinhAnh;
      this.formData.HoVaTen = this.currentData.HoVaTen;
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
    reSetForm() {
      this.formData.NguoiDungId = "";
      this.formData.NguoiDungHinhAnh = "";
      this.formData.HoVaTen = "";
      this.formData.Email = "";
      this.formData.Password = "";
      this.formData.DiaChi = "";
      this.formData.Sdt = "";
      this.formData.Quyen = "";
      this.image=null;
      this.selectedImage="";
    },
    async updateData() {
      this.dialogloading = true;
      try {
        if (this.formData.NguoiDungId === "") {
          this.formData.NguoiDungId = 0;
          this.formData.NguoiDungHinhAnh = this.image;
          console.log(this.formData)
          // const res = await nguoidung.addData(this.formData);
          // console.log(res);
          this.dialogloading = false;
          this.AlertSuccess("Thêm mới thông tin thành công");
        } else {
          this.formData.NguoiDungHinhAnh = this.image;
          const res = await nguoidung.updateData(
            this.formData.NguoiDungId,
            this.formData
          );
          console.log(res.data);
          this.dialogloading = false;
          this.getNguoiDung();
          this.AlertSuccess("Cập nhập thông tin thành công");
        }
      } catch (error) {
        console.log(error);
        this.dialogloading = false;
        this.AlertError("Không thể thực hiện được");
      }
      this.$emit("close");
      this.$emit("updateData");
      this.reSetForm();
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
    this.getNguoiDung();
  },
};
</script>
  
  <style></style>