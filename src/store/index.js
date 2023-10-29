import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useProductsStore = defineStore('products', () => {
	
	const products = ref([])
	const productId = ref({})

	const fetchProductsFromDB = async() => {
		try {
			await fetch('https://dummyjson.com/products')
			.then(res => res.json())
			.then(json => { products.value = json.products })
		} catch(error) {
			console.log('fetchProductsFromDB:', error)
		}
	}

	const fetchProductID = async(id) => {
		try {
			fetch(`https://dummyjson.com/products/${id}`)
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
		productId
	}
})