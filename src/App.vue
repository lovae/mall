<template>
  <div id="app">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <main-bar></main-bar>
  </div>
</template>

<script>
import MainBar from "content/mainbar/MainBar";
export default {
  name: "App",
  components: {
    MainBar
  }
};
</script>

<style lang="scss">
@import "../node_modules/normalize.css/normalize.css";
@import "assets/css/base.scss";
</style>
