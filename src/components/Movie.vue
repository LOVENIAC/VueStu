<template>
  <div>
    <h1>Movie List</h1>
    <input type="text" placeholder="Input your like movie.." v-model="movieName" @keyup.enter="addMovie(movieName)">
    <ul>
      <li v-for="movie in movies" :key="movie.id">{{movie.name}}</li>
    </ul>
  </div>
</template>

<script>
  import { mapState,mapActions } from 'vuex';

  export default {
    name:'myMovie',
    computed:{
      // movies(){
      //   return this.$store.state.movies;
      // }
      // ...mapState({movies:'movies'})
      ...mapState(['movies'])
    },
    data(){
      return{
        movieName:''
      }
    },
    methods:{
      // addMovie(){
      //   this.$store.dispatch('addmovie',this.movieName);
      // }
      ...mapActions(['addMovie'])
    }
  }
</script>

<style>
  ul{
    list-style: none;
    padding: 0;
  }
</style>