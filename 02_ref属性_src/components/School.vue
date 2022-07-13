<template>
  <div class="school">
      <h1>name:{{schoolName}}</h1>
      <h1>area:{{schoolArea}}</h1>
  </div>
</template>

<script>
export default {
    name:'SchoolItem',
    data() {
        return {
            schoolName:'Yanc college',
            schoolArea:'Yanc'
        }
    },
}
</script>

<style>
    .school{
        background-color: bisque;
    }
</style>