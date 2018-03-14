<template>
    <div id="app">
		<h1>{{ appTitle }}</h1>
		<div class="shelf-wrapper">
			<li v-for="product of products" :key="product.id">
				<ShelfItem :skuData="product"></ShelfItem>
			</li>
		</div>
		<FloatingCart></FloatingCart>
    </div>
</template>

<script>
import ShelfItem from './components/ShelfItem/ShelfItem.vue';
import FloatingCart from './components/FloatingCart/FloatingCart.vue';

import ProductsService from './domain/Products/ProductsService';

export default {
    name: 'app',
    components: {
		ShelfItem,
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
		},
	},
    data () {
        return {
			appTitle: 'Netshoes',
			products: [],
        };
    },
};
</script>

<style lang="scss">
	$fontFamily: 'Avenir', Helvetica, Arial, sans-serif;
	$fontSize: 14px;

	@import 'scss/main.scss';
</style>
