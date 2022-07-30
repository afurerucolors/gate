import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import infiniteScroll from 'vue-infinite-scroll'
Vue.use(infiniteScroll)
import './assets/css/main.css'

Vue.config.productionTip = false

new Vue({
    router,
    store,
    vuetify,
    render: h => h(App)
}).$mount('#app')