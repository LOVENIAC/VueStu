<template>
  <div class="student">
      <h1>{{msg}}</h1>
      <button @click="sendMsg">send msg to App</button>
  </div>
</template>

<script>
export default {
    name:'StudentItem',
    data() {
        return {
            msg:'Hello Student!'
        }
    },
    props:{
        getStudentMsg:Function
    },
     methods:{
         sendMsg(){
             this.getStudentMsg(this.msg);
         }
     }
}
</script>

<style lang="less" scoped>
    .student{
        background-color: aquamarine;
    }
</style>