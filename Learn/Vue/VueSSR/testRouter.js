import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

const testVue=()=>import("./testVue.vue");
const list=()=>import("./testlist.vue");

export function createRouter(){

    return new Router({
        mode:"history",
        fallback:false,
        routes:[
            {path:"/home",name:"home",component:testVue},
            {path:"/list",name:"list",component:list}
        ]
    });
}