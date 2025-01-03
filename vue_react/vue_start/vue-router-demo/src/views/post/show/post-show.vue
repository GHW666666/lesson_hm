<template>
    <div>
     <div> PostShow {{postId}}</div>
    </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
const route = useRoute()//当前路由
const postId = route.params.postId//获取路由参数

</script>

<style  scoped>

</style>