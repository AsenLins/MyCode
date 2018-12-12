const net=require("net");
const prot=5012;
const server=net.createServer(socket=>{
    socket.on("data",data=>{
        console.log("data",data);
        socket.write(data);
    });
})

console.log("server is start:",prot);
server.listen(prot);


