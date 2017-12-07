const state = {
    portfolio: []
}

const getters = {
    portfolio: state => {
        return state.portfolio;
    }
}

const mutations = {
    sell: (state, payload) => {
        state.counter += payload
    },
    buy: (state, payload) => {
        state.counter += payload
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
        commit('buy', payload)
    }
}

export default {
    state,
    getters,
    mutations,
    actions,
}