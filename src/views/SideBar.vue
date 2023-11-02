<template>
	<div class="w-full bg-white fixed top-0 h-[100vh] shadow-2xl md:w-[45vw] xl:w-[30vw] transition-all duration-300 z-20 px-4 lg:px-[35px]" :class="classChangeCart">
		<div class="flex items-center justify-between py-6 border-b mb-7">
			<div class="text-xs font-extrabold uppercase">Shopping Bag ({{ productsStore.cart.length }})</div>
			<div class="arrow-right" @click="openCart"></div>
		</div>

		<div v-if="productsStore.cart.length >= 1" class="overflow-y-auto overflow-x-hidden h-calc">
			<ul>
				<li v-for="item in productsStore.cart" :key="item.id">
					<CartItem :cart-item="item" />
				</li>
			</ul>
		</div>
		<div v-else>
			Clear Cart
		</div>
	</div>
</template>

<script setup>
	import { computed } from 'vue'
	import { useProductsStore } from '../store'
	import CartItem from '../components/CartItem.vue'

	const productsStore = useProductsStore()

	const openCart = () => {
		productsStore.openCart = false
	}

	const classChangeCart = computed(() => {
		return productsStore.openCart ? 'right-0' : '-right-full'
	})

</script>

<style scoped>
	.arrow-right {
		@apply cursor-pointer relative w-5 h-6 before:block before:w-full before:absolute before:top-1/2 before:left-0 before:h-[2px] before:bg-black before:-translate-y-1/2 after:block after:absolute after:top-[7px] after:right-0 after:w-[10px] after:h-[10px] after:border-black after:border-s-[2px] after:border-b-[2px] after:rotate-[-135deg];
	}
</style>
