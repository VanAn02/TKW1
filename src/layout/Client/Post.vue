<template>
  <div>
    <narbar/>
    <v-container>
      <h1
      class="display-3 font-weight-bold text-center pa-4"
      style="
        font-size: 50px;
        color: #0f5091;
        text-shadow: 10px 10px 14px rgba(0, 0, 0, 0.5);
      "
    >
  {{ baiviet.TieuDe }}
    </h1>
      <div class="row">
        <div class="col-md-12 col-sm-12 col-xs-12">
          <v-img
            class="white--text align-end"
            height="400px"
            :src="baiviet.AnhBaiViet"
          ></v-img>
          <p class="display-1 mb-0 pt-5" text-style="lato,bold,italic">
           {{ baiviet.NgayDang }}
          </p>
          <p class="pt-5 subtitle-1 font-weight-light">
            {{ baiviet.NoiDung }}
          </p>
          <v-img
            class="white--text align-end"
            height="400px"
            :src="baiviet.AnhBaiViet"
          ></v-img>
          <v-img
            class="white--text align-end"
            height="400px"
            :src="baiviet.AnhBaiViet"
          ></v-img>
          <v-img
            class="white--text align-end"
            height="400px"
            :src="baiviet.AnhBaiViet"
          ></v-img>
          <v-img
            class="white--text align-end"
            height="400px"
            :src="baiviet.NguoiDungId"
          ></v-img>
          <v-img
            class="white--text align-end"
            height="400px"
            :src="baiviet.NguoiDungId"
          ></v-img>
          <v-img
            class="white--text align-end"
            height="400px"
            :src="baiviet.NguoiDungId"
          ></v-img>
        </div>
      </div>
    </v-container>
  </div>
</template>
<script>
import baiviet from '@/service/baiviet';

export default {
  name: "PostView",
  data: () => ({
    datas: [],
    page: 1,
    baiviets:[]
  }),
  methods:{
    async getBaiViet(){
      const res = await baiviet.getAll();
      this.baiviets=res.data;
      console.log(res.data);
    }
  },
  created(){
    this.getBaiViet();
  }
};
</script>

