<template>
	<div class="shelf-wrapper">
		<li class="shelf-item" v-for="sku of formattedSkus" :key="sku.id">
			<div class="shelf-box" :data-sku-id="sku.sku">
				<div class="shelf-image">
					<img src="http://placehold.it/450x575" />
				</div>
				<div class="shelf-item-name">
					{{ sku.title }}
				</div>
				<div class="shelf-price">
					<span class="shelf-currency">{{ sku.currencyFormat }}</span>
					<span class="shelf-value">{{ sku.formattedPrice }}</span>
				</div>
				<div class="shelf-installments" v-if="!!sku.installments">
					<span class="shelf-installments-or">ou</span>
					<span class="shelf-installments-qtd">{{ sku.installments }}x</span>
					<span class="shelf-installments-de">de</span>
					<span class="shelf-installments-price">{{ sku.installmentPrice }}</span>
				</div>
				<a href="#" :data-sku-id="sku.sku" class="default-btn btn-buy" @click.prevent="addSku">Comprar</a>
			</div>
		</li>
	</div>
</template>

<script>
export default {
	props: {
		skus: {
			required: true
		},
	},
	methods: {
		addSku(event) {
			let sku = event.target.dataset.skuId;
			this.$emit('addSku', {
				skuData: this.getSkuInfo(sku)
			});
		},
		getSkuInfo(sku) {
			return this.skus.filter((el) => {
				return el.sku == sku;
			});
		}
	},
	data () {
		let formattedSkus = [].concat(this.skus);
		formattedSkus = formattedSkus.map((sku) => {
			const originalPrice = sku.price;
			sku.formattedPrice = originalPrice.toLocaleString('pt-BR');

			if (!!sku.installments) {
				sku.installmentPrice = (sku.price / sku.installments).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
			}

			return sku;
		});

		return {
			formattedSkus,
		};
	},
};
</script>

<style>
</style>
