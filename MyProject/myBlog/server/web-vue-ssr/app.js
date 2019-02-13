import Vue from 'vue';
import {createRouter} from './router/index';
import { sync } from 'vuex-router-sync'
import App from './App.vue';

import Vuex from 'vuex';

Vue.use(Vuex);


export function createApp(ssrContext){
    const router=createRouter();
    
    const store=new Vuex.Store({
        state: {
            articleDetial:{}
        },
      });
    
      
    sync(store,router);

    
    const app=new Vue({
       router,
       store,
       ssrContext,
       render:(h)=>h(App) 
    });

    return {app,router};
}