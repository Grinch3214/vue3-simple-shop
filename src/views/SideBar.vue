<template>
	<div class="w-full bg-white fixed top-0 h-[100vh] shadow-2xl md:w-[45vw] xl:w-[30vw] transition-all duration-300 z-20 px-4 lg:px-[35px]" :class="classChangeCart">
		<div class="flex items-center justify-between py-6 border-b mb-7">
			<button class="arrow-right" @click="openCart"></button>
			<div class="text-xs font-extrabold uppercase">Shopping Bag ({{ productsStore.cart.length }})</div>
		</div>

		<div v-if="productsStore.cart.length >= 1" class="overflow-y-auto overflow-x-hidden h-calc pr-4 flex flex-col">
			<ul>
				<li v-for="item in productsStore.cart" :key="item.id">
					<CartItem
					  :cart-item="item"
					  @quality-added="productsStore.qualityAdded"
					  @quality-reduce="productsStore.qualityReduce"
					  @remove-cart-id="productsStore.removeCartId"
					/>
				</li>
			</ul>
			<div class="text-sm uppercase font-extrabold flex justify-between items-center border-t pt-3 mt-auto mb-3">
				<span>Total:</span>
				<span class="text-blue-900 text-base">${{ totalCartSum }}</span>
			</div>
			<div>
				<button class="bg-gray-200 hover:bg-gray-300 text-center p-3 text-gray-900 w-full font-medium rounded-md mb-3">View cart</button>
				<button class="bg-black hover:bg-black/90 text-center p-3 text-white w-full font-medium rounded-md">Checkout</button>
			</div>
		</div>
		<div v-else class="min-h-[70%] tracking-widest text-2xl md:text-3xl font-semibold uppercase before:bg-[url('/src/assets/images/basket-logo.png')] before:bg-no-repeat before:bg-[length:350px_350px] before:bg-center relative before:absolute before:block before:inset-0 before:opacity-10 before:-z-10 text-center">
			Your cart is empty!
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
		productsStore.lockedBody()
	}

	const totalCartSum = computed(() => {
		if (productsStore.cart !== 0) {
			return productsStore.cart.reduce((acc, cartItem) => {
				return acc + (cartItem.price * cartItem.quality)
			}, 0)
		}
	})

	const classChangeCart = computed(() => {
		return productsStore.openCart ? 'right-0' : '-right-full'
	})

</script>

<style scoped>
	.arrow-right {
		@apply cursor-pointer relative w-5 h-6 before:block before:w-full before:absolute before:top-1/2 before:left-0 before:h-[2px] before:bg-black before:-translate-y-1/2 after:block after:absolute after:top-[7px] after:right-0 after:w-[10px] after:h-[10px] after:border-black after:border-s-[2px] after:border-b-[2px] after:rotate-[-135deg];
	}
</style>
