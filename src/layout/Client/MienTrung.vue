<template>
    <div style="margin: 20px;height: 150vh;">
        <v-container>
            <v-row>
                <v-col sm="4" v-for="(tour, i) in display" :key="i" :class="tour.class">
                    <v-card class="mx-auto mt-6 card1" color="white">
                        <v-card class="d-flex flex-column" flat outlined tile>
                            <v-img :src="tour.AnhTour" class="flex-grow-1" style="object-fit: cover"></v-img>
                            <v-card-text class="mt-n4">
                                <strong class="text-uppercase font-weight-bold">{{
                                    tour.TenTour
                                }}</strong>
                                <br />
                            </v-card-text>
                            <v-card-text class="mt-n4">
                                <span style="font-size: 20px; color: orange">&#128176;</span>
                                <strong class="font-weight-bold text-primary discounted-price">{{ formatCurrency(tour.Gia)
                                }}</strong>
                            </v-card-text>
                            <v-card-text class="mt-n4">
                                <span style="font-size: 20px; color: red">&#128197;</span>
                                <strong class="font-weight-bold text-primary discounted-price">{{ tour.KhuVuc }}</strong>
                            </v-card-text>
                            <v-card-text class="mt-n4">
                                <span style="font-size: 20px; color: green">&#9992;</span>
                                <strong class="font-weight-bold text-primary discounted-price">{{ tour.KhoiHanh }}</strong>
                            </v-card-text>
                        </v-card>
                        <v-card-actions>
                            <router-link :to="'/detail/' + tour.TourId" style="color: black">
                                <v-btn rounded color="red"> Chi Tiết </v-btn>
                            </router-link>
                        </v-card-actions>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
        <v-pagination prev-icon="mdi-menu-left" next-icon="mdi-menu-right" class="pa-8" :length="totalPages"
            v-model="currentPage"></v-pagination>
    </div>
</template>
<script>
import axios from 'axios';
export default {
    name: "MainComponet",
    data: () => ({
        datas: [],
        page: 1,
        tours: [],
         currentPage: 1,
        itemsPerPage: 6,
    }),
    computed: {
        display() {
            if (this.tours && this.tours.length > 0) {
                const startIndex = (this.currentPage - 1) * this.itemsPerPage;
                const endIndex = startIndex + this.itemsPerPage;
                return this.tours.slice(startIndex, endIndex);
            } else {
                return [];
            }
        },
        totalPages() {
            return Math.ceil(this.tours.length / this.itemsPerPage);
        },
    },
    methods: {
        getItemByMienBac(){
            axios.get('https://localhost:7125/api/Tour/getbyMien?value='+"MIỀN TRUNG").then(res=>{
                this.tours=res.data;
            }).catch(error=>{
                console.log(error);
            })
        },
        formatCurrency(value) {
            const formatter = new Intl.NumberFormat('vi-VN', {
                style: 'currency',
                currency: 'VND',
            });
            return formatter.format(value);
        },
    },
    created() {
        this.getItemByMienBac();
    }
};
</script>
  
<style>
.container {
    padding: 0px !important;
}

.v-btn.withoutupercase {
    text-decoration: none;
}

.v-chip.v-size--default {
    border-radius: 50px !important;
    font-size: 14px !important;
    height: 40px !important;
    width: 40px !important;
}

.v-card--reveal {
    align-items: center;
    bottom: 0;
    justify-content: center;
    opacity: 0.5;
    position: absolute;
    width: 100%;
}

.card1 {
    z-index: 10;
}

.card2 {
    z-index: 1;
}
</style>