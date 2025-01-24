<template>
  <div>
<p>计数器:{{count}}</p>
<button @click="increment">+</button>
  
<p>计数器二:{{count2}}</p>
<button @click="count2++">+</button>
 <br>
{{typeof user.age}}
<p>变化:{{user.age}}</p>
<!-- 这里用的是双向绑定，v-model.number 修饰符，限定输入框转换为为数字 -->
<input  v-model="user.age">
<p>变化:{{user.name}}</p>
<input type="text" v-model.number="user.name">
</div>
  
</template>


<script setup>
import {
  ref,
  watch,
  watchEffect
} from 'vue'
const count = ref(0)
const count2=ref(0)
//这里自动转化成reactive对象，响应式数据结构
const user=ref({
  name:'zhangsan',
  age:18
})
//count 改变后做点啥
const increment = ()=>{
  count.value++
}
watch(count,(newValue,oldValue)=>{
  //state状态的改变
  console.log('count 改变了')
  console.log(newValue,oldValue)
  if(count.value>2){
    console.log('太大了')
  }
},{
  immediate:false,
  deep:false
})
//监听，订阅发布者模式，观察者模式
watchEffect(()=>{
  console.log(`count 的值是${count.value}`)
  console.log(`count2 的值是${count2.value}`)
})
watch(user,(newValue,oldValue)=>{
  console.log(newValue)
  console.log(`user 的值是${JSON.stringify(user.value)}`)//隐式类型转化
},{
  immediate:true,
  deep:true
})
</script>

<style  scoped>

</style>