<template>
    <div>
        <P>hi页面</P>
        <p>{{message}}</p>
        <router-view></router-view>
        <router-view class="leftside" name="left"></router-view>
        <router-view class="rightside" name="right"></router-view>
    </div>
</template>
<script>
    export default{
        name:'hi',
        data(){
            return {
                message:'模板都有三部分组成  template script style'
            }
        }
    }
</script>
<style lang="">
.leftside{width: 20%;height: 200px;float: left;background: #333;color: #fff}
.rightside{width:80%;height: 200px;float: left;background: #666;color: #fff}
</style>
