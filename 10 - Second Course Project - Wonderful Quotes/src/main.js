import Vue from 'vue'
import App from './App.vue'


export const quoteBus = new Vue({
  methods: {
    editQuotes(message) {
      this.$emit('editQuotes', message)
    },
    deleteQuote() {
      this.$emit('deleteQuote')
    }
  }
})

new Vue({
  el: '#app',
  render: h => h(App)
})