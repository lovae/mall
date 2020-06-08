<template>
  <div class="nav-bar">
    <div class="item-left">
      <slot name="left"></slot>
    </div>
    <div class="item-center">
      <slot name="center"></slot>
    </div>
    <div class="item-right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavBar",
  data() {
    return {};
  },
  created() {},
  methods: {}
};
</script>

<style lang="scss" scoped>
.nav-bar {
  display: flex;
  height: 44px;
  line-height: 44px;
  text-align: center;
  .item-left,
  .item-right {
    width: 60px;
  }
  .item-center {
    flex: 1;
  }
}
</style>
