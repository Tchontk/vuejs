var data = {
  title: 'The VueJS Instance',
  showParagraph: false
}

/**
 * Un nouvel element HTML
 */
Vue.component('hello', {
  template: '<h1>hello !</h1>'
})

/**
 * Vue Instance 
 * ==> vm = View Model
 * new Vue() ==> Constructor
 * 
 */
var vm1 = new Vue({
  data: data,
  methods: {
    show: function () {
      this.showParagraph = true;
      this.updateTitle('The VueJS Instance (Updated)');
      console.log(this.$refs);
      this.$refs.myButton.innerText = 'Test'
    },
    updateTitle: function (title) {
      this.title = title;
    }
  },
  computed: {
    lowercaseTitle: function () {
      return this.title.toLowerCase();
    }
  },
  watch: {
    title: function (value) {
      alert('Title changed, new value: ' + value);
    }
  }
});
/**
 * à la place de déclarer le el: "#app1"
 */
vm1.$mount('#app1')

/**
 * $data
 */
console.log(vm1.$data === data);

vm1.$refs.heading.innerText = 'Something Else';

setTimeout(function () {
  vm1.title = 'Changed by timer'
  vm1.show();
}, 3000)

/**
 * Ce n'est pas équivalent à une déclaration dans le data{}
 * On peut utiliser les propriétés existantes
 * On ne peut pas créer de nouvelles propriétés
 */
vm1.newProp = 'New !';
console.log(vm1);

var vm2 = new Vue({
  el: '#app2',
  data: {
    title: "The VueJS Instance #2"
  },
  methods: {
    /**
     * Il est possible de faire travailler deux vues ensemble 
     * Mais ce n'est pas conseillé ! 
     */
    onChange: function () {
      vm1.updateTitle("From V2")
    }
  }
})

var vm3 = new Vue({
  template: '<h1>Hello</h1>',
})

var vm4 = new Vue({
  data: {
    title: 'Title'
  },
  beforeCreate: function () {
    console.log('beforeCreate()');
  },
  created: function () {
    console.log('Created()');
  },
  beforeMount: function () {
    console.log('beforeMount()');
  },
  mounted: function () {
    console.log('mounted()');
  },
  beforeUpdate: function () {
    console.log('beforeUpdate()');
  },
  updated: function () {
    console.log('updated()');
  },
  beforeDestroy: function () {
    console.log('beforeDestroy()');
  },
  destroyed: function () {
    console.log('destroyed()');
  },
  methods: {
    destroy: function () {
      this.$destroy()
    }
  }
})
vm4.$mount('#app4');

/**
 * vm3.$mount()
 * document.getElementById('app3').appendChild(vm3.$el)
 * $mount est une alternative à el:
 */

vm3.$mount('#app3')