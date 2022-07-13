<template>
  <div class="todo-main">
    <ul>
      <transition-group
        name='todo'
        appear
      >
        <MyItem
          v-for="todo in todoList"
          :key="todo.id"
          :todoObj="todo"
        />
      </transition-group>
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
    props:['todoList']
}
</script>
<style lang="less" scoped>
  ul{
    padding: 0;
    margin: 10px auto;
    width: 400px;
  }

  .todo-enter-active{
    animation: todo 0.5s linear;
  }

  .todo-leave-active{
    animation: todo 0.5s linear reverse;
  }

  @keyframes todo {
    from{
      opacity: 0;
    }
    to{
      opacity: 1;
    }
  }
</style>