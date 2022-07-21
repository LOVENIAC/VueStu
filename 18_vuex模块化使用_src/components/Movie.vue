<template>
  <div>
    <h1>Movie List</h1>
    <h3>First movie is 《{{firstMovie}}》</h3>
    <input type="text" placeholder="Input your like movie.." v-model="name" @keyup.enter="addMovie()">
    <ul>
      <li v-for="movie in movies" :key="movie.id">{{movie.name}}</li>
    </ul>
  </div>
</template>

<script>
  import { mapState } from 'vuex';
  import { nanoid } from 'nanoid';

  export default {
    name:'myMovie',
    computed:{
      ...mapState('movieOptions',['movies']),
      firstMovie(){
        return this.$store.getters['movieOptions/firstMovie'];
      }
    },
    data(){
      return{
        name:''
      }
    },
    methods:{
      addMovie(){
        const movieObj = {
          id:nanoid(),
          name:this.name
        }
        this.$store.dispatch('movieOptions/addMovie',movieObj)
      }
    }
  }
</script>

<style>
  ul{
    list-style: none;
    padding: 0;
  }
</style>