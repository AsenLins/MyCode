const express=require("express");
const app=express();
const bodyparse=require("body-parser");

const articleContext=require("./models/db");

const ejs=require("ejs");


app.set('view engine','ejs');


/*express加载消息解析载体 */
app.use(bodyparse.json());
app.use(bodyparse.urlencoded({extended:true}));


const article={title:"demo"};

app.set("port",process.env.PORT||4012);

app.get("/article",(req,res)=>{
  
    articleContext.Article.getAll((err,allArticle)=>{
        if(err) throw err;
        console.log("獲取所有文章",allArticle);
        res.send(allArticle);
    })
})

app.post("/article",(req,res)=>{
    const title=req.body.title;
    const articleContent=req.body.content;
    articleContext.Article.create({
        articleTitle:title,
        article:articleContent
    },(err,result)=>{
        if(err) throw err;
        res.send(result);
    })

})

app.get("/article/:id",(req,res)=>{
    const id=req.params.id;
    articleContext.Article.getOne(id,(err,result)=>{
        if(err) throw err;
        console.log("result",result);
        res.send(result);
    });
});

app.delete("/article/:id",(req,res)=>{
    const id=req.params.id;
    articleContext.Article.delete(id,(err,result)=>{
        if(err) throw err;
        console.log("remove result",result);
        res.send(result);
    });

})

app.get("/articleHtml/:id",(req,res)=>{

    const id=req.params.id;
    articleContext.Article.getOne(id,(err,result)=>{
        if(err) throw err;
        res.format({
            html:()=>{
                console.log("獲取的實體",result);
                res.render('article.ejs',{article:result})
            }

        });
       // res.send(result);
    });
});

app.listen(app.get("port"),()=>{
    console.log("web api server is start:",app.get("port"));
})

