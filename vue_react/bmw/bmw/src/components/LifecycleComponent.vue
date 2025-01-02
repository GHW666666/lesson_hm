<template>
    <div>
      <div>
        <p id="ghw">LifecycleComponent-Count:{{count}}</p>
      </div>
    </div>
  </template>
  
  <script setup>
  import { defineProps,
    onBeforeMount,   
    onMounted,
    onBeforeUnmount,
    onUnmounted,
    onBeforeUpdate,
    onUpdated } from 'vue';
  defineProps({
    count: {
      type: Number,
      required: true
    }
  })
  onBeforeMount(() => {
        console.log('beforeMounted');
        console.log(document.getElementById('ghw'));
    })
  console.log('hhh');
    onMounted(() => {
        console.log('mounted');
    })
  onBeforeMount(() => {
        console.log('beforeUnmounted');
    })
  onMounted(() => {
        console.log('unmounted');
    })
onBeforeUpdate(() => {
        console.log('beforeUpdate');
    })
  onUpdated(() => {
        console.log('updated');
    })
  </script>
  
  <style scoped>
  
  </style>