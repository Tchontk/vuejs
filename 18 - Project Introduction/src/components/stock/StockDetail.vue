<template>
  <div>
    <form>
      <div class="col-sm-6 col-md-6 col-lg-6">
        <div class="panel panel-default">
          <div class="quote panel-body">
            {{item.brand}} (price : {{item.price}})
            <br><br>
            <input type="text" id="quantity" class="form-control" placeholder="Quantity">
            <br><br>
            <button class="btn btn-primary" @click.prevent="submited">Buy</button>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default { props: ["item"] };
</script>

<style>

</style>
