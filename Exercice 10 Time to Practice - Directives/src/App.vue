<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Directives Exercise</h1>
                <p v-myOn:click="'Hey'">Color this</p>
                <!-- Exercise -->
                <!-- Build a Custom Directive which works like v-on (Listen for Events) -->

            </div>
        </div>
    </div>
</template>

<script>
export default {
  directives: {
    myOn: {
      bind(element, binding, vnode) {
        console.log(binding.arg);
        console.log(binding.modifiers);
        if (binding.arg === "click") {
          element.addEventListener("click", function() {
            alert(binding.value);
          });
        }
      }
    }
  }
};
</script>

<style>

</style>
