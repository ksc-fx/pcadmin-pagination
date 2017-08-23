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
          exclude: [new RegExp(`node_modules\\${path.sep}(?!pcadmin-.*)`)],
          loader: 'babel-loader',
      },
      {
          test: /\.vue$/,
          loader: 'vue-loader',
          options: {
            loaders: utils.cssLoaders(),
          }
      },
      {
          test: /\.css$/,
          use: [
              'style-loader',
              'css-loader'
          ]
      },
      {
          test: /\.less$/,
          use: [
              'style-loader',
              'css-loader',
              'less-loader'
          ]
      },
      {
          test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
          loader: 'url-loader',
          options: {
              limit: 10000
          }
      },
      {
          test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
          loader: 'url-loader',
          options: {
              limit: 10000
          }
      },
      {
          test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
          loader: 'url-loader',
          options: {
              limit: 10000
          }
      }
    ],
  }
}
