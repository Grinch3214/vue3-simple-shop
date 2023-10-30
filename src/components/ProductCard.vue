<template>
	<article class="bg-white p-3 rounded-md flex flex-col">
		<div class="h-[300px] mb-4 relative overflow-hidden group transition rounded-t-md">
			<img loading="lazy" width="300" height="300" :src="props.cardProduct.thumbnail" :alt="props.cardProduct.title" class="w-full h-full object-cover group-hover:scale-110 duration-200">
			<button class="absolute top-2 right-2 bg-red-500 h-9 w-9 plus">
				
			</button>
			<button
				@click="goToProduct(props.cardProduct.id)"
				class="absolute top-14 right-2 bg-red-500 h-9 w-9 flex justify-center items-center"
			>
				<EyeSvg width="20px" height="20px" />
			</button>
		</div>
		<h2>Brand: {{ props.cardProduct.brand }}</h2>
		<p>Description: {{ props.cardProduct.description }}</p>
		<p class="mt-auto">Price: ${{ props.cardProduct.price }}</p>
	</article>
</template>

<script setup>
	import EyeSvg from './icons/EyeSvg.vue'

	const props = defineProps({
		cardProduct: {
			type: Object,
			required: true
		}
	})

	const emit = defineEmits(['goToProduct'])

	const goToProduct = (id) => {
		emit('goToProduct', id)
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
