<template>
	<div class="flex gap-6 items-center pt-10 md:pt-20 container mx-auto">
		<div class="basis-[500px] flex-shrink-0 flex-grow-0">
			<Carousel>
				<Slide v-for="image in productsStore.productId.images" :key="image">
					<div class="carousel-item flex items-center justify-center h-[400px]">
						<img :src="image" alt="" class="w-auto h-full">
					</div>
				</Slide>
				<template #addons>
					<Navigation class="arrow-carousel" />
				</template>
			</Carousel>
		</div>
		<div class="basis-auto flex-grow-1">
			<h1 class="text-2xl">{{ productsStore.productId.title }}</h1>
			<div class="flex gap-4">
				<p>Rating</p>
				<p>{{ ratingFix }}</p>
			</div>
			{{ productsStore.productId }}
		</div>
	</div>
</template>

<script setup>
	import { onMounted, computed } from 'vue'
	import { useProductsStore } from '../store/index'
	import { useRoute } from 'vue-router'
	import { Carousel, Slide, Navigation } from 'vue3-carousel'

	import 'vue3-carousel/dist/carousel.css'

	const productsStore = useProductsStore()
	const route = useRoute()

	onMounted(() => {
		productsStore.fetchProductID(+route.params.id)
	})

	const ratingFix = computed(() => {
		return productsStore.productId.rating ? productsStore.productId.rating.toFixed(1) : ''
	})
</script>

<style>
	button.arrow-carousel {
		@apply bg-red-600/80 rounded-full;
	}
</style>
