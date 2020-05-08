import Vue from 'vue'
import VueRouter from 'vue-router'
import Welcome from '../views/Welcome.vue'

Vue.use(VueRouter)

/*
   Add a route entry for your components.
   You might add a single component, or a view component
   which may contain multiple components.
*/
const routes = [
  {
    path: '/',
    name: 'Welcome',
    component: Welcome
  },
  {
    path: '/imprint',
    name: 'Imprint',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Imprint.vue')
  },
  {
    path: '/content',
    name: 'Content',
    component: () => import('../views/Content.vue')
  },
  {
    path: '/story-1',
    name: 'Story-1',
    component: () => import('../views/Story-1.vue')
  },
  {
    path: '/story-2',
    name: 'Story-2',
    component: () => import('../views/Story-2.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
