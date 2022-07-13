<template>
  <div @click="showMsg">
      <h1>{{msg}}</h1>
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
    // props的简单声明
    // props:['name','age','sex']

    // props的类型限制
    // props:{
    //     name:String,
    //     age:Number,
    //     sex:String
    // }

    // props的限制类型、必要参数、默认值
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

<style>

</style>