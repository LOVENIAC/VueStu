<template>
  <div class="container">
    <div v-show="users.length" class="userList">
      <ul>
        <li v-for="user in users" :key="user">
          <!-- {{user.avatar_url}} -->
          <img :src="user.avatar_url" alt="">
          <div>
            <a :href="`https://www.google.com.hk/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&url=${user.html_url}`" target="_blank">
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
      props:['users'],
      data(){
        return{
          infos:{
            isLoading: false,
            isFirst: true,
            errorMsg: ''
          }
        }
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
        width: 150px;
        height: 150px;
        border-radius: 50%;
      }
    }
  }
</style>