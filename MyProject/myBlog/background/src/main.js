import Vue from 'vue'
import App from './App.vue'

import router from './router/index.js';

/*引入blog-UI*/
import 'vue-blog-ui/src/components/style/index.scss';
import BlogUI from 'vue-blog-ui';


Vue.use(BlogUI);
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
