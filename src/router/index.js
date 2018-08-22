import Vue from 'vue';
import Router from 'vue-router';
import Home from 'views/Home';
import Desktop from 'views/Desktop';
import Websocket from 'views/Websocket';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/desktop',
      name: 'Desktop',
      component: Desktop,
    },
    {
      path: '/websocket',
      name: 'Websocket',
      component: Websocket,
    },
  ],
});
