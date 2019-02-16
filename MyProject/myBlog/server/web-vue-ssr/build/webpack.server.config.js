const webpack=require("webpack");
const merge=require("webpack-merge");
const nodeExternals=require("webpack-node-externals"); 
const baseConfig=require("./webpack.base.config");
const VueSSRServerPlugin = require('vue-server-renderer/server-plugin')


module.exports=merge(baseConfig,{
   /*设置构建目标为node*/

   target:"node",
   devtool:"#source-map",
   entry:"./entry.server.js",
   output:{
     
        filename:"server-bundle.js",
        libraryTarget:"commonjs2"
     
   },
   resolve:{
       alias:{
           
       }
   },
   externals:[
       /*排除捆绑node_modules的依赖 */
       nodeExternals({
       whitelist:/\.css$/
    })
   ],
   plugins:[
    /*生成.json文件 */
    new VueSSRServerPlugin()
   ]

});