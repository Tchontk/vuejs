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
    this.$store.dispatch("initStocks");
  }
};
</script>

<style>
body {
  padding: 30px;
}
.slide-enter-active {
  animation: slide-in 200ms ease-out forwards;
}
.slide-live-active {
  animation: slide-out 200ms ease-out forwards;
}
@keyframes slide-in {
  from {
    transform: translateY(-30px);
    opcacity: 0;
  }
  to {
    transform: translateY(0px);
    opcacity: 1;
  }
}
@keyframes slide-out {
  from {
    opcacity: 0;
    transform: translateY(0px);
  }
  to {
    transform: translateY(-30px);
    opcacity: 1;
  }
}
</style>
