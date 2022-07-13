<template>
  <div class="container">
    <MyCategory title='Study'>
      <template slot="default">
        <ul>
          <li v-for="item in StudyList" :key="item">{{item}}</li>
        </ul>
      </template>
    </MyCategory>
    <MyCategory title='Movie'>
      <h3 slot="movie">I am Movie</h3>
    </MyCategory>
    <MyCategory title='Sport'>
      <h3 slot="default">I am Sport</h3>
    </MyCategory>
  </div>
</template>

<script>
  import MyCategory from './components/MyCategory.vue'
  export default {
    name: 'app',
    components:{
      MyCategory
    },
    data(){
      return{
        StudyList:['Vue','Nuxt.js','React'],
        MovieList:['Pujie','BatMan'],
        SportList:['Gym']
      }
    },
    mounted(){
      this.$bus.$emit('getUserInfo')
    }
  }
</script>

<style lang='less'>
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  .container{
    margin: 0 auto;
    width: 800px;
    display: flex;
    justify-content: space-between;
    div{
      flex-shrink: 0;
    }
  }
</style>