<template>
  <div>
    <div v-if="isLogin"> <img :src="userInfo.avatar" ></div>
  <div v-else> <button @click="login">登录</button></div>
  
  <CompA />
  <CompB />
  
  </div>
</template>

<script setup>

import CompA from './components/CompA.vue'
import CompB from './components/CompB.vue'
import { useUserStore } from './store/user';
import { toRefs } from 'vue';
const userStore = useUserStore();
const { isLogin,userInfo}=toRefs(userStore);
const { toLogin,toLogout,setUserInfo } = userStore;
const login=()=>{
  console.log('登录');
  toLogin();
  setUserInfo()
}
</script>

<style  scoped>

</style>