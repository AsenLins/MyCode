const app=require("express")();
const bundleBuilder=require("vue-server-renderer");
const path=require("path");

const fs=require("fs");

function resolveFilePath(filePath){
    return path.resolve(__dirname,filePath);
}
const resolve = file => path.resolve(__dirname, file)

const templatePath=resolveFilePath("./template/default.html");
const template=fs.readFileSync(templatePath,"utf-8");

//const template = fs.readFileSync(resolve('./src/templates/index.template.html'), 'utf-8')
// 调用vue-server-renderer的createBundleRenderer方法创建渲染器，并设置HTML模板，之后将服务端预取的数据填充至模板中
function createRenderer (bundle, options) {
  return bundleBuilder.createBundleRenderer(bundle, Object.assign(options, {
    template,
	 basedir: resolve('./dist'),
    runInNewContext: false
  }))
}

let renderer
let readyPromise
  // 生产环境下，引入由webpack vue-ssr-webpack-plugin插件生成的server bundle
  const bundle = require('./dist/vue-ssr-server-bundle.json')
  // 引入由 vue-server-renderer/client-plugin 生成的客户端构建 manifest 对象。此对象包含了 webpack 整个构建过程的信息，从而可以让 bundle renderer 自动推导需要在 HTML 模板中注入的内容。
  //const clientManifest = require('./dist/vue-ssr-client-manifest.json')
  // vue-server-renderer创建bundle渲染器并绑定server bundle
  renderer = createRenderer(bundle, {
   // clientManifest
  })

readyPromise = require('./build/setup-dev-server')(app, (bundle, options) => {
    renderer = createRenderer(bundle, options)
})


  // 将Vue实例渲染为字符串，传入上下文对象。
  function render (req, res) {
    const s = Date.now()
  
    res.setHeader('Content-Type', 'text/html')
  

    // 设置请求的url
    const context = {
      title: '', 
      url: req.url,
    }
    // 将Vue实例渲染为字符串，传入上下文对象。
    renderer.renderToString(context, (err, html) => {
      if (err) {
        return handleError(err)
      }
      res.end(html)

    })
  }
  



app.use((req,res)=>{

    readyPromise.then(() => render(req, res))


    /*
    const context={title:"very cool",url:req.url};
    bundleRender.renderToString(context,(err,html)=>{
        console.log("error:",err);
        if(err){
            res.send("404");
        }
        else{
            res.send(html);
        }
    });
    */
    /*
    createApp(context).then(app=>{
        render.renderToString(app,(err,html)=>{
            
            if(err){
                res.send("404");
            }
            else{
                res.send(html);
            }

        });
    });
    */

});

app.get("*",(req,res)=>{
    //readyPromise.then(() => render(req, res))
})
  


app.listen(8091,()=>{
    console.log("server is start:8091");
});