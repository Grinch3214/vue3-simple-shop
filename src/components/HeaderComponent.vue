<template>
	<header class="shadow-border-custom">
		<div class="py-5 container mx-auto px-4">
			<ul class="flex justify-between">
			<li v-for="item in links" :key="item">
				<router-link class="text-sky-600" :to="item.url">Go to {{ item.link }}</router-link>
			</li>
		</ul>
		</div>
	</header>
</template>

<script setup>
const links = [
		{ link: 'Catalog', url: '/' },
		{ link: 'Cart', url: '/cart' }
	]
</script>
