<template>
  <div>
    <narbar/>
    <v-container>
      <p class="display-3 font-weight-light text-center pa-4">
        Kinh nghiệm du lịch Sa Pa 2023 từ A-Z:
      </p>
      <p class="overline text-center">
        By <b>Khánh Trần</b> |Cập nhật 28/1/2023, 12:58 (GMT+7)
      </p>
      <div class="row">
        <div class="col-md-12 col-sm-12 col-xs-12">
          <v-img
            class="white--text align-end"
            height="400px"
            src="https://vietnamtouristvn.com/thumbs/670x500x1/upload/product/sapa2-9715.jpg"
          ></v-img>
          <p class="display-1 mb-0 pt-5" text-style="lato,bold,italic">
            Sa Pa mùa nào đẹp
          </p>
          <p class="pt-5 subtitle-1 font-weight-light">
            Sa Pa có khí hậu mát mẻ nên phù hợp với những chuyến du lịch quanh
            năm. Bạn chỉ cần tránh mùa mưa bão từ tháng 6 đến đầu tháng 8, bởi
            thời tiết cực đoan có thể gây lũ ống, lũ quét, sạt lở... Từ tháng 2
            đến tháng 5, mùa xuân Sa Pa rực rỡ với trăm hoa khoe sắc như mai anh
            đào, đào, mận... Mùa hè từ tháng 6 đến tháng 8 là thời điểm khách du
            lịch đến Sa Pa để trốn nóng, ngắm những thửa ruộng bậc thang xanh
            mát. Mùa thu kéo dài từ tháng 9 đến tháng 11, Sa Pa quyến rũ trong
            màu vàng óng ả của lúa chín và trời dần trở lạnh. Mùa đông đến từ
            tháng 12 đến tháng 2 năm sau, nếu may mắn bạn có thể "săn" tuyết,
            băng giá trên những đỉnh núi.
          </p>
          <!-- <ul class="subtitle-1 font-weight-light">
            <li>Hoang Thi  Van Anh sit amet, consectetuer adipiscing elit.</li>
            <li>Aliquam tincidunt mauris eu risus.</li>
          </ul> -->
          <v-img
            class="white--text align-end"
            height="400px"
            src="https://vietnamtouristvn.com/thumbs/670x500x1/upload/product/sapa2-9715.jpg"
          ></v-img>
          <v-img
            class="white--text align-end"
            height="400px"
            src="https://vietnamtouristvn.com/thumbs/670x500x1/upload/product/sapa2-9715.jpg"
          ></v-img>
          <v-img
            class="white--text align-end"
            height="400px"
            src="https://vietnamtouristvn.com/thumbs/670x500x1/upload/product/sapa2-9715.jpg"
          ></v-img>
          <p class="display-1 mb-0 pt-5" text-style="lato,bold,italic">
            Khách sạn, homestay
          </p>
          <p class="pt-5 subtitle-1 font-weight-light">
            Sa Pa có đủ loại hình lưu trú cho bạn chọn từ nhà nghỉ, homestay ở
            bản, hostel, khách sạn giá rẻ, cho tới các khách sạn 4-5 sao, resort
            cao cấp nằm biệt lập. Resort ở Sa Pa có những nơi đáng chú ý là
            Topas Ecolodge, Sapa Jade Hill, Hôtel de la Coupole - MGallery, Silk
            Path Grand... Nếu chọn homestay, hostel hãy tìm tới các bản như Cát
            Cát, Lao Chải, Tả Van để được tận hưởng không gian thanh bình của
            núi rừng Tây Bắc. Giá phòng dorm từ 100.000 đồng một người, giá
            phòng đôi dạng bungalow từ 500.000 đồng. Một số homestay được yêu
            thích là Eco Palms House, Heaven Sapa, Viettrekking, Phơri's House,
            Sapa Heavenly, Rock Garden, Coóng, Vườn mây, Mộng...
          </p>
          <!-- <ul class="subtitle-1 font-weight-light">
            <li>Hoang Thi  Van Anh sit amet, consectetuer adipiscing elit.</li>
            <li>Aliquam tincidunt mauris eu risus.</li>
          </ul> -->
          <v-img
            class="white--text align-end"
            height="400px"
            src="https://vietnamtouristvn.com/thumbs/670x500x1/upload/product/sapa2-9715.jpg"
          ></v-img>
          <v-img
            class="white--text align-end"
            height="400px"
            src="https://vietnamtouristvn.com/thumbs/670x500x1/upload/product/sapa2-9715.jpg"
          ></v-img>
          <v-img
            class="white--text align-end"
            height="400px"
            src="https://vietnamtouristvn.com/thumbs/670x500x1/upload/product/sapa2-9715.jpg"
          ></v-img>

          <p class="body-1 font-weight-light pt-10"><b>3 COMMENTS</b></p>
          <v-list three-line="true" avatar="true">
            <v-list-item-group v-model="item" color="primary">
              <v-list-item v-for="(item, i) in items" :key="i" inactive="true">
                <v-list-item-avatar>
                  <v-img :src="item.avatar"></v-img>
                </v-list-item-avatar>
                <v-list-item-content>
                  <v-list-item-title v-html="item.title"></v-list-item-title
                  ><v-rating
                    v-model="rating"
                    class=""
                    background-color="warning lighten-3"
                    color="warning"
                    dense
                  ></v-rating>
                  <v-list-item-subtitle
                    v-html="item.subtitle"
                  ></v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </div>
      </div>
    </v-container>
  </div>
</template>
<script>
export default {
  name:"PostComponet",
  
  data: () => ({
    rating: 4.5,
    item: 5,
    items: [
      {
        avatar: "anh.jpg",
        title: "Hoang Thi  Van Anh?",
        subtitle:
          "<span class='text--primary'>Đây là lần đầu tiên tôi đi sapa</span> &mdash;Đây là lần đầu tiên đoàn mình đăng ký đi du lịch ở Sapa, lên đây thời tiết hơi se se lạnh rất thoải mái.\n" +
          "\n",
      },
      {
        avatar: "anh1.jpg",
        title:
          'Hoang Thi  Van Anh <span class="grey--text text--lighten-1">4</span>',
        subtitle:
        "<span class='text--primary'>Đây là lần đầu tiên tôi đi sapa</span> &mdash;Đây là lần đầu tiên đoàn mình đăng ký đi du lịch ở Sapa, lên đây thời tiết hơi se se lạnh rất thoải mái.\n",

      },
    ],
  }),
};
</script>
