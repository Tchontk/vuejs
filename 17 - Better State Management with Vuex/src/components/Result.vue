<template>
  <div>
    <p>Counter is: {{ doubleCounter }}</p>
    <p> Number of Clicks : {{stringCounter}}</p>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import * as types from "../store/types";
export default {
  //computed: mapGetters(["doubleCounter", "stringCounter"])
  computed: {
    // Un trick pour ajouter des computed custom
    //...mapGetters(["doubleCounter", "stringCounter"]),
    ...mapGetters({
      doubleCounter: types.DOUBLE_COUNTER,
      stringCounter: types.STRING_COUNTER
    }),
    ourOwn() {
      console.log("ourOwn");
    }
  }
};
</script>