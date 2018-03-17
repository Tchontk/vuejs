<template>
  <div>
    <ul class="list-group">
      <app-stock v-for="stock in stockPortfolio" :key="stock.id" :stock="stock" />
    </ul>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Stock from "./Stock.vue";
export default {
  components: {
    appStock: Stock
  },
  computed: { ...mapGetters(["stockPortfolio"]) }
};
</script>

<style>

</style>
