<template>
  <div class="rec">
    <a
      class="item"
      :href="item.link"
      v-for="(item, index) in reclist"
      :key="index"
    >
      <img :src="item.image" />
      <span>{{ item.title }}</span>
    </a>
  </div>
</template>

<script>
export default {
  name: "HmRecommend",
  props: {
    reclist: {
      type: Array,
      default() {
        return [];
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
.rec {
  display: flex;
  justify-content: space-evenly;
  text-align: center;
  padding-bottom: 14px;
  background-color: #eee;
  .item {
    color: $color-text;
    padding: 20px 10px;
    background-color: $color-background;
  }
}
</style>
