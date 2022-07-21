//该文件用于创建vuex中最为核心的store
import Vue from 'vue'
// 引入Vuex
import Vuex from 'vuex'
// 引入Vuex插件
Vue.use(Vuex)

const countOptions = {
  namespaced:true,
  actions:{
    increment(minStore,value){
      minStore.commit('INCREMENT',value);
    },
    decrement(content,value){
      content.commit('DECREMENT',value);
    },
    incrementWait(content,value){
      setTimeout(() => {
        content.commit('INCREMENT',value)
      }, 500);
    }
  },
  mutations:{
    INCREMENT(state,value){
      state.sum += value;
    },
    DECREMENT(state,value){
      state.sum -= value;
    }
  },
  state:{
    sum:0,
    name:'Pujie',
    hobby:'Travel'
  },
  getters:{
    bigSum(state){
      return state.sum * 10;
    }
  }
}

const movieOptions = {
  namespaced:true,
  actions:{
    addMovie(minStore,value){
      if(!value.name.trim()) return alert("Please input a movie");
      minStore.commit('ADDMOVIE',value)
    }
  },
  mutations:{
    ADDMOVIE(state,value){
      state.movies.unshift(value)
    }
  },
  state:{
    movies:[
      {id:1,name:'See u PuJie'},
      {id:2,name:'SpiderMan'},
      {id:3,name:'Hacker'},
    ]
  },
  getters:{
    firstMovie(state){
      return state.movies[0].name;
    }
  }
}

// 创建并暴露store
export default new Vuex.Store({
  modules:{
    countOptions,
    movieOptions
  }
})