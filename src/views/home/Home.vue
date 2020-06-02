<template>
  <div id="home">
    <nav-bar>
      <div slot="center">首页</div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import { getHomeMultidata } from "network/home";

export default {
  name: "Home",
  data() {
    return {};
  },
  components: {
    NavBar
  },
  created() {
    getHomeMultidata().then(data => {
      console.log(data);
    });
  },
  methods: {}
};
</script>

<style lang="scss" scoped>
#home {
  background-color: $color-tint;
  color: #fff;
}
</style>
