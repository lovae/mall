<template>
  <swiper class="swiper" :options="swiperOption">
    <swiper-slide v-for="(item, index) in bannerlist" :key="index">
      <a :href="item.link">
        <img :src="item.image" @load="swiperImgLoad" />
      </a>
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>

<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
// import "swiper/css/swiper.css";
import "swiper/dist/css/swiper.css";

export default {
  name: "HmSwiper",
  title: "Pagination",
  components: {
    Swiper,
    SwiperSlide
  },
  props: {
    bannerlist: {
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
  methods: {
    swiperImgLoad() {
      this.$emit("swiperImgLoad");
    }
  }
};
</script>

<style lang="scss"></style>
