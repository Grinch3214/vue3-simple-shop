<template>
	<div>
		HOME page
	{{ productsStore.products }}
	</div>
</template>

<script setup>
	import { useProductsStore } from '../store'

	const productsStore = useProductsStore()
</script>