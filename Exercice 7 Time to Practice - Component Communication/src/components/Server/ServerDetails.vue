<template>
  <div class="col-xs-12 col-sm-6">
    <p v-if="!server">Server Details are currently not updated</p>
    <p v-else>Server # {{server.id}} status : {{server.status}}</p>
    <hr>
    <button @click="goToNormal">Go To Normal</button>
  </div>
</template>

<script>

import { serverBus } from '../../main';

export default {
  data: function () {
    return {
      server: null
    }
  },
  methods: {
    goToNormal() {
      this.server.status = 'Normal'
    }
  },
  created() {
    serverBus.$on('serverSelectedMessage', (server) => { this.server = server }
    ),
      serverBus.$on('serverResetMessage', () => (this.server = null))
  }
}
</script>

<style>

</style>
