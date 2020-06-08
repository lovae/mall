module.exports = {
  css: {
    loaderOptions: {
      scss: {
        prependData: `@import "~@/assets/css/_variable.scss";`
      }
    },
    sourceMap: true
  },
  configureWebpack: {
    resolve: {
      alias: {
        assets: "@/assets",
        utils: "@/utils",
        common: "@/components/common",
        content: "@/components/content",
        network: "@/network",
        views: "@/views"
      }
    }
  }
};
