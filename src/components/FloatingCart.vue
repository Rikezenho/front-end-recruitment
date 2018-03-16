<template>
	<div class="off-canvas" v-bind:class="{ openCart: (opened === true), closeCart: (opened === false) }">
		<div class="floating-cart-toggle" @click="opened = !opened"></div>
		<div class="floating-cart">
			<div class="floating-cart-wrapper">
				<div class="cart-title">
					<div class="cart-icon">
						<div class="cart-counter">{{ cartItemsQty }}</div>
					</div>
					Sacola
				</div>
				<div class="cart-body" v-if="!!cartItems.length">
					<ul class="cart-list">
						<li class="cart-list-item" v-for="sku in cartItems" :key="sku.id">
							<div class="cart-list-actions">
								<a href="#" class="removeItem" :data-sku-id="sku.sku" @click.prevent="removeSku"></a>
							</div>
							<div class="cart-item-image">
								<img src="http://placehold.it/200x150" />
							</div>
							<div class="cart-item-info">
								<div class="cart-item-name">{{ sku.title }}</div>
								<div class="cart-item-udas">{{ sku.description }}</div>
								<div class="cart-item-qtd">Quantidade: <span class="cart-item-qtd-number">{{ sku.qty }}</span></div>
							</div>
							<div class="cart-item-price">{{ sku.formattedPrice }}</div>
						</li>
					</ul>
					<div class="cart-resume">
						<div class="cart-subtotal">Subtotal</div>
						<div class="cart-subtotal-value">{{ cartTotalFormatted }}</div>
					</div>
					<div class="cart-goToCheckout">
						<a href="#" class="default-btn goToCheckout-btn">Finalizar compra</a>
					</div>
				</div>
				<div class="cart-body" v-if="!cartItems.length">
					Nenhum item na sacola.
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'FloatingCart',
	created() {
		this.cartItems = this.$store.getters.cartItems;

		this.cartItemsQty = this.getCartItems();
		this.cartTotal = this.getCartSubtotal();
		this.cartTotalFormatted = this.cartTotal.toLocaleString('pt-BR', {
			style: 'currency',
			currency: 'BRL',
		});

		this.$store.subscribe((mutation, state) => {
			if (mutation.type == 'ADD_SKU' || mutation.type == 'REMOVE_SKU') {
				this.cartItemsQty = this.getCartItems();
				this.cartItems = state.cartItems;
				this.opened = true;

				this.cartTotal = this.getCartSubtotal();
				this.cartTotalFormatted = this.cartTotal.toLocaleString('pt-BR', {
					style: 'currency',
					currency: 'BRL',
				});
			}
		});
	},
	methods: {
		getCartSubtotal() {
			let totalValue = 0;

			for (let i = 0; i < this.cartItems.length; i++) {
				let value = this.cartItems[i].price * this.cartItems[i].qty;
				totalValue += value;
			}

			return totalValue;
		},
		getCartItems() {
			let counter = 0;
			for (let i = 0; i < this.cartItems.length; i++) {
				counter += this.cartItems[i].qty;
			}
			return counter;
		},
		removeSku($event) {
			let sku = event.target.dataset.skuId;
			this.$store.dispatch('removeSku', sku);
		}
	},
	data () {
		return {
			cartItemsQty: 0,
			cartItems: [],
			cartTotal: 0,
			cartTotalFormatted: 'R$ 0,00',
			opened: '',
		};
	},
};
</script>

<style>
</style>
