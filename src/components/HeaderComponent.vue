<template>
	<header class="shadow-border-custom">
		<div class="py-5 container mx-auto px-4">
			<ul class="flex justify-between">
			<li>
				<router-link to="/">Catalog</router-link>
			</li>
			<li>
				<CartIcon width="40px" height="40px" @click="goToCart" />
			</li>
		</ul>
		</div>
	</header>
</template>

<script setup>
import CartIcon from './icons/CartIcon.vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const goToCart = () => {
	router.push({ name: 'CartComponent' })
}

</script>
