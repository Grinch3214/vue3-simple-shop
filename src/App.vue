<template>
	<div class="grid grid-rows-[1fr_auto] min-h-screen">
		<SideBar />
		<HeaderComponent />
		<main class="pb-10 md:pb-20">
			<RouterView />
			<!-- <Pagination :totalPages="10" :perPage="10" :currentPage="currentPage" @pagechanged="onPageChange" /> -->
		</main>
		<FooterComponent />
	</div>
</template>

<script setup>
	import HeaderComponent from './components/HeaderComponent.vue'
	import SideBar from './views/SideBar.vue'
	import FooterComponent from './views/FooterComponent.vue'



// import Pagination from './components/Pagination.vue'
// import { ref } from 'vue'

	// const currentPage = ref(1)

	// const onPageChange = (page) => {
	// 	console.log(page, 'page APP')
	// 	currentPage.value = page
	// }
</script>


