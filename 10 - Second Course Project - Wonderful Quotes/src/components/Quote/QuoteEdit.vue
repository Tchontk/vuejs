<template>
  <div>
    <textarea v-model="message" placeholder="Un nouveau Quote ?"></textarea>
    <button @click="saveQuote(quoteMax, quotes)">Enregistrer</button>
  </div>
</template>

<script>
import { quoteBus } from '../../main';
export default {
  props: ['quoteMax', 'quotes'],
  data: function () {
    return {
      message: ''
    }
  },
  methods: {
    saveQuote(quoteMax, quotes) {
      if (this.quotes.length < this.quoteMax && this.message != "") {
        quotes.push(this.message)
        quoteBus.editQuotes(quotes)
        this.message = ''
      }
    }
  }
}
</script>

<style>

</style>
