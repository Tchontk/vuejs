<template>
  <div>
    <button class="btn btn-primary" @click="increment(100)">Increment</button>
    <button class="btn btn-primary" @click="decrement">Decrement</button>
    <button class="btn btn-primary" @click="asyncIncrement({by:200,duration:2000})">asyncIncrement</button>
  </div>
</template>

<script>
//import { mapMutations } from "vuex";
import { mapActions } from "vuex";
export default {
  methods: {
    //...mapMutations(["increment", "decrement"]),
    ...mapActions(["increment", "decrement", "asyncIncrement"]),
    /*increment(by) {
      this.$store.dispatch("increment", by);
    },*/
    ourOwn() {
      console.log("ourOwn");
    }
  }
};
</script>