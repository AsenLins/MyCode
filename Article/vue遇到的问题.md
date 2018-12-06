## Vue遇到的问题

组件传参报错:

```
Invalid prop: type check failed for prop "xxxxx". Expected Number, got String.

```

不用v-bind，直接双引号传值，传过去的是字符串

> 使用 :xxxx="value" 即可。