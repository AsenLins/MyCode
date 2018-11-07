/*
古董重量从小到大,装到有重量限制的船种
*/

/*古董对应的重量*/
const w=[5,2,1,4,12,11,54,3,4,1,1]
const shipWeight=30;

function GetW(w,shipw){
    w.sort(function(a,b){
        return a-b;
    });
  
    var shipTake=[];
    for(var i=0,wlength=w.length;i<wlength;i++){
       
        if(shipw-w[i]<0){
            continue;
        }
        shipw=shipw-w[i];
        shipTake.push(w[i]);
    }

   
    return shipTake;
}


console.log("宝物重量有：",w);
console.log("船承重有",shipWeight);
console.log("最后拿走的宝物：",GetW(w,shipWeight));




