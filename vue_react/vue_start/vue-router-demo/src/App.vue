<template>
  <!-- 导航 -->
  <div class="page">
   <header class="page-header">
    <h3 class="brand">{{ name }}</h3>
    <nav class="menu">
    
    <router-link class="menu-item" to="/">首页</router-link>
    <router-link class="menu-item" :to="{name:'about'}">关于</router-link>
    <router-link class="menu-item" :to="{name:'postIndex'}">内容</router-link>
    </nav>
    </header>
    <main class="page-body">
      <router-view /> 
    </main>
  </div>
</template>

<script setup>

const name="质普华章"
</script>

<style lang="stylus"  scoped>
.page
  padding 20px
.page-header
  display flex
  align-items: center
  border-bottom: 1px solid #e1e1e1
.brand
  margin-right: 32px
.menu-item
  display inline-block
  text-decoration: none
  color: #585858
  margin: 8px
  padding: 8px 16px
.page-body
  margin-top: 24px 0
.router-link-active
  color: #007bff
  background #eee
  border-radius: 4px
</style>