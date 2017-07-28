<template>
  <div class="col-xs-12 col-sm-6">
    <p>{{status}}</p>
  </div>
</template>

<script>

import { eventBus } from '../../main';

export default {
  data: function () {
    return {
      status: 'Server Details are currently not updated'
    }
  },
  created() {
    eventBus.$on('changeServer', (server) => { this.status = 'Server #' + server.id + ' status : ' + server.status }
    )
  }
}
</script>

<style>

</style>
