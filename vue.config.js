const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  // 配置代理服务器
  // devServer: {
  //   proxy: 'http://localhost:5000'
  // }
  devServer: {
    port: 8080,
    proxy: {
      '/api': {
        target: 'http://localhost:8080/',
        // websocket
        ws: true,
        // 是否显示真实地址
        changeOrigin: true,
        pathRewrite:{'^/api':''}
      }
    }
  }
})
