<template>
  <div class="tab-control">
    <div
      class="item"
      v-for="(item, index) in tabtitles"
      :key="index"
      @click="itemActive(index)"
    >
      <span :class="{ active: index === curIndex }">{{ item }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabControl",
  data() {
    return {
      curIndex: 0
    };
  },
  props: {
    tabtitles: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  components: {},
  created() {},
  methods: {
    itemActive(index) {
      this.curIndex = index;
      this.$emit("TabClick", index);
    }
  }
};
</script>

<style lang="scss" scoped>
.tab-control {
  display: flex;
  line-height: 40px;
  height: 40px;
  text-align: center;
  background-color: $color-background;
  .item {
    flex: 1;
  }
  .active {
    color: $color-tint;
    padding: 6px;
    border-bottom: 2px solid $color-tint;
  }
}
</style>
