<template>
	<div>
		{{ selectedProduct }}
	</div>
</template>

<script setup>
	import { computed } from 'vue'
	import { useProductsStore } from '../store/index'
	import { useRoute } from 'vue-router'

	const productsStore = useProductsStore()
	const route = useRoute()

	const selectedProduct = computed(() => {
		return productsStore.products.find((item) => item.id === +route.params.id)
	})

</script>
