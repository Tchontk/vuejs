<template>
  <div>
    <p>Counter is: {{ doubleCounter }}</p>
    <p> Number of Clicks : {{stringCounter}}</p>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  //computed: mapGetters(["doubleCounter", "stringCounter"])
  computed: {
    // Un trick pour ajouter des computed custom
    ...mapGetters(["doubleCounter", "stringCounter"]),
    ourOwn() {
      console.log("ourOwn");
    }
  }
};
</script>