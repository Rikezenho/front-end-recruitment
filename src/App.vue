<template>
    <div id="app">
		<h1>{{ category }}</h1>
		<shelf :skus="products"></shelf>
		<floating-cart></floating-cart>
    </div>
</template>

<script>
import Shelf from './components/shelf.vue';
import FloatingCart from './components/floating-cart.vue';

import ProductsService from './domain/products/products-service';

export default {
    name: 'app',
    components: {
		'shelf': Shelf,
		'floating-cart': FloatingCart,
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
