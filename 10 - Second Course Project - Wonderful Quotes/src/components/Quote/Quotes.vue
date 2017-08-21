<template>
  <div class="container">
    <app-quote v-for="(quote, index) in quotes" :quote="quote" :index="index">!</app-quote>
  </div>
</template>

<script>
import Quote from './Quote.vue'
import { quoteBus } from '../../main';
export default {
  components: {
    'app-quote': Quote,
  },
  created() {
    quoteBus.$on('deleteQuote', (index) => { this.quotes.splice(index - 1, 1) })
  },
  props: ['quotes']
}
</script>

<style>

</style>
