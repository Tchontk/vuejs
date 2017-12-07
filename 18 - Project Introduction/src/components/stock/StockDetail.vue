<template>
  <div>
    <div class="col-sm-6 col-md-4 col-lg-3">
      <div class="panel panel-default">
        <div class="quote panel-body">
          {{item.brand}}{{item.price}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default { props: ["item"] };
</script>

<style>

</style>
