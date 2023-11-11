<template>
	<div class="grid grid-rows-[1fr_auto] min-h-screen">
		<SideBar />
		<HeaderComponent />
		<main class="pb-10 md:pb-20">
			<RouterView />
		</main>
		<FooterComponent />
	</div>
</template>

<script setup>
	import HeaderComponent from './components/HeaderComponent.vue'
	import SideBar from './views/SideBar.vue'
	import FooterComponent from './views/FooterComponent.vue'
</script>


