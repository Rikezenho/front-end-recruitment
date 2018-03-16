<template>
	<div class="shelf-box" :data-sku-id="sku.sku">
		<div class="shelf-image">
			<img src="http://placehold.it/450x575" />
		</div>
		<div class="shelf-item-name">
			{{ sku.title }}
		</div>
		<div class="shelf-price">
			<span class="shelf-value">{{ sku.formattedPrice }}</span>
		</div>
		<div class="shelf-installments">
			<span v-if="!!sku.installments">
				<span class="shelf-installments-or">ou</span>
				<span class="shelf-installments-qtd">{{ sku.installments }}x</span>
				<span class="shelf-installments-de">de</span>
				<span class="shelf-installments-price">{{ sku.installmentPrice }}</span>
			</span>
		</div>
		<a href="#" :data-sku-id="sku.sku" class="default-btn btn-buy" @click.prevent="addSku">Comprar</a>
	</div>
</template>

<script>
export default {
	name: 'ShelfItem',
	props: {
		sku: {
			required: true,
		},
	},
	created() {
		this.formatSku();
	},
	methods: {
		addSku($event) {
			let sku = $event.target.dataset.skuId;
			this.$store.dispatch('addSku', this.sku);
		},
		formatSku() {
			this.sku.formattedPrice = this.sku.price.toLocaleString('pt-BR', {
				style: 'currency',
				currency: 'BRL',
			});

			if (!!this.sku.installments) {
				this.sku.installmentPrice = (this.sku.price / this.sku.installments).toLocaleString('pt-BR', {
					style: 'currency',
					currency: 'BRL',
				});
			}
		}
	},
	data() {
		return {};
	}
}
</script>

<style>

</style>
