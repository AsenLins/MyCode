const path=require("path");
const webpack=require("webpack");
const { VueLoaderPlugin } = require('vue-loader')
console.log("path",__dirname);
module.exports = {
    devtool:'#cheap-module-source-map',
    output: {
      path: path.resolve(__dirname, './dist/'),
      publicPath: '/dist/',
      filename: '[name].[chunkhash].js'
    },
    
  

    module:{
      noParse: /es6-promise\.js$/,
      rules:[
        {
          
          test: /\.vue$/,
          loader: 'vue-loader',
          options: {
            compilerOptions: {
              preserveWhitespace: false
            }
          }         
        }
      ]
    },
    plugins:[new VueLoaderPlugin()    ]

}