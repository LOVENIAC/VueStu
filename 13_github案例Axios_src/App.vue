<template>
  <div class="container">
      <MySearch />
      <MyList />
    </div>
</template>

<script>
  import MySearch from './components/MySearch.vue'
  import MyList from './components/MyList.vue'
  export default{
    name:'App',
    components:{
      MySearch,
      MyList
    }
  }
</script>

<style lang="less">
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  a{
      text-decoration: none;
      color: #000;
  }
  .container{
    width: 1000px;
    margin: 0 auto;
  }
</style>