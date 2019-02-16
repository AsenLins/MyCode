import Vue from 'vue';
import {createRouter} from "./testRouter";
import App from './App.vue';
import { sync } from 'vuex-router-sync'
import Vuex from 'vuex';

Vue.use(Vuex);

export function createApp(ssrContext){
    const router=createRouter();
    //console.log("router is:",router);
    const store=new Vuex.Store({
        state: {
            list:{}
        },
      });
    sync(store,router);
      
    const app=new Vue({
        router,
        store,
        ssrContext,
        render:h=>h(App)
    });

    return {app,router};
}