const EventEmitter=require("events").EventEmitter;

/*自定义的事件发射器/相当于是实例一个发布订阅*/
const channel=new EventEmitter();

/*绑定事件 */
channel.on("join",()=>{
    console.log("welcome");
});

/*绑定非匿名函数*/
channel.on("join",join2);

/*删除绑定的指定事件 */
channel.removeListener("join",join2);

function join2() {
    console.log("welcome2");
}
/*发射/触发事件 */
channel.emit("join");




