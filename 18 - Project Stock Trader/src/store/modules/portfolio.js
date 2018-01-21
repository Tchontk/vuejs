const state = {
  portfolio: [{
    brand: 'BMW',
    price: 0,
    quantity: 0
  }]
}

const getters = {
  portfolio: state => {
    return state.portfolio;
  }
}

const mutations = {
  sell: (state, payload) => {
    console.log(state);
    console.log(payload);
    state.counter += payload
  },
  buy: (state, payload) => {
    state.portfolio.push(payload)
  }
}

const actions = {
  sell: ({
    commit
  }, payload) => {
    commit('sell', payload)
  },
  buy: ({
    commit
  }, payload) => {
    console.log(payload);
    commit('buy', payload)
  }
}

export default {
  state,
  getters,
  mutations,
  actions,
}