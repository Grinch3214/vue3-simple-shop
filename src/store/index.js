import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useProductsStore = defineStore('products', () => {
	
	const products = ref([])

	const fetchProductsFromDB = () => {
		fetch('https://dummyjson.com/products')
			.then(res => res.json())
			.then(json => { products.value = json.products });
	}

	return {
		products,
		fetchProductsFromDB
	}
})