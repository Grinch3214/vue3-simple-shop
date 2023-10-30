<template>
	<article>
			<div class="cursor-pointer">
				<div class="h-80 bg-neutral-600">
					<img loading="lazy" :src="props.cardProduct.thumbnail" :alt="props.cardProduct.title" class="h-full w-full object-cover">
				</div>
				<h2>Brand: {{ props.cardProduct.brand }}</h2>
				<p>Description: {{ props.cardProduct.description }}</p>
				<p>Price: ${{ props.cardProduct.price }}</p>
			</div>
		</article>
</template>

<script setup>

	const props = defineProps({
		cardProduct: {
			type: Object,
			required: true
		}
	})
</script>
