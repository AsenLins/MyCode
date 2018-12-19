const net=require("net");
const EventEmitter=require("events").EventEmitter;
const channel=new EventEmitter();
channel.clients={};
channel.subEvent={};


/*设置最多50个事件监听数*/
channel.setMaxListeners(50);


channel.on("error",err=>{
    console.log("custom error:",err);
});

channel.on("join",function(id,client){

    //channel.emit("error",new Error("这是一条自定义的错误"));

    this.clients[id]=client;

    this.subEvent[id]=(sendId,message)=>{
        if(id!=sendId){
            this.clients[id].write(message);
        }
    }

    this.on("broadcast",this.subEvent[id]);
});

channel.on("leave",function(id){
    delete this.clients[id];
    this.removeListener("broadcast",this.subEvent[id]);

    console.log("用户已退出",this.clients);
})

channel.on("shutdow",function(){
    for(var client in this.clients){
        var curId=client;
        this.removeListener("broadcast",this.subEvent[curId]);
        delete this.clients[curId];
    }

});




const prot=5014;
const server=net.createServer(client=>{
    const id = `${client.remoteAddress}:${client.remotePort}`;
    console.log("链接的用户ID",id);
    channel.emit("join",id,client);

    client.on("data",data=>{
        var datastr=data.toString();
        channel.emit("broadcast",id,datastr);
    });

    client.on("close",()=>{
        channel.emit("leave",id);

    });


    
}).listen(prot);


console.log("server start:",prot);


/*
channel.dc=()=>{
    console.log(this);
}

channel.dc2=function(){
    console.log(this);
}
channel.dc();
channel.dc2();

*/



