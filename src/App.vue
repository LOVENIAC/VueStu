<template>
  <div>
    <myCount />
    <myMovie />
  </div>
</template>

<script>
  import myCount from './components/Count'
  import myMovie from './components/Movie'

  export default {
    name:'app',
    components:{
      myCount,
      myMovie
    },
    mounted(){
    }
  }
</script>

<style>

</style>