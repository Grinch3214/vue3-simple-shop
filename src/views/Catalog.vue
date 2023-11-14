<template>
	<HeroComponent />
	<section class="container mx-auto px-4 pt-10 md:pt-20">
		<div v-if="productsStore.products.length >= 1" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-0">
			<ProductCard
				v-for="product in displayedProducts"
				:key="product.id"
				:card-product="product"
				@goToProduct="goToProductpage"
			/>
		</div>
		<div v-if="productsStore.products.length >= 1" class="mt-10 text-center">
			<Pagination :totalPages="totalPage()" :perPage="perPage" :currentPage="currentPage" @pagechanged="onPageChange" />
		</div>
	</section>
</template>

<script setup>
	import HeroComponent from './HeroComponent.vue'
	import ProductCard from '../components/ProductCard.vue'
	import Pagination from '../components/Pagination.vue'
	import { useProductsStore } from '../store'
	import { onMounted, ref, computed } from 'vue'
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
	const perPage = ref(8)

	const displayedProducts = computed(() => {
		const start = (currentPage.value - 1) * perPage.value
		const end = start + perPage.value
		return productsStore.products.slice(start, end)
	})

	const totalPage = () => {
		return Math.ceil(productsStore.products.length / perPage.value)
	}

	const onPageChange = (page) => {
		currentPage.value = page 
	}


</script>