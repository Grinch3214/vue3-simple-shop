<template>
	<header class="shadow-border-custom">
		<div class="py-5 container mx-auto px-4">
			<ul class="flex justify-between">
			<li>
				<router-link to="/">Catalog</router-link>
			</li>
			<li>
				<CartIcon width="40px" height="40px" class="cursor-pointer" @click="openCart" />
			</li>
		</ul>
		</div>
	</header>
</template>

<script setup>
import { ref } from 'vue'
import { useProductsStore } from '../store'
import CartIcon from './icons/CartIcon.vue'

const productsStore = useProductsStore()

const openCart = () => {
	productsStore.openCart = true
}

</script>
