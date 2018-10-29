<template>
    <div>
        <P>hi页面</P>
        <p>{{message}}-{{$route.params.newsid}}-{{$route.params.newstitle}}</p>
    </div>
</template>
<script>
    export default{
        name:'params',
        data(){
            return {
                message:'params page'
            }
        },
        //模板中的路由钩子函数 用处：进入模板之前获取所需数据
        beforeRouteEnter (to, from, next) {
            console.log('准备进入路由parmas模板')
            next()//next()很重要
        },
        beforeRouteLeave (to, from, next) {
           console.log('准备离开路由parmas模板')
           next()
        }
    }
</script>
<style lang="">
</style>
