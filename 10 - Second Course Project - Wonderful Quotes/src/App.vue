<template>
  <div class="container">
    <h1>My Quotes</h1>
    <hr>
    <app-quote-edit :quoteMax="quoteMax" :quotes="quotes"></app-quote-edit>
    <app-quote-progress-bar></app-quote-progress-bar>
    <app-quotes :quotes="quotes"></app-quotes>
  </div>
</template>

<script>
import Quotes from './components/Quote/Quotes.vue';
import QuoteEdit from './components/Quote/QuoteEdit.vue';
import QuoteProgressBar from './components/Quote/QuoteProgressBar.vue';
export default {
  components: {
    'app-quotes': Quotes,
    'app-quote-edit': QuoteEdit,
    'app-quote-progress-bar': QuoteProgressBar,
  },
  data: function () {
    return {
      quoteMax: 10,
      quotes: ['Mon premier Quote', 'Second Quote', 'Et de 3']
    }
  }
}
</script>

<style>

</style>
