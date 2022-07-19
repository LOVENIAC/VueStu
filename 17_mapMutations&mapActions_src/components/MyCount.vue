<template>
  <div class="container">
    <h1>当前求和为:{{sum}}</h1>
    <h2>当前值乘10为:{{bigSum}}</h2>
    <h2>{{name}} like {{hobby}}</h2>
    <select v-model.number="n">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="increment(n)">+</button>
    <button @click="decrement(n)">-</button>
    <button @click="incrementOdd">数字为基数再加</button>
    <button @click="incrementWait">等一等再加</button>
  </div>
</template>

<script>
  import {mapState,mapGetters,mapMutations,mapActions} from 'vuex';
  export default {
    name: 'MyCount',
    data(){
      return{
        n: 1
      }
    },
    computed:{
      // 正常写法（繁琐）
      // sum(){
      //   return this.$store.state.sum
      // },
      // name(){
      //   return this.$store.state.name
      // },
      // hobby(){
      //   return this.$store.state.hobby
      // }

      // ********************************************************

      // 借助mapState生成计算属性，从state中读取数据（对象写法）
      ...mapState({sum:'sum',name:'name',hobby:'hobby'}),
      // 借助mapState生成计算属性，从state中读取数据（数组写法）
      // ...mapState(['sum','name','hobby']),

      // 借助mapGetters生成计算属性，从getters中读取数据（对象写法）
      // ...mapGetters({bigSum:'bigSum'}),
      // 借助mapState生成计算属性，从getters中读取数据（数组写法）
      ...mapGetters(['bigSum'])

    },
    methods:{
      // increment(){
      //   // this.$store.dispatch('increment',this.n)
      //   // 直接和mutation对话
      //   this.$store.commit('INCREMENT',this.n)
      // },
      // decrement(){
      //   this.$store.dispatch('decrement',this.n)
      // },
      incrementOdd(){
        if(Math.abs(this.$store.state.sum%2)===1) this.$store.dispatch('increment',this.n);
      },
      incrementWait(){
        setTimeout(()=>{
          this.$store.dispatch('increment',this.n)
        },500)
      },

      // 借助mapMutations直接commit到mutaions中的方法
      ...mapMutations[''],
      // ...mapMutations({increment:'INCREMENT',decrement:'DECREMENT'}),

      // 借助mapMutations直接dispatch到actions中的方法
      // ...mapActions({increment:'increment',decrement:'increment'}),
      ...mapActions(['increment','decrement'])
    },
    mounted(){
      const x = mapState({sum:'sum',name:'name',hobby:'hobby'});
      const y = mapGetters(['bigSum']);
      console.log(x);
      console.log(y);
    }
  }
</script>

<style>
  .container > *{
    margin:5px;
  }
</style>