/*数组*/

/*创建方式1：*/
var create1=new Array();
var create2=new Array(6);

/*创建方式2： */
var create3=[];
var create4=['1','2','3',4];

/*javaScript的数组与其他语言的数组不一样，javaScript的数组可以存储任意类型,而不是单一类型。*/

/*数组基本方法：
push():插入元首到数组的末尾
pop():返回并删除最后一个元素
splice(start,end):从指定位置起（包括起始位置），删除对应个数的数组元素。
shift()：返回并删除数组第一个元素
unshift():插入元素到数组的首位
*/

/*数组的迭代的验证方法
every():遍历数组的每一个元素，如果某个元素不满足条件，则终止遍历并返回false。
some():遍历数组的每一个元素，若找到符合条件的元素，则返回true.
*/

/*数组的操作方法
forEach():遍历数组的每一个元素,与for作用一样。
map():遍历数组的每一个元素，并且把return回来的元素集合生成一个新的数组。
filter():获取所有return true的集合，并生成一个新的数组。
concat():合并数组，可合并对象，数组，以及元素,按照参数顺序合并。
*/

/*数组处理结果的方法
reduce():遍历数组每一个元素，然后返回最后操作的值，每次遍历都会累计,这个方法接受四给值：
        previousValue：上次迭代return的数组元素。
        currentValue:当前遍历的数组元素。
        index:当前遍历的索引值。
        array:当前数组对象。
*/


/*ES6和ES7新增的数组功能
@@iterator
copyWithin
entries
includes
find
findIndex
fill
from
keys
of
values
 */


var testAry=[];

/*push方法*/
testAry.push(1);        //插入一个值

testAry.push(2,3);      //插入多个值


/*unshift方法*/
testAry.unshift(0);     //插入一个值到元素首位

testAry.unshift(-1,-2); //插入多给值到元素首位


/*shift方法*/
testAry.shift(0);       //删除数组第一个元素，并且数组长度对应减少

/*splice方法*/
testAry.splice(0,2);    //从指定位置删除对应个数的数组元素,并减少数组对应长度

/*contact方法*/
var testAray2=[4,5,6];
var concatAry=testAry.concat(testAray2,7,8);    //合并数组，可合并对象，数组，以及元素,按照参数顺序合并。


/*every方法,只要有一个条件不符合，则返回。*/
testAray2.every((i)=>{
    if(i%2===0){
        return true;
    }else{
        return false;
    }
})

/*some方法 */
testAray2.some((i)=>{
    if(i%2===0){
        return true;
    }else{
        return false;
    }
});

/*forEach方法 */
testAray2.forEach((i)=>{
    console.log(i);
});


/*map方法 */
var mapAry=testAray2.map((i)=>{
    if(i%2===0){
        return true;
    }else{
        return false;
    }
});

/*filter方法 */
var filterAry=testAray2.filter((i)=>{
    if(i%2===0){
        return true;
    }else{
        return false;
    }
});

/*reduce方法 */
var reduceAry=testAray2.reduce((prevVal,currentVal,index,arry)=>{
    return prevVal+currentVal;
});
    




/*二维数组*/
var moreAry=[];
moreAry[0][0]=[1,2,3,4,5];
moreAry[0][1]=[6,7,8,9,10]; 





