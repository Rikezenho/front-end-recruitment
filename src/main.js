import Vue from 'vue';
import App from './App.vue';

import VueResource from 'vue-resource';
import Vuex from 'vuex';

import store from './store/store';

Vue.use(VueResource);
Vue.use(Vuex);
Vue.http.options.root = 'http://localhost:3001';

new Vue({
	el: '#app',
	store,
    render: h => h(App),
});
