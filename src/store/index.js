import Vue from 'vue';
import Vuex from 'vuex';
import CreatePersistedState from 'vuex-persistedstate';

import desktop from './modules/desktop';

Vue.use(Vuex);

const vuexPersisted = new CreatePersistedState({
  key: 'vue-app',
  storage: window.localStorage,
  paths: [
    'desktop',
  ],
});

export default new Vuex.Store({
  modules: {
    desktop,
  },
  plugins: [vuexPersisted],
});
