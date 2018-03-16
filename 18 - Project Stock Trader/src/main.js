import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import { routes } from './routes.js'
import { store } from './store/store'

Vue.use(VueRouter);
Vue.use(VueResource);

Vue.http.options.root = 'https://vuejs-http-10974.firebaseio.com/'
Vue.http.interceptors.push((request, next) => {
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

const router = new VueRouter({
  routes,
  mode: 'history',
})

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})