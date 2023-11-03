<template>
	<SideBar />
	<HeroComponent />
	<main class="pt-[120px]">
		<section class="container mx-auto px-4">
		<RouterView />
		<!-- <Pagination :totalPages="10" :perPage="10" :currentPage="currentPage" @pagechanged="onPageChange" /> -->
	</section>
	</main>
</template>

<script setup>
	import HeroComponent from './views/HeroComponent.vue'
	import SideBar from './views/SideBar.vue'



// import Pagination from './components/Pagination.vue'
// import { ref } from 'vue'

	// const currentPage = ref(1)

	// const onPageChange = (page) => {
	// 	console.log(page, 'page APP')
	// 	currentPage.value = page
	// }
</script>


