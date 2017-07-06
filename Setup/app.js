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
      if (this.players[0].health <= 0 || this.players[1].health <= 0) {
        (confirm('Restart ?') ? this.startGame() : null)
      }
    }
  },
  computed: {
    heroHealth: function () {
      console.log('Hero : ', this.players[0].health);
      return {
        width: (this.players[0].health / this.players[0].healthInit) * 100 + '%'
        /* text */
      }
    },
    monsterHealth: function () {
      console.log('Monster : ', this.players[1].health);
      return {
        width: (this.players[1].health / this.players[1].healthInit) * 100 + '%'
        /* text */
      }
    }
  },
  methods: {
    rndRangeValue: function (array) {
      return Math.round((((array[1] - array[0]) * Math.random()) + array[0]), 2);
    },
    attack: function (actionName) {
      this.players.forEach(function (player, index) {
        let dmg = this.rndRangeValue(player[actionName])
        let idTarget = player.playerTarget
        this.players[idTarget].health = Math.max(this.players[idTarget].health - dmg, 0)
        this.logs.push(player.name + ' HITS ' + this.players[idTarget].name + ' FOR ' + dmg)
        this.combat = (this.players[idTarget].health <= 0 ? false : true)
      }, this);
    },
    heal: function (actionName) {
      this.players.forEach(function (player, index) {
        let dmg = this.rndRangeValue(player[actionName])
        let heal = player.health
        player.health = Math.min(heal + dmg, player.healthInit)
        dmg = player.health - heal;
        this.logs.push(player.name + ' HEALS HIMSELF  FOR ' + dmg)
      }, this);
    },
    giveUp: function () {
      this.combat = false
    },
    startGame: function () {
      this.logs = []
      this.players.forEach(function (player) {
        player.health = player.healthInit;
      }, this);
      this.combat = true
    }
  }
})