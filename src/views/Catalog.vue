<template>
	<div v-if="productsStore.products.length >= 1" class="flex -mx-4 flex-wrap">
		<article
			class="basis-1/3 px-4 cursor-pointer"
			v-for="product in productsStore.products"
			:key="product.id"
			@click="goToProductpage(product.id)"
		>
			<div>
				<div class="h-80 bg-neutral-600">
					<img :src="product.thumbnail" :alt="product.title" class="h-full w-full object-cover">
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