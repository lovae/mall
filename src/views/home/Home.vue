<template>
  <div id="home">
    <nav-bar>
      <div slot="center">购物街</div>
    </nav-bar>
    <hm-swiper :bannerlist="bannerlist"></hm-swiper>
    <hm-recommend :reclist="reclist"></hm-recommend>
    <tab-control
      :tabtitles="['流行', '新款', '精选']"
      @TabClick="TabClick"
    ></tab-control>
    <goods-list :goodslist="showGoods"></goods-list>
  </div>
</template>

<script>
import HmSwiper from "./childCompts/HmSwiper";
import HmRecommend from "./childCompts/HmRecommend";

import NavBar from "components/common/navbar/NavBar";
import TabControl from "components/content/tabcontrol/TabControl";
import GoodsList from "components/content/goodslist/GoodsList";

import { getHomeMultidata, getHomeGoods } from "network/home";

export default {
  name: "Home",
  data() {
    return {
      bannerlist: [],
      reclist: [],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] }
      },
      itemsArr: ["pop", "new", "sell"],
      curIndex: 0
    };
  },
  components: {
    HmSwiper,
    HmRecommend,
    NavBar,
    TabControl,
    GoodsList
  },
  created() {
    // 获取首页图片链接
    this.getHomeMultidata();
    // 获取首页商品数据
    this.getHomeGoods("pop");
    this.getHomeGoods("new");
    this.getHomeGoods("sell");
  },
  computed: {
    showGoods() {
      return this.goods[this.itemsArr[this.curIndex]].list;
    }
  },
  methods: {
    TabClick(index) {
      this.curIndex = index;
    },
    getHomeMultidata() {
      getHomeMultidata().then(res => {
        this.bannerlist = res.data.banner.list;
        this.reclist = res.data.recommend.list;
      });
    },
    getHomeGoods(type) {
      const page = this.goods[type].page + 1;
      getHomeGoods(type, page).then(res => {
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page = page;
      });
    }
  }
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
