//该文件用于创建vuex中最为核心的store
import Vue from 'vue'
// 引入Vuex
import Vuex from 'vuex'
// 引入Vuex插件
Vue.use(Vuex)

// 准备actions-用于响应组建的动作 
const actions = {
    increment(minStore,value){
        minStore.commit('INCREMENT',value);
    },
    decrement(content,value){
        content.commit('DECREMENT',value);
    },
    addMovie(minStore,value){
        if(!value.trim()) return console.log("Please input a movie");
        const movieObj = {
            id:state.movies.length+1,
            name:value
        }
        minStore.commit('ADDMOVIE',movieObj)
    }
}
// 准备mutations-用于操作数据
const mutations = {
    INCREMENT(state,value){
        state.sum += value;
    },
    DECREMENT(state,value){
        state.sum -= value;
    },
    ADDMOVIE(state,value){
        state.movies.push(value)
    }
}
// 准备state-用于存储数据
const state = {
    sum:0,
    name:'Pujie',
    hobby:'Travel',
    movies:[
        {id:1,name:'See u PuJie'},
        {id:2,name:'SpiderMan'},
        {id:3,name:'Hacker'},
    ]
}

const getters = {
    bigSum(state){
        return state.sum * 10;
    }
}

// 创建并暴露store
export default new Vuex.Store({
    actions,
    mutations,
    state,
    getters
})