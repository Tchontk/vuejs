<template>
  <div class="container">
    <appHeader></appHeader>
    <hr>
    <div class="row">
      <app-server-status-detail></app-server-status-detail>
      <ServersStatus></ServersStatus>
    </div>
    <hr>
    <app-footer></app-footer>
  </div>
</template>

<script>
import Header from './components/Shared/Header.vue'
import Footer from './components/Shared/Footer.vue'
import ServersStatus from './components/Server/ServersStatus.vue'
import ServerStatusDetail from './components/Server/ServerStatusDetail.vue'

export default {
  components: {
    /* Utilisation (ou pas) du tiret */
    appHeader: Header,
    appFooter: Footer,
    ServersStatus,
    'app-server-status-detail': ServerStatusDetail
  }

}
</script>
