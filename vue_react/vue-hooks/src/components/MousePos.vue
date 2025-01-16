<template>
    <div>
        <p>x: {{ mousePos.x }}</p>
        <p>y: {{ mousePos.y }}</p>
    </div>
</template>

<script setup>
import { useMousePosition,useMouse } from '../hooks/useMouse.js';

// 调用 useMouse 并接收整个响应式对象
const mousePos = useMousePosition();


// 如果你需要分别访问 x 和 y，可以继续使用 mousePos.x 和 mousePos.y
// const { x, y } = mousePos; // 这样做仍然会保持响应性，因为 mousePos 是响应式的
</script>

<style scoped>
/* 添加必要的样式 */
</style>