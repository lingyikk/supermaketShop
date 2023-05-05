import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

//挂载$bus
// Vue.prototype.$bus = new Vue()

new Vue({
    beforeCreate() {
        Vue.prototype.$bus = this  //挂载$bus
    },
    router,
    store,
    render: h => h(App)
}).$mount('#app')



