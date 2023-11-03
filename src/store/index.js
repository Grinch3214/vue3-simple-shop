import { ref } from 'vue'
import { defineStore } from 'pinia'
import { URL } from '../constants.js'

export const useProductsStore = defineStore('products', () => {

	const cart = ref([])

	const openCart = ref(false)
	
	const products = ref([])
	const productId = ref({})

	const lockedBody = () => {
		const body = document.querySelector('body')
		body.style.overflow = openCart.value ? 'hidden' : ''
	}

	const fetchProductsFromDB = async() => {
		try {
			await fetch(`${URL}/products`)
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

	return {
		products,
		fetchProductsFromDB,
		fetchProductID,
		productId,
		openCart,
		cart,
		lockedBody
	}
})