# 第一章-CSS概述

## Css简单的概括与历史
- CSS一开始出现就是为了服务网页上的图片和样式。
- CSS是层叠样式，可以一层一层的覆盖。
- HTML的块级元素(div)，以及内联级元素(span)，是构成整个HTML的根本
- SVG处理图片很强，Flash处理动画很强，但这两个对处理图文排布并不强。


## (文档)流

- **文档流是指**：HTML种的元素默认会从左到右，从上而下的排列，就像一条水流一样，但是特殊的CSS样式可以打破这种流向和布局，如float。

- **流体布局**:是利用HTML元素流的特性实现的布局，流具有自适应性，div就是拥有流特性的元素。

- **表格**:拥有自己的流，并不属于流体布局。




## 其他：
- CSS2.1从IE8开始支持
- CSS3的新增的很多特性是为了更丰富网页的体验。






# 第二章-需提前了解的术语和概念

## CSS未定义的行为

指的是个浏览器厂商按照标准开发出来差异，所以表现的行为也不一样，并不是浏览器的Bug,而是这个样式的行为并没有被定义，所以不会表现出来。



# 第三章-流、元素与基本尺寸

HTML元素分为:
块级元素: div(自动铺满)
内联元素：span(由内容决定)

每个元素都是一个盒子，而盒子又分为：
外部盒子:负责装载内部盒子
内部容器盒子:负责装载内容



box-sizing:
content-box,border-box


width height
作用在内容盒子中，而盒子又受于box-sizing影响，
当box-sizing为content的时，定义width就是当前内容的宽度，而不包括border,margin和padding

当box-sizeing为border时,定义的width就是content,margin,padding,border之合。

max-width,max-height
max-width的优先级是最高，比内联，!imporant还高，而且会覆盖width，
max-height:同理
可以使用max-height实现任意高度元素的展开收起动画技术。



盒子：
外部盒子,内部容器盒子

容器盒子里又有四个盒子（结构）:margin padding border content

盒子尺寸：
外部尺寸：由外部元素决定,就拿div为例，div默认会水平铺满整个屏幕，屏幕有多大，div就有多宽。
内部尺寸：由内部元素决定。

width和height是作用在内部容器种

**当显示为:display:inline的时候，其实是两个盒子:inline盒子，inline盒子，而inline盒子是内联元素，内联元素所采用的是内部尺寸,也就是宽度由内容而定，而width又作用在inline的盒子中，所以宽度是无效的。**


替换元素
非替换元素

内联盒模型


包裹性，最大宽度：自适应，内容超出则换行





首选最小宽度：指的是不同的词语，宽度不一样。


幽灵空白节点：
假想盒，名叫“strut”，中文直译为“支柱”，是一个存在于每个“行
框盒子”前面，同时具有该元素的字体和行高属性的 0 宽度的内联盒。




盒子的最高度度为最小字体高度。


内联盒模型:
内容区域
内联盒子
行框盒子
包含盒子

哪些是内联元素：
内联元素指的是外部盒子是内联的元素



# 第四章 盒尺寸

盒尺寸，指的是:border,margin,padding,content

元素尺寸分3种：
固有尺寸：如HTML元素的自身尺寸：比如input元素，它就有固定的尺寸，而不是0
HTML尺寸：指的的HTML的属性尺寸，如img的width和height属性。
CSS尺寸：样式尺寸

尺寸权重：CSS尺寸>HTML尺寸>固有尺寸

替换元素:就是元素的内容受属性值的影响而改变，如：
img,input,object,video,audio等

替换元素大多都是内联元素：inline,inline-block

替换元素与非替换元素只差了一个src:
img没有src属性时，只是一个普通的内联元素。

使用content生成的元素都是替换元素。

使用伪元素改变内容：
div:hover{
    content:url('some img');
}

元素无内容时进行匹配
:empty{
    content:"nothing"
}
