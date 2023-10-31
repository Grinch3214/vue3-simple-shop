<template>
	<article class="bg-white p-3 rounded-md flex flex-col">
		<div class="h-[300px] mb-4 relative overflow-hidden group transition rounded-t-md">
			<img loading="lazy" width="300" height="300" :src="props.cardProduct.thumbnail" :alt="props.cardProduct.title" class="w-full h-full object-cover group-hover:scale-110 duration-200">
			<div class="absolute top-2 -right-11 flex gap-2 flex-col p-2 bg-slate-500/60 rounded-md opacity-0 group-hover:opacity-100 group-hover:right-2 transition-all duration-300">
				<button class="bg-red-500/70 h-9 w-9 plus block relative rounded-md"></button>
				<button
					@click="goToProduct(props.cardProduct.id)"
					class="bg-white/90 h-9 w-9 flex justify-center items-center rounded-md"
				>
					<EyeSvg width="20px" height="20px" fill="black" />
				</button>
			</div>
		</div>
		<h2
			@click="goToProduct(props.cardProduct.id)"
			class="text-xl font-semibold mb-2 cursor-pointer self-start"
		>
			{{ props.cardProduct.title }}</h2>
		<p class="text-sm pb-4">{{ props.cardProduct.description }}</p>
		<p class="mt-auto text-2xl font-extrabold">${{ props.cardProduct.price }}</p>
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
