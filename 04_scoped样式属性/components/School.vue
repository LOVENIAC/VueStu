<template>
  <div>
      <h2 class="demo">{{college}}</h2>
  </div>
</template>

<script>
export default {
    name:'SchoolItem',
    props:{
        college:{
            default: 'Yanc college',
            type: String
        }
    },
}
</script>

<style>
.demo{
    background-color: antiquewhite;
}
</style>