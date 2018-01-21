const state = {
<<<<<<< HEAD
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
=======
    funds: 10000,
    portfolio: [{
        brand: 'BMW',
        price: 0,
        quantity: 0
    }]
}

const getters = {
    portfolio: state => {
        return state.portfolio;
    },
    fundsString: state => {
        let val = (state.funds / 1).toFixed(2).replace('.', ',')
        return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g,
            ".")
    }
}

const mutations = {
    sell: (state, payload) => {
        console.log(state);
        console.log(payload);
        state.counter += payload
    },
    buy: (state, payload) => {
        let foundIndex = state.portfolio.findIndex(x => x.brand ==
            payload.brand);
        if (foundIndex === -1) {
            state.portfolio.push(payload)
            state.funds -= payload.quantity * payload.price
        } else {
            state.portfolio[foundIndex].quantity += payload.quantity
            state.funds -= payload.quantity * payload.price
        }
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
        if (Number.isInteger(payload.quantity)) {
            commit('buy', payload)
        }
    }
>>>>>>> 1f6a581c201fa4440fe51da5aede0f8239a8d37e
}

export default {
  state,
  getters,
  mutations,
  actions,
}