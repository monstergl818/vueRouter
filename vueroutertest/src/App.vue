<template>
  <div id="app">
    <img src="./assets/logo.png">
    <div>
        <button @click="goBack">后退</button>
        <button @click="goBefore">前进</button>
        <button @click="goHome">返回首页</button>
    </div>
    <div>
        <router-link to='/' >首页</router-link>
        <router-link to='/hi'>子路由hi页面</router-link>
        <router-link :to="{name:'路由名hi1',params:{username:'郭莉',id:'id01'}}">子路由hi页面1</router-link>
        <router-link to="/hi/hi2">子路由hi页面2</router-link>
        <router-link to="/params/8951/天天向上">params url传参</router-link>
        <router-link to='/gohome' >路由重定向回到首页</router-link>
        <router-link to='/goparams/818/生日快乐' >路由重定向传参</router-link>
        <router-link to="/monster">别名</router-link>
        <router-link to="/404">404页面</router-link>
    </div>
    <p>{{$route.name}}</p>

    <transition name='fade' mode="out-in">
        <router-view></router-view>
    </transition>
    <router-view class="left" name="left"></router-view>
    <router-view  class="right" name="right"></router-view>

  </div>
</template>

<script>
export default {
  name: 'App',
  methods:{
      goBack(){
          this.$router.go(-1) //编程式导航 后退一步
      },
      goBefore(){
          this.$router.go(1) //前进
      },
      //业务场景 根据用户属性跳转登录、注册页面
      goHome(){
          this.$router.push('/') //push()里写入要跳转的路径
      }
  }

}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
/*
fade-enter:进入过渡的开始状态，元素被插入时生效，只应用一帧后立刻删除。
fade-enter-active:进入过渡的结束状态，元素被插入时就生效，在过渡过程完成后移除。
fade-leave:离开过渡的开始状态，元素被删除时触发，只应用一帧后立刻删除。
fade-leave-active:离开过渡的结束状态，元素被删除时生效，离开过渡完成后被删除。
*/
.left{width: 50%;float: left;height:200px;background: chocolate;color: #fff}
.right{width: 50%;float: left;height:200px;background:#666;color: #fff}
.fade-enter{opacity: 0;}/**/
.fade-enter-active{
    transition:opacity 0.5s
}
.fade-leave{
    opacity: 1;
}
.fade-leave-active{
    opacity: 0;
    transition: opacity 0.5s;
}
</style>
