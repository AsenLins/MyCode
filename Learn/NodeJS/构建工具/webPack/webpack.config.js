const path = require('path');
const webpack = require('webpack');
module.exports = {
 
  entry: { app:path.join(__dirname, 'index')} ,
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath:"/assets/"
  },
  module: {
    loaders: [
    {
        test:"/*.js/",
        loader:"babel-loader",
        exclude: /node_modules/,
        query: {
          presets: ['es2015'] 
        }
    },

    {
      test: /\.css$/,
      use: ['style-loader', 'css-loader?sourceMap']
    }
    ]
  },
  resolve: {
    extensions: ['.json', '.js', '.jsx', '.css']
  },
  devtool: 'source-map',
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: false,
    port: 9000,
    hot:true
  },



};