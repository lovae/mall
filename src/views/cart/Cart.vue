<template>
  <div>
    <nav-bar>
      <div slot="center">购物车</div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
export default {
  name: "Cart",
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

<style lang="scss" scoped></style>
