<template>
    <div>
     <p>{{news}}</p>
     <input type="text" v-model="user1">
     <button @click="y">显示</button>
     <p v-if="y">{{user1}}</p>
    </div>
</template>

<script>
export default {
    setup () {
        return {
            news: '每天编程一小时大型',
            user1: ''
        }
        
    }
   
}
</script>

<style lang="scss" scoped>

</style>