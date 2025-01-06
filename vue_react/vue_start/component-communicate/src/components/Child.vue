<template>
    <div>
     child 
    </div>
</template>

<script setup>
import { defineExpose } from 'vue'
defineExpose({
    childName:'我是子组件属性',
    someMethod(){
        console.log('我是子组件的方法')
    }
})
</script>

<style  scoped>

</style>