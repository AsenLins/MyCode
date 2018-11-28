/*
关联矩阵-图

图的遍历：
广度优先搜索（Breadth-First Search，BFS）
深度优先搜索（Depth-First Search，DFS）


基本概念：
（图）G=（V,E）,V=一组顶点，E=一组边，连接V中的顶点。

边(E)：连接顶点的边。
顶点(V)：边连接的顶点。
路径：是顶点v1, v2,…,vk的一个连续序列，如：A->B-C->D

相邻顶点：由一条边连接在一起的叫相邻顶点，如：A->B，B->C
环:简单路径:A->B->A

有向图：图有方向（单向）
无向图：图没有方向

有权图：图的边都有一定含义的数值。
无权图：图的边没有值。


存储结构：
邻接矩阵：记录每个节点是否相邻，若相邻则为1，不相邻则为:
  A B C
A 1 1 0
B 1 0 1
C 0 1 0

邻接表：记录每个顶点的所有邻接点:
A-> B C D
B-> C D
C-> D




遍历方法：

图遍历算法的思想是必须追踪每个第一次访问的节点，并且追踪有哪些节点还没有被完全探索。对于两种图遍历算法，都需要明确指出第一个被访问的顶点。

广度优先搜索：先宽后深,先把相邻的所有节点都搜搜完毕，再深入搜索，相当于与层层搜索。
	         通过将顶点存入队列中（在第4章中学习过），最先入队列的顶点先被探索。

A->B C D，广度优先所搜会把B,C,D搜索完，才会继续搜索B,C,D下的邻接点。
   |
————
|
B->...
|  
C->...
|
D->...


深度优先搜索:

深度优先搜索算法将会从第一个指定的顶点开始遍历图，沿着路径直到这条路径最后一个顶点被访问了，接着原路回退并探索下一条路径。

深度优先搜索算法不需要一个源顶点

*/

var Dictionary=require("./Dictionary");
var Queen=require("./Queue");
var Stake=require("./Stake");


/*邻接表实现 */
function linkMap(initV){
    this.mapda=new Dictionary();
    for(var index=0;index<initV.length;index++){
        this.mapda.set(initV[index],[]);
    }
    return this.mapda;
}

//声明顶点
var demoMap_1=['A','B','C','D','E','F','G','H','I'];


/*添加顶点对应的邻接点*/
var linkMapObj=new linkMap(demoMap_1);

linkMapObj.get("A").push("B");
linkMapObj.get("A").push("C");
linkMapObj.get("A").push("D");

linkMapObj.get("B").push("A");
linkMapObj.get("B").push("E");
linkMapObj.get("B").push("F");

linkMapObj.get("C").push("A");
linkMapObj.get("C").push("G");
linkMapObj.get("C").push("D");

linkMapObj.get("D").push("A");
linkMapObj.get("D").push("C");
linkMapObj.get("D").push("G");
linkMapObj.get("D").push("H");

linkMapObj.get("E").push("B");
linkMapObj.get("E").push("I");

linkMapObj.get("F").push("B");

linkMapObj.get("G").push("C");
linkMapObj.get("G").push("D");

linkMapObj.get("H").push("D");

linkMapObj.get("I").push("E");





/**
 * 广度优先搜索
 *
 * @param {顶点} vAry
 * @param {顶点对应的邻接表} vlinkMap
 */
function bfs(startV,vlinkMap,fn){
    var curV=startV,
    searchQueue=new Queen(),
    hasSearch={},
    d=[],
    pred=[],
    /*state用于记录状态 */
    state={};

    for(var index=0;index<demoMap_1.length;index++){
        state[demoMap_1[index]]="white";
    }

    for(var vindex=0;vindex<demoMap_1.length;vindex++){
        d[demoMap_1[vindex]]=0;
        pred[demoMap_1[vindex]]=null;
    }

    searchQueue.enqueue(curV);
    while(!searchQueue.isEmpty()){
        
        //获取当前搜索节点。
        var linkV=searchQueue.dequeue(); 
        //获取搜索节点的所有邻接点。
        var linkMap=vlinkMap.get(linkV);
        //console.log("当前连接点：",linkMap,linkV);
        var consoleStr=linkV+"->";

        /*设置节点为已发现，但未探索 */
        state[linkV]="gary";
        /*已探索过的点，则跳过 */
        if(hasSearch[linkV]!==undefined){
            continue;
        }

        for(var index=0;index<linkMap.length;index++){
           
            var link=linkMap[index];

            
            /*查找未邻接点未发现的节点 */
            searchQueue.enqueue(link);
            if(state[link]==="white"){
                /*设置顶点V到每个顶点U的距离 */
                d[link]=d[linkV]+1;
                /*设置改邻接节点的上一个节点/父节点 */
                pred[link]=linkV;
                /*设置邻接点为已发现*/
                state[link]="gary";
            }

            
            /*
            if(hasSearch[linkV]==undefined){

            }
            */

            consoleStr=consoleStr+link+",";
        }
        /*修改节点状态为已搜索 */
        hasSearch[linkV]=linkV;
        state[linkV]="black";
        //console.log(consoleStr.substr(0,consoleStr.length-1));
        if(fn!==undefined){
            fn(linkV);
        }
    }

    return{
        a:d,
        b:pred
    }
}

