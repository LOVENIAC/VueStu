<template>
  <div>
    <myBanner />
    <hr>
    <div class="wrap">
      <div class="leftSidebar">
        <div>
          <!-- html使用 -->
          <!-- <a 
            v-for="menu in menuList"
            :key="menu.id"
            :href="menu.link"
            :class="{'active':menu.isActive}"
            @click="handleRoute(menu)"
          >{{menu.name}}</a> -->
          <router-link
            v-for="menu in menuList"
            :key="menu.id"
            :to="menu.link"
            active-class="active"
          >{{menu.name}}</router-link>
        </div>
      </div>
      <div class="container">
        <!-- <myAbout /> 
        <myHome  /> -->
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
  import myBanner from './components/Banner'
  export default {
    name:'app',
    data(){
      return{
        menuList:[
          {id:'001',name:'About',link:'/about',isActive:true},
          {id:'002',name:'Home',link:'/home',isActive:false}
        ]
      }
    },
    methods:{
      handleRoute(menu){
        this.menuList.forEach(item=>{
          item.isActive = false;
        })
        menu.isActive = true;
      }
    },
    components:{
      myBanner
    }
  }
</script>

<style lang="less">
  .wrap{
    padding: 10px;
    display: flex;
  }
  .leftSidebar{
    height: fit-content;
    width: 200px;
    border-radius: 10px;
    border: 1px solid gray;
    color: gray;
    overflow: hidden;
    a{
      display: block;
      height: 50px;
      line-height: 50px;
      text-align: center;
    }
    .active{
      color: white;
      background: #3972b9;
    }
  }
  .container{
    height: fit-content;
    padding:20px;
    >a{
      counter-reset: gray;
    }
  }
</style>