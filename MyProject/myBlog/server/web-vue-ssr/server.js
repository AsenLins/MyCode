const app=require("express")();
const bundleBuilder=require("vue-server-renderer");
const path=require("path");

const fs=require("fs");
const templatePath=resolveFilePath("./template/default.html");
const template=fs.readFileSync(templatePath,"utf-8");


/*
const render=require("vue-server-renderer").createRenderer();
const createApp=require("./dist/server-bundle.js").default;
*/
const bundle=require("./dist/vue-ssr-server-bundle.json");


const bundleRender=bundleBuilder.createBundleRenderer(bundle,{
    runInNewContext:false,
    template
});



function resolveFilePath(filePath){
    return path.resolve(__dirname,filePath);
}








app.use((req,res)=>{
    
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