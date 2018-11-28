
//import Queue from "../../数据结构/Queue";
/*

广度优先搜索：從最近的图关系从近到远开始找，若找到了，则返回，若没找到，则继续往下查找，直到查找结束。
特点：
只能用在无向图
广度优先搜索查找的是最短路径（边最少的路径）。


数据结构：使用了图

图：
图是由一组相连的顶点和边组成。

有向图：指的是单方向的，如：A->B。
无向图：指的是相邻的，双向的。

*/


var map={
    
}

function person(name,isThis){
    this.name=name;
    this.isChecked=false;
    if(isThis===undefined){
        this.isThis=false;
    }else{
        this.isThis=isThis;
    }
    
}


map["myself"]=[new person("kity") ,new person("kim"),new person("suan"),new person("kity")];
map["kim"]=[new person("lisen"),new person("yasuo"), new person("kity"), new person("google")];
map["suan"]=[new person("op",true)];
map["kity"]=[new person("pop")];


function findThis(){
    var data=map["myself"];
    var isSearch={};
    while(data.length>0){
        var cur=data.shift();



        console.log("====正在搜索："+cur.name+"====");
        console.log(cur.isThis);
        if(cur.isThis){
            console.log("====以找到："+cur.name+"====");
            return cur;
        }else{

            if(map[cur.name]!==undefined){
                if(isSearch[cur.name]!==undefined){
                    console.log("====以重复："+cur.name+"====");
                    continue;
                }
                for(var i=0;i<map[cur.name].length;i++){
                    data.push(map[cur.name][i]);
                
                }
            }
        }
     
        isSearch[cur.name]=cur;
        cur.isChecked=true;
    }
}


findThis();



function Graph(){
    var v=[];
    var e=[];
}

Graph.prototype={
    addV:function(v){
        this.v.push(v);
    },
    addE:function(e){
        this.e.push(e);

    }
}

