<template>
  <div class="container">
    <h1>当前求和为:{{sum}}</h1>
    <h2>当前值乘10为:{{bigSum}}</h2>
    <h2>{{name}} like {{hobby}}</h2>
    <h2>Movies total:{{movies.length}}</h2>
    <select v-model.number="n">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="increment(n)">+</button>
    <button @click="decrement(n)">-</button>
    <button @click="incrementWait(n)">等一等再加</button>
  </div>
</template> 

<script>
  import {mapState, mapActions, mapGetters} from 'vuex';
  export default {
    name: 'myCount',
    data(){
      return{
        n: 1
      }
    },
    computed:{
      ...mapState('countOptions',['sum','name','hobby']),
      ...mapState('movieOptions',['movies']),
      ...mapGetters('countOptions',['bigSum'])
    },
    methods:{
      ...mapActions('countOptions',['increment','decrement','incrementWait']),
    },
    mounted(){
      console.log(this.$store);
    }
  }
</script>

<style>
  .container > *{
    margin:5px;
  }
</style>