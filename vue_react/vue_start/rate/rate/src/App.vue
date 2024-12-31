<template>
  <div id="container">
   <AppHeader />
  <div class="flx">
   <AppMain />
    <AppAside />
  </div>
  </div>
</template>

<script setup>
import AppHeader from './components/AppHeader.vue'
import AppMain from './components/AppMain.vue'
import AppAside from './components/AppAside.vue'
</script>

<style  scoped>
.flx{
  display: flex;
  
}
</style>