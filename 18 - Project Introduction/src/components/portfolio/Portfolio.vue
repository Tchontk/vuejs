<template>
  <div>
    <ul class="list-group">
      <app-portfolio-detail v-for="(item, index) in portfolio" :key="index" v-bind:item="item"></app-portfolio-detail>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import PortfolioDetail from "./PortfolioDetail.vue";
export default {
  computed: mapGetters(["portfolio"]),
  components: {
    appPortfolioDetail: PortfolioDetail
  }
};
</script>

<style>

</style>
