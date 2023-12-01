<template>
  <v-app-bar app color="#3853D8" dark>
    <v-toolbar-title>
      <router-link
        to="/"
        style="text-decoration: none"
        class="font-weight-bold text-uppercase white--text"
        >VIETNAM TRAVEL</router-link
      >
    </v-toolbar-title>
    <div
      style="
        position: absolute;
        margin-left: auto;
        margin-right: auto;
        left: 0;
        right: 0;
        text-align: center;
      "
    ></div>
    <v-spacer></v-spacer>
    <v-divider vertical class=""></v-divider>
    <v-autocomplete
      dense
      hide-details
      hide-selected
      placeholder="Search"
      prepend-inner-icon="mdi-magnify"
      append-icon=""
      rounded
      return-object
      style="max-width: 450px"
      solo-inverted
    >
    </v-autocomplete>
    <v-btn to="/Login" text fab plain class="mx-1">
      <v-icon> mdi-account </v-icon>
    </v-btn>
    <template #extension>
      <v-container class="py-0 d-none d-md-block fill-height">
        <div
          class="d-flex fill-height justify-space-between py-2 text-body-2 text-lg-body-1 layout-menu"
        >
          <router-link
            :to="item.route"
            class="white--text font-weight-bold"
            style="text-decoration: none"
            v-for="item in buttons"
            :key="item.route"
          >
            {{ item.title }}
          </router-link>
        </div>
      </v-container>
    </template></v-app-bar
  >
</template>
<script>
export default {
  name: "NabarComponet",
  data: () => ({
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
        route: "/tour1",
      },
      {
        title: "TOUR MIỀN TRUNG",
        route: "/tour2",
      },
      {
        title: "TOUR MIỀN NAM",
        route: "/tour3",
      },
      {
        title: "HƯỚNG DẪN ĐẶT TOUR",
        route: "/Blog",
      },
    ],
  }),
};
</script>
