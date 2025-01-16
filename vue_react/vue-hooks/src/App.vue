<template>
  <div>
<MousePos v-if="showMouse" />
<button @click="toggle">切换</button>
  </div>
</template>

<script setup>
import {
  ref
} from 'vue'
import MousePos from './components/MousePos.vue'
const showMouse=ref(true)
const toggle=()=>{
  showMouse.value=!showMouse.value
}
</script>

<style  scoped>

</style>