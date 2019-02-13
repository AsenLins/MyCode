const webpack=require("webpack");
const path=require("path");
const { VueLoaderPlugin } = require('vue-loader');
//判断当前运行环境。
const isProd=process.env.NODE_ENV==="production";

module.exports={
    /*是否生成源码映射,生产环境默认不生成*/
    devtool:isProd?false:"#cheap-module-source-map",
    /*入口设置,入口可以有多个。*/
    entry:{

    },
    /*输出设置*/
    output:{
        /*指定打包输出的目录 */
        path:path.resolve(__dirname,"../dist"),
        /*指定公共路径 */
        publicPath:"/dist/",
        /*指定生成的文件名格式*/
        filename:"[name].[chunkhash].js"
    },

    /*模块解析设置 */
    resolve:{
        /*设置模块别名 */
        alias:{

        }
    },
    /*loader设置,用于设置处理非js文件*/
    module:{
        /*设置不处理的文件规则*/
        noParse:/es6-promise\.js$/,
        /*配置loader */
        rules:[
            {
                /*处理.vue结尾的文件 */
                test:/\.vue$/,
                loader:"vue-loader",
                /*对应loader的选项 */
                options:{
                    /*vue的模板编译选项*/
                    compilerOptions:{
                        /*消除模板标签之间的空格*/
                        preserveWhitespace:false
                    }
                }

            },
            {
                test:/\.js$/,
                loader:"babel-loader",
                /*排除设置*/
                exclude:"/node_modules/"
            }
        ]

    },
    /*性能设置*/
    performance:{
        /*如果一个资源超过 250kb,会触发性能警告,false 为不显示,warning 将信息显示为警告,error 将信息显示为错误 */
        hints:false
    },
    /*插件设置*/
    plugins:[
        /*用于把js和css应用到vue文件*/
        new VueLoaderPlugin()
    ]


}

//const baseConfig=require("./");


