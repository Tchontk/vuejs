import stocks from '../../data/data'
const state = {
    stocks: []
}

const getters = {
    stocks: state => {
        return state.stocks;
    }
}

const actions = {
    buyStock: ({
        commit
    }, payload) => {
        commit('buyStock', payload)
    },
    setStocks: ('SET_STOCKS')
}

const mutations = {
    'SET_STOCKS' (state, stocks) {
        state.stocks = stocks;
    },
    'RND_STOCKS' (state, stocks) {},
    buyStock: (state, payload) => {
        let foundIndex = state.portfolio.findIndex(x => x.brand ==
            payload.brand);
        if (foundIndex === -1) {
            state.portfolio.push(payload)
        } else {
            state.portfolio[foundIndex].quantity += payload.quantity
        }
        state.funds -= payload.quantity * payload.price
    }
}

export default {
    state,
    getters
}