<template>
  <div id="home">
    <nav-bar>
      <div slot="center">购物街</div>
    </nav-bar>
    <hm-swiper :bannerlist="bannerlist"></hm-swiper>
    <hm-recommend :reclist="reclist"></hm-recommend>
    <tab-control :tabtitles="['流行', '新款', '精选']"></tab-control>
    <div style="height:800px;background:blue">内容填充</div>
  </div>
</template>

<script>
import HmSwiper from "./childCompts/HmSwiper";
import HmRecommend from "./childCompts/HmRecommend";

import NavBar from "components/common/navbar/NavBar";
import TabControl from "components/content/tabcontrol/TabControl";

import { getHomeMultidata } from "network/home";

export default {
  name: "Home",
  data() {
    return {
      bannerlist: [],
      reclist: []
    };
  },
  components: {
    HmSwiper,
    HmRecommend,
    NavBar,
    TabControl
  },
  created() {
    getHomeMultidata().then(res => {
      console.log(res);
      this.bannerlist = res.data.banner.list;
      this.reclist = res.data.recommend.list;
    });
  },
  methods: {}
};
</script>

<style lang="scss" scoped>
#home {
  padding: 44px 0 49px;
  .nav-bar {
    background-color: $color-tint;
    color: #fff;
  }
}
</style>
