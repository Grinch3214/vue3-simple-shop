<template>
	<div>
		{{ productsStore.productId }}
	</div>
</template>

<script setup>
	import { onMounted } from 'vue'
	import { useProductsStore } from '../store/index'
	import { useRoute } from 'vue-router'

	const productsStore = useProductsStore()
	const route = useRoute()

	onMounted(() => {
		productsStore.fetchProductID(+route.params.id)
	})

</script>
