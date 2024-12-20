<template>
    <div class="counter">
        <p>Count:{{ count }}</p>
        <button @click="count++">+1</button>
        计数器
    </div>
</template>

<script setup>
import{ ref 

} from 'vue'
const count = ref(0)

// const increment = () => {
//     count.value++
// }
</script>
<style>
.counter {
    text-align: center;
    margin-top: 10px;
    color: red;
}
button {
    padding:10px 20px ;
    font-size: 16px;
    color: blue;
}
</style>