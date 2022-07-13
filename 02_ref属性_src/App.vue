<template>
  <div id="app">
      <h1 ref="msg" v-text="msg"></h1>
      <button @click="showDom">show DOM!</button>
      <SchoolItem ref="schoolItem"></SchoolItem>
  </div>
</template>

<script>
import SchoolItem from './components/School.vue'
export default {
    name:'App',
    components:{SchoolItem},
    data() {
        return {
            msg:'Hello World!'
        }
    },
    methods:{
        showDom(){
            console.log(this.$refs.msg); // 真实DOM元素
            console.log(this.$refs.schoolItem);// 组件实例对象
        }
    },
    mounted() {
        console.log('refresh...');
    }
}
</script>

<style>

</style>