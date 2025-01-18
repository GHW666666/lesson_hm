<template>
    <div>
        <h2>CompA</h2>
    <p>count:{{ CounterStore.count }}</p>
    <button @click="CounterStore.increment">增加</button>
    <CompSubA />
    </div>
</template>

<script setup>
//引入中央模块
import { useCounterStore } from '../store/counter';
import CompSubA from './CompSubA.vue';
//从中央模块解构
const CounterStore = useCounterStore();
const { count, increment } = CounterStore;
</script>

<style  scoped>

</style>