const Vue=require("vue");
const router=require("vue-router");
//import testVue from './testVue';
//const testVue=require("./testVue.vue");

const itt=()=>import("./testVue");

console.log(itt);

const render=require("vue-server-renderer").createBundleRenderer();


render.renderToString(testVue,(err,html)=>{
    console.log("render html:",html);
});         
