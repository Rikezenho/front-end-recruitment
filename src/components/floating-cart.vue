<template>
	<div class="off-canvas" v-bind:class="{ openCart: (opened === true), closeCart: (opened === false) }">
		<div class="floating-cart-toggle" @click="opened = !opened">
			<div class="cart-counter">{{ cartItemsQty }}</div>
		</div>
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
						<li class="cart-list-item" v-for="sku in cartItems" :key="sku.id" :data-sku-id="sku.sku" v-bind:class="{ removing: (removing[sku.sku] === true) }">
							<div class="cart-list-actions">
								<a href="#" class="removeItem" :data-sku-id="sku.sku" @click.prevent="removeSku"></a>
							</div>
							<div class="cart-item-image">
								<img :src="`./static/products/${sku.sku}_2.jpg`" />
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
						<div class="cart-subtotal-value">
							<div class="cart-subtotal-price">{{ cartTotalFormatted }}</div>
							<div class="cart-subtotal-installments">ou em até {{ qtyInstallments }}x de {{ totalInstallmentsFormatted }}</div>
						</div>
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
		this.updateVars();

		this.$store.subscribe((mutation, state) => {
			if (mutation.type == 'ADD_SKU' || mutation.type == 'REMOVE_SKU') {
				this.opened = true;
				this.updateVars();
			}
		});
	},
	methods: {
		updateVars() {
			this.cartItemsQty = this.getCartItems();
			this.cartTotal = this.getCartSubtotal();
			this.cartTotalFormatted = this.toCurrency(this.cartTotal);

			this.totalInstallments = this.cartTotal / this.qtyInstallments;
			this.totalInstallmentsFormatted = this.toCurrency(this.totalInstallments);
		},
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
			let sku = $event.target.dataset.skuId;
			this.$set(this.removing, sku, true);

			setTimeout(() => {
				this.$store.dispatch('removeSku', sku);
				this.$set(this.removing, sku, undefined);
			}, 800);
		}
	},
	data () {
		return {
			cartItemsQty: 0,
			cartItems: [],
			cartTotal: 0,
			cartTotalFormatted: 'R$ 0,00',
			removing: {},
			qtyInstallments: 10,
			totalInstallments: 0,
			opened: '',
		};
	},
};
</script>

<style>
</style>
