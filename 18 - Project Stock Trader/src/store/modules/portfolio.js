const state = {
  funds: 1000,
  stocks: []
}

const getters = {
  stockPortfolio: (state, getters) => {
    return state.stocks.map(stock => {
      const record = getters.stocks.find(element => element.id == stock.id)
      return {
        id: stock.id,
        quantity: stock.quantity,
        name: record.name,
        price: record.price,
      }
    })
  },
  fundsString: state => {
    let val = (state.funds / 1).toFixed(2).replace('.', ',')
    return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
  }
}

const mutations = {
  'BUY_STOCK': (state, { stockId, quantity, stockPrice }) => {
    const record = state.stocks.find(element => element.id === stockId)
    if (record) {
      record.quantity += quantity
    } else {
      state.stocks.push({ id: stockId, quantity })
    }
    state.funds -= stockPrice * quantity
  },
  'SELL_STOCK': (state, { stockId, quantity, stockPrice }) => {
    const record = state.stocks.find(element => element.id === stockId)
    if (record.quantity > quantity) {
      record.quantity -= quantity
    } else {
      state.stocks.splice(state.stocks.indexOf(record), 1)
    }
    state.funds += stockPrice * quantity
  },
}

const actions = {
  sellStock: ({ commit }, order) => {
    commit('SELL_STOCK', order)
  },
}

export default { state, getters, mutations, actions }