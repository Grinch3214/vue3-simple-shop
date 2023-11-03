<template>
	<HeaderComponent />
	<div
		class="md:h-screen h-[500px] bg-no-repeat bg-cover transition-all duration-300"
		:style="{ backgroundImage: `linear-gradient(rgba(0,0,0, .5), rgba(0,0,0, .5)), url(${getImageUrl(imageNow)})` }"
	>
		<div class="container mx-auto px-4 pt-[120px] flex items-center h-full">
			<h1 class="pt-3 font-semibold text-white text-5xl md:text-8xl uppercase relative before:block before:absolute before:top-0 before:left-0 before:w-[150px] before:h-[5px] before:bg-red-600 tracking-[14px]">Big sale of <br> <span class="font-extrabold">items!</span></h1>
		</div>
	</div>
</template>

<script setup>
	import { ref, computed } from 'vue'
	import HeaderComponent from '../components/HeaderComponent.vue'

	const images = ref(['hero_1.webp', 'hero_2.webp', 'hero_3.webp', 'hero_4.webp'])
	const currentImage = ref(0)
	const interval = ref(null)

	const changeImage = () => {
		interval.value = setInterval(() => {
			currentImage.value++
		}, 8000)
	}
	changeImage()

	function getImageUrl(name) {
		return new URL(`../assets/images/${name}`, import.meta.url).href
	}

	const imageNow = computed(() => {
		return images.value[Math.abs(currentImage.value)% images.value.length]
	})
</script>
