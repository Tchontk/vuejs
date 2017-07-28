<template>
  <div class="col-xs-12 col-sm-6">
    <ul class="list-group">
      <li class="list-group-item" v-for="server in servers">
        Server #{{ server.id }}
        <button @click="checkServer(server)">Check Status</button>
      </li>
    </ul>
  </div>
</template>

<script>

import { eventBus } from '../../main';
export default {
  methods: {
    checkServer(server) {
      console.log(server);
      eventBus.checkServerStatus(server)
    }
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
  }
}

</script> 

<style>

</style>
