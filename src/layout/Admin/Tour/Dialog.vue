<template>
  <div>
    <v-dialog v-model="dialogAction" max-width="800px">
      <v-card>
        <v-toolbar class="text-center bold-text" style="background-color: rgb(194, 203, 247);"
                :title="this.idEdit != null ? 'Sửa thông tin tour mới' : 'Thêm thông tin tour mới'"></v-toolbar>
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
                    style="width: 150px; height: 150px"
                    alt="1"
                  />
                </v-col>
                <v-col cols="12" sm="6">
                  <v-text-field
                    label="Tên Tour*"
                    required
                    v-model="formData.TenTour"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6">
                        <v-text-field label="Giá bán" required v-model="this.formData.Gia"></v-text-field>
                    </v-col>
                <v-col cols="12" sm="6">
                  <v-text-field
                    label="Khu Vực*"
                    required
                    v-model="formData.KhuVuc"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6">
                  <v-text-field
                    label="Thời Gian*"
                    required
                    v-model="formData.ThoiGian"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6">
                  <v-text-field
                    label="Khởi Hành*"
                    required
                    v-model="formData.KhoiHanh"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6">
                  <v-text-field
                    label="Phương Tiện*"
                    required
                    v-model="formData.PhuongTien"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6">
                  <v-text-field
                    label="Khách Sạn*"
                    required
                    v-model="formData.KhachSan"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" >
                  <v-textarea
                    label="Mô Tả*"
                    required
                    v-model="formData.MoTa"
                  ></v-textarea>
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
import tour from "@/service/tour";
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
        TourId: "",
        AnhTour: "",
        TenTour:"",
        MoTa: "",
        Gia: "",
        KhuVuc: "",
        ThoiGian: "",
        KhoiHanh: "",
        PhuongTien: "",
        KhachSan:"",
      },
      showAlert: {
        show: false,
        icon: "$success",
        content: "",
        color: "success",
      },
      tours: [],
      selectedImage: null,
      image: null,
    };
  },
  watch: {
    currentData: function () {
      this.formData.TourId = this.currentData.TourId;
      this.formData.AnhTour = this.currentData.AnhTour;
      this.formData.TenTour = this.currentData.TenTour;
      this.formData.MoTa = this.currentData.MoTa;
      this.formData.Gia = this.currentData.Gia;
      this.formData.KhuVuc = this.currentData.KhuVuc;
      this.formData.ThoiGian = this.currentData.ThoiGian;
      this.formData.KhoiHanh = this.currentData.KhoiHanh;
      this.formData.PhuongTien = this.currentData.PhuongTien;
      this.formData.KhachSan = this.currentData.KhachSan;
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
      this.formData.TourId = "";
      this.formData.AnhTour = "";
      this.formData.TenTour = "";
      this.formData.MoTa = "";
      this.formData.Gia = "";
      this.formData.KhuVuc = "";
      this.formData.ThoiGian = "";
      this.formData.KhoiHanh = "";
      this.formData.PhuongTien = "";
      this.formData.KhachSan = "";

    },
    async updateData() {
     // console.log(this.formData)

      this.dialogloading = true;
      try {
        if (this.formData.TourId === "") {
          this.formData.TourId = 0;
          this.formData.AnhTour = this.image;
          console.log(this.formData)
          const res = await tour.addData(this.formData);
          console.log(res.data);
          this.dialogloading = false;
          this.AlertSuccess("Thêm mới thông tin thành công");
        } else {
          this.formData.AnhTour = this.image;
          const res = await tour.updateData(
            this.formData.TourId,
            this.formData
          );
          console.log(res.data);
          this.dialogloading = false;
          this.getTour()
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
    async getTour() {
      try {
        const res = await tour.getAll();
        this.tours = res.data;
        console.log(this.tours);
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
    this.getTour();
  },
};
</script>
  
  <style></style>