
<template>
    <div v-if="type==='flex'" class="">
        <slot></slot>
    </div>
    <div v-else-if="type==='inline'">
        <slot></slot>
    </div>
    <div v-else>
        <slot></slot>
    </div>
</template>


<script>
    export default {
    name:"b-row",
    props:{
        space:Number,
        type:String,
        justify:String,
        align:String
    }

    }
</script>

<style  lang="scss">
/*行-默认样式（栅栏系统）*/
.b-row{
    position: relative;
    top: 0px;
    .a{
        background-color: red;
    }
}
.b-row.default{
    float: left;
}
.b-row.default::after{
    clear: both;
}

/*行-flex*/
.b-row.flex{
    display: flex;
}
/*行-inline-block*/
.b-row.inline-block{
    display: inline-block;
}
</style>