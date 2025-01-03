import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'//自动导入index.js文件，省略文件名
createApp(App)//vue根组件
// use方法可以插上插件，比如vuex、vue-router等，周边生态
.use(router)//插上路由插件
.mount('#app')

