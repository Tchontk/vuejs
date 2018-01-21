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
      items: [],
      portfolio: []
    };
  },
  methods: {
    created() {
      const customActions = {
        savePortfolion: { method: "POST", url: "portfolio.json" },
        getItems: { method: "GET", url: "items.json" }
      };
      this.resource = this.$resource("{node}.json", {}, customActions);
    }
  }
};
</script>

<style>

</style>
