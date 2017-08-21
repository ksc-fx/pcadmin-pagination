const path = require('path');
var utils = require('./utils');

module.exports = {
  entry: {
    //项目的入口文件
    app:["./examples/index.js"]
  },
  output: {
    path: path.resolve(__dirname, "../examples"),
    publicPath:"/examples/",
    filename:"bundle.js"
  },
  module: {
    rules: [
      {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
      },
      {
          test: /\.vue$/,
          exclude: /node_modules/,
          loader: 'vue-loader',
          options: {
            loaders: utils.cssLoaders(),
            // loaders: {
            //   scss: 'vue-style-loader!css-loader!sass-loader', // <style lang="scss">
            //   sass: 'vue-style-loader!css-loader!sass-loader?indentedSyntax', // <style lang="sass">
            //   less: 'vue-style-loader!css-loader!less-loader' // <style lang="less">
            // }
          }
      },
    ],
  }
}
