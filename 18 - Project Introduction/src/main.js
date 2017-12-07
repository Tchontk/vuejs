import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

import {
    routes
} from './routes.js'
Vue.use(VueRouter);

import {
    store
} from './store/store'

const router = new VueRouter({
    //routes: routes  
    routes,
    mode: 'history',
})

new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
})