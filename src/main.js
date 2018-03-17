import Vue from 'vue';
import App from './app.vue';

import VueResource from 'vue-resource';
import Vuex from 'vuex';

import store from './store';
// import utils from './utils';

Vue.mixin({
	methods: {
		toCurrency: value => value.toLocaleString('pt-BR', {
			style: 'currency',
			currency: 'BRL',
		}),
	}
});

Vue.use(VueResource);
Vue.use(Vuex);
Vue.http.options.root = 'http://localhost:3001';

new Vue({
	el: '#app',
	store,
    render: h => h(App),
});
