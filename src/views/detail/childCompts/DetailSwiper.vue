<template>
  <swiper class="swiper" :options="swiperOption">
    <swiper-slide v-for="(item, index) in topImages" :key="index">
      <img :src="item" />
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>

<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/dist/css/swiper.css";
export default {
  name: "DetailSwiper",
  title: "Pagination",
  props: {
    topImages: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return {
      swiperOption: {
        pagination: {
          el: ".swiper-pagination"
        },
        loop: true,
        autoplay: true
      }
    };
  },
  components: {
    Swiper,
    SwiperSlide
  },
  created() {},
  methods: {}
};
</script>

<style lang="scss" scoped>
img {
  transform: translateY(-25%);
}
</style>
