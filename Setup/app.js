new Vue({
  el: '#app',
  data: {
    combat: false,
    players: [{
      name: "HERO",
      health: 100,
      healthInit: 100,
      attack: [1, 5],
      specialAttack: [10, 20],
      heal: [5, 10],
      playerTarget: 1
    }, {
      name: "MONSTER",
      health: 100,
      healthInit: 100,
      attack: [1, 5],
      specialAttack: [10, 20],
      heal: [5, 10],
      playerTarget: 0
    }],
    logs: []
  },
  watch: {
    combat: function () {
      console.log("hey");
      if (this.players[0].health <= 0 || this.players[1].health <= 0) {
        alert('stop')
      }
    }
  },
  computed: {
    heroHealth: function () {
      console.log('Hero : ', this.players[0].health);
      return {
        width: (this.players[0].health / this.players[0].healthInit) * 100 + '%'
      }
    },
    monsterHealth: function () {
      console.log('Monster : ', this.players[1].health);
      return {
        width: (this.players[1].health / this.players[1].healthInit) * 100 + '%'
      }
    }
  },
  methods: {
    rndRangeValue: function (array) {
      return Math.round((((array[1] - array[0]) * Math.random()) + array[0]), 2);
    },
    logAttack: function (dmg, attacker, defender, action) {
      this.logs.push(attacker + ' ' + action + ' ' + defender + ' FOR ' + dmg)
    },
    attack: function (actionName) {
      this.players.forEach(function (player, index) {
        let dmg = this.rndRangeValue(player[actionName])
        let idTarget = player.playerTarget
        this.players[idTarget].health = Math.max(this.players[idTarget].health - dmg, 0)
        this.logAttack(dmg, player.name, this.players[idTarget].name, actionName)
      }, this);
    },
    heal: function (actionName) {
      this.players.forEach(function (player, index) {
        let dmg = this.rndRangeValue(player[actionName])
        let heal = player.health
        player.health = Math.min(heal + dmg, player.healthInit)
        dmg = player.health - heal;
        this.logAttack(dmg, player.name, player.name, actionName)
      }, this);
    },
    giveUp: function () {
      this.combat = false
    },
    startGame: function () {
      this.combat = true
      this.players[0].health = this.players[0].healthInit;
      this.players[1].health = this.players[1].healthInit;
    }
  }
})