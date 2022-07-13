<template>
  <div class="todo-footer" v-show="total">
    <label>
      <input type="checkbox" v-model="isAll">
    </label>
    <span>已完成{{doneTotal}} / 全部{{total}}</span>
    <button class="btn btn-danger" @click="delAll">清除已完成任务</button>
  </div>
</template>

<script>
export default {
    name:'MyFooter',
    props:['todoList','checkAll','delAll'],
    computed:{
      total(){
        return this.todoList.length;
      },
      doneTotal(){
        return this.todoList.reduce((pre,todo)=>pre + (todo.status == true ? 1:0),0)
      },
      isAll:{
        get(){
          return this.total === this.doneTotal && this.total>0;
        },
        set(value){
          this.checkAll(value);
        }
      }
    }
}
</script>

<style lang="less">
  .todo-footer{
    box-sizing: border-box;
    padding:0 5px;
    width: 400px;
    height: 40px;
    line-height: 40px;
    margin: 0 auto;
      label{
        user-select: none;
        cursor: pointer;
        input{
          vertical-align: middle;
        }
      }
    button{
      float: right;
      margin-top: 5px;
    }
  }
</style>