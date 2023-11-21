import { createRouter, createWebHashHistory } from 'vue-router'
import Catalog from '../views/Catalog.vue'
import ProductPage from '../components/ProductPage.vue'
import NotFound from '../components/404.vue'

const routes = [
	{
		path: '/',
		name: 'Catalog',
		component: Catalog
	},
	{
		path: '/product/:id',
		name: 'ProductPage',
		component: ProductPage
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