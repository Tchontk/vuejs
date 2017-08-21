<template>
  <div class="progress">
    <div :style="styleProgressBar" class="progress-bar" style="width:70%">
      {{pcentProgress}} {{quotes}}
    </div>
  </div>
</template>

<script>
import { quoteBus } from '../../main';
export default {
  computed: {
    styleProgressBar: function () {
      console.log('watch');
      return {
        width: this.pcentProgress + '%',
        backgroundColor: "blue",
      }
    }
  },
  //props: ['quotes'],
  created() {
    console.log('On editQuote');
    quoteBus.$on('editQuotes', (quotes) => { this.pcentProgress = (quotes.length * 100) / 10; })
    quoteBus.$on('deleteQuote', (index) => { this.pcentProgress - 10 })
  },
  data: function () {
    return {
      pcentProgress: 3 * 10
    }
  }
}
</script>

<style>

</style>
