<template>
  <li>
    <div class="todo-main-item-left">
      <label>
        <input type="checkbox" :checked="todoObj.status" @change="handleCheck(todoObj.id)">
        <span v-show="!todoObj.isEdit">{{todoObj.title}}</span>
        <input ref="inputTitle" v-show="todoObj.isEdit" type="text" :value="todoObj.title" @blur="handleBlur(todoObj,$event)">
      </label>
    </div>
    <div class="todo-main-item-right">
      <button class="btn btn-danger" @click="delTodo(todoObj.id)">删除</button>
      <button class="btn btn-edit" style="margin-left:5px" @click="handleEdit(todoObj)" v-show="!todoObj.isEdit">编辑</button>
    </div>
  </li>
</template>

<script>
export default {
    name:'MyItem',
    props:['todoObj'],
    methods:{
      handleCheck(id){
        this.$bus.$emit('handleCheck',id);
      },
      delTodo(id){
        this.$bus.$emit('delTodo',id);
      },
      handleEdit(todo){
        if(Object.prototype.hasOwnProperty.call(todo,'isEdit')){
          todo.isEdit = true;
        }else{
          this.$set(todo,'isEdit',true);
        }
        // this.$refs.inputTitle.focus();
        this.$nextTick(()=>{
          this.$refs.inputTitle.focus();
        })
      },
      handleBlur(todo,e){
        todo.isEdit = false;
        if(e.target.value.trim()=='') return alert('请不要输入空值');
        todo.title = e.target.value;
      }
    }
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