<template>
  <div>
    <v-dialog v-model="dialogAction" max-width="900px">
      <v-card>
        <v-card-title class="text-center">
          <span>{{
            !currentData
              ? "Thêm thông tin tour mới "
              : "Cập nhập thông tin tour"
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
                    label="Ảnh Tour"
                    @change="handleImageChange"
                  ></v-file-input>
                </v-col>
                <v-col cols="12" sm="6">
                  <v-text-field
                    label="Tên Tour*"
                    required
                    v-model="formData.TenTour"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6">
                  <v-text-field
                    label="Mô Tả*"
                    required
                    v-model="formData.MoTa"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6">
                  <v-text-field
                    label="Giá*"
                    required
                    v-model="formData.Gia"
                  ></v-text-field>
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
import tour from "@/service/tour";

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
        TourId: "",
      },
      tours:[],
      selectedImage: null,
      image: null,
      tour: [],
    };
  },
  watch: {
    currentData: function () {
      this.formData.Id = this.currentData.Id;
      this.formData.AnhTieuDe=this.currentData.AnhTieuDe;
      this.formData.TieuDe = this.currentData.TieuDe;
      this.formData.NoiDung = this.currentData.NoiDung;
      this.formData.NgayDang = this.currentData.NgayDang;
      this.formData.TourId = this.currentData.Tour;
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
          const rs =await tour.addData(this.formData);
          console.log(rs);
        } else {
          this.formData.AnhTieuDe = this.image;
          const res = await tour.updateData(
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
    async getTour() {
            try {
                const res = await tour.getAll();
                this.tours = res.data;
                console.log(this.tours);
            } catch (error) {
                console.log(error);
            }
        },
  },
  created(){
    this.getTour();
  }
};
</script>
  
  <style></style>