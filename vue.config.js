const path = require('path');

module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        '@': path.join(__dirname, 'resources/'),
      },
    },
    watchOptions: {
      ignored: /node_modules/,
      aggregateTimeout: 200,
      poll: 1000,
    },
  },
};
