<template>
  <div>
    <div class="form-group">
      <label for="firstname">First Name</label>
      <input type="text" id="firstname" class="form-control" :value="firstName" @input="nameChange(true, $event)">
    </div>
    <div class="form-group">
      <label for="lastname">Last Name</label>
      <input type="text" id="lastname" class="form-control" :value="lastName" @input="nameChange(false, $event)">
    </div>
  </div>
</template>

<script>
export default {
  props: ['value'],
  methods: {
    nameChange(isFirst, event) {
      let name = ''
      if (isFirst) {
        name = event.target.value + ' ' + this.lastName;
      } else {
        name = this.firstName + ' ' + event.target.value;
      }
      console.log(name);
      this.value = name
      this.$emit('input', this.value)
    }
  },
  computed: {
    firstName() {
      return this.value.split(" ")[0];
    },
    lastName() {
      return this.value.split(" ")[1];
    }
  }
}
</script>

<style scoped>
#on,
#off {
  width: 40px;
  height: 20px;
  background-color: lightgray;
  padding: 2px;
  display: inline-block;
  margin: 10px -2px;
  box-sizing: content-box;
  cursor: pointer;
  text-align: center;
}

#on:hover,
#on.active {
  background-color: lightgreen;
}

#off:hover,
#off.active {
  background-color: lightcoral;
}
</style>


