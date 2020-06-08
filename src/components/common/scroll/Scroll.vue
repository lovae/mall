<template>
  <div ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
export default {
  name: "Scroll",
  props: {
    probeType: {
      type: Number,
      default: 0
    },
    pullUpLoad: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      scroll: null
    };
  },
  components: {},
  mounted() {
    // 1.创建BScoll对象
    this.scroll = new BScroll(this.$refs.wrapper, {
      probeType: this.probeType,
      pullUpLoad: this.pullUpLoad,
      click: true
    });
    // 2.监听滚动的位置
    if (this.probeType === 2 || this.probeType === 3) {
      this.scroll.on("scroll", position => {
        this.$emit("scroll", position);
      });
    }
    // 3.监听上拉事件
    if (this.pullUpLoad) {
      this.scroll.on("pullingUp", () => {
        this.$emit("pullingUp");
      });
    }
  },
  methods: {
    scrollTop(x, y, time = 500) {
      this.scroll && this.scroll.scrollTo(x, y, time);
    },
    finishPullUp() {
      this.scroll && this.scroll.finishPullUp();
    },
    refresh() {
      this.scroll && this.scroll.refresh();
    }
  }
};
</script>

<style lang="scss" scoped></style>
