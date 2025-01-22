import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createPinia} from 'pinia'
import { 
    ElButton
} from 'element3'
import 'element3/lib/theme-chalk/index.css'
import router from './router'
createApp(App)
.use(router)
.use( createPinia())
.use(ElButton)
.mount('#app')


