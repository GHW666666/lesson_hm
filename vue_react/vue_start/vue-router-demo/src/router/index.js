//路由配置
import {
    createRouter,//创建路由实例
     createWebHashHistory//路由模式
    }
      from 'vue-router'//插件
//页面级别组件导入放到views文件中
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import PostIndex from '../views/post/index/post-index.vue'
import PostShow from '../views/post/show/post-show.vue'
const routes = [
    {
        path:"/",//路径
        component:Home//路由组件
    }
    ,
    {
        path:"/about",
        component:About
    }
    ,
    {
        path:"/posts",
        component:PostIndex
    },
    {
        path:"/posts/:postId",//动态路由
        component:PostShow
    }
    
]
const router = createRouter({
    history:createWebHashHistory(),//路由模式
    routes,//路由配置
})
export default router;