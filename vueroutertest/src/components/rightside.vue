<template>
    <div>
        <h2>{{msg}}</h2>
    </div>
</template>

<script>
    export default {
        name:'rightside',
        data(){
            return{
                msg:'单页面多路由操作-右边'
            }
        }
    }
</script>

<style >
.right{width: 50%;float: left;height:200px;background: darkgrey}
</style>
