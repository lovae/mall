<template>
  <div class="list-item">
    <div class="img-box">
      <img :src="item.show.img" @load="imageLoad" />
    </div>
    <div class="item-info">
      <p>{{ item.title }}</p>
      <div class="bot">
        <span>{{ item.price }}</span>
        <div>
          <span class="iconfont icon-shoucang"></span>
          <span>{{ item.cfav }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "GoodsListItem",
  data() {
    return {};
  },
  props: {
    item: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  components: {},
  created() {},
  methods: {
    imageLoad() {
      this.$bus.$emit("itemImageLoad");
    }
  }
};
</script>

<style lang="scss" scoped>
.list-item {
  width: 48%;
  margin-bottom: 14px;
  .img-box {
    height: 250px;
    overflow: hidden;
    &,
    img {
      border-radius: 4px;
    }
  }
  .item-info {
    p {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .bot {
      display: flex;
      justify-content: space-between;
      line-height: 20px;
      & > span {
        color: $color-tint;
      }
      .icon-shoucang {
        font-size: 14px;
        margin-right: 4px;
      }
    }
  }
}
</style>
