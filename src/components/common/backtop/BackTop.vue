<template>
  <div class="back-top">
    <span class="iconfont icon-rising"></span>
  </div>
</template>

<script>
export default {
  name: "BackTop",
  data() {
    return {};
  },
  components: {},
  created() {},
  methods: {}
};
</script>

<style lang="scss" scoped>
.back-top {
  position: fixed;
  z-index: 100;
  right: 10px;
  bottom: 60px;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  line-height: 36px;
  text-align: center;
  background-color: $color-background;
  color: $color-tint;
  box-shadow: 0 2px 4px rgba(#000, 0.3);
  .icon-rising {
    font-size: 24px;
  }
}
</style>
