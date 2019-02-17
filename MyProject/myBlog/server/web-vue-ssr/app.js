import Vue from 'vue';
import {createRouter} from './router/index';
import {createStore} from './store/index';
import { sync } from 'vuex-router-sync'
import App from './App.vue';




export function createApp(ssrContext){
    const router=createRouter();
    const store=createStore();
    
      
    sync(store,router);

    
    const app=new Vue({
       router,
       store,
       ssrContext,
       render:(h)=>h(App) 
    });

    return {app,router,store};
}