<template>
  <div>
    <ul class="list-group">
      <app-portfolio-detail v-for="(ingredient, index) in ingredients" :key="ingredient">{{ingredient}} - ({{index+1}})</app-portfolio-detail>
    </ul>
  </div>
</template>

<script>
import PortfolioDetail from "./PortfolioDetail.vue";
export default {
  components: {
    appPortfolioDetail: PortfolioDetail
  }
};
</script>

<style>

</style>
