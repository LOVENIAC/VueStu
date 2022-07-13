<template>
  <div class="todos-container">
    <div class="todos-wrap">
      <MyHeader></MyHeader>
      <MyTodos :todoList="todoList"></MyTodos>
      <MyFooter :todoList="todoList" :checkAll="checkAll" :delAll="delAll"></MyFooter>
    </div>
  </div>
</template>

<script>
import MyHeader from './components/MyHeader.vue'
import MyTodos from './components/MyTodos.vue'
import MyFooter from './components/MyFooter.vue'

export default {
  name:'App',
  components:{
    MyHeader,
    MyTodos,
    MyFooter
  },
  data(){
    return{
      todoList:[
        {id:'001',title:'study code',status:false},
        {id:'002',title:'gym',status:true}
      ]
    }
  },
  methods:{
    receive(newTodo){
      if(newTodo.title.trim()){
        this.todoList.unshift(newTodo);
      }else{
        alert('请不要输入空字符');
      }
    },
    checkAll(status){
      this.todoList.forEach(todo=>todo.status=status);
    },
    delAll(){
      if(confirm('确认删除全部吗？')){
        this.todoList = this.todoList.filter(todo=>!todo.status);
      }
    }
  },
  mounted(){
    this.$bus.$on('receive',data=>{
      this.todoList.unshift(data);
    });
    this.$bus.$on('handleCheck',id=>{
      this.todoList.forEach((todo)=>{
        if(todo.id === id) todo.status = !todo.status;
      })
    });
    this.$bus.$on('delTodo',id=>{
      this.todoList = this.todoList.filter(todo=>todo.id !== id);
    })
  },
  beforeDestroy(){
    this.$bus.$off('receive');
    this.$bus.$off('handleCheck');
    this.$bus.$off('delTodo');
  }
}
</script>

<style lang="less">
  .todos-container{
    margin: 50px auto;
    width: 500px;
  }
  .todos-wrap{
    padding: 10px;
    border-radius: 5px;
    border: 1px solid rgba(0, 0, 0, 0.16);
  }
  .btn{
    border: 0;
    user-select: none;
    cursor: pointer;
    padding:5px 10px;
    border-radius: 5px;
    background-color: transparent;
  }
  .btn-danger{
    background-color: rgb(241, 71, 71);
    color: white;
  }
  .btn-edit{
    background-color: rgb(55, 186, 233);
    color: white;
  }
  .btn-danger:hover{
    background-color: red;
  }
</style>