<template>
  <div>
    <testModel />
    <testModel2 />
    <testModel3 />
  </div>
</template>

<script>
import testModel from './components/Test.vue'
import testModel2 from './components/Test2.vue'
import testModel3 from './components/Test3.vue'

export default {
  components:{
    testModel,
    testModel2,
    testModel3
  },
  data(){
    return {

    }
  },
  methods:{

  }
}
</script>

<style>

</style>