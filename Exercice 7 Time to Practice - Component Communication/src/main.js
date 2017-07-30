import Vue from 'vue'
import App from './App.vue'

export const serverBus = new Vue({
  methods: {
    serverSelected(server) {
      this.$emit('serverSelectedMessage', server)
    },
    serverReset(server) {
      this.$emit('serverResetMessage')
    }
  }
});
new Vue({
  el: '#app',
  render: h => h(App)
})