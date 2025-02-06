import {createRouter , createWebHistory} from 'vue-router'
import Home from '../pages/Home.vue'
import About from '../pages/About.vue'
import Login from '../pages/Login.vue'
//定义路由规则
const routes = [
{
path:'/',
name:'Home',
component:()=>import('../pages/Home.vue'),
meta:{
title:'Home',
requireLogin:true
},
children:[
{
path:'about',
name:'About',
component:()=>import('../pages/About.vue'),
meta:{
    title:'About',
    requireLogin:true
},
}
]
},  
{
path:'/login',
name:'Login',
component:()=>import('../pages/Login.vue'),
meta:{
    title:'登录',
    requireLogin:false
}
} 
]
//创建路由对象
const router = createRouter({
    history: createWebHistory(),
    routes,
})
//路由守卫
router.beforeEach((to,from,next)=>{
   document.title = to.meta.title || '首页'
   if(to.meta.requireLogin ){
   if(localStorage.getItem('token')){
       next()

   }else {
       next('/login')
   }
}
   next()
})
// const onSubmit=async()
//导出路由对象
export default router