<template>
  <div>
    <h2>{{$route.query.id}},{{$route.query.title}}</h2>
    <ul>
      <li
        v-for="(item,index) in $route.query.items"
        :key="index"
      >
        {{item}}
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name:'myDetail',
    mounted(){
      console.log('send post',this.$route.query); 
    }
  }
</script>

<style>

</style>