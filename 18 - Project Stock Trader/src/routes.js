import Home from './components/Home.vue';
import Header from './components/Header.vue';

import Stocks from './components/stock/Stocks.vue';

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
    default: Stocks,
    components: {
      default: Stocks,
      'header-top': Header,
    }
  }, {
    path: '/portfolio',
    default: Portfolio,
    components: {
      default: Portfolio,
      'header-top': Header,
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