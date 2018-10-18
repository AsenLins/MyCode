
/**
 * 把时间字符串初始化为时间对象。
 * @param {时间格式：yyyy[-,/]MM[-,/]dd[-,/] hh:MM}} date 
 */
function toDateTime(date){


    var dateReg=/\d\d\d\d?[\-\/]\d?\d[\-\/]\d?\d/;
    var timeReg=/\d?\d:\d?\d/;
    var year,month,date,hour,minute
    var dateArray=[],timeArray=[];
    
    var dateStr=date.match(dateReg);
    var timeStr=date.match(timeReg);

    if(dateStr.length>0){
        dateArray=dateStr.split(/[\-\/]/ig);
        year=dateArray[0];
        month=dateArray[1];
        date=dateArray[2];
    }
    if(timeStr.length>0){
        timeArray=timeStr.split(/[\:]/ig);
        hour=timeArray[0];
        minute=timeArray[1];
    }

    return new Date(year,month-1,date,hour,minute);

}