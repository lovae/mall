<template>
  <div id="home">
    <nav-bar>
      <div slot="center">首页</div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
export default {
  name: "Home",
  data() {
    return {};
  },
  components: {
    NavBar
  },
  created() {},
  methods: {}
};
</script>

<style lang="scss" scoped>
#home {
  background-color: $color-tint;
  color: #fff;
}
</style>
