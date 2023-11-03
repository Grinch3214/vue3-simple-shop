<template>
	<header class="bg-white/60 fixed top-0 left-0 right-0 z-10 backdrop-blur-sm">
		<div class="py-5 container mx-auto px-4">
			<ul class="flex justify-between items-center">
			<li>
				<router-link to="/" class="w-[60px] h-[60px]">
					<img src="@/assets/images/basket-logo.png" alt="basket-logo" width="60" height="60">
				</router-link>
			</li>
			<li class="relative cursor-pointer mr-3" @click="openCart">
				<span class="absolute -top-2 -right-3 bg-red-500/70 text-[12px] font-extrabold rounded-full w-5 h-5 flex items-center justify-center">{{ productsStore.cart.length }}</span>
				<CartIcon width="30px" height="30px" stroke="rgb(239 68 68 / 0.7)" />
			</li>
		</ul>
		</div>
	</header>
</template>

<script setup>
import { useProductsStore } from '../store'
import CartIcon from './icons/CartIcon.vue'

const productsStore = useProductsStore()

const openCart = () => {
	productsStore.openCart = true
	productsStore.lockedBody()
}

</script>
