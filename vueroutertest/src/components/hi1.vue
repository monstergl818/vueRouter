<template>
    <div>
        {{message}}-{{$route.params.username}}-{{$route.params.id}}
    </div>

</template>
<script>
    // :to="{name:'',params:{key1:'val1',key2:'val2'}"
    //params只能用name来引入路由,:to绑定写法对应的是一个对象，路由参数由模板中的$route接收

    export default {
        name:'hi1',
        data(){
            return{
                message:'hi1页面'
            }
        }
    }
</script>

<style scoped>

</style>
