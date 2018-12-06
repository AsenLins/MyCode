## JSX语法
JSX语法允许Js中掺杂HTML和CSS,出自React

- 遇到<号就会按照html去解析。
- 遇到{号就会按照Js去解析。
- 没有if,只有**三目运算**。
- 可以使用**数组**。
- 支持语法检查，和错误追踪。

```
var ary=[
    <div>i am son</div>,
    <div>i am son2</div>
]

    render(
    <div>
        {this.name}
        <div>
            {this.ary}
        </div>
    </div>
    )

```

Vue中的JSX

将 h 作为 createElement 的别名是 Vue 生态系统中的一个通用惯例，实际上也是 JSX 所要求的，如果在作用域中 h 失去作用，在应用中会触发报错。