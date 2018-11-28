import Vue from 'vue'
import Router from 'vue-router'
import demo from '../view/demo';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: (resolve)=>{
        require(['../view/demo'],resolve);
      }
    }
  ]
})
