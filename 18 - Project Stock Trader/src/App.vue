<template>
  <div class="container">
    <router-view name="header-top" />
    <transition name="slide" mode="out-in">
      <router-view/>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      stocks: [],
      portfolio: []
    };
  },
  created() {
    const customActions = {
      savePortfolion: { method: "POST", url: "portfolio.json" },
      getStocks: { method: "GET", url: "stocks.json" }
    };
    this.resource = this.$resource("{node}.json", {}, customActions);
    this.$store.dispatch("initStocks");
  }
};
</script>

<style>
body {
  padding: 30px;
}
</style>
