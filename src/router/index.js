import { createRouter, createWebHashHistory } from 'vue-router'
import Catalog from '../views/Catalog.vue'
import Product from '../components/Product.vue'
import NotFound from '../components/404.vue'

const routes = [
	{
		path: '/',
		name: 'Catalog',
		component: Catalog
	},
	{
		path: '/product',
		name: 'Product',
		component: Product
	},
	{
		path: '/:pathMatch(.*)*',
		name: 'notFound',
		component: NotFound
	}
]

const router = createRouter({
	history: createWebHashHistory(),
	routes
})

export default router