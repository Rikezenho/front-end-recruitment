<template>
	<div class="off-canvas" v-bind:class="{ openCart: (opened === true), closeCart: (opened === false) }">
		<div class="floating-cart-toggle" @click="opened = !opened"></div>
		<div class="floating-cart">
			<div class="floating-cart-wrapper">
				<div class="cart-title">
					<div class="cart-icon">
						<div class="cart-counter">0</div>
					</div>
					Sacola
				</div>
				<div class="cart-body">
					<ul class="cart-list">
						<li class="cart-list-item">
							<div class="cart-list-actions">
								<a href="#" class="removeItem"></a>
							</div>
							<div class="cart-item-image">
								<img src="http://placehold.it/200x150" />
							</div>
							<div class="cart-item-info">
								<div class="cart-item-name">Teste da Silva</div>
								<div class="cart-item-udas">UDA | Uda</div>
								<div class="cart-item-qtd">Quantidade: <span class="cart-item-qtd-number">1</span></div>
							</div>
							<div class="cart-item-price">R$ 149,90</div>
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
	</div>
</template>

<script>
export default {
	name: 'FloatingCart',
	props: {
		items: {
			required: true
		},
	},
	methods: {
		openCart($event) {

		},
		closeCart($event) {

		},
		removeSku($event) {

		}
	},
	data () {
		return {
			opened: '',
		};
	},
};
</script>

<style>
</style>
