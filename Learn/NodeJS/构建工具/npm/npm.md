

### npm

npm有两层含义。一层含义是Node的开放式模块登记和管理系统，网址为npmjs.org。另一层含义是Node默认的模块管理器，是一个命令行下的软件，用来安装和管理Node模块。


npm脚本:
```
/*package.json初始化*/
npm init 
/*-y 代表直接創建一個package.json模板*/
npm init -y

"build": "npm run build-js && npm run build-css"
上面的写法是先运行npm run build-js，然后再运行npm run build-css，两个命令中间用&&连接。如果希望两个命令同时平行执行，它们中间可以用&连接。

node npmtest.js 8080 & node npmtest2.js
上面的写法是并行执行。

// 不输出npm命令头
$ npm run -s test

```


npm bin命令显示相对于当前目录的，Node模块的可执行脚本所在的目录（即.bin目录）。

# 项目根目录下执行
$ npm bin
./node_modules/.bin


package.json 中有一个字段是 bin：
```
{
    ...
    "bin": {
        "mywxapp": "./index.js"
    }
}
```

这个字段可以将开发者希望执行的脚本注册到环境变量 (PATH) 中，不同的 key 对应执行不同的脚本。也就是说现在，当我们直接在命令行中执行：

~ mywxapp



npm link 用于直接在其他项目中使用当前的npm包

被调用的模块：
src/myModule$ npm link

/path/to/global/node_modules/myModule -> src/myModule

使用的模块：
src/myProject$ npm link myModule

src/myProject/node_modules/myModule -> /path/to/global/node_modules/myModule