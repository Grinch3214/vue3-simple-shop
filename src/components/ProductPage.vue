<template>
	<div class="flex gap-6 items-center pt-[120px] container mx-auto">
		<div class="basis-[500px] flex-shrink-0 flex-grow-0">
			<Carousel>
				<Slide v-for="image in productsStore.productId.images" :key="image">
					<div class="carousel-item flex items-center justify-center h-[400px]">
						<img :src="image" alt="" class="w-auto h-full object-contain">
					</div>
				</Slide>
				<template #addons>
					<Navigation class="arrow-carousel" />
				</template>
			</Carousel>
		</div>
		<div class="basis-auto flex-grow-1">
			<h1 class="text-2xl mb-2 uppercase font-semibold">{{ productsStore.productId.title }}</h1>
			<div class="flex items-center gap-3 mb-6">
				<span class="text-sm uppercase font-semibold">Category:</span>
				<p class="inline-block px-2 bg-red-500/80 text-white text-xs font-semibold rounded-md">{{ productsStore.productId.category }}</p>
			</div>
			<div class="flex gap-2 mb-4">
				<RatingStar :rating="ratingFix" />
				<p class="text-sm font-extrabold"> / {{ ratingFix }}</p>
			</div>
			<p class="mb-4"> {{ productsStore.productId.description }} </p>
			<div>
				<p class="text-md font-semibold mb-4">${{ productsStore.productId.price }}</p>
				<button @click="addToCart(productsStore.productId)" class="px-4 py-1 bg-zinc-900 text-white rounded-md">Add to cart</button>
			</div>
		</div>
	</div>
</template>

<script setup>
	import { onMounted, computed } from 'vue'
	import { useProductsStore } from '../store/index'
	import { useRoute } from 'vue-router'
	import { Carousel, Slide, Navigation } from 'vue3-carousel'
	import RatingStar from './RatingStar.vue'

	import 'vue3-carousel/dist/carousel.css'

	const productsStore = useProductsStore()
	const route = useRoute()

	onMounted(() => {
		productsStore.fetchProductID(+route.params.id)
	})

	const addToCart = (prod) => {
		let cart = productsStore.cart.find(item => {
			return item.id === prod.id
		})

		cart ? cart.quality++ : productsStore.cart.push({ ...prod, quality: 1 })
	}

	const ratingFix = computed(() => {
		return productsStore.productId.rating ? productsStore.productId.rating.toFixed(1) : ''
	})
</script>

<style>
	button.arrow-carousel {
		@apply bg-red-600/80 rounded-full;
	}
</style>
