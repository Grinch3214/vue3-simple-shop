import { ref, onMounted } from 'vue'
import { defineStore } from 'pinia'
import { URL } from '../constants.js'

export const useProductsStore = defineStore('products', () => {

	const cart = ref([])
	const openCart = ref(false)
	const products = ref([])
	const productId = ref({})

	const updateLocalStorage = (cart) => {
		localStorage.setItem('cart', JSON.stringify(cart))
	}

	const updateCartFromLocalStoradge = () => {
		const localStorCart = localStorage.getItem('cart')
		if (localStorCart) {
			cart.value = JSON.parse(localStorCart)
		}
	}

	onMounted(() => {
		updateCartFromLocalStoradge()
	})

	// const lockedBody = () => {
	// 	const body = document.querySelector('body')
	// 	body.style.overflow = openCart.value ? 'hidden' : ''
	// }

	const fetchProductsFromDB = async() => {
		try {
			await fetch(`${URL}/products?limit=0`)
			.then(res => res.json())
			.then(json => { products.value = json.products })
		} catch(error) {
			console.log('fetchProductsFromDB:', error)
		}
	}

	const fetchProductID = async(id) => {
		try {
			fetch(`${URL}/products/${id}`)
			.then(res => res.json())
			.then(json => {
				productId.value = json
			})
		} catch(error) {
			console.log('fetchProductID:', error)
		} 
	}

	// add to cart
	const addToCart = (product) => {
		let cartItem = cart.value.find(item => {
			return item.id === product.id
		})

		cartItem ? cartItem.quality++ : cart.value.push({ ...product, quality: 1 })

		updateLocalStorage(cart.value)
	}

	// quality cart and remove cart id
	const qualityAdded = (e) => {
		e.quality++
		updateLocalStorage(cart.value)
	}

	const qualityReduce = (e) => {
		if (e.quality > 1) {
			e.quality--
			updateLocalStorage(cart.value)
		}
		return e.quality
	}

	const removeCartId = (id) => {
		cart.value = cart.value.filter((item) => item.id !== id)
		updateLocalStorage(cart.value)
	}

	return {
		products,
		fetchProductsFromDB,
		fetchProductID,
		productId,
		openCart,
		cart,
		addToCart,
		qualityAdded,
		qualityReduce,
		removeCartId
	}
})