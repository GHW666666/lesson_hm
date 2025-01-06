<template>
  <div>
    <h2>{{ title }}</h2>
    <button @click="sendMessageToParent">发送消息给父组件</button>
  </div>
</template>

<script setup>
import { 
  defineProps,
  defineEmits,
  ref
} from 'vue'

const childMessage = ref('Hello, Parent!')

defineProps({
  title: {
    type: String,
    required: true
  }
})
//emits 汇报给父组件的事件名，以及传递的参数类型
const emits = defineEmits(['child-message'])
const sendMessageToParent = () => {
  emits('child-message',childMessage.value)
}
</script>

<style scoped>

</style>