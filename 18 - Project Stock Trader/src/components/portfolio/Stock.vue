<template>
  <div>
    <form>
      <div class="col-sm-6 col-md-4">
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
              <button class="btn btn-succes" @click.prevent="buy({brand : stock.brand, quantity: quantity, price:stock.price})">Buy</button>
            </div>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default { props: ["stock"] };
</script>

<style>

</style>
