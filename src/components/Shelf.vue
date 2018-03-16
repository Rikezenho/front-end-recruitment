<template>
	<div class="shelf-wrapper">
		<li class="shelf-item" v-for="sku of skus" :key="sku.id">
			<ShelfItem :sku="sku"></ShelfItem>
		</li>
	</div>
</template>

<script>
import ShelfItem from './ShelfItem.vue';

export default {
	name: 'Shelf',
	components: {
		ShelfItem,
	},
	props: {
		skus: {
			required: true
		},
	},
	data () {
		return {};
	},
};
</script>

<style>
</style>
