<template>
  <div>
    <button class="btn btn-primary" @click="increment(100)">Increment</button>
    <button class="btn btn-primary" @click="decrement">Decrement</button>
  </div>
</template>

<script>
export default {
  methods: {
    increment(by) {
      this.$store.commit("increment", by);
    },
    decrement() {
      this.$store.commit("decrement");
    }
  }
};
</script>