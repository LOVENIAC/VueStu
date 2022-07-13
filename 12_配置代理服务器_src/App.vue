<template>
  <div>
    <button @click="getInfo">get Info</button>
  </div>
</template>

<script>
  import axios from 'axios'
  export default{
    name:'App',
    methods:{
      getInfo(){
        axios.get('http://localhost:8083/api/students').then(
          res => {
            console.log(res.data);
          },
          error => {
            console.log(error.message);
          }
        )
      }
    }
  }
</script>

<style lang="less">

</style>