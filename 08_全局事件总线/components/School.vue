<template>
  <div class="school">
      <h2>{{college}}</h2>
  </div>
</template>

<script>
export default {
    name:'SchoolItem',
    data(){
        return{
            college:'Yanc college'
        }
    },
    mounted(){
        this.$bus.$on('sendStuInfo',(...params)=>{
            console.log('I am School',params);
        })
    }
}
</script>

<style>
.school{
    background-color: antiquewhite;
}
</style>