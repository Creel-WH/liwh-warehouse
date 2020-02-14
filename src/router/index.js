import Vue from 'vue'
import VueRouter from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Second from '@/components/TheSecondPage'
import Third from '@/components/TheThirdPage'

Vue.use(VueRouter)

const routes = [
		{
			path: '/',
			redirect: '/home',//重定向
		},
    {
      path: '/home',
      name: 'HelloWorld',
      component: HelloWorld
    },	
		{
		  path: '/Second',
		  name: 'TheSecondPage',
		  component: Second
		},
		{
		  path: '/Third/:id',
		  name: 'TheThirdPage',
		  component: Third
		}
]
	
const router = new VueRouter({
	routes,
	linkActiveClass:'active',
})

export default router
