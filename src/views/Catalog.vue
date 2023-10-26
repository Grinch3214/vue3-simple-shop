<template>
	<div v-if="productsStore.products.length >= 1">
		{{ productsStore.products}}
	</div>
</template>

<script setup>
	import { useProductsStore } from '../store'
	import { onMounted } from 'vue'

	const productsStore = useProductsStore()

	onMounted(() => {
		console.log('MOUNTED >>>>>>>>>>>>>>>')
		productsStore.fetchProductsFromDB()
	})


</script>