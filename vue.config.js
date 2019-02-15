module.exports = {
  assetsDir: 'assets',
  productionSourceMap: false,
  devServer: {
    port: 8604,
    // proxy: 'http://vmi-admin.mro666.cn',
    proxy:"http://localhost:8604"
  }
}