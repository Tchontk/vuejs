<template>
  <div>
    <ul class="list-group">
      <app-stock v-for="(item) in items" :key="item.id" :item="item" />
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
  computed: mapGetters(["items"])
};
</script>

<style>

</style>
