<template>
  <div>
      <h2 @click="showMsg">{{college}}</h2>
  </div>
</template>

<script>
// import {hunhe} from '../mixin.js'


export default {
    name:'SchoolItem',
    props:{
        college:{
            default: 'Yanc college',
            type: String
        }
    },
    // mixins:[hunhe]
}
</script>

<style>

</style>