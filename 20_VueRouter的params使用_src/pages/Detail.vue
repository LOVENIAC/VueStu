<template>
  <div>
    <h2>{{$route.params.id}},{{$route.params.title}}</h2>
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