import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useProductsStore = defineStore('products', () => {
	
	const products = ref([
		{
			title: 'Title',
			descr: 'Lorem some text'
		}
	])

	return {
		products
	}
})