<template>
    <div>
    <h2>父组件</h2>
    <p>来自子组件的消息:{{massageFormChild}}</p>
    <ChildComponent @child-message="handleChildMassage" :title="title"/>
    <!-- @自定义事件名="child-message" 父组件接收方法handleChildMassage -->
     <!-- 子组件调用child-message方法告知父组件 自动执行 -->
    </div>
</template>

<script setup>
//父子组件通信
import ChildComponent from './components/ChildComponent.vue'
import {ref} from 'vue'
const title=ref('父组件标题')
const massageFormChild=ref('')
const handleChildMassage=(massage)=>{
    console.log('来自子组件的',massage)
    massageFormChild.value=massage
}
</script>

<style  scoped>

</style>