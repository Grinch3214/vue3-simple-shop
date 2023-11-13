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
		<div v-if="productsStore.products.length >= 1" class="mt-10 text-center">
			<Pagination :totalPages="10" :perPage="10" :currentPage="currentPage" @pagechanged="onPageChange" />
		</div>
	</section>
</template>

<script setup>
	import HeroComponent from './HeroComponent.vue'
	import ProductCard from '../components/ProductCard.vue'
	import Pagination from '../components/Pagination.vue'
	import { useProductsStore } from '../store'
	import { onMounted, ref } from 'vue'
	import { useRouter } from 'vue-router'

	const productsStore = useProductsStore()
	const router = useRouter()

	const goToProductpage = (id) => {
		router.push({ name: 'ProductPage', params: { id } })
	}

	onMounted(() => {
		productsStore.fetchProductsFromDB()
	})

	// pagination
	const currentPage = ref(1)

	const onPageChange = (page) => {
		console.log(page, 'page Catalog')
		currentPage.value = page
	}


</script>