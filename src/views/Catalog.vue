<template>
	<div v-if="productsStore.products.length >= 1" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-0">
		<ProductCard
			v-for="product in productsStore.products"
			:key="product.id"
			:card-product="product"
			@click="goToProductpage(product.id)"
		/>
	</div>
</template>

<script setup>
	import ProductCard from '../components/ProductCard.vue'
	import { useProductsStore } from '../store'
	import { onMounted } from 'vue'
	import { useRouter } from 'vue-router'

	const productsStore = useProductsStore()
	const router = useRouter()

	const goToProductpage = (id) => {
		router.push({ name: 'Product', params: { id } })
	}

	onMounted(() => {
		productsStore.fetchProductsFromDB()
	})


</script>