<template>
  <div class="container">
    <h1>当前求和为:{{sum}}</h1>
    <select v-model.number="n">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="incrementOdd">数字为基数再加</button>
    <button @click="incrementWait">等一等再加</button>
  </div>
</template>

<script>
  export default {
    name: 'MyCount',
    data(){
      return{
        n: 1,
        sum: 0
      }
    },
    methods:{
      increment(){
        this.sum += this.n;
      },
      decrement(){
        this.sum -= this.n;
      },
      incrementOdd(){
        if(Math.abs(this.sum%2)===1) this.sum += this.n;
      },
      incrementWait(){
        setTimeout(()=>{
          this.sum += this.n;
        },500)
      }
    }
  }
</script>

<style>
  .container > *{
    margin:5px;
  }
</style>