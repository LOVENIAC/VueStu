<template>
  <div class="todo-header">
    <input type="text" placeholder="请输入你的任务内容，按回车键确认" @keydown.enter="addTodo">
  </div>
</template>

<script>
import {nanoid} from 'nanoid'

export default {
    name:'MyHeader',
    props:['receive'],
    methods:{
      addTodo(e){
        const newTodo = {
          id:nanoid(),
          title:e.target.value,
          status:false
        };
        this.receive(newTodo);
        e.target.value = '';
      }
    }
}
</script>

<style lang="less" scoped>
  .todo-header{
    width: 400px;
    margin: 0 auto;
    input{
      box-sizing: border-box;
      display: inline-block;
      width: 100%;
      height: 28px;
      line-height: 28px;
      border: 1px solid rgba(0, 0, 0, 0.16);
      padding: 4px 7px;
      border-radius: 5px;
      font-size:14px;
    }
    
    input:focus{
      outline: none;
      box-shadow: 0px 5px 12px 0px rgba(0, 0, 0, 0.16);
    }
  }
</style>