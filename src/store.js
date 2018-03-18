import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		cartItems: localStorage['cartData'] ? JSON.parse(localStorage['cartData']) : [],
	},
	mutations: {
		ADD_SKU (state, obj) {
			let getItems = state.cartItems.filter(el => el.sku == obj.sku);

			if (getItems.length) {
				let getItemIndex = state.cartItems.findIndex(el => el.sku == obj.sku);
				state.cartItems[getItemIndex].qty++;
			} else {
				obj.qty = 1;
				state.cartItems[state.cartItems.length] = obj;
			}

			localStorage['cartData'] = JSON.stringify(state.cartItems);
		},
		REMOVE_SKU (state, sku) {
			let getItems = state.cartItems.filter(el => el.sku == sku);
			if (getItems.length) {
				state.cartItems.splice(
					state.cartItems.findIndex(el => el.sku == sku),
					1
				);
			}

			localStorage['cartData'] = JSON.stringify(state.cartItems);
		},
	},
	getters: {
		cartItems: state => state.cartItems,
	},
	actions: {
		addSku ({commit}, obj) {
			commit('ADD_SKU', obj);
		},
		removeSku ({commit}, obj) {
			commit('REMOVE_SKU', obj);
		},
	},
});
