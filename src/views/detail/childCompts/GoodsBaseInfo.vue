<template>
  <div class="info">
    <div class="title">{{ goods.title }}</div>
    <div class="price">
      <div class="new">{{ goods.newPrice }}</div>
      <span class="old">{{ goods.oldPrice }}</span>
      <mark class="desc" :style="{ backgroundColor: goods.discountBgColor }">{{
        goods.discountDesc
      }}</mark>
    </div>
    <div class="columns">
      <div v-for="(item, index) in goods.columns" :key="index">{{ item }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "GoodsBaseInfo",
  props: {
    goods: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  data() {
    return {};
  },
  components: {},
  created() {},
  methods: {}
};
</script>

<style lang="scss" scoped>
.info {
  padding: 10px;
}
.title {
  font-size: 16px;
  line-height: 24px;
  font-weight: bold;
}
.price {
  display: flex;
  margin: 10px 0 16px;
  .new {
    color: $color-high-text;
    font-size: 24px;
    line-height: 24px;
  }
  .old {
    font-size: 12px;
    align-self: flex-end;
    margin: 0 5px;
    text-decoration: line-through;
  }
  .desc {
    height: 20px;
    padding: 2px 4px;
    border-radius: 4px;
    font-size: 12px;
    color: #fff;
  }
}
.columns {
  display: flex;
  justify-content: space-between;
  padding-bottom: 10px;
  border-bottom: 1px solid #ddd;
  div {
    flex: 1;
    text-align: center;
    &:first-of-type {
      text-align: left;
    }
    &:last-of-type {
      text-align: right;
    }
  }
}
</style>
