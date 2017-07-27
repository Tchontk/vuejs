<template>
  <div class="component">
    <h3>You may view the User Details here</h3>
    <p>Many Details</p>
    <p>User Name : {{ myName }}</p>
    <p>User Age : {{ userAge }}</p>
    <p>User Name Reverse : {{ switchName() }}</p>
    <button @click="resetName">Reset Name</button>
    <button @click="resetFn">Reset Name</button>
  </div>
</template>

<script>
import { eventBus } from '../main';
export default {
  //props: ['myName'],
  props: {
    //myName: [String, Array]
    myName: {
      type: String,
      required: true
      //default: "Hello"
    },
    userAge: Number,
    resetFn: Function
  },
  methods: {
    switchName() {
      return this.myName.split("").reverse().join("")
    },
    resetName() {
      this.myName = 'No ! '
      this.$emit('nameWasReset', this.myName);
    }
  },
  created() {
    eventBus.$on('ageWasEdited', (age) => { this.userAge = age })
  }
}
</script>

<style scoped>
div {
  background-color: lightcoral;
}
</style>
