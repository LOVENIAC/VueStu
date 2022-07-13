<template>
  <div>
    <SchoolItem></SchoolItem>
    <StudentItem></StudentItem>
  </div>
</template>

<script>
import SchoolItem from './components/School.vue'
import StudentItem from './components/Student.vue'
export default {
  name: 'App',
  components:{
    SchoolItem,
    StudentItem
  }
}
</script>

<style>

</style>