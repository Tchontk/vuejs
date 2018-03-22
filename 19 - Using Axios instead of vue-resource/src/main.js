import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import vuelidate from 'vuelidate'

import router from './router'
import store from './store'

Vue.use(vuelidate)
/** Global configuration */
axios.defaults.baseURL = "https://vuejs-http-10974.firebaseio.com"
// axios.defaults.headers.common['Authorization'] = '!'
axios.defaults.headers.common['Accepts'] = 'application/json'

// const requestInterceptor = axios.interceptors.request.use(config => {
// axios.interceptors.request.use(config => {
//   console.log('Request Interceptors : ', config);
//   return config
// })

// // const responseInterceptor = axios.interceptors.response.use(res => {
// axios.interceptors.response.use(res => {
//   console.log('Response Interceptors : ', res);
//   return res
// })

// axios.interceptors.request.eject(requestInterceptor)
// axios.interceptors.request.eject(responseInterceptor)

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})