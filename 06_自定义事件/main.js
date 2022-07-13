import Vue from 'vue'
import App from './App.vue'
import plugins from './plugins.js'

Vue.config.productionTip = false
Vue.use(plugins)

new Vue({
    el:'#app',
    render: h => h(App)
})