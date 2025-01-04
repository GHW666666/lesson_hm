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
import PostMeta from '../views/post/show/components/post-meta.vue'
//文章模块
const postRoutes = [
    {
        path:"/posts",
        name:"postIndex",
        component:PostIndex,
        //路由向页面级别的组件传递参数
        meta:{
            title:"文章列表"
        },
        props:{
            sort:"popular"
        }
    },
    {
        path:"/posts/:postId",//动态路由
        name:"postShow",
        component:PostShow,
        meta:{
            title:"文章详情"
        },
        props:true,//路由向页面级别的组件传递参数
        children:[
            {
                path:'meta',
                component:PostMeta,
                props:true
            }
        ]

    }
]

const routes = [
    {
        path:"/",//路径
        component:Home,//路由组件
        mate:{
            requireAuth:true,//路由元信息，用于权限控制
            title:"首页"
        }
    },
    {
        path:"/about",
        meta:{
            requireAuth:true//路由元信息，用于权限控制
            ,title:"关于"
        },
        name:"about",//路由名称，用于编程式导航
        component:About
    },
    ...postRoutes//展开数组
        
]
const router = createRouter({
    history:createWebHashHistory(),//路由模式
    routes,//路由配置
})
//路由守卫
//每次路由跳转前执行的回调函数
router.beforeEach((to,from,next)=>{
    //router+routes 
    document.title = to.meta.title || "首页"
    if(to.meta.requireAuth){
        alert("请先登录")
        next("/")
    }else{
        next()
    }
})
export default router;