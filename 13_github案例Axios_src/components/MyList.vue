<template>
  <div class="container">
    <div v-show="infos.users.length" class="userList">
      <ul>
        <li v-for="user in infos.users" :key="user.id">
          <!-- {{user.avatar_url}} -->
          <img :src="user.avatar_url" alt="">
          <div>
            <a :href="user.html_url" target="_blank">
              <span>{{user.login}}</span>
            </a>
          </div>
        </li>
      </ul>
    </div>
    <h1 v-show="infos.isLoading">
      Loading...
    </h1>
    <h1 v-show="infos.isFirst">
      Hello World!
    </h1>
  </div>
</template>
 
<script>
    export default {
      name: 'MyList',
      data(){
        return{
          infos:{
            users:[],
            isLoading: false,
            isFirst: true,
            errorMsg: ''
          }
        }
      },
      mounted(){
        this.$bus.$on('getUsers',dataObj=>{
          this.infos = {...this.infos,...dataObj};
        })
      },
      beforeDestroy(){
        this.$bus.$off('getUsers');
      }
    }
</script>

<style lang='less' scoped>
  .container{
    margin-top: 50px;
  } 
  .userList{
    margin-top: 10px;
    padding: 20px;
    ul{
      list-style: none;
      width: 100%;
      flex-flow: wrap;
    }
    li{
      display: inline-block;
      text-align: center;
      padding: 10px;
      width: 25%;
      img{
        width: 100px;
        height: 100px;
        border-radius: 50%;
      }
    }
  }
</style>