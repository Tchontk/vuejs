import Vue from 'vue';
import Vuex from 'vuex';
import portfolio from './modules/portfolio'

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        funds: 10000,
        items: [{
            brand: 'BMW',
            price: 0
        }, {
            brand: 'Google',
            price: 0
        }, {
            brand: 'Apple',
            price: 0
        }, {
            brand: 'Twitter',
            price: 0
        }]
    },
    getters: {
        items: state => {
            return state.items;
        }
    },
    modules: {
        portfolio
    }
})