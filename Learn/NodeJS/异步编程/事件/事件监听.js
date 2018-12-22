const net=require("net");
const prot=5014;
const server=net.createServer(socket=>{
    /*socket.on*/
    socket.once("data",data=>{
        console.log("data",data);
        socket.write(data);
    });

    
})

console.log("server is start:",prot);
server.listen(prot);


