<template>
  <div>
    <ul class="list-group">
      <app-stock v-for="(item, index) in portfolio" :key="index" :item="item" />
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
  computed: mapGetters(["portfolio"])
};
</script>

<style>

</style>
