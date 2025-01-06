<template>
    <div>
    <Child  ref="comp" />
    <button @click="handlerChild">按钮</button>
    </div>
</template>

<script setup>
import Child from './Child.vue'
import {ref} from 'vue'

const comp=ref()//获取子组件的实例
const title=ref('我是父组件')//获取子组件的属性
const handlerChild=()=>{
    console.log(comp.value.childName)
    console.log(comp.value.someMethod())
}

</script>

<style scoped>

</style>