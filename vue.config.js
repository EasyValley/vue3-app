const { defineConfig } = require('@vue/cli-service');
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: {
      '/api': {
        target: 'http://example.com',
        changeOrigin: true,
        secure: false,
        pathRewrite: {
          '^/api': '/',
        },
      },
      '/api-wss': {
        ws: true,
        target: 'http://example.com',
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
