import Vue from 'vue';
import Vuex from 'vuex';
import portfolio from './modules/portfolio'
import stocks from './modules/stocks'

Vue.use(Vuex);

export const store = new Vuex.Store({
  modules: {
    portfolio,
    stocks
  }
})