<template>
  <v-app-bar app color="#3853D8" dark>
    <v-toolbar-title>
      <router-link to="/" style="text-decoration: none" class="font-weight-bold text-uppercase text-white">VIETNAM
        TRAVEL</router-link>
    </v-toolbar-title>
    <div style="
        position: absolute;
        margin-left: auto;
        margin-right: auto;
        left: 0;
        right: 0;
        text-align: center;
      "></div>
    <v-spacer></v-spacer>
    <v-divider vertical class=""></v-divider>
    <!-- <v-autocomplete dense hide-details hide-selected placeholder="Search" prepend-inner-icon="mdi-magnify" append-icon=""
      rounded return-object style="max-width: 450px" solo-inverted>
    </v-autocomplete> -->
    <v-text-field flat solo-inverted hide-details prepend-inner-icon="mdi-magnify" label="Search" v-model="search"
            @input="searchItems" class="hidden-sm-and-down pl-10 ml-4" />
        <v-spacer />
    <v-btn v-if="this.$store.state.token == null" to="/Login" text fab plain class="mx-1">
      <!-- <v-icon> mdi-account </v-icon> -->
      Đănh nhập
    </v-btn>
    <v-menu v-else transition="slide-y-transition">
      <template v-slot:activator="{ props }">
        <v-btn color="white" v-bind="props">
          <v-icon>mdi-account </v-icon>
        </v-btn>
      </template>
      <v-list style="width:200px;cursor: pointer;">
        <v-list-item>
          <v-list-item-title class="pa-2">
            <router-link to="/userprofile">Hồ sơ</router-link>
          </v-list-item-title>
          <v-list-item-title @click="DangXuat" class="pa-2">Đăng xuất</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>




    <template #extension>
      <v-container class="py-0 d-none d-md-block fill-height">
        <div class="d-flex fill-height justify-space-between py-2 text-body-2 text-lg-body-1 layout-menu">
          <router-link :to="item.route" class="text-white font-weight-bold" style="text-decoration: none"
            v-for="item in buttons" :key="item.route">
            {{ item.title }}
          </router-link>
        </div>
      </v-container>
    </template>
  </v-app-bar>
</template>
<script>
export default {
  name: "NabarComponet",
  data: () => ({
    search: '',
    buttons: [
      {
        title: "TRANG CHỦ",
        route: "/",
      },
      {
        title: "GIỚI THIỆU",
        route: "/introduce",
      },
      {
        title: "TOUR MIỀN BẮC",
        route: "/mienbac",
      },
      {
        title: "TOUR MIỀN TRUNG",
        route: "/mientrung",
      },
      {
        title: "TOUR MIỀN NAM",
        route: "/miennam",
      },
      {
        title: "BÀI VIẾT",
        route: "/Blog",
      },
    ],
    menu: false,
  }),
  methods: {
    searchItems() {
            this.$store.dispatch('Search', this.search);
        },
    DangXuat() {
      if (confirm('Bạn có muốn đăng xuất')) {
        this.$store.dispatch('Logout');
        alert('Bạn đã đăng xuất thành công');
        this.$router.push('/');
      }
    }
  }
};
</script>
