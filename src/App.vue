<template>
    <div id="app">
		<h1>{{ category }}</h1>
		<Shelf :skus="products"></Shelf>
		<FloatingCart :items="cartItems"></FloatingCart>
    </div>
</template>

<script>
import Shelf from './components/Shelf.vue';
import FloatingCart from './components/FloatingCart.vue';

import ProductsService from './domain/Products/ProductsService';

export default {
    name: 'app',
    components: {
		Shelf,
		FloatingCart,
	},
	created() {
		this.service = new ProductsService(this.$resource);

		this.loadCart();
		this.loadProducts();
	},
	methods: {
		loadCart() {
			let getLocalCart = localStorage['cartData'];
			this.cartItems = getLocalCart || [];
		},
		loadProducts() {
			this.service.list()
			.then(response => {
				this.products = response.products;
			}, err => {
				console.log(err.message);
			});
		}
	},
    data () {
        return {
			category: 'Camisas',
			cartItems: [],
			products: [],
        };
    },
};
</script>

<style lang="scss">
	@import 'scss/main.scss';
</style>
