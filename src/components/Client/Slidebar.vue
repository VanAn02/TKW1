<template>
  <v-carousel class="my-10" hide-delimiters cycle>
    <v-carousel-item v-for="(slide, i) in slides" :key="i">
      <div class="d-flex justify-center align-center fill-height">
        <v-img :src="slide.src" object-fit="cover" width="700" height="730"></v-img>
      </div>
    </v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
  name: "SlidebarComponet",
  data() {
    return {
      slides: [
        {
          src: "https://vietnamtouristvn.com/thumbs/868x416x1/upload/photo/z46547405701905ef678473539c338e4d651eeb678f64b-1019.jpg",
        },
        {
          src: "https://vietnamtouristvn.com/thumbs/868x416x1/upload/photo/z46547405872644c2aca1f29df18d143122013e550cb4f-5175.jpg",
        },
        {
          src: "https://vietnamtouristvn.com/thumbs/868x416x1/upload/photo/z4654740589886f9dde4b6f742f041bbe30da24a78a94e-86180.jpg",
        },
        {
          src: "https://vietnamtouristvn.com/thumbs/868x416x1/upload/photo/z4654740573060a0d396e36543b9d8a252c50c431aec32-1364.jpg",
        },
      ],
    };
  },
};
</script>

<style>
.v-carousel {
  width: 100%;
}

.v-carousel-item {
  height: 100vh;
  width: 100%;
}

.v-img {
  object-fit: cover;
  height: 100%;
}
</style>
