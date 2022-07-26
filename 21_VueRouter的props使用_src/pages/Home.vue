<template>
  <div>
    <h2>I am Home</h2>
    <ul class="nav">
      <router-link
        v-for="item in homeList"
        :key="item.id"
        :to="{
          name:'detail',
          query:{
            id:item.id,
            title:item.title
          }
        }"
      >{{item.title}}</router-link>
      <!-- params简化用法 -->
      <!-- <router-link 
        v-for="item in homeList"
        :key="item.id"
        :to="`/home/detail/${item.id}/${item.title}`"
      >
        {{item.title}}
      </router-link> -->
    </ul>
    <hr>
    <router-view class="homeContainer"></router-view>
  </div>
</template>

<script>

  export default {
    name:'myHome',
    data(){
      return{
        homeList:[
          {id:'001',title:'Hobby',items:['Vue','React','Angular']},
          {id:'002',title:'Movie',items:['PuJie','Sakura']},
        ]
      }
    },
    mounted(){
      console.log('Home',this.$router);
    }
  }
</script>

<style lang="less">
  .nav{
    color: #000;
    margin-top: 20px;
    display: flex;
    a{
      display: block;
      height: 50px;
      line-height: 50px;
      width: 100px;
      text-align: center;
      user-select: none;
    }
  }
  .homeContainer{
    margin-top: 20px;
    font-size: 25px;
    li{
      padding: 5px;
    }
  }
</style>