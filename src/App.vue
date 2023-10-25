<template>
	<header>
		<ul>
			<li v-for="item in links" :key="item">
				<router-link :to="item.url">Go to {{ item.link }}</router-link>
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

<style>
@font-face {
	font-family: 'Open Sans';
	src: url('./assets/fonts/OpenSans-Regular.woff2') format('woff2');
	font-weight: 400;
	font-style: normal;
	font-display: swap;
}

@font-face {
	font-family: 'Open Sans';
	src: url('./assets/fonts/OpenSans-SemiBold.woff2') format('woff2');
	font-weight: 600;
	font-style: normal;
	font-display: swap;
}

@font-face {
	font-family: 'Open Sans';
	src: url('./assets/fonts/OpenSans-ExtraBold.woff2') format('woff2');
	font-weight: 800;
	font-style: normal;
	font-display: swap;
}
</style>

