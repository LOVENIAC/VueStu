<template>
  <div>
    <h2>{{msg}}</h2>
    <StudentItem></StudentItem>
    <SchoolItem></SchoolItem>
  </div>
</template>

<script>
import StudentItem from './components/Student.vue'
import SchoolItem from './components/School.vue'

export default {
    name:'App',
    components:{StudentItem,SchoolItem},
    data(){
      return{
        msg:'Hello World!'
      }
    }
}
</script>

<style>

</style>