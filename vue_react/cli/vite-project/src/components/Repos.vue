<template>
   <ul>
  <li v-for="(repo,index) in repos" :key="index">{{repo.name}}</li>
</ul>
</template>
<script setup>
 const repos=[
        {
          id:1,
          name:"repo1"
        },
        {
          id:2,
          name:"repo2"
        }
        ,
        {
          id:3,
          name:"repo3"
        }
      ]
</script>

