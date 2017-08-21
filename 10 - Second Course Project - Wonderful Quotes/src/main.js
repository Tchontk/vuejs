import Vue from 'vue'
import App from './App.vue'


export const quoteBus = new Vue({
  methods: {
    editQuotes(quotes) {
      this.$emit('editQuotes', quotes)
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