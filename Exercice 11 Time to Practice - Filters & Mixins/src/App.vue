<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Filters & Mixins - TP</h1>
        <!-- Exercise 1) -->
        <!-- Build a local Filter which reverses the Text it is applied on -->
        <p>I : {{message | reverseMessage}}</p>

        <!-- Exercise 2 -->
        <!-- Build a global Filter which counts the length of a word and it appends it -->
        <!-- Like this: "Test" => Gets Filtered to => "Test (4)" -->
        <p>II : {{message | messageLength}}</p>

        <!-- Exercise 3 -->
        <!-- Do the same as in Exercises 1 & 2, now with Computed Properties -->
        <p>III : {{reversedMessage}}</p>
        <p>III : {{countMessageLength}}</p>

        <!-- Exercise 4 -->
        <!-- Share the Computed Property rebuilding Exercise 2 via a Mixin -->
        <p>IV : {{reversedMessageMixin}}</p>
        <p>IV : {{countMessageLengthMixin}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { messageMixin } from "./messageMixin";
export default {
  mixins: [messageMixin],
  data() {
    return {
      message: "Hello"
    };
  },
  filters: {
    reverseMessage(value) {
      return value
        .split("")
        .reverse()
        .join("");
    }
  },
  computed: {
    reversedMessage() {
      return this.message
        .split("")
        .reverse()
        .join("");
    },
    countMessageLength() {
      return this.message + " {" + this.message.length + "}";
    }
  }
};
</script>

<style>

</style>
