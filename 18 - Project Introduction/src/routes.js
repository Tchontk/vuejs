import Home from './components/Home.vue';
import Header from './components/Header.vue';

import Stock from './components/stock/Stock.vue';

import Portfolio from './components/portfolio/Portfolio.vue';

export const routes = [{
        path: '',
        name: 'home',
        components: {
            default: Home,
            'header-top': Header,
        }
    }, {
        path: '/stocks',
        default: Stock,
        components: {
            default: Stock,
        }
    }, {
        path: '/portfolio',
        default: Portfolio,
        components: {
            default: Portfolio,
        }
    },
    {
        path: '/redirect-me',
        redirect: {
            name: 'home'
        }
    },
    {
        path: '*',
        redirect: '/'
    }
];