<template>
  <div>
    <v-pagination v-model="page" :length="4" circle>
    </v-pagination></div>
</template>

<script>
export default {
  name:'PagtnationView',
  data() {
    return {
      page: 2,
    };
  },
};
</script>

<style>
</style>