import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createPinia } from 'pinia'

//vue 全家桶最后一个 状态管理库
const app=createApp(App)
const pinia=createPinia()
app.use(pinia).mount('#app')
