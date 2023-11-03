<template>
	<div class="flex pt-[120px]">
		<Carousel :wrap-around="true" class="basis-1/2 flex-grow-1">
			<Slide v-for="image in productsStore.productId.images" :key="image">
				<div class="carousel-item flex items-center justify-center h-[300px]">
					<img :src="image" alt="" class="w-auto h-full">
				</div>
			</Slide>
		</Carousel>
		<div class="basis-1/2 flex-grow-1">
			<h1>{{ productsStore.productId.title }}</h1>
			<div>
				<p>{{ productsStore.productId.rating }}</p>
				<p>Rating</p>
			</div>
			{{ productsStore.productId }}
		</div>
	</div>
</template>

<script setup>
	import { onMounted } from 'vue'
	import { useProductsStore } from '../store/index'
	import { useRoute } from 'vue-router'
	import { Carousel, Slide } from 'vue3-carousel'

	import 'vue3-carousel/dist/carousel.css'

	const productsStore = useProductsStore()
	const route = useRoute()

	onMounted(() => {
		productsStore.fetchProductID(+route.params.id)
	})

</script>
