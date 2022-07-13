import Vue from 'vue'
import App from './App.vue'
import {hunhe} from './mixin.js'

Vue.config.productionTip = false
Vue.mixin(hunhe)

new Vue({
    el:'#app',
    render: h => h(App)
})