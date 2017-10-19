import Vue from 'vue';
import App from './App.vue';

Vue.directive('highlight', {
  bind(element, binding, vnode) {
    //element.style.backgroundColor = 'green';
    //element.style.backgroundColor = binding.value;
    if (binding.arg === 'background') {
      element.style.backgroundColor = binding.value;
    } else {
      element.style.color = binding.value;
    }
  }
});

new Vue({
  el: '#app',
  render: h => h(App)
})