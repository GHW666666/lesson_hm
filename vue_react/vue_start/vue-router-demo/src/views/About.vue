<template>
    <div>
    About
     <button @click="goHome">goHome</button>
    </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()//路由对象 总管


// const goHome = () => {
//     //js跳转 设置url Bom Browser Object Model 浏览器对象模型
//     //破坏了
//     window.location.href = '/'
// }

const goHome = () => {
    //vue-router跳转
    router.push('/')
}
</script>

<style scoped>

</style>