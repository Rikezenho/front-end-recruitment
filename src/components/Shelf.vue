<template>
	<div class="shelf-wrapper">
		<li class="shelf-item" v-for="sku of skus" :key="sku.id">
			<shelf-item :sku="sku"></shelf-item>
		</li>
	</div>
</template>

<script>
import ShelfItem from './shelf-item.vue';

export default {
	name: 'Shelf',
	components: {
		'shelf-item': ShelfItem,
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
