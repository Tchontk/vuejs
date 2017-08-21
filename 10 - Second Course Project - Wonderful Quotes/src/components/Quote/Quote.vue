<template>
  <div @click="deleteQuote(index)" class="row">
    {{quote}} {{index}}</div>
</template>

<script>
import { quoteBus } from '../../main';
export default {
  props: ['quote', 'index'],
  methods: {
    deleteQuote(index) {
      console.log('deleteQuote');
      quoteBus.deleteQuote(index)
    }
  }
}
</script>

<style>

</style>
