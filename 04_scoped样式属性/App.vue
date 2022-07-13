<template>
  <div id="app">
      <StudentItem ref="schoolItem" name="Alex" :age="18" sex="male"></StudentItem>
      <SchoolItem college="Suz"></SchoolItem>
  </div>
</template>

<script>
import StudentItem from './components/Student.vue'
import SchoolItem from './components/School.vue'

export default {
    name:'App',
    components:{StudentItem,SchoolItem}
}
</script>

<style>

</style>