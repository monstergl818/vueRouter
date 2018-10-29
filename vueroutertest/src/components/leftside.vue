<template>
    <div>
        <h2>{{msg}}</h2>
    </div>
</template>

<script>
    export default {
        name:'leftside',
        data(){
            return{
                msg:'单页面多路由操作-左边'
            }
        }
    }
</script>

<style>

.left{width: 50%;float: left;height:200px;background: chocolate}

</style>
