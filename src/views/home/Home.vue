<template>
  <div id="home">
    <nav-bar>
      <div slot="center">购物街</div>
    </nav-bar>

    <scroll
      class="wrapper"
      ref="scroll"
      :probe-type="3"
      :pull-up-load="true"
      @scroll="wrapperScroll"
      @pullingUp="loadMore"
    >
      <hm-swiper :bannerlist="bannerlist"></hm-swiper>
      <hm-recommend :reclist="reclist"></hm-recommend>
      <tab-control
        :tabtitles="['流行', '新款', '精选']"
        @TabClick="TabClick"
      ></tab-control>
      <goods-list :goodslist="showGoods"></goods-list>
    </scroll>

    <back-top @click.native="backTopClick" v-show="isShowTop"></back-top>
  </div>
</template>

<script>
import HmSwiper from "./childCompts/HmSwiper";
import HmRecommend from "./childCompts/HmRecommend";

import Scroll from "common/scroll/Scroll";
import NavBar from "common/navbar/NavBar";
import TabControl from "content/tabcontrol/TabControl";
import GoodsList from "content/goodslist/GoodsList";
import BackTop from "common/backtop/BackTop";

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
      curIndex: 0,
      isShowTop: false
    };
  },
  components: {
    HmSwiper,
    HmRecommend,
    Scroll,
    NavBar,
    TabControl,
    GoodsList,
    BackTop
  },
  created() {
    // 获取首页图片链接
    this.getHomeMultidata();
    // 获取首页商品数据
    this.getHomeGoods("pop");
    this.getHomeGoods("new");
    this.getHomeGoods("sell");

    // 监听item中每个图片加载完成
    this.$bus.$on("itemImageLoad", () => {
      this.$refs.scroll.refresh();
    });
  },
  computed: {
    showGoods() {
      return this.goods[this.itemsArr[this.curIndex]].list;
    }
  },
  methods: {
    // 页面事件
    TabClick(index) {
      this.curIndex = index;
    },
    backTopClick() {
      this.$refs.scroll.scrollTop(0, 0);
    },
    wrapperScroll(position) {
      this.isShowTop = Math.abs(position.y) > 1000;
    },
    loadMore() {
      this.getHomeGoods(this.itemsArr[this.curIndex]);
      this.$refs.scroll.finishPullUp();
    },

    // 网络请求
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
  .wrapper {
    height: calc(100vh - 93px);
    overflow: hidden;
  }
}
</style>
