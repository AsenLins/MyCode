/*storybook的webpack配置文件，用于配置storybook需要加载的文件。*/
module.exports = {

    resolve: {
      alias: {
        'vue$': 'vue/dist/vue.esm.js'
      }
    },
    module: {
      rules: [
        {
          test: /\.vue$/,
          loader: 'vue-loader'
        },
        {
          test: /\.scss$/,
          use: [
              "style-loader",
              "css-loader", 
              "sass-loader" 
          ]
        }        
      ]
    }
  }