
import Vue from 'vue';
import Router from 'vue-router';

//import home from '../views/home.vue';
//import articleDetial from '../views/articleDetial.vue';

/*异步加载 */
const home=()=>import("../views/home.vue");
const articleDetial=()=>import("../views/articleDetial.vue");


Vue.use(Router);






export function createRouter(){
    
    return new Router({
        mode:"history",
        fallback:false,
        routes:[
            {path:"/home",name:"home",component:home},
            {path:"/articleDetial",name:"articleDetial",component:articleDetial}
        ]
    })

}