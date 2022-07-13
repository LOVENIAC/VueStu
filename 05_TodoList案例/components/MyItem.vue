<template>
  <li>
    <div class="todo-main-item-left">
      <label>
        <input type="checkbox" :checked="todoObj.status" @change="handleCheck(todoObj.id)">
        <span>{{todoObj.title}}</span>
      </label>
    </div>
    <div class="todo-main-item-right">
      <button class="btn btn-danger" @click="delTodo(todoObj.id)">删除</button>
    </div>
  </li>
</template>

<script>
export default {
    name:'MyItem',
    props:['todoObj','handleCheck','delTodo']
}
</script>

<style lang='less' scoped>
  li{
    list-style: none;
    height: 36px;
    line-height: 36px;
    padding: 0 5px;
    border-radius: 5px;
    border: 1px solid rgba(0, 0, 0, 0.16);
    margin: 0 auto;
    label{
      input{
        vertical-align: middle;
      }
      user-select: none;
      cursor: pointer;
    }
    .todo-main-item-left{
      float: left;
      height: 36px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .todo-main-item-right{
      float: right;
      height: 36px;
      display: flex;
      align-items: center;
      justify-content: center;
      button{
        display: none;
      }
    }
  }
  li:hover{
    button{
      display: block;
    }
  }
</style>