<template>
	<div class="floating-cart" @addSku="addSku">
		<div class="floating-cart-wrapper">
			<div class="cart-title">
				<div class="cart-icon">
					<div class="cart-counter">0</div>
				</div>
				Sacola
			</div>
			<div class="cart-body">
				<ul class="cart-list" v-if="items.length">
					<li v-for="item in items" :key="item.id">
					</li>
				</ul>
			</div>
			<div class="cart-resume">
				<div class="cart-subtotal">Subtotal</div>
				<div class="cart-subtotal-value">R$ 0,00</div>
			</div>
			<div class="cart-goToCheckout">
				<a href="#" class="default-btn goToCheckout-btn">Finalizar compra</a>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		items: {
			required: true
		},
	},
	methods: {
		addSku(skuData) {
			this.items[this.items.length] = skuData;
			localStorage.setItem('cartItems', this.items);
		},
	},
	data () {
		return {

		};
	},
};
</script>

<style>
</style>
