import Vue from 'vue'

export const loadData = ({ commit }) => {
  Vue.http.get("state.json")
    .then(response => { return response.json(); })
    .then(data => {
      if (data) {
        const stocks = data.stocks
        const funds = data.funds
        const stockPortfolio = data.stockPortfolio

        const portfolio = {
          funds,
          stockPortfolio
        }
        commit('SET_STOCKS', stocks)
        commit('SET_PORTFOLIO', portfolio)
      }
    });
}