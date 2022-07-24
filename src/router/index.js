import Vue from 'vue'
import VueRouter from 'vue-router'
import ContactView from '../views/ContactView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'contactView',
    component: ContactView
  },
  {
    path: '/about',
    name: 'listView',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/ListView.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
