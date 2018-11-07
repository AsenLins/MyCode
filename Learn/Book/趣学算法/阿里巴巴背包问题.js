
const _=require("lodash");
/*
宝物按照价值从小到大，装在到有限制的毛驴背包种。
宝物属性:{
    - 重量
    - 价值
    - 名称
}
*/

/*宝物*/
var thing=[{
        name:'小苹果',
        w:4,
        v:2
    },
    {
        name:"青花瓷",
        w:10,
        v:5
    },
    {
        name:"清朝扇子",
        w:2,
        v:6
    },
    {
        name:"方天戟",
        w:15,
        v:7
    },
    {
        name:"杜甫诗集",
        w:3,
        v:7
    },
    {
        name:'黄金',
        w:2,
        v:10
        
    },

    {
        name:'李白诗集',
        w:3,
        v:6
        
    },
    {
        name:'青铜碗',
        w:4,
        v:8
        
    }


]


console.log("当前所有物品：");
_(thing).each(item=>{
    console.log(item);
});
console.log("==================");

var bagWeight=30;


function getW(w,bagW){
    const result=_(w)
    /*计算价值*/
    .each((item)=>{
        item.wv=parseFloat((item.v/item.w).toFixed(2));
    })
    /*价值从大到小排序 */
    .sort((a,b)=>{
        return b.wv-a.wv;
    })
    /*计算装载结果,根据价值越高,重量越小的的规则,若超过重量，可分割物品，载重到30即可。*/
    .reduce((resultObj,item)=>{
        if(resultObj.bagW-item.w>=0){
            resultObj.result.push(item);
            resultObj.bagW=resultObj.bagW-item.w;
        }else{
            
            var lastV=parseFloat((resultObj.bagW*item.wv).toFixed(2));
            var lastObj={
                name:"部分"+item.w+"/"+resultObj.bagW+":" +item.name,
                w:resultObj.bagW,
                v:lastV,
                wv:lastV,
            }
            resultObj.result.push(lastObj);
            resultObj.bagW=resultObj.bagW-resultObj.bagW;
        }
        return resultObj;
    },{
        result:[],
        bagW:bagW
    });

    return result;
}

const resultObj=getW(thing,bagWeight);

console.log("背包承重量是：",bagWeight);
console.log("装载的物品是：");
_(resultObj.result).each((item)=>{
    console.log(item);
});

console.log("背包剩余重量是：",resultObj.bagW);
