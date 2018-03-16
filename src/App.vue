<template>
    <div id="app">
		<h1>{{ category }}</h1>
		<Shelf :skus="products"></Shelf>
		<FloatingCart></FloatingCart>
    </div>
</template>

<script>
import Shelf from './components/Shelf.vue';
import FloatingCart from './components/FloatingCart.vue';

import ProductsService from './domain/products/ProductsService';

export default {
    name: 'app',
    components: {
		Shelf,
		FloatingCart,
	},
	created() {
		this.service = new ProductsService(this.$resource);

		this.loadProducts();
	},
	methods: {
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
			products: [],
        };
    },
};
</script>

<style lang="scss">
	@import 'scss/main.scss';
</style>
