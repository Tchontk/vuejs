<template>
  <div>
    <form>
      <div class="col-sm-6 col-md-6 col-lg-6">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h3>{{ stock.brand }}
              <small>(price : {{ stock.price }})</small>
            </h3>
          </div>
          <div class="quote panel-body">
            <div class="pull-left">
              <input type="number" id="quantity" class="form-control" placeholder="Quantity" v-model="quantity">
            </div>
            <div class="pull-right">
              <button class="btn btn-succes" :disabled="disableButton" @click.prevent="sellStock()">Sell</button>
            </div>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  props: {
    stock: {
      type: Object,
      default: () => {},
      require: true
    }
  },
  data() {
    return { quantity: 0 };
  },
  computed: {
    disableButton: function() {
      let quantity = parseFloat(this.quantity);
      return quantity <= 0 || !Number.isInteger(quantity);
    }
  },
  methods: {
    ...mapActions({
      placeSellOrder: "sellStock"
    }),
    sellStock() {
      const order = {
        stockId: this.stock.id,
        stockPrice: this.stock.price,
        quantity: this.quantity
      };
      this.placeSellOrder(order);
      // this.$store.dispatch("sellStock", order);
      this.quantity = 0;
    }
  }
};
</script>

<style>

</style>
