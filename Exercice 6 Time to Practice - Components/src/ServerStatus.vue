<template>
  <div class="row">
    <app-server-status-detail></app-server-status-detail>
    <div class="col-xs-12 col-sm-6">
      <p>Server Details are currently not updated</p>
    </div>
  </div>
</template>

<script>
import ServerStatusDetail from './ServerStatusDetail.vue'
export default {
  components: {
    'app-server-status-detail': ServerStatusDetail
  }

}
</script>
