import {createRouter , createWebHistory} from 'vue-router'
import Home from '../pages/Home.vue'
import About from '../pages/About.vue'
import Login from '../pages/Login.vue'
const routes = [
{
path:'/',
name:'Home',
component:Home,
meta:{
title:'Home',
requireLogin:true
},
children:[
{
path:'about',
name:'About',
component:About,
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
component:Login,
meta:{
    title:'登录',
    requireLogin:false
}
} 
]
const router = createRouter({
    history: createWebHistory(),
    routes,
})
export default router