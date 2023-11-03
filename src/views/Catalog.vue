<template>
	<HeroComponent />
	<section class="container mx-auto px-4 pt-10 md:pt-20">
		<div v-if="productsStore.products.length >= 1" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-0">
			<ProductCard
				v-for="product in productsStore.products"
				:key="product.id"
				:card-product="product"
				@goToProduct="goToProductpage"
			/>
		</div>
	</section>
</template>

<script setup>
	import HeroComponent from './HeroComponent.vue'
	import ProductCard from '../components/ProductCard.vue'
	import { useProductsStore } from '../store'
	import { onMounted } from 'vue'
	import { useRouter } from 'vue-router'

	const productsStore = useProductsStore()
	const router = useRouter()

	const goToProductpage = (id) => {
		router.push({ name: 'ProductPage', params: { id } })
	}

	onMounted(() => {
		productsStore.fetchProductsFromDB()
	})


</script>