<template>
	<div class="shelf-item" :data-sku-id="skuData.sku">
		<div class="shelf-image">
			 <img src="http://placehold.it/180x230" />
		</div>
		<div class="shelf-item-name">
			{{ skuData.title }}
		</div>
		<div class="shelf-price">
			<span class="shelf-currency">{{ skuData.currencyFormat }}</span>
			<span class="shelf-value">{{ skuData.formattedPrice }}</span>
		</div>
		<div class="shelf-installments" v-if="!!skuData.installmentPrice">
			<span class="shelf-installments-or">ou</span>
			<span class="shelf-installments-qtd">{{ skuData.installments }}x</span>
			<span class="shelf-installments-de">de</span>
			<span class="shelf-installments-price">{{ skuData.installmentPrice }}</span>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		skuData: {
			required: true
		},
	},
	created() {
		this.transformFields();
	},
	methods: {
        transformFields() {
			const originalPrice = this.skuData.price;
			this.skuData.formattedPrice = originalPrice.toLocaleString('pt-BR');

			const installments = this.skuData.installments;
			this.skuData.installmentPrice = (this.skuData.price / installments).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
		}
	},
	data () {
		return {

		};
	},
};
</script>

<style lang="scss">
	@import 'ShelfItem.scss';
</style>
