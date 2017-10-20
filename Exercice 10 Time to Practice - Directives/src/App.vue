<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Directives Exercise</h1>
                <p v-myOn:click="'Hey'">Color this</p>
                <button v-customOn:click="clicked" class="btn btn-primary">Click Me</button>
                <!-- Exercise -->
                <!-- Build a Custom Directive which works like v-on (Listen for Events) -->
                <hr>
                  <div style="width: 100px; heigth: 100px; background-color: lightgreen" v-customOn:mouseleave="mouseLeave" v-customOn:mouseenter="mouseEnter">!</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  directives: {
    myOn: {
      bind(element, binding, vnode) {
        element.addEventListener(binding.arg, function() {
          alert(binding.value);
        });
      }
    },
    customOn: {
      bind(el, binding) {
        // el.onclick = function() {
        //   binding.value();
        // };
        const type = binding.arg;
        const fn = binding.value;
        el.addEventListener(type, fn);
      }
    }
  },
  methods: {
    clicked() {
      alert("I was clicked");
    },
    mouseEnter() {
      console.log("Mouse Entered");
    },
    mouseLeave() {
      console.log("Mouse left");
    }
  }
};
</script>

<style>

</style>
