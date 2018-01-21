<template>
  <div>
    <form>
      <div class="col-sm-6 col-md-6 col-lg-6">
        <div class="panel panel-default">
          <div class="quote panel-body">
            {{ item.brand }} (price : {{ item.price }})
            <br><br>
            <input type="text" id="quantity" class="form-control" placeholder="Quantity" v-model="quantity">
            <br><br>
            <button class="btn btn-primary" @click.prevent="buy({brand : item.brand, quantity: quantity, price:item.price})">Buy</button>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  props: ["item"],
  data() {
    return {
      quantity: undefined
    };
  },
  methods: {
    ...mapActions(["buy"])
  }
};
</script>

<style>

</style>
