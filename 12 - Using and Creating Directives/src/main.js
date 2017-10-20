import Vue from 'vue';
import App from './App.vue';

Vue.directive('highlight', {
  bind(element, binding, vnode) {
    //element.style.backgroundColor = 'green';
    //element.style.backgroundColor = binding.value;
    var delay = 0;
    if (binding.modifiers['delayed']) {
      delay = 3000;
    }
    setTimeout(() => {
      if (binding.arg === 'background') {
        element.style.backgroundColor = binding.value;
      } else {
        element.style.color = binding.value;
      }
    }, delay)
  }
});

new Vue({
  el: '#app',
  render: h => h(App)
})