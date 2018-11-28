### canvas

- 官方开发文档：https://www.w3.org/TR/2dcontext/

- canvas是一个行内元素（inline-block）
- canvas会把所有绘制的图片都保留，除非使用clearRect
- canvas都是先描述状态（旋转，剪裁背景等..），再开始动作（绘画）.
- canvas的度数都是用弧度表示。

### canvas 坐标系
canvas使用的是W3C坐标系，也就是y轴向下，数学坐标系是y轴向上。





### canvas 对象

属性：
```
var canvas=document.getElementById('id');
var ctx=canvas.getContext('2d');
/*获取画布宽度与高度*/

```

方法：
```
var canvas=document.getElementById('id');

/*获取上下文2d对象*/
var ctx=canvas.getContext('2d');



```


矩形方法：
```

fillRect
strokeRect
clearRect

rect(x,y,width,height):需要配合fill或fillStroke使用
fill():填充
fillStroke:填充路徑

```