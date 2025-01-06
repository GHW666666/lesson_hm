<template>
  <div>
    {{counter}}
  <div>   
    </div>
    <button @click="increment">+</button>
    <p>{{state.name}}</p>
      <p>{{state.age}}</p>
    <button @click="upState">+</button>
  </div>
</template>

<script setup>
//composition API 组合式
import { 
  ref ,//简单数据类型
  reactive//复杂数据类型
} from 'vue'
//组合式API
//counter计数业务
const counter = ref(0);//简单数据类型
const increment = () => {
  counter.value++;
}
// 对象数据业务
const state=reactive({
  name:'Alice',
  age:18
})
const upState=()=>{
  state.name='Bob';
  state.age++;
}

</script>

<style  scoped>

</style>