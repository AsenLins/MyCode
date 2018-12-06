<template>
    <div>
        <h4> flex-direction: column</h4>
        <div class="box flex-1">
            <div>col.1</div>
            <div>col.2</div>
        </div>

        <div class="box flex-2">
            <div>col.1</div>
            <div>col.2</div>
        </div>


         <h4>flex-wrap:nowrap不换行</h4>
         <div class="box flex-3">
            <div>col.1</div>
            <div>col.2</div>
            <div>col.3</div>
            <div>col.4</div>
            <div>col.5</div>
            <div>col.6</div>
        </div> 

 
         <h4>flex-wrap:wrap换行</h4>
         <div class="box flex-4">
            <div>col.1</div>
            <div>col.2</div>
            <div>col.3</div>
            <div>col.4</div>
            <div>col.5</div>
        </div>        

          <h4>flex-wrap:wrap-reverse倒序换行</h4>
         <div class="box flex-5">
            <div>col.1</div>
            <div>col.2</div>
            <div>col.3</div>
            <div>col.4</div>
            <div>col.5</div>
        </div>   
    </div>
</template>

<script>

import col from '../../components/col/col.vue';
import row from '../../components/row/row.vue';
export default {
    name: "flexView"
}
</script>

<style scoped>
    .box{
        margin-bottom: 15px;
    }
    .flex-1{
        width: 150px;
        padding: 15px;
        background-color: #eeeeee;
        display: flex;
        flex-direction: column;
    }

    .flex-3{
        width: 150px;
        padding: 15px;
        background-color: #eeeeee;
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
    }
    .flex-4{
        width: 150px;
        padding: 15px;
        background-color: #eeeeee;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
    }
    .flex-5{
        width: 150px;
        padding: 15px;
        background-color: #eeeeee;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap-reverse;
    }
    
    .box>div{
        background-color: yellow;
        flex-wrap: nowrap;
    }
    /*
    容器属性：

    */
</style>