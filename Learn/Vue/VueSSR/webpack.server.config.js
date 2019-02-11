const webpack = require('webpack')
const merge = require('webpack-merge')
const base = require('./webpack.base.config')
const VueSSRServerPlugin = require('vue-server-renderer/server-plugin');
module.exports = merge(base, {

  devtool: '#source-map',
  entry: './entry-server.js',
  target: 'node',
  devtool: 'source-map',
  output: {
    filename: 'server-bundle.js',
    libraryTarget: 'commonjs2'
  },
  plugins: [
    new VueSSRServerPlugin()
  ]

});