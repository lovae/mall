<template>
  <div>
    <nav-bar>
      <div slot="left" @click="back">
        <i class="iconfont icon-left"></i>
      </div>
      <div slot="center" class="title">
        <span
          v-for="(item, index) in titles"
          :key="index"
          @click="itemClick(index)"
          :class="{ active: curIndex === index }"
          >{{ item }}</span
        >
      </div>
    </nav-bar>

    <detail-swiper class="detail-swiper" :topImages="topImages"></detail-swiper>

    <goods-base-info :goods="goods"></goods-base-info>
    <alert-win
      v-if="goods.promotions"
      :promotions="goods.promotions"
    ></alert-win>
  </div>
</template>

<script>
import NavBar from "common/navbar/NavBar";
import DetailSwiper from "./childCompts/DetailSwiper";
import GoodsBaseInfo from "./childCompts/GoodsBaseInfo";
import AlertWin from "./childCompts/AlertWin";

import { getGoodDetail, Goods } from "network/detail.js";

export default {
  name: "Detail",
  data() {
    return {
      iid: null,
      titles: ["商品", "参数", "评论", "推荐"],
      curIndex: 0,
      topImages: [],
      goods: {}
    };
  },
  components: {
    NavBar,
    DetailSwiper,
    GoodsBaseInfo,
    AlertWin
  },
  created() {
    // 获取商品信息
    this.iid = this.$route.params.iid;
    this.getGoodDetail();
  },
  methods: {
    // 页面事件
    back() {
      this.$router.go(-1);
    },
    itemClick(index) {
      this.curIndex = index;
    },

    // 网络请求
    getGoodDetail() {
      getGoodDetail(this.iid).then(({ result }) => {
        console.log(result);
        this.topImages = result.itemInfo.topImages;
        this.goods = new Goods(
          result.itemInfo,
          result.columns,
          result.promotions
        );
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.icon-left {
  font-size: 32px;
}
.title {
  display: flex;
  padding: 0 40px;
  span {
    flex: 1;
  }
  .active {
    color: $color-tint;
  }
}
.detail-swiper {
  height: 300px;
}
</style>
