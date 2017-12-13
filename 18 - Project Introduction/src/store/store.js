import Vue from 'vue';
import Vuex from 'vuex';
import portfolio from './modules/portfolio'

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        funds: 10000,
        items: [{
            id: 12,
            brand: 'BMW',
            price: 153
        }, {
            id: 34,
            brand: 'Google',
            price: 412
        }, {
            id: 56,
            brand: 'Apple',
            price: 41
        }, {
            id: 78,
            brand: 'Twitter',
            price: 496
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