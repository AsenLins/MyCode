import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export function createStore(){
    return new Vuex.Store({
        state:{
            testname:"i am testname"
        },
        actions:{
            test(){
                console.log("i am test....");
            }
        },
        mutations:{

        }
    });
}