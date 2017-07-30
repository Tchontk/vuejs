<template>
  <li class="list-group-item" @click="checkServer(server)">
    Server #{{ server.id }}
  </li>
</template>


<script>

import { serverBus } from '../../main';
export default {
  props: ['server'],

  methods: {
    checkServer(server) {
      serverBus.serverSelected(server)
    }
  }
}
</script>
