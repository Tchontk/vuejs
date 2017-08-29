<template>
  <div class="row">
    <app-quote v-for="(quote, index) in quotes" @click.native="deleteQuote(index)">{{quote}}</app-quote>
    <!-- A utiliser avec <slot>-->
  </div>
</template>

<script>
import Quote from './Quote.vue'
import { quoteBus } from '../../main';
export default {
  props: ['quotes'],
  components: {
    'app-quote': Quote,
  },
  methods: {
    deleteQuote(index) {
      quoteBus.deleteQuote(index)
    }
  }
}
</script>

<style>

</style>