var result=bfs(demoMap_1[0],linkMapObj,function(link){
    console.log("currentLink",link);
});

for(var key in result.a){
    console.log(key,result.a[key]);
}


function getLoaction(loaction){
    var start=demoMap_1[0];
    for(var index=1;index<demoMap_1.length;index++){
        var to=demoMap_1[index];
        var path=new Stake(); 
    
        
        for (var v=to; v!== start;v=loaction[v]) { 
            path.push(v);
            console.log("======="+v);
        }
        




        path.push(start);
        var s="";
        while(!path.isEmpty()){
            s=s+path.pop()+"-";
        }
        console.log(s.substr(0,s.length-1));

    }
}

getLoaction(result.b);





return;




function Graph(){
    this.v=[];
    this.e=new Dictionary();
    this.initColor=function(){
        var color=[];

        for(var index=0;index<this.v.length;index++){
            color[this.v[index]]="white";
        }

        return color;

    };
    this.bfs=function(v,fn){
        var color=this.initColor(),
        queen=new Queen();
        queen.enqueue(v);

        while(!queen.isEmpty()){
            var u=queen.dequeue(),
        
            neighbors =this.e.get(u);
            color[u]="gray";
       
            for(var bindex=0;bindex<neighbors.length;bindex++){
                var w=neighbors[bindex];
                if(color[w]==="white"){
                    color[w]="gray";
                    queen.enqueue(neighbors[bindex]);
                }

            }

            color[u]="black";

            if(fn!==undefined){
                fn(u);
            }

        }

    };

    this.bfs2=function(v,fn){
        var color=this.initColor(),
        queen=new Queen();
        queen.enqueue(v),
        d=[],
        pred=[];

        for(var i=0;i<this.v.length;i++){
            d[this.v[i]]=0;
            pred[this.v[i]]=null;
        }

        while(!queen.isEmpty()){
            var u=queen.dequeue(),
        
            neighbors =this.e.get(u);
            color[u]="gray";
       
            for(var bindex=0;bindex<neighbors.length;bindex++){
                var w=neighbors[bindex];
                if(color[w]==="white"){
                    color[w]="gray";
                    d[w]=d[u]+1;
                    pred[w]=u;
                    queen.enqueue(w);
                }

            }

            color[u]="black";

            if(fn!==undefined){
                fn(u);
            }

        }
        
        return { //{8}
            distances: d,
            predecessors: pred
        };
    };

}


/*
关联矩阵
*/
Graph.prototype={
    addV:function(v){
        this.v.push(v);
        this.e.set(v,[]);
    },
    addE:function(v,e){
        this.e.get(v).push(e);
        //this.e.set(v,e);
    }
}




var graphObj=new Graph();
var demoObj=['A','B','C','D','E','F','G','H','I'];
demoObj.forEach(function(v){
    graphObj.addV(v);
});

graphObj.addE('A','B');
graphObj.addE('A','C');
graphObj.addE('A','D');
graphObj.addE("C",'G');
graphObj.addE("C",'D');
graphObj.addE("D",'G');
graphObj.addE("D",'H');
graphObj.addE("D",'C');
graphObj.addE("D",'A');
graphObj.addE("B",'E');
graphObj.addE("B",'F');
graphObj.addE("B",'A');
graphObj.addE("E",'I');
graphObj.addE("I",'E');
graphObj.addE("G",'C');
graphObj.addE("G",'D');
graphObj.addE("H",'D');
graphObj.addE("F",'B');


function printGrapObj(){
    for(var index=0;index<graphObj.v.length;index++){
        
        var cur=graphObj.v[index],
        printStr=cur+"->";
        for(var bindex=0;bindex<graphObj.e.get(cur).length;bindex++){
            printStr=printStr+graphObj.e.get(cur)[bindex]+",";
        }
        printStr=printStr.substr(0,printStr.length-1);
        console.log(printStr);
    }
}

//printGrapObj();


/*
graphObj.bfs(graphObj.v[0],function(value){

    console.log('Visited vertex: ' + value); //{17}
});
*/

var result=graphObj.bfs2(graphObj.v[0]);

for(var key in result.distances){
    console.log("thekey",key,result.distances[key]);
}

function printLink() {
    var form=graphObj.v[0];
    for(var i=1;i<graphObj.v.length;i++){
        var to=graphObj.v[i];
        var stake=new Stake();
        console.log(form,to);
        console.log("=====================");
        for(var v=to; v!==form;v=result.predecessors[v]){
            stake.push(v);
        }
        stake.push(form);

        var s=stake.pop();
        while(!stake.isEmpty()){
            s+="-"+stake.pop();
        }
        console.log(s);

    }
}


console.log(result.distances);

printLink();





