<template>
    <div>

        <div class="box">
            <div>1</div><div>1</div><div>1</div>
        </div>

        <b-row>
           <div style="display:inline-block; background-color:red;">1</div><!----><div style="display:inline-block; background-color:red;">1</div>
        </b-row>

    </div>
</template>

<script>

    import row from '../components/row/row';
    
    console.log(row);

    export default {
        components:{"b-row":row}    
    }
</script>

<style scoped>
    .box>div{
        background-color: red;
        display: inline-block;
    }
</style>