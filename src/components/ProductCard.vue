<template>
	<article class="bg-white p-3 rounded-md flex flex-col shadow-md">
		<div class="h-[300px] mb-4 relative overflow-hidden group transition rounded-t-md">
			<img loading="lazy" width="300" height="300" :src="props.cardProduct.thumbnail" :alt="props.cardProduct.title" class="w-full h-full object-cover group-hover:scale-110 duration-200">
			<div class="absolute top-2 right-2 lg:-right-11 flex gap-2 flex-col p-2 bg-slate-500/60 rounded-md lg:opacity-0 group-hover:opacity-100 group-hover:right-2 transition-all duration-300">
				<button @click="addToCart(props.cardProduct)" class="transition-all duration-300 bg-red-500/70 hover:bg-red-600/70 active:bg-red-600/80 h-9 w-9 plus block relative rounded-md"></button>
				<button
					@click="goToProduct(props.cardProduct.id)"
					class="bg-white/90 hover:bg-zinc-100 active:bg-zinc-200 transition-all duration-300 h-9 w-9 flex justify-center items-center rounded-md"
				>
					<EyeSvg width="20px" height="20px" fill="black" />
				</button>
			</div>
		</div>
		<h2
			@click="goToProduct(props.cardProduct.id)"
			class="text-xl font-semibold mb-2 cursor-pointer self-start hover:text-red-900 transition-colors duration-300"
		>
			{{ props.cardProduct.title }}</h2>
		<p class="text-sm pb-4">{{ props.cardProduct.description }}</p>
		<div class="mt-auto flex justify-between items-center">
			<p class="text-2xl font-extrabold">${{ props.cardProduct.price }}</p>
			<RatingStar :rating="props.cardProduct.rating.toFixed(1)" />
		</div>
	</article>
</template>

<script setup>
	import { computed } from 'vue'
	import EyeSvg from './icons/EyeSvg.vue'
	import RatingStar from './RatingStar.vue'
	import { useProductsStore } from '../store'

	const productsStore = useProductsStore()

	const props = defineProps({
		cardProduct: {
			type: Object,
			required: true
		}
	})

	const ratings = computed(() => {
		return +props.cardProduct.rating.toFixed(0) / 5 * 10 / 2
	})

	const emit = defineEmits(['goToProduct'])

	const goToProduct = (id) => {
		emit('goToProduct', id)
	}

	const addToCart = (product) => {
		let cart = productsStore.cart.find(item => {
			return item.id === product.id
		})

		if (cart) {
			cart.quality++
		} else {
			productsStore.cart.push({ ...product, quality: 1 })
		}
	}
</script>

<style scoped>
.plus::before,
.plus::after {
	content: '';
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	width: 14px;
	height: 2px;
	background: #fff;
}

.plus::after {
	width: 2px;
	height: 14px;
}
</style>
