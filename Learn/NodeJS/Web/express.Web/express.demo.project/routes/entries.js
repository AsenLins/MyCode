const Entry=require("../models/entry");

exports.from=(req,res)=>{
    res.render('post',{title:"post"});
}

exports.submit((req,res,next)=>{
    const data=req.body.entry;
    const user=req.locals.user;
    const username=user?user.name:null;
    const entry=new Entry({
        username:username,
        title:data.title,
        body:data.body

    });

    entry.save((err)=>{
        if(err) return next(err);
        /*重定向*/
        res.redirect("/");
    })

})
