<template>
	<div v-if="productsStore.products.length >= 1" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-0">
		<article
			class=""
			v-for="product in productsStore.products"
			:key="product.id"
			@click="goToProductpage(product.id)"
		>
			<div class="cursor-pointer">
				<div class="h-80 bg-neutral-600">
					<img loading="lazy" :src="product.thumbnail" :alt="product.title" class="h-full w-full object-cover">
				</div>
				<h2>Brand: {{ product.brand }}</h2>
				<p>Description: {{ product.description }}</p>
				<p>Price: ${{ product.price }}</p>
			</div>
		</article>
	</div>
</template>

<script setup>
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