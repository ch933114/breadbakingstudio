const { defineConfig } = require('@vue/cli-service');
const webpack = require('webpack'); // 引入 webpack

module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    plugins: [
      new webpack.DefinePlugin({
        '__VUE_PROD_HYDRATION_MISMATCH_DETAILS__': JSON.stringify(false),
      }),
    ],
  },
  publicPath: process.env.NODE_ENV === 'production'
    ? '/breadbakingstudio/'  // 這是你部署到 GitHub Pages 的路徑
    : '/'
});