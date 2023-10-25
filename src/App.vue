<template>
	<header>
		<ul>
			<li v-for="item in links" :key="item">
				<router-link class="" :to="item.url">Go to {{ item.link }}</router-link>
			</li>
		</ul>
	</header>
  <div class="container">
		<RouterView />
	</div>
</template>

<script setup>
	const links = [
		{ link: 'Home', url: '/' },
		{ link: 'About', url: '/about' }
	]
</script>


