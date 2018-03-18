<template>
  <div>
    <nav class="navbar navbar-default">
      <div class="container-fluid">
        <!-- Brand and toggle get grouped for better mobile display -->
        <div class="navbar-header">
          <router-link to="/">
            <a class="navbar-brand">Stock Trader</a>
          </router-link>
        </div>
        <!-- Collect the nav links, forms, and other content for toggling -->
        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul class="nav navbar-nav">
            <router-link to="/portfolio" tag="li" active-class="active">
              <a>Portfolio</a>
            </router-link>
            <router-link to="/stocks" tag="li">
              <a>Stocks</a>
            </router-link>
          </ul>
          <ul class="nav navbar-nav navbar-right">
            <li>
              <a href="#" @click="endDay">End Day</a>
            </li>
            <li class="dropdown" :class="{open : isDropdownOpen}" @click=" isDropdownOpen = ! isDropdownOpen">
              <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Save & Load
                <span class="caret" />
              </a>
              <ul class="dropdown-menu">
                <li class="dropdown">
                  <a href="#" @click="saveData">Save Data</a>
                </li>
                <li class="dropdown">
                  <a href="#">Load Data</a>
                </li>
              </ul>
            </li>
            <p class="navbar-text">Funds: {{ funds | currency }}</p>
          </ul>
        </div>
        <!-- /.navbar-collapse -->
      </div>
      <!-- /.container-fluid -->
    </nav>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      isDropdownOpen: false
    };
  },
  computed: {
    funds() {
      return this.$store.getters.funds;
    }
  },
  created() {
    const customActions = {
      saveData: { method: "POST", url: "state.json" }
      // getData: { method: "GET" }
    };
    this.resource = this.$resource("{node}.json", {}, customActions);
  },
  methods: {
    ...mapActions(["randomizeStocks"]),
    endDay() {
      this.randomizeStocks();
    },
    saveData() {
      const data = {
        stocks: this.$store.getters.stocks,
        stockPortfolio: this.$store.getters.stockPortfolio,
        funds: this.$store.getters.funds
      };
      this.resource.saveData(data);
    },
    loadData() {}
  }
};
</script>

<style>

</style>
