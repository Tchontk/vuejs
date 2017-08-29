<template>
  <div class="row">
    <form>
      <div class="col-sm-8 col-sm-offset-2 col-xs-12 col-md-6 col-md-offset-3 form-group">
        <label>Quote</label>
        <textarea class="form-control" v-model="message" placeholder="Un nouveau Quote ?" row="3"></textarea>
      </div>
      <div class="col-sm-8 col-sm-offset-2 col-xs-12 col-md-6 col-md-offset-3 form-group">
        <button class="btn btn-primary" @click.prevent="saveQuote">Enregistrer</button>
      </div>
    </form>
  </div>
</template>

<script>
import { quoteBus } from '../../main';
export default {
  data: function() {
    return {
      message: ''
    }
  },
  methods: {
    saveQuote(quoteMax, quotes) {
      quoteBus.editQuotes(this.message)
      this.message = ''
    }
  }
}
</script>

<style>

</style>
