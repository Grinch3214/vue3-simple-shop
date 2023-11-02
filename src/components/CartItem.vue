<template>
	<div class="border-b-2 bg-slate-100 mb-4 p-3 rounded-lg transition-all duration-300 hover:shadow-sm min-h-[150px] flex flex-col justify-between">
		<div class="flex justify-between gap-4 mb-2">
			<h2 class="text-sm font-semibold uppercase">{{ cartItem.title }}</h2>
			<button class="cursor-pointer transition-all duration-300 hover:bg-zinc-400/20 active:bg-zinc-400/40 rounded-md">
				<DeleteIcon width="30px" height="30px" />
			</button>
		</div>
		<div class="flex gap-4 items-center">
			<img :src="cartItem.thumbnail" :alt="cartItem.title" width="80" height="80" class="max-w-[80px] h-[80px] object-cover">
			<div class="max-w-[240px] w-full">
				<div class="flex gap-4 items-center">
					<div class="flex items-center justify-between border border-zinc-500 p-1 w-24">
						<button
							@click="reduceQuality(cartItem)"
							class="text-xl p-2 leading-3 transition-all duration-300 hover:bg-zinc-400/20 active:bg-zinc-400/40 rounded-md w-7"
						>-</button>
						<span class="text-xs leading-3 font-semibold">{{ cartItem.quality }}</span>
						<button
							@click="addQuality(cartItem)"
							class="text-xl leading-3 p-2 transition-all duration-300 hover:bg-zinc-400/20 active:bg-zinc-400/40 rounded-md w-7"
						>+</button>
					</div>
					<div class="text-sm font-semibold">${{ cartItem.price }}</div>
				</div>
			</div>
			<div class="text-sm font-semibold ml-auto">${{ totalSum }}</div>
		</div>
	</div>
</template>

<script setup>
	import { computed } from 'vue'
	import DeleteIcon from './icons/DeleteIcon.vue'

	const props = defineProps({
		cartItem: {
			type: Object,
			required: true
		}
	})

	const totalSum = computed(() => {
		return props.cartItem.price * props.cartItem.quality
	})

	const emit = defineEmits(['qualityReduce', 'qualityAdded'])

	const reduceQuality = (e) => {
		emit('qualityReduce', e)
	}
	const addQuality = (e) => {
		emit('qualityAdded', e)
	}
</script>
