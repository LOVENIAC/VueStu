<template>
  <div class="jumbotron">
    <div class="search">
        <input type="text" placeholder="请输入你要搜索的内容" v-model="keywords" @keydown.enter="searchKeydown(keywords)">
    </div>
  </div>
</template>
 
<script>
  import axios from 'axios'
  export default {
    name: 'MySearch',
    data(){
      return{
        keywords:''
      }
    },
    methods:{
      searchKeydown(keywords){
        this.$bus.$emit('getUsers',{
          isFirst: false,
          isLoading: true,
          users:[]
        });
        this.keywords = '';
        axios.get(`https://api.github.com/search/users?q=${keywords}`).then(
          res=>{
            this.$bus.$emit('getUsers',{
              isLoading: false,
              users: res.data.items
            });
          },
          eroor=>{
            console.log(eroor.message);
          }
        )
      }
    }
  }
</script>

<style lang='less' scoped>
  .jumbotron{
    margin-top: 200px;
    .search{
      display: flex;
      justify-content: center;
      input{
        outline: none;
        width: 720px;
        height: 52px;
        padding-inline-start: 10px;
        padding-inline-end: 10px;
        font-size: 18px;
        box-shadow: 0px 3px 6px 0px rgba(0,0,0,0.12);
        border: 1px solid transparent;
        border-radius: 8px;
      }
      input:focus{
        box-shadow: 0px 5px 12px 4px rgba(0,0,0,0.12);
      }
    }
  }
</style>