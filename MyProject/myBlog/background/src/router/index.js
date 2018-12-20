import VueRouter from 'vue-router';
import Vue from 'vue';

import articleList from '../views/articleList.vue'
import editArticle from '../views/editArticle.vue';


Vue.use(VueRouter);


const customRouter=[
    {
        path:"/",
        components:{
            main:articleList
        }
    },
    {
        path:"/articleList",
        components:{
            main:articleList
        }
    },
    {
        path:"/editArticle",
        components:{
            main:editArticle
        }
    }
    /*
    {path:"articleList",component:articleList },
    {path:"editArticle ",component:editArticle} 
    */
];

const router=new VueRouter({
    routes:customRouter
});


export default router;







