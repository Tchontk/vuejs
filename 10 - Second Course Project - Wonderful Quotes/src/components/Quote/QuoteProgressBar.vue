<template>
  <div class="progress">
    <div :style="styleProgressBar" class="progress-bar" style="width:70%" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" role="progressbar">
      {{quoteCount}}/{{quoteMax}}
    </div>
  </div>
</template>

<script>
import { quoteBus } from '../../main';
export default {
  props: ['quoteCount', 'quoteMax'],
  computed: {
    styleProgressBar: function() {
      console.log('watch');
      return {
        width: (this.quoteCount / this.quoteMax) * 100 + '%',
        backgroundColor: "blue",
      }
    }
  }
}
</script>

<style>

</style>
