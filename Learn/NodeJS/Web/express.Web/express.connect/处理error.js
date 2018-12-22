const env = process.env.NODE_ENV || 'development';
const app=require("connect")();


function dealerror(err,req,res,next){
    var result=500;
    switch(env){
        case 'development':
        console.error('Error:');
        console.error(err);
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(err));        
        break;
        default:
            res.end("Server Error");
        break;


    }


}

function step1() {
    var b=parseInt("a");
    console.log("i am step 1");
}

function step2(){
    console.log("i am step 2");
}



app.use(step1);
app.use(step2);
app.use(dealerror);

app.listen(3012);

console.log("server is start",3012);