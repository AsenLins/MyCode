# vue-blogUI

> This is a blog UI framework，这是一个用于建立博客的UI框架,基于vue 2.0


### vue 插件开发API
- reder函数的使用
https://cn.vuejs.org/v2/guide/render-function.html#%E6%B7%B1%E5%85%A5-data-%E5%AF%B9%E8%B1%A1

### 开发工具
- storybook:用于查看组件以及状态，以及文档。
- 测试工具未定。


### 组件库的分离与引入思路：
样式使用Scss,并且与组件分离, 組件分为全局引入以及部分引入
全局引入：
引入組件的入口文件:index.js
引入組件的樣式文件:index.scss

部分引入:
使用NodeJs插件：babel-plugin-component去引入组件以及对应的css。
https://github.com/ElementUI/babel-plugin-component

### 组件的语法提示：
vscode的代码段，并发布到vscode上
https://www.cnblogs.com/caipeiyu/p/5507252.html

### 遇到的问题
- 能否让col组件的span动态配置，也就是可以在程序里动态获取span数..



## TODO



#### 布局
- [x] 行 row
- [x] 列 col

**已完成 flex | inline | 栅栏布局。**
```
功能待定：
1. 是否添加列排序..
```

#### 基础样式
- [ ] h,a,p,i,em,code,label,b,input,button

#### 容器
- [ ] 外层容器container
- [ ] 顶部容器header
- [ ] 底部容器footer
- [ ] 侧边栏容器 aside
- [ ] 内容容器 main
  

#### 基本组件
- [ ] 头图 Banner
- [ ] 文章列表 articleList
- [ ] 分类列表 TypeList
- [ ] 头像 pic
- [ ] 菜单导航 nav
- [ ] 时间线 TimeLine
- [ ] MarkDownPanel 用于解析MarkDown内容容器
- [ ] GoTop 用于回到顶部
- [ ] Date 日历


#### 文章组件
- [ ] Tree 文章目录
- [ ] 阅读锚点
- [ ] 阅读进度条（上方）

#### 表单组件
- [ ] 输入搜索
- [ ] 按钮,按钮组
- [ ] 留言文本框（暂不支持富文本）

#### 字体，图标
未定





