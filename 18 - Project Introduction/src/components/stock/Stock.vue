<template>
  <div>
    <ul class="list-group">
      <app-stock-detail v-for="(item) in items" :key="item.id" v-bind:item="item"></app-stock-detail>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import StockDetail from "./StockDetail.vue";
export default {
  computed: mapGetters(["items"]),
  components: {
    appStockDetail: StockDetail
  }
};
</script>

<style>

</style>
