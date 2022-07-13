<template>
  <div class="demo">
      <h1 class="demo-content">{{msg}}</h1>
      <h2>{{name}}</h2>
      <h2>{{age}}</h2>
      <h2>{{sex}}</h2>
  </div>
</template>

<script>
export default {
    name:'StudentItem',
    data() {
        return {
            msg:'Hello StudentItem!'
        }
    },
    props:{
        name:{
            type:String,
            required:true
        },
        age:{
            type:Number,
            default:18
        },
        sex:{
            type:String,
            required:true
        }
    }
}
</script>

<style lang="less" scoped>
    .demo{
        background-color: aquamarine;
        .demo-content{
            color: blueviolet;
        }
    }
</style>