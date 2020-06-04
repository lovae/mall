<template>
  <div>
    <tab-bar>
      <tab-bar-item v-slot:item class="tab-bar-item">
        <router-link to="/home" tag="div">
          <i class="iconfont icon-home"></i>
          <span>首页</span>
        </router-link>
      </tab-bar-item>
      <tab-bar-item v-slot:item class="tab-bar-item">
        <router-link to="/category" tag="div">
          <i class="iconfont icon-goods"></i>
          <span>分类</span>
        </router-link>
      </tab-bar-item>
      <tab-bar-item v-slot:item class="tab-bar-item">
        <router-link to="/cart" tag="div">
          <i class="iconfont icon-cart"></i>
          <span>购物车</span>
        </router-link>
      </tab-bar-item>
      <tab-bar-item v-slot:item class="tab-bar-item">
        <router-link to="/profile" tag="div">
          <i class="iconfont icon-people"></i>
          <span>我的</span>
        </router-link>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>
import TabBar from "components/common/tabbar/TabBar";
import TabBarItem from "components/common/tabbar/TabBarItem";
export default {
  name: "MainBar",
  data() {
    return {};
  },
  components: {
    TabBar,
    TabBarItem
  },
  created() {},
  methods: {}
};
</script>

<style lang="scss" scoped>
.tab-bar-item {
  flex: 1;
  text-align: center;
  div {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    span {
      font-size: 14px;
    }
  }
}
.active-bar {
  color: red;
}
</style>
