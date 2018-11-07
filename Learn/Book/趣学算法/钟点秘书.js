const _=require("lodash");


/**
 * 钟点秘书
 * 对多场会议进行筛选，尽可能的筛选出一天可开最多会议的方案。
 * 两场会议不能相交。
 * 
 * 思路：1先按时间排序，然后再筛选会议。
 */

const meeting=[
{
    name:"meet_2",
    startTime:toDateTime("2018-10-7 11:00"),
    endTime:toDateTime("2018-10-7 13:00")
},
{
    name:"meet_3",
    startTime:toDateTime("2018-10-7 10:00"),
    endTime:toDateTime("2018-10-7 12:00")
},
{
    name:"meet_4",
    startTime:toDateTime("2018-10-7 13:00"),
    endTime:toDateTime("2018-10-7 14:00")
},

{

    name:"meet_6",
    startTime:toDateTime("2018-10-7 14:00"),
    endTime:toDateTime("2018-10-7 15:00")
},
{
    name:"meet_7",
    startTime:toDateTime("2018-10-7 12:00"),
    endTime:toDateTime("2018-10-7 16:00")
},
{


    name:"meet_8",
    startTime: toDateTime("2018-10-7 15:00"),
    endTime:toDateTime("2018-10-7 16:00")

},

{
    name:"meet_11",
    startTime:"2018-10-7 16:00",
    endTime:"2018-10-7 17:00"
},
{
    name:"meet_1",
    startTime:toDateTime("2018-10-7 9:00"),
    endTime:toDateTime("2018-10-7 11:00")
}

];


function cp(p){
    return function(a,b){
        return Date.parse(a[p])-Date.parse(b[p])
    }
}

function getMeeting(meetings){
    var result=[];
    var nextTime="";
    meetings.sort(cp("startTime"));

    _(meetings).each((item)=>{
        if(result.length===0){
            result.push(item);
            nextTime=item.endTime;
        }
        else{
            if(nextTime<=item.startTime){
                result.push(item);
                nextTime=item.endTime;
            }
        }
    });
    
    return result;
    

}

const result=getMeeting(meeting);
console.log("最优的会议方案是：");
_(result).each(item=>{
    console.log(item);
});






function toDateTime(date){


    var dateReg=/\d\d\d\d?[\-\/]\d?\d[\-\/]\d?\d/;
    var timeReg=/\d?\d:\d?\d/;
    var year,month,date,hour,minute
    var dateArray=[],timeArray=[];
    
    var dateStr=date.match(dateReg);
    var timeStr=date.match(timeReg);
  
    if(dateStr.length>0){
        dateArray=dateStr[0].split(/[\-\/]/ig);
        year=dateArray[0];
        month=dateArray[1];
        date=dateArray[2];
    }
    if(timeStr.length>0){
        timeArray=timeStr[0].split(/[\:]/ig);
        hour=timeArray[0];
        minute=timeArray[1];
    }
  
    return new Date(year,month-1,date,hour,minute);
  
  }
  