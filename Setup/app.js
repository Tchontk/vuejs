new Vue({
  el: '#app',
  data: {
    combat: false,
    hero: [{
      health: 100,
      healthInit: 100,
      attackDmg: [1, 5],
      specialAttackDmg: [10, 20],
      healValue: [50, 50]
    }, {
      health: 100,
      healthInit: 100,
      attackDmg: [1, 5],
      specialAttackDmg: [10, 20],
    }],
    log: []
  },
  watch: {
    combat: function () {
      console.log("hey");
      if (this.hero[0].health <= 0 || this.hero[1].health <= 0) {
        alert('stop')
      }
    }
  },
  computed: {
    heroHealth: function () {
      console.log('hero : ', this.hero[0].health);
      return {
        width: Math.min((this.hero[0].health / this.hero[0].healthInit) * 100, 100) + '%'
      }
    },
    monsterHealth: function () {
      console.log('Monster : ', this.hero[1].health);
      return {
        width: Math.min((this.hero[1].health / this.hero[1].healthInit) * 100, 100) + '%'
      }
    }
  },
  methods: {
    rndRangeValue: function (array) {
      return ((array[1] - array[0]) * Math.random()) + array[0];
    },
    attack: function () {
      this.hero[0].health -= this.rndRangeValue(this.hero[1].attackDmg)
      this.hero[1].health -= this.rndRangeValue(this.hero[0].attackDmg)
    },
    specialAttack: function () {
      this.hero[0].health -= this.rndRangeValue(this.hero[1].specialAttackDmg)
      this.hero[1].health -= this.rndRangeValue(this.hero[0].specialAttackDmg)
    },
    heal: function () {
      this.hero[0].health -= this.rndRangeValue(this.hero[1].specialAttackDmg)
      this.hero[0].health += Math.min(this.rndRangeValue(this.hero[0].healValue), this.hero[0].healthInit)
    },
    giveUp: function () {
      this.combat = false
    },
    startGame: function () {
      this.combat = true
      this.hero[0].health = this.hero[0].healthInit;
      this.hero[1].health = this.hero[1].healthInit;
      console.log(this.combat);
      console.log(this.hero);
    }
  }

})