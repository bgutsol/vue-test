import Vue from 'vue';
import Router from 'vue-router';

const Home = () => import(/* webpackChunkName: "home" */ 'views/Home');
const Desktop = () => import(/* webpackChunkName: "desktop" */ 'views/Desktop');
const Websocket = () => import(/* webpackChunkName: "websocket" */ 'views/Websocket');

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
