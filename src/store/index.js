import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useProductsStore = defineStore('products', () => {
	
	const products = ref([])
	const productId = ref({})

	const fetchProductsFromDB = () => {
		fetch('https://dummyjson.com/products')
			.then(res => res.json())
			.then(json => { products.value = json.products })
	}

	const fetchProductID = (id) => {
		fetch(`https://dummyjson.com/products/${id}`)
			.then(res => res.json())
			.then(json => {
				productId.value = json
			})
	}

	return {
		products,
		fetchProductsFromDB,
		fetchProductID,
		productId
	}
})