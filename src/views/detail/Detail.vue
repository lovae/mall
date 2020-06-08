<template>
  <div></div>
</template>

<script>
export default {
  name: "Detail",
  data() {
    return {
      iid: null
    };
  },
  components: {},
  created() {
    this.iid = this.$route.params.iid;
  },
  methods: {}
};
</script>

<style lang="scss" scoped></style>
