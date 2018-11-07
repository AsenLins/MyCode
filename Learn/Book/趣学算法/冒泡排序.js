const result=[];
const data=[55,4,3,8,10,2,14,2,2];

console.log("原数组",data);

for(var i=0,iresultLenght=data.length;i<iresultLenght;i++){

    var curNum=data[i];
    console.log(curNum);
    for(var b=0;b<iresultLenght;b++){

        if(data[b]>data[b+1]){
            var temp=data[b+1];
            data[b+1]=data[b];
            data[b]=temp;
        }

    }
}


console.log("冒泡排序后的数组",data);