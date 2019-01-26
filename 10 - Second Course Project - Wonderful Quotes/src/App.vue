<template>
  <div class="container">
    <h1>Quotes</h1>
    <hr>
    <app-quote-progress-bar :quoteCount="quotes.length" :quoteMax="quoteMax"></app-quote-progress-bar>
    <app-quote-edit></app-quote-edit>
    <app-quotes :quotes="quotes"></app-quotes>
    <div class="row">
      <div class="col-sm-12 text-center">
        <div class="alert alert-info">Info: Click on a quote to delete it !</div>
      </div>
    </div>
  </div>
</template>

<script>
import { quoteBus } from "./main";
import Quotes from "./components/Quote/Quotes.vue";
import QuoteEdit from "./components/Quote/QuoteEdit.vue";
import QuoteProgressBar from "./components/Quote/QuoteProgressBar.vue";
export default {
  components: {
    "app-quotes": Quotes,
    "app-quote-edit": QuoteEdit,
    "app-quote-progress-bar": QuoteProgressBar
  },
  data: function() {
    return {
      quoteMax: 10,
      quotes: ["Mon premier Quote", "Second Quote", "Et de 3"]
    };
  },
  created() {
    quoteBus.$on("editQuotes", message => {
      this.quotes.length >= this.quoteMax
        ? alert("No more quotes")
        : this.quotes.push(message);
    });
    quoteBus.$on("deleteQuote", index => {
      this.quotes.splice(index - 1, 1);
    });
  }
};
</script>

<style>
</style>
