import col from './components/col/col.vue';
import row from './components/row/row.vue';



const components=[
    col,
    row
];

/*vue插件安裝需要实现的install函数 */
const install=function(vue){
    /*全局組件*/
    components.map((component) => {
        vue.component(component.name,component);
    });
}

/*库对象*/
const blogUIAPI={
    install,
    ...components
}


export default blogUIAPI
 