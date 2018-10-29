import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld' //引入组件页面
import hi from '@/components/hi'
import hi2 from '@/components/hi2'
import hi1 from '@/components/hi1'
import leftside from '@/components/leftside'
import rightside from '@/components/rightside'
import params from '@/components/params'
import error from '@/components/404'


Vue.use(Router) //全局使用router组件

export default new Router({
  //路由配置
  mode:'history',//修改路径模式 history hash 路径里带/#/
  routes: [
    {
       path: '/',
       name: '路由名HelloWorld',
       components:
            {
                default:HelloWorld,
                left:leftside,
                right:rightside
                //单页面多路由区域操作
            }
    },
    {
        path:'/params/:newsid(\\d+)/:newstitle', //url传参 用：绑定 使用正则规范传参为数字
        name:'路由名params',
        component:params,
        //路由中的钩子函数
        beforeEnter:(to,from,next)=>{ //路由钩子函数 进入写在路由里
            console.log(to);
            console.log(from);
            next(true) //next(true)允许跳转,next(fase)阻止跳转, next({path:'/'}) 指定跳转路径
        }
    },
    {
        path:'/hi',
        name:'路由名hi',
        component:hi,
        children:[
            {
                path:'hi1',
                name:'路由名hi1',
                component:()=>import('@/components/hi1')
            },
            {
                path:'hi2',
                name:'路由名hi2',
                components: //多路由区域
                    {
                        default:hi2,
                        left:leftside,
                        right:rightside
                        //单页面多路由区域操作
                    }
            }
        ]
    },
    {
        path:'/gohome',
        redirect:'/' //路由重定向 没有传递参数
    },
    {
        path:'/goparams/:newsid(\\d+)/:newstitle',  //路由重定向传递参数
        redirect:'/params/:newsid(\\d+)/:newstitle'
    },
    {
        path:'/hi1',
        component:hi1,
        alias:'/monster'
    },
    {
        path:'*',//设置404页面
        component:error
    }
  ]
})
