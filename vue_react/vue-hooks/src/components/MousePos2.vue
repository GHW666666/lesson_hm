<template>
    <div>
        <p >x:{{ mousePos.x }}</p>
        <p>y:{{ mousePos.y }}</p>
    </div>
</template>

<script setup>
import { 
  reactive,
  onMounted,
  onUnmounted
} from 'vue'
// const x=ref(0)
// const y=ref(0)
const mousePos=reactive({x:0,y:0})
function handleMouseMove(e) {
  mousePos.x=e.clientX
  mousePos.y=e.clientY
  console.log("haizai")

}
onMounted(()=>{
  window.addEventListener('mousemove', handleMouseMove)
})
onUnmounted(()=>{
  window.removeEventListener('mousemove', handleMouseMove)
})
</script>

<style  scoped>

</style>