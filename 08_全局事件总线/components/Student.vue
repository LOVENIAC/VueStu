<template>
  <div class="student">
      <h2>学生姓名：{{name}}</h2>
      <h2>学生年龄：{{age}}</h2>
      <button @click="sendStuInfo">发送学生信息给school组件</button>
  </div>
</template>

<script>
export default {
    name:'StudentItem',
    data() {
        return {
            name:'Siri',
            age:21
        }
    },
    methods:{
        sendStuInfo(){
            this.$bus.$emit('sendStuInfo',this.name);
        }
    }
}
</script>

<style lang="less" scoped>
    .student{
        background-color: aquamarine;
    }
</style>