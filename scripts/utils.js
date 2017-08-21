var ExtractTextPlugin = require('extract-text-webpack-plugin')

exports.cssLoaders = function (options) {
  options = options || {}
 
  var cssLoader = {
    loader: 'css-loader',
    options: {  //options是loader的选项配置
      minimize: process.env.NODE_ENV === 'production', //生成环境下压缩文件
      sourceMap: options.sourceMap  //根据参数是否生成sourceMap文件
    }
  }
  function generateLoaders (loader, loaderOptions) {  //生成loader
    var loaders = [cssLoader] // 默认是css-loader
    if (loader) { // 如果参数loader存在
      loaders.push({
        loader: loader + '-loader',
        options: Object.assign({}, loaderOptions, { //将loaderOptions和sourceMap组成一个对象
          sourceMap: options.sourceMap
        })
      })
    }
    if (options.extract) { // 如果传入的options存在extract且为true
      return ExtractTextPlugin.extract({  //ExtractTextPlugin分离js中引入的css文件
        use: loaders,  //处理的loader
        fallback: 'vue-style-loader' //没有被提取分离时使用的loader
      })
    } else {
      return ['vue-style-loader'].concat(loaders)
    }
  }
  return {  //返回css类型对应的loader组成的对象 generateLoaders()来生成loader
    css: generateLoaders(),
    postcss: generateLoaders(),
    less: generateLoaders('less'),
    sass: generateLoaders('sass', { indentedSyntax: true }),
    scss: generateLoaders('sass'),
    stylus: generateLoaders('stylus'),
    styl: generateLoaders('stylus')
  }
}