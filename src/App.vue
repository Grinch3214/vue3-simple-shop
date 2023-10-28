<template>
	<header class="bg-slate-600 shadow-border-custom">
		<ul class="flex gap-4 py-5 container mx-auto px-4">
			<li v-for="item in links" :key="item">
				<router-link class="text-sky-600" :to="item.url">Go to {{ item.link }}</router-link>
			</li>
		</ul>
	</header>
  <div class="container mx-auto px-4">
		<Pagination :totalPages="10" :perPage="10" :currentPage="currentPage" @pagechanged="onPageChange" />
		<RouterView />
	</div>
</template>

<script setup>
import Pagination from './components/Pagination.vue'
import { ref } from 'vue'
	const links = [
		{ link: 'Catalog', url: '/' },
		{ link: 'Product', url: '/product' }
	]

	const currentPage = ref(1)

	const onPageChange = (page) => {
		console.log(page, 'page APP')
		currentPage.value = page
	}
</script>


