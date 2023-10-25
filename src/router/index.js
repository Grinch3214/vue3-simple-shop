import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../components/Home.vue'
import About from '../components/About.vue'
import NotFound from '../components/404.vue'

const routes = [
	{
		path: '/',
		name: 'home',
		component: Home
	},
	{
		path: '/about',
		name: 'about',
		component: About
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