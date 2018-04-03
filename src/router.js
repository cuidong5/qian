import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import A from './views/A.vue'
import B from './views/B.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about/:fenlei',
      name: 'about',
      component: About
    },
    {
    	path: '/a',
    	name: 'a',
    	component: A
    },
    {
    	path: '/b',
    	name: 'b',
    	component: B
    }
  ]
})
