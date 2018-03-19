import Vue from 'vue';
import Vuex from 'vuex';
import portfolio from './modules/portfolio'
import stocks from './modules/stocks'
import * as actions from './actions'

Vue.use(Vuex);

export const store = new Vuex.Store({
  actions,
  modules: {
    portfolio,
    stocks,
  }
})