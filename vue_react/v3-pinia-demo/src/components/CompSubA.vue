<template>
    <div>
   CompSubA
   {{ count }}
   <hr>
   {{ counterStore.count}}
    </div>
</template>

<script setup>
import { useCounterStore } from '../store/counter';
const counterStore = useCounterStore();
const { count, increment } = counterStore;//只有值，响应式丢失
</script>

<style  scoped>

</style>