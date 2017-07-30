<template>
  <div class="col-xs-12 col-sm-6">
    <ul class="list-group">
      <app-server v-for="server in servers" :server="server">!</app-server>
    </ul>
    <hr>
    <button @click="resetStatus">Reset</button>
  </div>
</template>

<script>

import Server from './Server.vue';
import { serverBus } from '../../main';

export default {
  components: {
    'app-server': Server,
  },
  data: function () {
    return {
      servers: [
        { id: 1, status: 'Normal' },
        { id: 2, status: 'Critical' },
        { id: 3, status: 'Unknow' },
        { id: 4, status: 'Normal' }
      ]
    }
  },
  methods: {
    resetStatus() {
      serverBus.serverReset()
    }
  }
}
</script> 

<style>

</style>
