<template>
  <div class="todo-main">
    <ul>
      <MyItem v-for="todo in todoList" :key="todo.id" :todoObj="todo" :handleCheck="handleCheck" :delTodo="delTodo"/>
    </ul>
  </div>
</template>

<script>
import MyItem from './MyItem'

export default {
    name:'MyTodos',
    components:{
      MyItem
    },
    data(){
      return {
      }
    },
    props:['todoList','handleCheck','delTodo']
}
</script>
<style lang="less" scoped>
  ul{
    padding: 0;
    margin: 10px auto;
    width: 400px;
  }
</style>