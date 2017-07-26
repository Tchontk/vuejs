<template>
  <div class="container">
    <app-header></app-header>
    <hr>
    <div class="row">
      <app-server-status-detail></app-server-status-detail>
      <app-servers-status></app-servers-status>
    </div>
    <hr>
    <app-footer></app-footer>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import ServersStatus from './components/ServersStatus.vue'
import ServerStatusDetail from './components/ServerStatusDetail.vue'

export default {
  components: {
    'app-header': Header,
    'app-footer': Footer,
    'app-servers-status': ServersStatus,
    'app-server-status-detail': ServerStatusDetail
  }

}
</script>
