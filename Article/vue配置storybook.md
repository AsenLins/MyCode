## vue配置storybook,无法识别.vue文件。
###### 创建于:2018-11-30,关键字：storybook,vue配置storybook

选择要添加storybook的vue目录执行命令：

> npx -p @storybook/cli sb init

 安装storybook需要的依赖：

```
//如果有cnpm则用cnpm安装，这样会更快。
cnpm i --save-dev @storybook/vue
cnpm i --save vue
cnpm i --save-dev babel-loader vue-loader vue-template-compiler
cnpm i --save-dev @babel/core babel-preset-vue
```

**由于storybook的初始化没有帮我们配置webpack.config.js，这里我们要自己配置，不然storybook会无法识别.vue文件**



在生成好的.storybook目录新建一个webpack.config.js,配置如下：

```
module.exports = {
    module: {
      rules: [
        {
            test: /\.vue$/,
            loader: 'vue-loader'
          }       
      ]
    }
  }
```


配置完成后,运行storybook
> npm run storybook



