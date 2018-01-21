import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

Vue.use(
  VueResource
);
Vue.http.options.root = 'https://vuejs-http-10974.firebaseio.com/'
Vue.http.interceptors.push((request, next) => {
  console.log(request);
  if (request.method == 'POST') {
    request.method = 'PUT';
  }
  next(response => {
    response.json = () => {
      return {
        messages: response.body
      }
    }
  })
})

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