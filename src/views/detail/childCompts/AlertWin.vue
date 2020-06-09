<template>
  <a :href="promotions.alertData.link" class="alert-win">
    <div v-for="(item, index) in promotions.list" :key="index">
      {{ item }}
    </div>
  </a>
</template>

<script>
export default {
  name: "AlertWin",
  props: {
    promotions: {
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
.alert-win {
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 9;
  padding: 30px 50px;
  border-radius: 4px;
  background-color: $color-background;
  box-shadow: 0 2px 4px rgba(#000, 0.3);
  div {
    line-height: 30px;
  }
}
</style>
