const EventEmitter=require("events").EventEmitter;
const fs=require("fs");
class FileWatch extends EventEmitter{
    constructor(option){
        super();
        this.dirPath=option.dirPath;
        this.dirprocss=option.dirprocss;
        console.log("正在初始化...");
    }
    watch(){
        console.log("目录已修改");
        fs.readdir(this.dirPath,(err,files)=>{
            if(err) throw err; 
            for(var index in files){
                this.emit("procss",files[index]);
            }


        })
    }
    start(){
        console.log("开始监听目录",this.dirPath);
        fs.watchFile(this.dirPath,()=>{
           
            this.watch();
        });
    }
}


const fw=new FileWatch({
    dirPath:"./watchTest",
    dirprocss:"./watchDone"
});

fw.on("procss",function(file){
    var oldfile=this.dirPath+"/"+file;
    var newfile=this.dirprocss+"/"+file.toLowerCase();
    console.log("old file",oldfile);
    console.log("new file",newfile);
    fs.rename(oldfile,newfile,err=>{
        if(err) throw err;
    })
} );

fw.start();

