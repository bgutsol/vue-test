// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueNativeSock from 'vue-native-websocket';
import App from './App';
import router from './router';
import store from './store';

const VueNativeSockConfig = {
  store,
  format: 'json',
  connectManually: true,
};

Vue.use(VueNativeSock, 'wss://ws.blockchain.info/inv', VueNativeSockConfig);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>',
});
