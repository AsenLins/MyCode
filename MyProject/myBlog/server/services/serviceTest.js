const articleService=require("./articleService");

/*
articleService.add({_id:1,age:10,name:"sam_1"}).then((result)=>{
    console.log("插入成功",result);
});
articleService.add({_id:2,age:11,name:"sam_2"}).then((result)=>{
    console.log("插入成功",result);
});
articleService.add({_id:3,age:12,name:"sam_3"}).then((result)=>{
    console.log("插入成功",result);
});
articleService.add({_id:4,age:13,name:"sam_4"}).then((result)=>{
    console.log("插入成功",result);
});
*/
/*
articleService.add({_id:5,age:14,name:"sam_5"}).then((data)=>{
    console.log("插入成功",data.result);
});
*/

/*


articleService.update({where:{_id:3},update:{name:"i am update name"}}).then((result)=>{
    console.log("更新成功",result);
})

articleService.remove({id:1}).then((result)=>{
    console.log("删除成功",result);
});

articleService.get({id:1}).then((result)=>{
    console.log("result",result);
});
*/

/*
articleService.count({}).then((result)=>{
    console.log("count",result);
});



articleService.distinct({key:"name"}).then((result)=>{
    console.log("distinct",result);
});

articleService.group({keys:['name']}).then((result)=>{
    console.log("group",result);
});
*/

articleService.getListByPage({pageIndex:1,pageSize:5,orderBy:{age:-1}}).then((result)=>{
    console.log("pageList",result);
});
