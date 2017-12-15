const state = {
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
}

export default {
    state,
    getters,
    mutations,
    actions,
}