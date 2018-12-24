const app=require("./config/app");
const prot=3000;


require("./api/index");
require("./config/errorHandle");



app.listen(prot);
console.log("server start:",prot);



