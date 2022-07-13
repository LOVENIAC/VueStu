<template>
  <div class="container">
      <MySearch />
      <MyList :users='users'/>
    </div>
</template>

<script>
  import axios from 'axios'
  import MySearch from './components/MySearch.vue'
  import MyList from './components/MyList.vue'
  export default{
    name:'App',
    components:{
      MySearch,
      MyList
    },
    data(){
      return{
        users:[]
      }
    },
    mounted(){
      axios.get(`http://localhost:8080/api/linkedin.csv`).then(
        res=>{
          const data = res.data.split('\n');
          data.forEach(line => {
            const userInfo = line.split(',');
            this.users.push({
              avatar_url:userInfo[2],
              html_url:userInfo[0],
              login:userInfo[1]
            })
          });
        },
        eroor=>{
          console.log(eroor.message);
        }
      )
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