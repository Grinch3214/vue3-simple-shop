<template>
	<header class="bg-slate-600 shadow-border-custom">
		<ul class="flex gap-4 py-5 container mx-auto">
			<li v-for="item in links" :key="item">
				<router-link class="text-sky-600" :to="item.url">Go to {{ item.link }}</router-link>
			</li>
		</ul>
	</header>
  <div class="container mx-auto">
		<RouterView />
	</div>
</template>

<script setup>
	const links = [
		{ link: 'Home', url: '/' },
		{ link: 'About', url: '/about' }
	]
</script>


