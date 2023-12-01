<template>
  <v-app>
    <Navbar class="index" />
      <slidebar/>
    <Main />
    <v-divider></v-divider>
    <!-- <Blog/> -->
    <Footer />
  </v-app>
</template>

<script>
  import Navbar from '../components/Client/Navbar.vue'
  import Slidebar from '../components/Client/Slidebar.vue'
  import Main from '../layout/Client/Main.vue'
  // import Blog from '../layout/Client/Blog.vue' 
  import Footer from '../components/Client/Footer.vue'

  export default {
    name: 'HomeComponet',

    components: {
      Navbar,
      Slidebar,
      Main,
      // Blog,
      Footer,

    },
  }
</script>
<style scoped>
.index{
  z-index: 9999;
}
.rounded-card {
  border-radius: 10px;
}
.v-application .accent--text.text--lighten-2 {
  color: #e65d5d !important;
}
.theme--dark.v-card {
  background-color: #05090c;
  color: #ffffff;
}
.theme--dark.v-btn.v-btn--outlined.v-btn--text {
  border-color: rgba(255, 255, 255, 0.22);
}
</style>